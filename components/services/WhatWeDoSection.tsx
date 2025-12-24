import { Brush, Building2, Compass, Home, LayoutGrid, Sofa } from "lucide-react"
import * as motion from "motion/react-client"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { getRequestLocale } from "@/lib/locale.server"

export async function WhatWeDoSection() {
  const locale = await getRequestLocale()
  const copy =
    locale === "fr"
      ? {
          eyebrow: "Ce que nous faisons",
          title: "Des services pensés pour vous",
          description:
            "Choisissez une expérience complète ou un service ciblé. Chaque détail est conçu pour être élégant, intemporel et personnel.",
          offerings: [
            {
              title: "Design d’intérieur clé en main",
              description:
                "Du concept au styling, une expérience complète adaptée à votre mode de vie.",
              icon: Brush,
            },
            {
              title: "Rénovation & exécution turnkey",
              description:
                "Gestion de projet de bout en bout, finitions premium et artisans de confiance.",
              icon: Building2,
            },
            {
              title: "Planification d’espace & layout",
              description:
                "Circulation, proportions et implantation du mobilier optimisées avec justesse.",
              icon: LayoutGrid,
            },
            {
              title: "Styling de riad & villa",
              description:
                "Héritage marocain et luxe moderne : textiles, luminaires et objets choisis.",
              icon: Home,
            },
            {
              title: "Mobilier & décoration sur mesure",
              description:
                "Pièces uniques réalisées avec des artisans pour sublimer votre espace.",
              icon: Sofa,
            },
            {
              title: "Consultation design",
              description:
                "Une session ciblée pour gagner en direction, clarté et plan d’action.",
              icon: Compass,
            },
          ] as const,
        }
      : {
          eyebrow: "What We Do",
          title: "Services Designed Around You",
          description:
            "Choose a complete experience or a focused service. Every detail is designed to feel elevated, timeless, and personal.",
          offerings: [
            {
              title: "Full-Service Interior Design",
              description:
                "From concept to styling, a complete design experience tailored to your lifestyle.",
              icon: Brush,
            },
            {
              title: "Renovation & Turnkey Execution",
              description:
                "End-to-end project management with premium finishes and trusted craftsmanship.",
              icon: Building2,
            },
            {
              title: "Space Planning & Layout",
              description:
                "Optimized circulation, proportions, and furniture placement that feels effortless.",
              icon: LayoutGrid,
            },
            {
              title: "Riad & Villa Styling",
              description:
                "Moroccan heritage meets modern luxury—textiles, lighting, and curated objects.",
              icon: Home,
            },
            {
              title: "Bespoke Furniture & Decor",
              description:
                "Custom pieces crafted with artisans to elevate your space with character.",
              icon: Sofa,
            },
            {
              title: "Design Consultation",
              description:
                "A focused session to unlock direction, clarity, and a refined design plan.",
              icon: Compass,
            },
          ] as const,
        }
  return (
    <section className="bg-background">
      <motion.div
        className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={fadeInUp}
        >
          <p className="text-sm font-bold uppercase text-gold tracking-widest">
            {copy.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold font-serif text-primary md:text-5xl">
            {copy.title}
          </h2>
          <p className="mt-4 font-sans text-muted-foreground">
            {copy.description}
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
        >
          {copy.offerings.map(({ title, description, icon: Icon }) => (
            <motion.div
              key={title}
              className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              variants={fadeInUp}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary ring-1 ring-gold/20 transition-colors group-hover:bg-gold/15">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-serif text-foreground">
                {title}
              </h3>
              <p className="mt-3 font-sans text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
