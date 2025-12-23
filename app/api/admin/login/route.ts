import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

import {
  createAdminSessionCookieValue,
  getAdminCookieName,
} from "@/lib/adminSession"

function normalize(value: string) {
  return value.trim().replace(/\s+/g, " ")
}

function getAllowedOrigins(request: Request) {
  const allowlist = (process.env.ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean)

  const forwardedHost = request.headers.get("x-forwarded-host") ?? ""
  const host = request.headers.get("host") ?? forwardedHost
  const proto = request.headers.get("x-forwarded-proto") ?? "https"

  const allowed = new Set<string>(allowlist)
  if (host) {
    allowed.add(`${proto}://${host}`)
    allowed.add(`https://${host}`)
    allowed.add(`http://${host}`)
  }

  return allowed
}

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin") ?? ""
  if (!origin) return false
  return getAllowedOrigins(request).has(origin)
}

function getSupabaseClient() {
  const supabaseUrl =
    process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey =
    process.env.SUPABASE_ANON_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY

  if (!supabaseUrl || !supabaseKey) return null
  return createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

function isAllowedAdminEmail(email: string) {
  const allowlist = (process.env.ADMIN_EMAIL_ALLOWLIST ?? "")
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean)

  if (allowlist.length === 0) return true
  return allowlist.includes(email.toLowerCase())
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json(
      { ok: false, error: "Forbidden." },
      { status: 403 }
    )
  }

  const supabase = getSupabaseClient()
  if (!supabase) {
    return NextResponse.json(
      { ok: false, error: "Server configuration error." },
      { status: 500 }
    )
  }

  const secret = process.env.ADMIN_SESSION_SECRET ?? ""
  if (!secret) {
    return NextResponse.json(
      { ok: false, error: "Server configuration error." },
      { status: 500 }
    )
  }

  let body: { email?: string; password?: string }
  try {
    body = (await request.json()) as { email?: string; password?: string }
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    )
  }

  const email = normalize(String(body.email ?? "")).toLowerCase()
  const password = String(body.password ?? "")

  if (!email || password.length < 8) {
    return NextResponse.json(
      { ok: false, error: "Invalid credentials." },
      { status: 400 }
    )
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error || !data.user) {
    return NextResponse.json(
      { ok: false, error: "Invalid credentials." },
      { status: 401 }
    )
  }

  const userEmail = data.user.email ?? ""
  if (!userEmail || !isAllowedAdminEmail(userEmail)) {
    return NextResponse.json(
      { ok: false, error: "Not authorized." },
      { status: 403 }
    )
  }

  const cookieValue = createAdminSessionCookieValue(
    {
      v: 1,
      email: userEmail,
      userId: data.user.id,
      exp: Date.now() + 7 * 24 * 60 * 60 * 1000,
    },
    secret
  )

  const response = NextResponse.json({ ok: true }, { status: 200 })
  response.cookies.set(getAdminCookieName(), cookieValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  })

  return response
}
