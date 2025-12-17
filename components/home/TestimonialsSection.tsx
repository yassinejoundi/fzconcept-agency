"use client"

import { Star, Quote } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Al-Fassi",
      role: "Villa Owner",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      content:
        "FZ Concept transformed our Riad into a modern masterpiece while preserving its authentic Moroccan soul. The attention to detail is simply unmatched.",
    },
    {
      name: "Karim Bennani",
      role: "Hotelier",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      content:
        "Working with the team was a seamless experience. They understood our vision immediately and elevated it beyond our expectations. Truly world-class design.",
    },
    {
      name: "Yasmine Tazi",
      role: "Private Residence",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      content:
        "From the initial consultation to the final reveal, every step was professional and inspiring. My home now feels like a luxury sanctuary.",
    },
  ]

  return (
    <section className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold font-serif text-primary md:text-5xl">
            Client Stories
          </h2>
          <p className="mt-4 text-muted-foreground font-sans">
            Hear from those who have experienced the FZ Concept transformation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Clipping Container for Background Elements */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                {/* Hover Background Quote */}
                <div className="absolute -bottom-8 -right-8 opacity-0 transition-all duration-500 group-hover:opacity-10 group-hover:-translate-y-4 group-hover:-translate-x-4">
                  <Quote className="h-32 w-32 rotate-12 text-primary fill-primary" />
                </div>
              </div>

              {/* Quote Icon */}
              <div className="absolute -top-5 rounded-full bg-gold p-3 text-white shadow-md z-10">
                <Quote className="h-5 w-5 fill-current" />
              </div>

              {/* Content */}
              <div className="relative z-10 mt-6 mb-6 flex-1">
                <div className="mb-4 flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground font-sans italic leading-relaxed">
                  &quot;{item.content}&quot;
                </p>
              </div>

              {/* Author */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-gold">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold font-serif text-foreground">
                    {item.name}
                  </h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-sans">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
