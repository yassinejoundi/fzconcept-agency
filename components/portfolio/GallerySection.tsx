import Link from "next/link"
import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

export function GallerySection() {
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
  )
}
