"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare, faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useI18n } from "@/components/common/I18nProvider"

export function NavbarSection() {
  const [open, setOpen] = useState(false)
  const { locale, setLocale } = useI18n()
  const pathname = usePathname()
  const router = useRouter()
  const fr = locale === "fr"
  const links = [
    { href: "/portfolio", label: fr ? "Réalisations" : "Work" },
    { href: "/services", label: fr ? "Expertises" : "Expertise" },
    { href: "/about", label: fr ? "Le studio" : "Studio" },
    { href: "/contact", label: "Contact" },
  ]

  function changeLocale(next: "en" | "fr") {
    if (next === locale) return
    setLocale(next)
    router.refresh()
  }

  return (
    <header className="fz-header">
      <nav className="fz-nav fz-shell" aria-label={fr ? "Navigation principale" : "Main navigation"}>
        <Link className="fz-wordmark" href="/" onClick={() => setOpen(false)} aria-label="FZ Concept — home">
          <span className="fz-wordmark-mark">FZ</span>
          <span className="fz-wordmark-name">CONCEPT</span>
        </Link>
        <div className="fz-nav-links">
          {links.map((link) => (
            <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="fz-nav-actions">
          <div className="fz-languages" role="group" aria-label={fr ? "Langue" : "Language"}>
            <button type="button" onClick={() => changeLocale("fr")} aria-pressed={fr}>FR</button>
            <span aria-hidden="true">/</span>
            <button type="button" onClick={() => changeLocale("en")} aria-pressed={!fr}>EN</button>
          </div>
          <Link className="fz-nav-cta" href="/contact">
            {fr ? "Parlons de votre projet" : "Start a project"}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
          </Link>
        </div>
        <button
          className="fz-menu-toggle"
          type="button"
          aria-label={open ? (fr ? "Fermer le menu" : "Close menu") : (fr ? "Ouvrir le menu" : "Open menu")}
          aria-controls="fz-mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} aria-hidden="true" />
        </button>
      </nav>
      <div className={`fz-mobile-menu ${open ? "is-open" : ""}`} id="fz-mobile-menu" inert={!open}>
        <div className="fz-shell">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
          <div className="fz-mobile-bottom">
            <div className="fz-languages" role="group" aria-label={fr ? "Langue" : "Language"}>
              <button type="button" onClick={() => changeLocale("fr")} aria-pressed={fr}>FR</button>
              <span aria-hidden="true">/</span>
              <button type="button" onClick={() => changeLocale("en")} aria-pressed={!fr}>EN</button>
            </div>
            <Link href="/contact" onClick={() => setOpen(false)}>{fr ? "Parlons de votre projet" : "Start a project"}</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
