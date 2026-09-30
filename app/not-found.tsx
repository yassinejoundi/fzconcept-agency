import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { NavbarSection } from "@/components/common/NavbarSection"
import { getRequestLocale } from "@/lib/locale.server"

export default async function NotFound() {
  const fr = (await getRequestLocale()) === "fr"
  return (
    <div className="fz-site fz-inner-page">
      <NavbarSection />
      <main id="main-content" className="fz-not-found">
        <div className="fz-shell fz-not-found-grid">
          <div>
            <p className="fz-kicker">404 · {fr ? "Page introuvable" : "Page not found"}</p>
            <h1>{fr ? "Reprenons depuis le début." : "Let’s begin again."}</h1>
            <p>{fr ? "Cette page a peut-être changé d’adresse. Explorez nos réalisations ou revenez à l’accueil." : "This page may have moved. Explore our work or return to the beginning."}</p>
            <div className="fz-not-found-actions">
              <Link className="fz-button fz-button-dark" href="/">{fr ? "Retour à l’accueil" : "Back to home"}<FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link>
              <Link className="fz-text-link" href="/portfolio">{fr ? "Voir nos réalisations" : "Explore our work"}<FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link>
            </div>
          </div>
          <div className="fz-not-found-image"><Image src="/images/soft-living.webp" alt={fr ? "Intérieur chaleureux signé FZ Concept" : "A warm FZ Concept interior"} fill priority sizes="(max-width: 700px) 100vw, 45vw" /></div>
        </div>
      </main>
    </div>
  )
}
