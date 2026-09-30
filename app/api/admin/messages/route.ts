import { NextResponse } from "next/server"

import { getAdminSession } from "@/lib/adminAuth"
import { getDatabase } from "@/lib/db"

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

  const url = new URL(request.url)
  const id = normalize(url.searchParams.get("id") ?? "")
  const limitRaw = normalize(url.searchParams.get("limit") ?? "50")
  const limit = Math.max(1, Math.min(200, Number(limitRaw) || 50))

  try {
    const sql = getDatabase()
    if (id) {
      const rows = await sql`select
        id, created_at, name, email, phone, reason, location, message, page_url,
        ip_address, user_agent
        from public.contact_submissions where id = ${id} limit 1`

      return NextResponse.json(
        { ok: true, message: rows[0] ?? null },
        { status: 200 }
      )
    }

    const messages = await sql`select
      id, created_at, name, email, phone, reason, location, message, page_url
      from public.contact_submissions
      order by created_at desc limit ${limit}`

    return NextResponse.json({ ok: true, messages }, { status: 200 })
  } catch {
    return NextResponse.json(
      { ok: false, error: "Failed to load messages." },
      { status: 500 }
    )
  }
}
