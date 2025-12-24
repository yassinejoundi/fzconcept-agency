import { MapPin } from "lucide-react"
import Image from "next/image"
import * as motion from "motion/react-client"
import { scaleIn, slideInLeft } from "@/lib/animations"
import { getRequestLocale } from "@/lib/locale.server"

export async function OurStorySection() {
  const locale = await getRequestLocale()
  const copy =
    locale === "fr"
      ? {
          eyebrow: "Notre histoire",
          title: "Âme marocaine, luxe moderne",
          p1: "Nous croyons que le luxe n’est pas tape-à-l’œil — il est intentionnel. Chaque ligne, texture et finition est choisie pour refléter votre identité, tout en honorant l’artisanat marocain.",
          p2: "Des riads aux villas, des boutiques aux résidences privées, notre équipe apporte clarté et sérénité au processus — avec des visuels premium, des matériaux soigneusement sélectionnés et une exécution méticuleuse.",
          stats: [
            { value: "50+", label: "Projets" },
            { value: "5+", label: "Années" },
            { value: "98%", label: "Satisfaction" },
          ],
          imageAlt: "Design d’intérieur FZ Concept",
          locationCity: "Marrakech",
          locationCountry: "Maroc",
        }
      : {
          eyebrow: "Our Story",
          title: "Moroccan Soul, Modern Luxury",
          p1: "We believe luxury isn't loud — it's intentional. Every line, texture, and finish is chosen to reflect your identity while honoring Moroccan craftsmanship.",
          p2: "From riads to villas, boutiques to private residences, our team brings clarity and calm to the design process — with premium visuals, curated materials, and meticulous execution.",
          stats: [
            { value: "50+", label: "Projects" },
            { value: "5+", label: "Years" },
            { value: "98%", label: "Satisfaction" },
          ],
          imageAlt: "FZ Concept interior design",
          locationCity: "Marrakech",
          locationCountry: "Morocco",
        }
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
              {copy.eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-bold font-serif text-primary md:text-5xl">
              {copy.title}
            </h2>
            <p className="mt-5 font-sans text-muted-foreground leading-relaxed">
              {copy.p1}
            </p>
            <p className="mt-4 font-sans text-muted-foreground leading-relaxed">
              {copy.p2}
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
              {copy.stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-serif text-3xl font-bold text-primary">
                    {s.value}
                  </p>
                  <p className="mt-1 font-sans text-sm text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
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
                alt={copy.imageAlt}
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
                    {copy.locationCity}
                  </p>
                  <p className="font-sans text-sm text-muted-foreground">
                    {copy.locationCountry}
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
