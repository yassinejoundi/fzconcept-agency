"use client"

import { NavbarSection } from "@/components/common/NavbarSection"
import { HeroSection } from "@/components/home/HeroSection"
import { ApproachSection } from "@/components/home/ApproachSection"
import { ServicesSection } from "@/components/home/ServicesSection"
import { GallerySection } from "@/components/home/GallerySection"
import { FAQSection } from "@/components/home/FAQSection"

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavbarSection />
      <main>
        <HeroSection />
        <ApproachSection />
        <ServicesSection />
        <GallerySection />
        <FAQSection />
      </main>
    </div>
  )
}
