import type { Metadata } from "next"
import Image from "next/image"
import { NavbarSection } from "@/components/common/NavbarSection"
import { EditorialCta, EditorialHero } from "@/components/common/EditorialPage"
import { PageMotion } from "@/components/common/PageMotion"
import { getRequestLocale } from "@/lib/locale.server"

const work = [
  { image: "/images/project-villa-living.webp", frType: "Villa", enType: "Villa", frTitle: "Séjour & bibliothèque", enTitle: "Living room & library", frAlt: "Séjour de villa avec plafond en lattes et bibliothèque intégrée", enAlt: "Villa living room with slatted ceiling and built-in library" },
  { image: "/images/project-villa-suite.webp", frType: "Villa", enType: "Villa", frTitle: "Suite parentale", enTitle: "Primary suite", frAlt: "Suite parentale avec mur décoratif et éclairage mural", enAlt: "Primary suite with decorative wall and wall lighting" },
  { image: "/images/project-apartment-bedroom.webp", frType: "Appartement", enType: "Apartment", frTitle: "Chambre sur mesure", enTitle: "Bespoke bedroom", frAlt: "Chambre avec tête de lit en bois et motif mural terracotta", enAlt: "Bedroom with wood headboard and terracotta wall pattern" },
  { image: "/images/project-apartment-dining.webp", frType: "Appartement", enType: "Apartment", frTitle: "Salle à manger", enTitle: "Dining room", frAlt: "Salle à manger attenante à un séjour chaleureux", enAlt: "Dining area beside a warm living room" },
  { image: "/images/project-custom-tv.webp", frType: "Sur mesure", enType: "Bespoke", frTitle: "Mobilier TV", enTitle: "TV furniture", frAlt: "Mobilier TV intégré dans un salon contemporain", enAlt: "Built-in TV furniture in a contemporary living room" },
  { image: "/images/project-welcome-area.webp", frType: "Ambiance", enType: "Atmosphere", frTitle: "Espace d’accueil", enTitle: "Welcome area", frAlt: "Espace d’accueil au plafond sombre et au mobilier sur mesure", enAlt: "Welcome area with dark ceiling and bespoke furniture" },
  { image: "/images/project-riad-guestroom.webp", frType: "Riad", enType: "Riad", frTitle: "Chambre d’hôtes", enTitle: "Guest room", frAlt: "Chambre de riad aux murs verts et aux détails artisanaux", enAlt: "Riad guest room with green walls and crafted details" },
  { image: "/images/project-materials.webp", frType: "Décoration", enType: "Decoration", frTitle: "Textiles & matières", enTitle: "Textiles & materials", frAlt: "Textiles rayés et tables en bois aux lignes organiques", enAlt: "Striped textiles and organic wood tables" },
]

export async function generateMetadata(): Promise<Metadata> {
  const fr = (await getRequestLocale()) === "fr"
  return {
    title: fr ? "Réalisations | FZ Concept" : "Work | FZ Concept",
    description: fr
      ? "Découvrez les réalisations FZ Concept pour appartements, villas et riads à Marrakech."
      : "Explore FZ Concept’s work across apartments, villas, and riads in Marrakech.",
  }
}

export default async function PortfolioPage() {
  const fr = (await getRequestLocale()) === "fr"
  const copy = fr ? {
    eyebrow: "Réalisations · Marrakech",
    title: "Chaque lieu raconte une histoire.",
    description: "Un regard sur des espaces dessinés avec intention, pour les personnes qui les habitent.",
    action: "Voir les réalisations",
    imageAlt: "Appartement FZ Concept avec salon et salle à manger sur mesure",
    introEyebrow: "Notre portfolio",
    introTitle: "La beauté se révèle dans les détails.",
    introText: "Des séjours aux chambres, du mobilier intégré aux matières, chaque intervention cherche l’équilibre entre identité, confort et usage.",
    galleryEyebrow: "Espaces & détails",
    galleryTitle: "Une sélection de nos réalisations.",
    ctaEyebrow: "Votre espace, votre histoire",
    ctaTitle: "Le prochain projet pourrait être le vôtre.",
    ctaText: "Parlons de votre appartement, villa ou riad et imaginons ce qu’il peut devenir.",
    ctaAction: "Parler de mon projet",
  } : {
    eyebrow: "Selected work · Marrakech",
    title: "Every place tells a story.",
    description: "A look at spaces designed with intention, for the people who live in them.",
    action: "Explore the work",
    imageAlt: "FZ Concept apartment with bespoke living and dining spaces",
    introEyebrow: "Our portfolio",
    introTitle: "Beauty reveals itself in the details.",
    introText: "From living spaces to bedrooms, built-in furniture to materials, every intervention seeks balance between character, comfort, and use.",
    galleryEyebrow: "Spaces & details",
    galleryTitle: "A selection of our work.",
    ctaEyebrow: "Your space, your story",
    ctaTitle: "The next project could be yours.",
    ctaText: "Tell us about your apartment, villa, or riad and let’s imagine what it can become.",
    ctaAction: "Discuss my project",
  }

  return (
    <div className="fz-site fz-inner-page">
      <NavbarSection />
      <main id="main-content">
        <EditorialHero eyebrow={copy.eyebrow} title={copy.title} description={copy.description} image="/images/project-apartment-living.webp" alt={copy.imageAlt} action={copy.action} actionHref="#work" />

        <section className="fz-section fz-shell fz-portfolio-intro">
          <div><p className="fz-kicker">{copy.introEyebrow}</p><h2>{copy.introTitle}</h2></div>
          <p>{copy.introText}</p>
        </section>

        <section className="fz-section fz-portfolio-gallery" id="work">
          <div className="fz-shell">
            <p className="fz-kicker">{copy.galleryEyebrow}</p>
            <h2 className="fz-chapter-title">{copy.galleryTitle}</h2>
            <div className="fz-gallery-grid">
              {work.map((item) => <figure className="fz-gallery-item" key={item.image} data-fz-image>
                <div className="fz-gallery-image"><Image src={item.image} alt={fr ? item.frAlt : item.enAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" /></div>
                <figcaption><span>{fr ? item.frType : item.enType}</span><strong>{fr ? item.frTitle : item.enTitle}</strong></figcaption>
              </figure>)}
            </div>
          </div>
        </section>

        <EditorialCta eyebrow={copy.ctaEyebrow} title={copy.ctaTitle} text={copy.ctaText} action={copy.ctaAction} />
      </main>
      <PageMotion />
    </div>
  )
}
