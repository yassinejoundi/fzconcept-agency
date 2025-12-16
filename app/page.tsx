import { HeroSection } from "@/components/home/HeroSection"
import { ApproachSection } from "@/components/home/ApproachSection"
import { ServicesSection } from "@/components/home/ServicesSection"
import { GallerySection } from "@/components/home/GallerySection"

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <ApproachSection />
        <ServicesSection />
        <GallerySection />
      </main>
    </div>
  )
}
