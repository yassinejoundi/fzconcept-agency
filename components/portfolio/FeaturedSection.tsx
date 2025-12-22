import Image from "next/image"
import { MapPin, Sparkles } from "lucide-react"

export function FeaturedSection() {
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
  return (
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
            A curated view of recent work—each project is designed for warmth,
            balance, and premium detail.
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
  )
}
