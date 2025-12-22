import { MapPin } from "lucide-react"
import Image from "next/image"
import * as motion from "motion/react-client"
import { fadeInUp, scaleIn, slideInLeft } from "@/lib/animations"

export function OurStorySection() {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <p className="text-sm font-bold uppercase text-gold tracking-widest">
              Our Story
            </p>
            <h2 className="mt-2 text-3xl font-bold font-serif text-primary md:text-5xl">
              Moroccan Soul, Modern Luxury
            </h2>
            <p className="mt-5 font-sans text-muted-foreground leading-relaxed">
              We believe luxury isn&apos;t loud — it&apos;s intentional. Every
              line, texture, and finish is chosen to reflect your identity while
              honoring Moroccan craftsmanship.
            </p>
            <p className="mt-4 font-sans text-muted-foreground leading-relaxed">
              From riads to villas, boutiques to private residences, our team
              brings clarity and calm to the design process — with premium
              visuals, curated materials, and meticulous execution.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">
                  50+
                </p>
                <p className="mt-1 font-sans text-sm text-muted-foreground">
                  Projects
                </p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">5+</p>
                <p className="mt-1 font-sans text-sm text-muted-foreground">
                  Years
                </p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">
                  98%
                </p>
                <p className="mt-1 font-sans text-sm text-muted-foreground">
                  Satisfaction
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop"
                alt="FZ Concept interior design"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-md md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary ring-1 ring-gold/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-serif font-semibold text-foreground">
                    Marrakech
                  </p>
                  <p className="font-sans text-sm text-muted-foreground">
                    Morocco
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
