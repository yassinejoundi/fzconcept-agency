import type { Metadata } from "next"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { NavbarSection } from "@/components/common/NavbarSection"
import { EditorialCta, EditorialHero } from "@/components/common/EditorialPage"
import { PageMotion } from "@/components/common/PageMotion"
import { getRequestLocale } from "@/lib/locale.server"

export async function generateMetadata(): Promise<Metadata> {
  const fr = (await getRequestLocale()) === "fr"
  return {
    title: fr ? "Expertises | FZ Concept" : "Expertise | FZ Concept",
    description: fr
      ? "Conception, moodboards, ameublement sur mesure, décoration et suivi de projet à Marrakech."
      : "Interior design, moodboards, bespoke furnishing, decoration, and project follow-through in Marrakech.",
  }
}

export default async function ServicesPage() {
  const fr = (await getRequestLocale()) === "fr"
  const copy = fr ? {
    eyebrow: "Nos expertises · Marrakech",
    title: "Chaque détail a sa place.",
    description: "De l’idée initiale à la mise en scène finale, nous composons un intérieur cohérent avec vos envies et votre quotidien.",
    heroAction: "Découvrir les services",
    imageAlt: "Cuisine sur mesure aux boiseries chaleureuses",
    listEyebrow: "Ce que nous faisons",
    listTitle: "Une vision complète, à votre mesure.",
    listIntro: "Nos expertises se combinent selon votre projet. Chaque étape garde le même fil conducteur : un espace beau, fonctionnel et personnel.",
    services: [
      { title: "Conception intérieure", text: "Étude des besoins et création de concepts uniques et personnalisés." },
      { title: "Moodboards & inspirations", text: "Sélection des ambiances, couleurs, matières et styles décoratifs." },
      { title: "Ameublement sur mesure", text: "Création de mobilier adapté à votre espace, vos goûts et vos besoins." },
      { title: "Décoration intérieure", text: "Sélection des objets décoratifs, textiles, luminaires et accessoires." },
      { title: "Optimisation de l’espace", text: "Agencement intelligent pour combiner esthétique, confort et circulation." },
      { title: "Suivi de projet", text: "Accompagnement du concept initial jusqu’à la réalisation finale." },
    ],
    approachEyebrow: "Notre engagement",
    approachTitle: "L’élégance se construit avec méthode.",
    approachText: "Après l’échange et la visite, nous développons concept et plans, coordonnons la fabrication et veillons à l’installation. Vous gardez un interlocuteur unique tout au long du projet.",
    detailsEyebrow: "Matières & équilibre",
    detailsTitle: "Pensé pour être vécu.",
    detailsText: "Le choix des matières, la circulation et le mobilier sur mesure travaillent ensemble. Rien n’est ajouté pour remplir : chaque élément sert le lieu et la vie qui s’y déroule.",
    ctaEyebrow: "Un projet en tête ?",
    ctaTitle: "Donnons-lui une direction claire.",
    ctaText: "Parlez-nous de votre espace et définissons ensemble les premières directions du projet.",
    ctaAction: "Demander mon étude",
  } : {
    eyebrow: "Our expertise · Marrakech",
    title: "Every detail belongs.",
    description: "From first idea to final arrangement, we create interiors that fit your ambitions and your everyday life.",
    heroAction: "Explore the services",
    imageAlt: "Bespoke kitchen with warm wood cabinetry",
    listEyebrow: "What we do",
    listTitle: "A complete vision, shaped for you.",
    listIntro: "Our services work together around your project. Every step follows the same intention: a beautiful, functional, personal space.",
    services: [
      { title: "Interior design", text: "Understanding your needs and creating a unique, personal concept." },
      { title: "Moodboards & inspiration", text: "Curating atmosphere, colors, materials, and decorative direction." },
      { title: "Bespoke furniture", text: "Designing pieces suited to your space, taste, and needs." },
      { title: "Interior decoration", text: "Selecting objects, textiles, lighting, and accessories." },
      { title: "Space optimization", text: "Planning for beauty, comfort, and effortless movement." },
      { title: "Project follow-through", text: "Guidance from the initial concept through final installation." },
    ],
    approachEyebrow: "Our commitment",
    approachTitle: "Elegance takes a thoughtful process.",
    approachText: "After our conversation and visit, we develop the concept and plans, coordinate making, and oversee installation. One point of contact stays with you throughout.",
    detailsEyebrow: "Material & balance",
    detailsTitle: "Designed to be lived in.",
    detailsText: "Materials, circulation, and bespoke furniture work together. Nothing is added simply to fill a room: every element serves the place and the life within it.",
    ctaEyebrow: "Have a project in mind?",
    ctaTitle: "Let’s give it a clear direction.",
    ctaText: "Tell us about your space and let’s define the first direction for your project.",
    ctaAction: "Request my study",
  }

  return (
    <div className="fz-site fz-inner-page">
      <NavbarSection />
      <main id="main-content">
        <EditorialHero eyebrow={copy.eyebrow} title={copy.title} description={copy.description} image="/images/walnut-kitchen.webp" alt={copy.imageAlt} action={copy.heroAction} actionHref="#expertise" />

        <section className="fz-section fz-shell fz-services-chapter" id="expertise" data-fz-pin>
          <div className="fz-services-intro" data-fz-pin-heading>
            <p className="fz-kicker">{copy.listEyebrow}</p>
            <h2>{copy.listTitle}</h2>
            <p>{copy.listIntro}</p>
          </div>
          <div className="fz-service-accordion">
            {copy.services.map((service, index) => <details key={service.title} open={index === 0}>
              <summary><span>0{index + 1}</span><h3>{service.title}</h3><FontAwesomeIcon icon={faPlus} aria-hidden="true" /></summary>
              <p>{service.text}</p>
            </details>)}
          </div>
        </section>

        <section className="fz-section fz-service-story">
          <div className="fz-shell fz-service-story-grid">
            <div className="fz-service-story-image" data-fz-image><Image src="/images/light-dining.webp" alt={fr ? "Salle à manger lumineuse aux suspensions sculpturales" : "Sunlit dining room with sculptural pendant lights"} fill sizes="(max-width: 700px) 100vw, 46vw" /></div>
            <div><p className="fz-kicker">{copy.approachEyebrow}</p><h2>{copy.approachTitle}</h2><p>{copy.approachText}</p></div>
          </div>
        </section>

        <section className="fz-section fz-shell fz-service-detail">
          <div><p className="fz-kicker">{copy.detailsEyebrow}</p><h2>{copy.detailsTitle}</h2><p>{copy.detailsText}</p></div>
          <div className="fz-service-detail-image" data-fz-image><Image src="/images/collected-dining.webp" alt={fr ? "Mobilier en bois et objets décoratifs soigneusement choisis" : "Wood furniture and carefully selected decorative objects"} fill sizes="(max-width: 700px) 100vw, 43vw" /></div>
        </section>

        <EditorialCta eyebrow={copy.ctaEyebrow} title={copy.ctaTitle} text={copy.ctaText} action={copy.ctaAction} />
      </main>
      <PageMotion />
    </div>
  )
}
