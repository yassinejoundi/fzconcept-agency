import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { NavbarSection } from "@/components/common/NavbarSection"
import { EditorialCta, EditorialHero } from "@/components/common/EditorialPage"
import { PageMotion } from "@/components/common/PageMotion"
import { getRequestLocale } from "@/lib/locale.server"

export async function generateMetadata(): Promise<Metadata> {
  const fr = (await getRequestLocale()) === "fr"
  return {
    title: fr ? "Le studio | FZ Concept" : "The Studio | FZ Concept",
    description: fr
      ? "Découvrez l’approche sur mesure de FZ Concept pour l’aménagement et la décoration intérieure à Marrakech."
      : "Discover FZ Concept’s personal approach to furnishing and interior decoration in Marrakech.",
  }
}

export default async function AboutPage() {
  const fr = (await getRequestLocale()) === "fr"
  const copy = fr ? {
    heroEyebrow: "FZ Concept · Marrakech",
    heroTitle: "Des lieux qui vous ressemblent.",
    heroText: "Nous imaginons des intérieurs élégants et fonctionnels, composés pour votre façon de vivre et pensés pour durer.",
    heroAction: "Découvrir notre approche",
    imageAlt: "Séjour lumineux aux matières douces et aux assises sculpturales",
    manifestoEyebrow: "Notre regard",
    manifesto: "Un intérieur n’est pas une collection d’objets. C’est une manière d’habiter.",
    manifestoText: "Chaque projet naît de l’écoute. Nous réunissons vos envies, les contraintes de l’espace et des matières choisies avec soin pour créer une atmosphère harmonieuse, chaleureuse et durable.",
    valuesEyebrow: "Ce qui nous guide",
    valuesTitle: "Le sens du juste détail.",
    values: [
      { title: "Élégance", text: "Des lignes justes et des matières soigneusement sélectionnées." },
      { title: "Personnalisation", text: "Un projet conçu selon votre style, vos besoins et votre budget." },
      { title: "Fonctionnalité", text: "L’esthétique au service du confort et du quotidien." },
    ],
    methodEyebrow: "Notre méthode",
    methodTitle: "Un interlocuteur unique, du premier échange à la livraison.",
    methodText: "Une méthode rigoureuse pour que chaque choix trouve sa place et que votre maison s’inscrive dans le temps.",
    steps: ["Échange & découverte", "Visite et prise de mesures", "Concept & moodboard", "Conception du projet", "Réalisation & suivi", "Livraison finale"],
    link: "Explorer nos services",
    quote: "Un intérieur qui vous ressemble, pensé jusque dans le moindre détail.",
    ctaEyebrow: "Parlons de votre espace",
    ctaTitle: "Votre histoire mérite un lieu à sa mesure.",
    ctaText: "Parlez-nous de votre projet et imaginons ensemble un intérieur qui vous ressemble.",
    ctaAction: "Demander une étude",
  } : {
    heroEyebrow: "FZ Concept · Marrakech",
    heroTitle: "Spaces that feel like you.",
    heroText: "We create elegant, functional interiors shaped around the way you live and designed to last.",
    heroAction: "Discover our approach",
    imageAlt: "Light-filled living room with soft materials and sculptural seating",
    manifestoEyebrow: "Our point of view",
    manifesto: "An interior is not a collection of objects. It is a way of living.",
    manifestoText: "Every project begins by listening. We bring together your ambitions, the space’s possibilities, and carefully chosen materials to create an atmosphere that feels warm, balanced, and enduring.",
    valuesEyebrow: "What guides us",
    valuesTitle: "A sense for the right detail.",
    values: [
      { title: "Elegance", text: "Considered lines and carefully selected materials." },
      { title: "Personalization", text: "A project shaped around your style, needs, and budget." },
      { title: "Function", text: "Beauty that serves everyday comfort." },
    ],
    methodEyebrow: "Our method",
    methodTitle: "One point of contact, from first conversation to delivery.",
    methodText: "A rigorous process gives every decision purpose and creates a home that stands the test of time.",
    steps: ["Conversation & discovery", "Visit & measurements", "Concept & moodboard", "Project design", "Making & supervision", "Final delivery"],
    link: "Explore our services",
    quote: "An interior that feels like you, considered down to the smallest detail.",
    ctaEyebrow: "Tell us about your space",
    ctaTitle: "Your story deserves a place of its own.",
    ctaText: "Tell us about your project and let’s imagine an interior that feels like you.",
    ctaAction: "Request a study",
  }

  return (
    <div className="fz-site fz-inner-page">
      <NavbarSection />
      <main id="main-content">
        <EditorialHero eyebrow={copy.heroEyebrow} title={copy.heroTitle} description={copy.heroText} image="/images/soft-living.webp" alt={copy.imageAlt} action={copy.heroAction} actionHref="#approach" />

        <section className="fz-section fz-shell fz-manifesto" id="approach">
          <p className="fz-kicker">{copy.manifestoEyebrow}</p>
          <div className="fz-manifesto-grid">
            <h2>{copy.manifesto} <span className="fz-inline-image" aria-hidden="true"><Image src="/images/collected-dining.webp" alt="" fill sizes="128px" /></span></h2>
            <p>{copy.manifestoText}</p>
          </div>
        </section>

        <section className="fz-section fz-values-section">
          <div className="fz-shell">
            <p className="fz-kicker">{copy.valuesEyebrow}</p>
            <h2 className="fz-chapter-title">{copy.valuesTitle}</h2>
            <div className="fz-values-grid">
              <article className="fz-value-card fz-value-feature">
                <Image src="/images/terracotta-lounge.webp" alt={fr ? "Salon terracotta aux matières choisies" : "Terracotta lounge with carefully selected materials"} fill sizes="(max-width: 700px) 100vw, 50vw" />
                <div><h3>{copy.values[0].title}</h3><p>{copy.values[0].text}</p></div>
              </article>
              {copy.values.slice(1).map((value) => <article className="fz-value-card fz-value-text" key={value.title}><h3>{value.title}</h3><p>{value.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="fz-section fz-shell fz-method-chapter" data-fz-pin>
          <div data-fz-pin-heading><p className="fz-kicker">{copy.methodEyebrow}</p><h2>{copy.methodTitle}</h2><p>{copy.methodText}</p></div>
          <div className="fz-six-steps">
            {copy.steps.map((step, index) => <div key={step}><span>0{index + 1}</span><h3>{step}</h3></div>)}
            <Link className="fz-text-link" href="/services">{copy.link}<FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link>
          </div>
        </section>

        <section className="fz-section fz-founder-section">
          <div className="fz-shell fz-founder-grid">
            <div className="fz-founder-image" data-fz-image><Image src="/images/founder-portrait.webp" alt={fr ? "Designer de FZ Concept étudiant des matières" : "FZ Concept designer reviewing materials"} fill sizes="(max-width: 700px) 100vw, 35vw" /></div>
            <blockquote>“{copy.quote}”<cite>FZ Concept · Marrakech</cite></blockquote>
          </div>
        </section>

        <EditorialCta eyebrow={copy.ctaEyebrow} title={copy.ctaTitle} text={copy.ctaText} action={copy.ctaAction} />
      </main>
      <PageMotion />
    </div>
  )
}
