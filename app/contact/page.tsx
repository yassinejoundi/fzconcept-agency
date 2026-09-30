import type { Metadata } from "next"
import { NavbarSection } from "@/components/common/NavbarSection"
import { EditorialHero } from "@/components/common/EditorialPage"
import { PageMotion } from "@/components/common/PageMotion"
import { FormSection } from "@/components/contact/FormSection"
import { getRequestLocale } from "@/lib/locale.server"

export async function generateMetadata(): Promise<Metadata> {
  const fr = (await getRequestLocale()) === "fr"
  return {
    title: "Contact | FZ Concept",
    description: fr
      ? "Parlez de votre projet d’aménagement ou de décoration sur mesure avec FZ Concept à Marrakech."
      : "Discuss your furnishing or interior decoration project with FZ Concept in Marrakech.",
  }
}

export default async function ContactPage() {
  const fr = (await getRequestLocale()) === "fr"
  return (
    <div className="fz-site fz-inner-page">
      <NavbarSection />
      <main id="main-content">
        <EditorialHero
          eyebrow={fr ? "Contact · Marrakech" : "Contact · Marrakech"}
          title={fr ? "Parlons de votre prochain lieu." : "Let’s talk about your next space."}
          description={fr ? "Une idée, une pièce ou un projet complet ? Dites-nous ce que vous imaginez. Nous prendrons le temps de comprendre votre espace." : "An idea, one room, or a complete project? Tell us what you have in mind. We will take the time to understand your space."}
          image="/images/terracotta-lounge.webp"
          alt={fr ? "Salon aux fauteuils terracotta et aux matières chaleureuses" : "Lounge with terracotta seating and warm materials"}
          action={fr ? "Écrire au studio" : "Write to the studio"}
          actionHref="#contact-form"
        />
        <FormSection />
      </main>
      <PageMotion />
    </div>
  )
}
