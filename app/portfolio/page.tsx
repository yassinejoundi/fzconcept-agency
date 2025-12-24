import type { Metadata } from "next"

import { NavbarSection } from "@/components/common/NavbarSection"
import { HeroSection } from "@/components/portfolio/HeroSection"
import { FeaturedSection } from "@/components/portfolio/FeaturedSection"
import { GallerySection } from "@/components/portfolio/GallerySection"
import { CTASection } from "@/components/home/CTASection"
import { getRequestLocale } from "@/lib/locale.server"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale()
  return locale === "fr"
    ? {
        title: "Portfolio | FZ Concept",
        description:
          "Explorez le portfolio FZ Concept : intérieurs marocains de luxe, riads, villas et projets de redesign sur mesure.",
      }
    : {
        title: "Portfolio | FZ Concept",
        description:
          "Explore FZ Concept’s portfolio of luxury Moroccan interiors riads, villas, and bespoke redesign projects.",
      }
}

export default function PortfolioPage() {
  return (
    <div>
      <NavbarSection />
      <main>
        <HeroSection />
        <FeaturedSection />
        <GallerySection />
        <CTASection />
      </main>
    </div>
  )
}
