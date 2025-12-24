import { cookies, headers } from "next/headers"
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  type Locale,
  normalizeLocale,
  pickLocaleFromAcceptLanguage,
} from "@/lib/locale"

export async function getRequestLocale(): Promise<Locale> {
  const cookieStore = await cookies()
  const cookieLocale = normalizeLocale(cookieStore.get(LOCALE_COOKIE_NAME)?.value)
  if (cookieLocale) return cookieLocale

  const headerStore = await headers()
  const acceptLanguage = headerStore.get("accept-language")
  return pickLocaleFromAcceptLanguage(acceptLanguage) ?? DEFAULT_LOCALE
}
