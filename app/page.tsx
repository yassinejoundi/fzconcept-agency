"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown, faArrowLeft, faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { NavbarSection } from "@/components/common/NavbarSection"
import { useI18n } from "@/components/common/I18nProvider"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const photos = [
  { src: "/images/walnut-kitchen.webp", alt: "Walnut kitchen with a stone island and warm lighting" },
  { src: "/images/soft-living.webp", alt: "Soft neutral living room with sculptural seating" },
  { src: "/images/collected-dining.webp", alt: "Dining area with collected objects and warm wood furniture" },
]

export default function Home() {
  const { locale } = useI18n()
  const fr = locale === "fr"
  const scope = useRef<HTMLDivElement>(null)
  const [quote, setQuote] = useState(0)
  const copy = fr ? {
    eyebrow: "Ameublement & décoration sur mesure · Marrakech",
    hero: "Un intérieur à votre image.",
    heroText: "Des lieux singuliers, pensés pour votre façon de vivre. De la première idée au dernier détail.",
    start: "Parlons de votre projet",
    explore: "Explorer nos réalisations",
    scroll: "Découvrir le studio",
    introLead: "L’art de se sentir chez soi",
    intro: "La beauté d’un espace tient à ce qu’il raconte de vous.",
    introText: "À Marrakech, FZ Concept imagine des intérieurs sur mesure où matières, proportions et lumière trouvent leur juste place. Une élégance personnelle, faite pour le quotidien et pour durer.",
    workLead: "Notre univers",
    work: "Des espaces qui ont une âme.",
    workText: "Appartements, villas ou riads : chaque projet commence par une écoute attentive et prend forme autour de votre histoire.",
    workLink: "Voir toutes les réalisations",
    cards: ["La cuisine, lieu de vie", "La douceur du séjour", "Les détails qui restent"],
    services: "Conception intérieure · Moodboards · Ameublement sur mesure · Décoration · Optimisation de l’espace",
    methodLead: "Une approche personnelle",
    method: "De l’idée au détail, un accompagnement complet.",
    methodText: "Un interlocuteur unique vous accompagne, du premier échange à la livraison de votre intérieur.",
    steps: [
      { title: "Comprendre votre univers", text: "Échange, visite et prise de mesures pour saisir vos envies et les possibilités de votre espace." },
      { title: "Donner forme à l’idée", text: "Concept, moodboard, matières et plans d’aménagement composent une vision cohérente." },
      { title: "Soigner la réalisation", text: "Mobilier sur mesure, coordination des artisans et installation jusqu’à la touche finale." },
    ],
    studioLead: "L’esprit du studio",
    studio: "Un lieu juste. Une sensation qui reste.",
    quotes: [
      "Un intérieur qui vous ressemble, pensé jusque dans le moindre détail.",
      "Votre maison est pensée pour s’inscrire dans le temps.",
      "Un interlocuteur unique, du premier échange à la livraison de votre intérieur.",
    ],
    quotePrev: "Citation précédente",
    quoteNext: "Citation suivante",
    actionLead: "Votre projet commence ici",
    action: "Imaginons la suite ensemble.",
    actionText: "Parlez-nous de votre espace. Nous préparerons une étude personnalisée, gratuite et sans engagement.",
    actionButton: "Demander mon étude",
  } : {
    eyebrow: "Bespoke furnishing & interior decoration · Marrakech",
    hero: "A home, entirely yours.",
    heroText: "Distinctive spaces shaped around the way you live. From the first idea to the final detail.",
    start: "Start your project",
    explore: "Explore our work",
    scroll: "Discover the studio",
    introLead: "The art of feeling at home",
    intro: "The beauty of a space is in the story it tells about you.",
    introText: "In Marrakech, FZ Concept creates considered interiors where materials, proportion, and light find their place. Personal elegance designed for daily life and made to last.",
    workLead: "Our world",
    work: "Spaces with a soul.",
    workText: "Apartments, villas, and riads: each project begins with attentive listening and takes shape around your story.",
    workLink: "View all projects",
    cards: ["A kitchen to live in", "The softness of home", "Details that stay"],
    services: "Interior design · Moodboards · Bespoke furniture · Decoration · Space planning",
    methodLead: "A personal approach",
    method: "From idea to detail, considered all the way.",
    methodText: "One point of contact guides your project from first conversation through final installation.",
    steps: [
      { title: "Understand your world", text: "Conversation, site visit, and careful measurements reveal your needs and your space’s potential." },
      { title: "Shape the vision", text: "Concept, moodboard, materials, and spatial plans create a coherent direction." },
      { title: "Bring it to life", text: "Bespoke pieces, artisan coordination, and installation bring every detail together." },
    ],
    studioLead: "The studio spirit",
    studio: "A space that feels right. A feeling that stays.",
    quotes: [
      "An interior that feels like you, considered down to the smallest detail.",
      "Your home is designed to stand the test of time.",
      "One point of contact, from the first conversation to the delivery of your interior.",
    ],
    quotePrev: "Previous quote",
    quoteNext: "Next quote",
    actionLead: "Your project starts here",
    action: "Let’s imagine what comes next.",
    actionText: "Tell us about your space. We will prepare a personalized study, free and without obligation.",
    actionButton: "Request my study",
  }

  useGSAP(() => {
    const motion = gsap.matchMedia()
    motion.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>(".fz-project-card").forEach((card, index) => {
        gsap.fromTo(card, { y: 110, scale: 0.92, opacity: 0.65 }, {
          y: 0, scale: 1, opacity: 1, ease: "none",
          scrollTrigger: { trigger: card, start: "top 95%", end: "top 45%", scrub: true },
          delay: index * 0.05,
        })
      })
      gsap.utils.toArray<HTMLElement>(".fz-reveal-image").forEach((image) => {
        gsap.fromTo(image, { scale: 0.88, opacity: 0.4 }, {
          scale: 1, opacity: 1, ease: "none",
          scrollTrigger: { trigger: image, start: "top 95%", end: "center 45%", scrub: true },
        })
      })
      gsap.utils.toArray<HTMLElement>(".fz-process-card").forEach((card) => {
        gsap.fromTo(card, { y: 90, scale: 0.95 }, {
          y: 0, scale: 1, ease: "none",
          scrollTrigger: { trigger: card, start: "top 95%", end: "top 40%", scrub: true },
        })
      })
    })
    return () => motion.revert()
  }, { scope })

  function changeQuote(direction: number) {
    setQuote((current) => (current + direction + copy.quotes.length) % copy.quotes.length)
  }

  return (
    <div className="fz-site" ref={scope}>
      <NavbarSection />
      <main id="main-content">
        <section className="fz-hero" aria-labelledby="fz-hero-heading">
          <div className="fz-hero-copy">
            <div className="fz-hero-copy-inner">
              <p className="fz-kicker">{copy.eyebrow}</p>
              <h1 id="fz-hero-heading" className="max-w-6xl">{copy.hero}</h1>
              <p className="fz-hero-description">{copy.heroText}</p>
              <div className="fz-hero-actions">
                <Link className="fz-button fz-button-dark" href="/contact">{copy.start}<FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" /></Link>
                <Link className="fz-text-link" href="/portfolio">{copy.explore}<FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link>
              </div>
            </div>
            <a className="fz-hero-scroll" href="#studio">{copy.scroll}<FontAwesomeIcon icon={faArrowDown} aria-hidden="true" /></a>
          </div>
          <div className="fz-hero-media">
            <Image src="/images/terracotta-lounge.webp" alt={fr ? "Salon chaleureux aux fauteuils terracotta et détails suspendus" : "Warm lounge with terracotta seating and sculptural hanging details"} fill priority sizes="(max-width: 800px) 100vw, 48vw" />
            <span className="fz-hero-photo-caption">FZ Concept · Marrakech</span>
          </div>
        </section>

        <section className="fz-intro fz-section fz-shell" id="studio">
          <p className="fz-kicker">{copy.introLead}</p>
          <div className="fz-intro-grid">
            <h2>{copy.intro}</h2>
            <div><p>{copy.introText}</p><Link className="fz-text-link" href="/about">{fr ? "Découvrir FZ Concept" : "Discover FZ Concept"}<FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link></div>
          </div>
        </section>

        <section className="fz-work fz-section" aria-labelledby="fz-work-heading">
          <div className="fz-shell">
            <div className="fz-section-heading">
              <div><p className="fz-kicker">{copy.workLead}</p><h2 id="fz-work-heading">{copy.work} <span className="fz-inline-image" aria-hidden="true"><Image src="/images/stone-bath.webp" alt="" fill sizes="128px" /></span></h2></div>
              <p>{copy.workText}</p>
            </div>
            <div className="fz-project-grid">
              {photos.map((photo, index) => (
                <Link href="/portfolio" className={`fz-project-card fz-project-card-${index + 1}`} key={photo.src}>
                  <Image src={photo.src} alt={fr ? ["Cuisine en noyer avec îlot en pierre", "Salon aux tons doux et aux assises sculpturales", "Salle à manger avec objets choisis et mobilier en bois"][index] : photo.alt} fill sizes={index === 0 ? "(max-width: 800px) 100vw, 55vw" : "(max-width: 800px) 100vw, 40vw"} />
                  <span className="fz-project-caption"><span>{copy.cards[index]}</span><FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
            <Link className="fz-work-more fz-text-link" href="/portfolio">{copy.workLink}<FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link>
          </div>
        </section>

        <div className="fz-marquee" aria-label={copy.services}>
          <div className="fz-marquee-track" aria-hidden="true">{Array.from({ length: 2 }, (_, index) => <span key={index}>{copy.services} · </span>)}</div>
        </div>

        <section className="fz-method fz-section fz-shell" aria-labelledby="fz-method-heading">
          <div className="fz-method-media fz-reveal-image"><Image src="/images/light-dining.webp" alt={fr ? "Salle à manger lumineuse aux matières naturelles et suspensions sculpturales" : "Sunlit dining room with natural materials and sculptural pendant lights"} fill sizes="(max-width: 800px) 100vw, 42vw" /></div>
          <div className="fz-method-content">
            <p className="fz-kicker">{copy.methodLead}</p>
            <h2 id="fz-method-heading">{copy.method}</h2>
            <p className="fz-method-description">{copy.methodText}</p>
            <div className="fz-process-stack">
              {copy.steps.map((step, index) => <article className="fz-process-card" key={step.title}><span>0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}
            </div>
            <Link className="fz-text-link" href="/services">{fr ? "Explorer nos expertises" : "Explore our expertise"}<FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link>
          </div>
        </section>

        <section className="fz-studio fz-section" aria-labelledby="fz-studio-heading">
          <div className="fz-shell fz-studio-grid">
            <div className="fz-studio-copy"><p className="fz-kicker">{copy.studioLead}</p><h2 id="fz-studio-heading">{copy.studio}</h2><p className="fz-studio-quote" aria-live="polite">“{copy.quotes[quote]}”</p><div className="fz-quote-controls"><span>0{quote + 1} / 0{copy.quotes.length}</span><button type="button" aria-label={copy.quotePrev} onClick={() => changeQuote(-1)}><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /></button><button type="button" aria-label={copy.quoteNext} onClick={() => changeQuote(1)}><FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></button></div></div>
            <div className="fz-studio-media fz-reveal-image"><Image src="/images/founder-portrait.webp" alt={fr ? "Designer de FZ Concept devant une planche d’ambiance et des échantillons" : "FZ Concept designer reviewing an interior moodboard and material samples"} fill sizes="(max-width: 800px) 100vw, 35vw" /></div>
          </div>
        </section>

        <section className="fz-final-cta fz-section" aria-labelledby="fz-action-heading">
          <div className="fz-shell"><p className="fz-kicker">{copy.actionLead}</p><h2 id="fz-action-heading">{copy.action}</h2><p>{copy.actionText}</p><Link className="fz-button fz-button-light" href="/contact">{copy.actionButton}<FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" /></Link></div>
        </section>
      </main>
    </div>
  )
}
