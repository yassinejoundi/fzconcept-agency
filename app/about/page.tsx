import type { Metadata } from "next"

import { NavbarSection } from "@/components/common/NavbarSection"
import { HeroSection } from "@/components/about/HeroSection"
import { OurStorySection } from "@/components/about/OurStorySection"
import { OwnerQuoteSection } from "@/components/about/OwnerQuoteSection"
import { ValuesSection } from "@/components/about/ValuesSection"
import { ProcessSection } from "@/components/about/ProcessSection"
import { CTASection } from "@/components/home/CTASection"
import { TestimonialsSection } from "@/components/home/TestimonialsSection"
import { getRequestLocale } from "@/lib/locale.server"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale()
  return locale === "fr"
    ? {
        title: "À propos | FZ Concept",
        description:
          "Découvrez FZ Concept — un studio marocain de redesign d’intérieur, dédié au luxe, à l’héritage et au détail.",
      }
    : {
        title: "About | FZ Concept",
        description:
          "Meet FZ Concept — a Moroccan interior redesign studio crafting luxury spaces with heritage, precision, and modern elegance.",
      }
}

export default function AboutPage() {
  return (
    <div>
      <NavbarSection />
      <main>
        <HeroSection />
        <OurStorySection />
        <OwnerQuoteSection />
        <ValuesSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </div>
  )
}
