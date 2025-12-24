"use client"

import * as React from "react"
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  LOCALE_STORAGE_KEY,
  type Locale,
  normalizeLocale,
} from "@/lib/locale"

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const I18nContext = React.createContext<I18nContextValue | null>(null)

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null
  const value = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1]
  return value ? decodeURIComponent(value) : null
}

function persistLocale(locale: Locale) {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  } catch {}
  document.cookie = `${LOCALE_COOKIE_NAME}=${encodeURIComponent(
    locale
  )}; Path=/; Max-Age=31536000; SameSite=Lax`
  document.documentElement.lang = locale
}

export function I18nProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale
  children: React.ReactNode
}) {
  const [locale, setLocaleState] = React.useState<Locale>(
    normalizeLocale(initialLocale) ?? DEFAULT_LOCALE
  )
  const didInitRef = React.useRef(false)

  const setLocale = React.useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale)
    persistLocale(nextLocale)
  }, [])

  React.useEffect(() => {
    if (didInitRef.current) return
    didInitRef.current = true

    let stored: string | null = null
    try {
      stored = localStorage.getItem(LOCALE_STORAGE_KEY)
    } catch {}
    const cookie = readCookie(LOCALE_COOKIE_NAME)

    const preferred = normalizeLocale(stored) ?? normalizeLocale(cookie)
    if (preferred && preferred !== locale) setLocale(preferred)
    else persistLocale(locale)
  }, [locale, setLocale])

  const value = React.useMemo(
    () => ({ locale, setLocale }),
    [locale, setLocale]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const value = React.useContext(I18nContext)
  if (!value) throw new Error("useI18n must be used within I18nProvider")
  return value
}
