import { NextResponse } from "next/server"

import { getDatabase } from "@/lib/db"

type ContactSubmissionPayload = {
  name: string
  email: string
  phone?: string
  reason?: string
  location?: string
  message: string
  website?: string
}

type RateLimitRecord = { count: number; resetAt: number }

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 10

function isValidEmail(value: string) {
  return /^\S+@\S+\.\S+$/.test(value)
}

function asString(value: unknown) {
  return typeof value === "string" ? value : ""
}

function normalize(value: string) {
  return value.trim().replace(/\s+/g, " ")
}

function getIpAddress(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for") ?? ""
  return normalize(forwardedFor.split(",")[0] ?? "")
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

function getRateLimitStore() {
  const globalStore = globalThis as unknown as {
    __contactRateLimit?: Map<string, RateLimitRecord>
  }
  if (!globalStore.__contactRateLimit)
    globalStore.__contactRateLimit = new Map()
  return globalStore.__contactRateLimit
}

function checkRateLimit(key: string) {
  const store = getRateLimitStore()
  const now = Date.now()
  const current = store.get(key)

  if (!current || current.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return { allowed: true, retryAfterSeconds: 0 }
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    }
  }

  current.count += 1
  store.set(key, current)
  return { allowed: true, retryAfterSeconds: 0 }
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json(
      { ok: false, error: "Forbidden." },
      { status: 403 }
    )
  }

  const ipAddress = getIpAddress(request)
  const userAgent = request.headers.get("user-agent") ?? ""
  const rateKey = `${ipAddress || "unknown"}|${userAgent.slice(0, 120)}`
  const rateLimit = checkRateLimit(rateKey)
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
      }
    )
  }

  if (!process.env.DATABASE_URL) {
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

  if (!phone || phone.length > 50) {
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

  const pageUrl = request.headers.get("referer") ?? ""

  try {
    const sql = getDatabase()
    await sql`insert into public.contact_submissions (
      name, email, phone, reason, location, message, ip_address, user_agent, page_url
    ) values (
      ${name}, ${email}, ${phone || null}, ${reason || null}, ${location || null},
      ${message}, ${ipAddress || null}, ${userAgent || null}, ${pageUrl || null}
    )`
  } catch {
    return NextResponse.json(
      { ok: false, error: "Failed to save your message." },
      { status: 500 }
    )
  }

  return NextResponse.json({ ok: true }, { status: 200 })
}
