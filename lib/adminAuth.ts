import "server-only"

import { getAuth } from "@/lib/auth/server"

function isAllowedAdminEmail(email: string) {
  const allowlist = (process.env.ADMIN_EMAIL_ALLOWLIST ?? "")
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean)

  return allowlist.includes(email.toLowerCase())
}

export async function getAdminSession() {
  const { data: session, error } = await getAuth().getSession()
  const user = session?.user
  const email = user?.email?.trim().toLowerCase() ?? ""

  if (error || !user || !email || !isAllowedAdminEmail(email)) return null

  return { email, userId: user.id }
}
