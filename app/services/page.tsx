import type { Metadata } from "next"

import { NavbarSection } from "@/components/common/NavbarSection"
import { HeroSection } from "@/components/services/HeroSection"
import { WhatWeDoSection } from "@/components/services/WhatWeDoSection"
import { ServicesSection } from "@/components/home/ServicesSection"
import { DeliverablesSection } from "@/components/services/DeliverablesSection"
import { FAQSection } from "@/components/services/FAQSection"
import { CTASection } from "@/components/home/CTASection"

export const metadata: Metadata = {
  title: "Services | FZ Concept",
  description:
    "Discover FZ Concept’s interior design services: consultation, concept design, renovation, styling, and turnkey execution.",
}

export default function ServicesPage() {
  return (
    <div>
      <NavbarSection />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <ServicesSection />
        <DeliverablesSection />
        <FAQSection />
        <CTASection />
      </main>
    </div>
  )
}
