import type { Metadata } from "next"

import { NavbarSection } from "@/components/common/NavbarSection"
import { HeroSection } from "@/components/about/HeroSection"
import { OurStorySection } from "@/components/about/OurStorySection"
import { ValuesSection } from "@/components/about/ValuesSection"
import { ProcessSection } from "@/components/about/ProcessSection"
import { CTASection } from "@/components/home/CTASection"
import { TestimonialsSection } from "@/components/home/TestimonialsSection"

export const metadata: Metadata = {
  title: "About | FZ Concept",
  description:
    "Meet FZ Concept — a Moroccan interior redesign studio crafting luxury spaces with heritage, precision, and modern elegance.",
}

export default function AboutPage() {
  return (
    <div>
      <NavbarSection />
      <main>
        <HeroSection />
        <OurStorySection />
        <ValuesSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </div>
  )
}
