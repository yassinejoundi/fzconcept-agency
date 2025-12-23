import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

import {
  getAdminCookieName,
  verifyAdminSessionCookieValue,
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
  const secFetchSite = request.headers.get("sec-fetch-site") ?? ""
  if (secFetchSite === "same-origin" || secFetchSite === "same-site") {
    return true
  }

  const origin = request.headers.get("origin") ?? ""
  if (!origin) return true
  return getAllowedOrigins(request).has(origin)
}

function getSupabaseClient() {
  const supabaseUrl =
    process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) return null
  return createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

async function getAdminSession() {
  const secret = process.env.ADMIN_SESSION_SECRET ?? ""
  if (!secret) return null
  const value = (await cookies()).get(getAdminCookieName())?.value ?? ""
  if (!value) return null
  return verifyAdminSessionCookieValue(value, secret)
}

export async function GET(request: Request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json(
      { ok: false, error: "Forbidden." },
      { status: 403 }
    )
  }

  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json(
      { ok: false, error: "Unauthorized." },
      { status: 401 }
    )
  }

  const supabase = getSupabaseClient()
  if (!supabase) {
    return NextResponse.json(
      { ok: false, error: "Missing SUPABASE_SERVICE_ROLE_KEY." },
      { status: 500 }
    )
  }

  const url = new URL(request.url)
  const id = normalize(url.searchParams.get("id") ?? "")
  const limitRaw = normalize(url.searchParams.get("limit") ?? "50")
  const limit = Math.max(1, Math.min(200, Number(limitRaw) || 50))

  if (id) {
    const { data, error } = await supabase
      .from("contact_submissions")
      .select(
        "id,created_at,name,email,phone,reason,location,message,page_url,ip_address,user_agent"
      )
      .eq("id", id)
      .maybeSingle()

    if (error) {
      return NextResponse.json(
        { ok: false, error: "Failed to load message." },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true, message: data }, { status: 200 })
  }

  const { data, error } = await supabase
    .from("contact_submissions")
    .select("id,created_at,name,email,phone,reason,location,message,page_url")
    .order("created_at", { ascending: false })
    .limit(limit)

  if (error) {
    return NextResponse.json(
      { ok: false, error: "Failed to load messages." },
      { status: 500 }
    )
  }

  return NextResponse.json({ ok: true, messages: data }, { status: 200 })
}
