import { NavbarSection } from "@/components/common/NavbarSection"
import { HeroSection } from "@/components/home/HeroSection"
import { ApproachSection } from "@/components/home/ApproachSection"
import { ServicesSection } from "@/components/home/ServicesSection"
import { GallerySection } from "@/components/home/GallerySection"
import { TestimonialsSection } from "@/components/home/TestimonialsSection"
import { FAQSection } from "@/components/home/FAQSection"
import { CTASection } from "@/components/home/CTASection"

export default function Home() {
  return (
    <div>
      <NavbarSection />
      <main>
        <HeroSection />
        <ApproachSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
    </div>
  )
}
