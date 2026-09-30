"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { useI18n } from "@/components/common/I18nProvider"
import { SignOutButton } from "@/components/admin/SignOutButton"

export function AdminHeader({ signedIn = false }: { signedIn?: boolean }) {
  const router = useRouter()
  const { locale, setLocale } = useI18n()
  const fr = locale === "fr"

  function changeLocale(next: "en" | "fr") {
    if (next === locale) return
    setLocale(next)
    router.refresh()
  }

  return (
    <header className="fz-admin-header">
      <div className="fz-admin-shell fz-admin-header-inner">
        <Link className="fz-admin-brand" href="/" aria-label="FZ Concept — home">
          <span>FZ</span><small>CONCEPT</small>
        </Link>
        <nav className="fz-admin-header-actions" aria-label={fr ? "Navigation du studio" : "Studio navigation"}>
          <div className="fz-admin-language" role="group" aria-label={fr ? "Langue" : "Language"}>
            <button type="button" aria-pressed={fr} onClick={() => changeLocale("fr")}>FR</button>
            <span aria-hidden="true">/</span>
            <button type="button" aria-pressed={!fr} onClick={() => changeLocale("en")}>EN</button>
          </div>
          <Link className="fz-admin-view-site" href="/" aria-label={fr ? "Voir le site" : "View website"}>
            <span>{fr ? "Voir le site" : "View website"}</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
          </Link>
          {signedIn ? <SignOutButton /> : null}
        </nav>
      </div>
    </header>
  )
}
