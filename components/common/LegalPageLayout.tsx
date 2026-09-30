import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { NavbarSection } from "@/components/common/NavbarSection"

type LegalCopy = {
  badge: string
  titleA: string
  titleB: string
  description: string
  primary: string
  secondary: string
  disclaimer: string
  sections: readonly { title: string; content: readonly string[] }[]
}

export function LegalPageLayout({ copy, otherHref }: { copy: LegalCopy; otherHref: string }) {
  return (
    <div className="fz-site fz-inner-page">
      <NavbarSection />
      <main id="main-content">
        <section className="fz-legal-hero">
          <div className="fz-shell">
            <p className="fz-kicker">{copy.badge}</p>
            <h1>{copy.titleA}</h1>
            <p className="fz-legal-subtitle">{copy.titleB}</p>
            <p className="fz-legal-description">{copy.description}</p>
          </div>
        </section>
        <section className="fz-section fz-shell fz-legal-layout">
          <nav aria-label={copy.badge}>
            {copy.sections.map((section, index) => <a href={`#legal-${index}`} key={section.title}>{section.title}</a>)}
          </nav>
          <div className="fz-legal-content">
            {copy.sections.map((section, index) => <section id={`legal-${index}`} key={section.title}>
              <h2>{section.title}</h2>
              {section.content.map((line) => <p key={line}>{line}</p>)}
            </section>)}
            <aside>{copy.disclaimer}</aside>
            <div className="fz-legal-links">
              <Link className="fz-text-link" href="/contact">{copy.primary}<FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link>
              <Link className="fz-text-link" href={otherHref}>{copy.secondary}<FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
