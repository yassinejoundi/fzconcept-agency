import "server-only"

import { createNeonAuth } from "@neondatabase/auth/next/server"

type Auth = ReturnType<typeof createNeonAuth>
let auth: Auth | undefined

export function getAuth() {
  if (auth) return auth

  const baseUrl = process.env.NEON_AUTH_BASE_URL
  const cookieSecret = process.env.NEON_AUTH_COOKIE_SECRET
  if (!baseUrl || !cookieSecret) {
    throw new Error("NEON_AUTH_BASE_URL and NEON_AUTH_COOKIE_SECRET are required.")
  }

  auth = createNeonAuth({
    baseUrl,
    cookies: { secret: cookieSecret },
  })
  return auth
}
