import crypto from "crypto"

const COOKIE_NAME = "fz_admin_session"

type AdminSessionPayload = {
  v: 1
  exp: number
  email: string
  userId: string
}

function toBase64Url(input: string) {
  return Buffer.from(input).toString("base64url")
}

function fromBase64Url(input: string) {
  return Buffer.from(input, "base64url").toString("utf8")
}

function sign(value: string, secret: string) {
  return crypto.createHmac("sha256", secret).update(value).digest("base64url")
}

export function getAdminCookieName() {
  return COOKIE_NAME
}

export function createAdminSessionCookieValue(
  payload: AdminSessionPayload,
  secret: string
) {
  const encoded = toBase64Url(JSON.stringify(payload))
  const signature = sign(encoded, secret)
  return `${encoded}.${signature}`
}

export function verifyAdminSessionCookieValue(
  value: string,
  secret: string
): AdminSessionPayload | null {
  const [encoded, signature] = value.split(".")
  if (!encoded || !signature) return null

  const expected = sign(encoded, secret)
  const a = Buffer.from(signature)
  const b = Buffer.from(expected)

  if (a.length !== b.length) return null
  if (!crypto.timingSafeEqual(a, b)) return null

  let payload: AdminSessionPayload
  try {
    payload = JSON.parse(fromBase64Url(encoded)) as AdminSessionPayload
  } catch {
    return null
  }

  if (payload.v !== 1) return null
  if (!payload.email || !payload.userId) return null
  if (Date.now() >= payload.exp) return null

  return payload
}

