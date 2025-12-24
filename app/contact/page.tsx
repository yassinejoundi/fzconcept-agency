import type { Metadata } from "next"

import { NavbarSection } from "@/components/common/NavbarSection"
import { HeroSection } from "@/components/contact/HeroSection"
import { FormSection } from "@/components/contact/FormSection"
import { getRequestLocale } from "@/lib/locale.server"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale()
  return locale === "fr"
    ? {
        title: "Contact | FZ Concept",
        description:
          "Contactez FZ Concept pour le design d’intérieur, la rénovation et le styling haut de gamme au Maroc.",
      }
    : {
        title: "Contact | FZ Concept",
        description:
          "Contact FZ Concept for interior design, renovation, and luxury styling in Morocco.",
      }
}

export default function ContactPage() {
  return (
    <div>
      <NavbarSection />
      <main>
        <HeroSection />
        <div id="contact-form">
          <FormSection />
        </div>
      </main>
    </div>
  )
}
