import { NextResponse } from "next/server"

import { getAdminSession } from "@/lib/adminAuth"

export async function GET() {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json(
      { ok: false, error: "Not authorized." },
      { status: 403 }
    )
  }

  return NextResponse.json({ ok: true }, { status: 200 })
}
