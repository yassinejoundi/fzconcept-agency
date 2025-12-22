import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

type ContactSubmissionPayload = {
  name: string
  email: string
  phone?: string
  reason?: string
  location?: string
  message: string
  website?: string
}

function getClient() {
  const supabaseUrl =
    process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY

  if (!supabaseUrl || !supabaseKey) return null

  return createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

function isValidEmail(value: string) {
  return /^\S+@\S+\.\S+$/.test(value)
}

function asString(value: unknown) {
  return typeof value === "string" ? value : ""
}

function normalize(value: string) {
  return value.trim().replace(/\s+/g, " ")
}

export async function POST(request: Request) {
  const supabase = getClient()
  if (!supabase) {
    return NextResponse.json(
      { ok: false, error: "Server configuration error." },
      { status: 500 }
    )
  }

  let body: ContactSubmissionPayload
  try {
    body = (await request.json()) as ContactSubmissionPayload
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    )
  }

  if (normalize(asString(body.website)).length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 })
  }

  const name = normalize(asString(body.name))
  const email = normalize(asString(body.email)).toLowerCase()
  const phone = normalize(asString(body.phone))
  const reason = normalize(asString(body.reason))
  const location = normalize(asString(body.location))
  const message = normalize(asString(body.message))

  if (name.length < 2 || name.length > 200) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid name." },
      { status: 400 }
    )
  }

  if (!isValidEmail(email) || email.length > 320) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email." },
      { status: 400 }
    )
  }

  if (phone.length > 50) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid phone number." },
      { status: 400 }
    )
  }

  if (reason.length > 60) {
    return NextResponse.json(
      { ok: false, error: "Please select a valid reason." },
      { status: 400 }
    )
  }

  if (location.length > 120) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid location." },
      { status: 400 }
    )
  }

  if (message.length < 10 || message.length > 5000) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid message." },
      { status: 400 }
    )
  }

  const forwardedFor = request.headers.get("x-forwarded-for") ?? ""
  const ipAddress = normalize(forwardedFor.split(",")[0] ?? "")
  const userAgent = request.headers.get("user-agent") ?? ""
  const pageUrl = request.headers.get("referer") ?? ""

  const { error } = await supabase.from("contact_submissions").insert([
    {
      name,
      email,
      phone: phone || null,
      reason: reason || null,
      location: location || null,
      message,
      ip_address: ipAddress || null,
      user_agent: userAgent || null,
      page_url: pageUrl || null,
    },
  ])

  if (error) {
    return NextResponse.json(
      { ok: false, error: "Failed to save your message." },
      { status: 500 }
    )
  }

  return NextResponse.json({ ok: true }, { status: 200 })
}
