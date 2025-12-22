import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Sparkles } from "lucide-react"

import heroBg from "@/assets/images/home-page/hero-background.webp"
import { NavbarSection } from "@/components/common/NavbarSection"
import { CTASection } from "@/components/home/CTASection"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Portfolio | FZ Concept",
  description:
    "Explore FZ Concept’s portfolio of luxury Moroccan interiors—riads, villas, and bespoke redesign projects.",
}

export default function PortfolioPage() {
  const featured = [
    {
      title: "Marrakech Riad — Warm Minimal Luxury",
      location: "Marrakech",
      tag: "Riad Redesign",
      image:
        "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1800&auto=format&fit=crop",
    },
    {
      title: "Coastal Villa — Texture & Light",
      location: "Essaouira",
      tag: "Full-Service Design",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1800&auto=format&fit=crop",
    },
    {
      title: "Boutique Suite — Gold Accents",
      location: "Casablanca",
      tag: "Styling & Decor",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1800&auto=format&fit=crop",
    },
  ] as const

  const gallery = [
    {
      title: "Living Room Harmony",
      tag: "Space Planning",
      image:
        "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Elegant Dining",
      tag: "Material Curation",
      image:
        "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Soft Bedroom Sanctuary",
      tag: "Styling",
      image:
        "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Modern Moroccan Entry",
      tag: "Concept Design",
      image:
        "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Textured Lounge",
      tag: "Bespoke Decor",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Golden Details",
      tag: "Finishing Touches",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Clean Kitchen Lines",
      tag: "Renovation",
      image:
        "https://images.unsplash.com/photo-1600566753151-384129cf4e3f?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Quiet Corner",
      tag: "Lighting",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Premium Bath",
      tag: "Materials",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6d3?q=80&w=1600&auto=format&fit=crop",
    },
  ] as const

  return (
    <div>
      <NavbarSection />
      <main>
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${heroBg.src}')` }}
          >
            <div className="absolute inset-0 bg-linear-to-b from-white/75 via-white/55 to-white/75" />
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-32">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 shadow-lg border border-gold/30">
                <div className="h-2 w-2 rounded-full bg-gold" />
                <span className="text-sm font-medium text-primary tracking-wide uppercase">
                  Portfolio
                </span>
              </div>

              <h1 className="font-serif text-5xl font-bold leading-tight text-foreground md:text-7xl">
                Spaces Designed To
                <span className="block mt-2 bg-gradient-to-r from-primary via-yellow-600 to-gold bg-clip-text text-transparent pb-3">
                  Feel Like Home
                </span>
              </h1>

              <p className="max-w-2xl font-sans text-muted-foreground text-base md:text-lg leading-relaxed">
                A selection of interiors shaped by Moroccan heritage, refined
                materials, and timeless composition.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
                <Button
                  asChild
                  size="xl"
                  className="rounded-xl bg-primary text-primary-foreground shadow-xl transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-2xl hover:shadow-gold/20"
                >
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="xl"
                  className="rounded-xl border-2 border-primary/20 bg-white/80 text-primary shadow-lg transition-all duration-300 hover:border-gold hover:bg-white hover:text-gold"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase text-gold tracking-widest">
                Featured
              </p>
              <h2 className="mt-2 text-3xl font-bold font-serif text-primary md:text-5xl">
                Selected Transformations
              </h2>
              <p className="mt-4 font-sans text-muted-foreground">
                A curated view of recent work—each project is designed for
                warmth, balance, and premium detail.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {featured.map((project) => (
                <div
                  key={project.title}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" />
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm border border-gold/20">
                      <Sparkles className="h-3.5 w-3.5 text-gold" />
                      {project.tag}
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="font-serif text-xl font-bold text-white">
                        {project.title}
                      </p>
                      <div className="mt-2 flex items-center gap-2 text-white/85">
                        <MapPin className="h-4 w-4 text-gold" />
                        <p className="text-sm font-sans">{project.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/30">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase text-gold tracking-widest">
                  Gallery
                </p>
                <h2 className="mt-2 text-3xl font-bold font-serif text-primary md:text-5xl">
                  Explore The Details
                </h2>
                <p className="mt-4 font-sans text-muted-foreground">
                  Light, texture, and craftsmanship—each space is composed with
                  intention.
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-xl border-primary/20 bg-white/70 text-primary hover:border-gold hover:bg-white hover:text-gold"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md overflow-hidden"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                      {item.tag}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
    </div>
  )
}
