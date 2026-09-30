"use client"

import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare, faEnvelope, faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { useI18n } from "@/components/common/I18nProvider"

export function LinksList() {
  const { locale } = useI18n()
  const fr = locale === "fr"
  const links = [
    { label: fr ? "Appeler le studio" : "Call the studio", detail: "+212 7 77 77 99 09", href: "tel:+212777779909", icon: faPhone },
    { label: "WhatsApp", detail: fr ? "Écrivez-nous directement" : "Message us directly", href: "https://wa.me/212777779909", icon: faWhatsapp },
    { label: "Instagram", detail: "@fzconcept.agency", href: "https://www.instagram.com/fzconcept.agency", icon: faInstagram },
    { label: "Email", detail: "contact@fzconcept.agency", href: "mailto:contact@fzconcept.agency", icon: faEnvelope },
    { label: fr ? "Explorer le site" : "Explore the website", detail: "fzconcept.agency", href: "/", icon: faGlobe },
  ]

  return (
    <section className="fz-links-layout">
      <div className="fz-links-image"><Image src="/images/light-dining.webp" alt={fr ? "Salle à manger lumineuse aux matières naturelles" : "Sunlit dining room with natural materials"} fill priority sizes="(max-width: 800px) 100vw, 48vw" /></div>
      <div className="fz-links-content">
        <div>
          <p className="fz-kicker">FZ Concept · Marrakech</p>
          <h1>{fr ? "Restons en contact." : "Let’s stay in touch."}</h1>
          <p className="fz-links-intro">{fr ? "Une question, un projet ou une envie à partager ? Choisissez la façon de nous joindre qui vous convient." : "A question, a project, or an idea to share? Reach us in the way that works for you."}</p>
          <div className="fz-links-list">
            {links.map((item) => {
              const inner = <><FontAwesomeIcon icon={item.icon} aria-hidden="true" /><span><strong>{item.label}</strong><small>{item.detail}</small></span><FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" /></>
              return item.href.startsWith("/") ? <Link key={item.href} href={item.href}>{inner}</Link> : <a key={item.href} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>{inner}</a>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
