export const LOCALE_COOKIE_NAME = "fz_locale"
export const LOCALE_STORAGE_KEY = "fz_locale"

export type Locale = "en" | "fr"

export const SUPPORTED_LOCALES: readonly Locale[] = ["en", "fr"] as const
export const DEFAULT_LOCALE: Locale = "en"

export function normalizeLocale(value: string | null | undefined): Locale | null {
  if (!value) return null
  const v = value.toLowerCase()
  if (v === "en" || v.startsWith("en-")) return "en"
  if (v === "fr" || v.startsWith("fr-")) return "fr"
  return null
}

export function pickLocaleFromAcceptLanguage(
  acceptLanguage: string | null | undefined
): Locale {
  const normalized = normalizeLocale(acceptLanguage)
  if (normalized) return normalized
  const raw = (acceptLanguage ?? "").toLowerCase()
  if (raw.includes("fr")) return "fr"
  return DEFAULT_LOCALE
}

