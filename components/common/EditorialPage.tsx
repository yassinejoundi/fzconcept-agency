import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

export function EditorialHero({
  eyebrow,
  title,
  description,
  image,
  alt,
  action,
  actionHref,
}: {
  eyebrow: string
  title: string
  description: string
  image: string
  alt: string
  action: string
  actionHref: string
}) {
  return (
    <section className="fz-page-hero">
      <div className="fz-shell fz-page-hero-grid">
        <div className="fz-page-hero-copy">
          <p className="fz-kicker">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
          <Link className="fz-button fz-button-dark" href={actionHref}>{action}<FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" /></Link>
        </div>
        <div className="fz-page-hero-image" data-fz-image>
          <Image src={image} alt={alt} fill priority sizes="(max-width: 800px) 100vw, 45vw" />
        </div>
      </div>
    </section>
  )
}

export function EditorialCta({ eyebrow, title, text, action }: {
  eyebrow: string
  title: string
  text: string
  action: string
}) {
  return (
    <section className="fz-final-cta fz-section">
      <div className="fz-shell">
        <p className="fz-kicker">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>
        <Link className="fz-button fz-button-light" href="/contact">{action}<FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" /></Link>
      </div>
    </section>
  )
}
