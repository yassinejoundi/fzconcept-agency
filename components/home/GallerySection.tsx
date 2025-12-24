"use client"

import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import * as motion from "motion/react-client"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { useI18n } from "@/components/common/I18nProvider"

export function GallerySection() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const { locale } = useI18n()

  const copy =
    locale === "fr"
      ? {
          title: "Nos réalisations",
          description:
            "Découvrez une sélection de nos projets de design d’intérieur, reflet de notre exigence du luxe et du détail.",
          imageAlt: (index: number) => `Projet de design d’intérieur ${index + 1}`,
          goToSlide: (index: number) => `Aller à la diapositive ${index + 1}`,
        }
      : {
          title: "Our Masterpieces",
          description:
            "Explore a curated selection of our finest interior design projects, showcasing our commitment to luxury and detail.",
          imageAlt: (index: number) => `Interior Design Project ${index + 1}`,
          goToSlide: (index: number) => `Go to slide ${index + 1}`,
        }

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const images = [
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1000&auto=format&fit=crop",
  ]

  return (
    <section className="bg-muted/30">
      {/* Container */}
      <motion.div
        className="mx-auto w-full max-w-7xl px-5 py-10 md:px-10 lg:px-20 lg:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Component */}
        <div className="flex flex-col items-center gap-y-10 py-10 lg:py-12">
          {/* Hero Title */}
          <motion.div className="max-w-3xl" variants={fadeInUp}>
            <h1 className="m-5 text-center text-3xl font-bold font-serif text-primary sm:text-4xl md:text-5xl lg:text-6xl">
              {copy.title}
            </h1>
            <p className="mx-auto mb-6 text-center text-sm font-sans text-muted-foreground sm:px-8 sm:text-xl md:px-24 lg:mb-8">
              {copy.description}
            </p>
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div className="w-full" variants={fadeInUp}>
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {images.map((src, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl group">
                    <Image
                      src={src}
                      alt={copy.imageAlt(index)}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controls Container */}
            <div className="flex items-center justify-between mt-8">
              {/* Left Bottom: Arrow Buttons */}
              <div className="flex gap-4">
                <CarouselPrevious className="static translate-y-0 hover:bg-primary hover:text-white border-primary text-primary" />
                <CarouselNext className="static translate-y-0 hover:bg-primary hover:text-white border-primary text-primary" />
              </div>

              {/* Right Bottom: Animated Points Indicator */}
              <div className="flex gap-2">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300 ease-out",
                      current === index + 1
                        ? "w-8 bg-primary"
                        : "w-2 bg-primary/30 hover:bg-primary/50"
                    )}
                    aria-label={copy.goToSlide(index)}
                  />
                ))}
              </div>
            </div>
          </Carousel>
        </motion.div>
      </motion.div>
    </section>
  )
}
