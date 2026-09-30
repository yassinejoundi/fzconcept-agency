"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { useI18n } from "@/components/common/I18nProvider"

export function Footer() {
  const { locale } = useI18n()
  const pathname = usePathname()
  const fr = locale === "fr"

  if (pathname.startsWith("/admin")) return null

  return (
    <footer className="fz-footer">
      <div className="fz-shell fz-footer-main">
        <div className="fz-footer-lead">
          <Link className="fz-footer-logo" href="/" aria-label="FZ Concept — home">FZ<span>CONCEPT</span></Link>
          <p>{fr ? "Des intérieurs singuliers, imaginés pour durer." : "Singular interiors, imagined to last."}</p>
        </div>
        <div className="fz-footer-column">
          <h2>{fr ? "Explorer" : "Explore"}</h2>
          <Link href="/portfolio">{fr ? "Réalisations" : "Work"}</Link>
          <Link href="/services">{fr ? "Expertises" : "Expertise"}</Link>
          <Link href="/about">{fr ? "Le studio" : "Studio"}</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="fz-footer-column">
          <h2>{fr ? "Échangeons" : "Get in touch"}</h2>
          <a href="tel:+212777779909"><FontAwesomeIcon icon={faPhone} aria-hidden="true" /> +212 7 77 77 99 09</a>
          <a href="mailto:contact@fzconcept.agency"><FontAwesomeIcon icon={faEnvelope} aria-hidden="true" /> contact@fzconcept.agency</a>
          <a href="https://wa.me/212777779909" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" /> WhatsApp <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" /></a>
          <a href="https://www.instagram.com/fzconcept.agency" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} aria-hidden="true" /> @fzconcept.agency <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" /></a>
        </div>
        <div className="fz-footer-column fz-footer-place">
          <h2>{fr ? "Notre adresse" : "Based in"}</h2>
          <p><FontAwesomeIcon icon={faLocationDot} aria-hidden="true" /> Marrakech, Maroc</p>
          <p>{fr ? "Appartements · Villas · Riads" : "Apartments · Villas · Riads"}</p>
        </div>
      </div>
      <div className="fz-shell fz-footer-bottom">
        <span>© {new Date().getFullYear()} FZ Concept</span>
        <span className="fz-footer-credit">{fr ? "Site réalisé par " : "Website by "}<a href="https://yassinejoundi.com" target="_blank" rel="noopener noreferrer">Yassine Joundi</a></span>
        <div>
          <Link href="/privacy-policy">{fr ? "Confidentialité" : "Privacy"}</Link>
          <Link href="/terms-of-service">{fr ? "Conditions d’utilisation" : "Terms"}</Link>
        </div>
      </div>
    </footer>
  )
}
