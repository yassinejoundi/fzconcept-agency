import { Award, Gem, Handshake, Sparkles } from "lucide-react"
import * as motion from "motion/react-client"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { getRequestLocale } from "@/lib/locale.server"

export async function ValuesSection() {
  const locale = await getRequestLocale()
  const copy =
    locale === "fr"
      ? {
          eyebrow: "Valeurs",
          title: "Ce qui guide notre travail",
          description:
            "Une expérience premium se construit avec clarté, exigence et soin — du premier mood board au styling final.",
          values: [
            {
              title: "Artisanat",
              description:
                "Détails d’atelier, proportions justes et matériaux faits pour durer.",
              icon: Gem,
            },
            {
              title: "Clarté",
              description:
                "Étapes structurées, délais transparents et décisions sereines.",
              icon: Sparkles,
            },
            {
              title: "Collaboration",
              description:
                "Un processus fondé sur l’écoute, l’alignement et un goût partagé.",
              icon: Handshake,
            },
            {
              title: "Excellence",
              description:
                "Une exécution minutieuse et un niveau visible dans chaque finition.",
              icon: Award,
            },
          ],
        }
      : {
          eyebrow: "Values",
          title: "What Guides Our Work",
          description:
            "A premium experience is built on clarity, craft, and care — from the first mood board to the final styling.",
          values: [
            {
              title: "Craft",
              description:
                "Artisan details, refined proportions, and materials chosen to last.",
              icon: Gem,
            },
            {
              title: "Clarity",
              description:
                "Structured steps, transparent timelines, and confident decisions.",
              icon: Sparkles,
            },
            {
              title: "Collaboration",
              description:
                "A process built around listening, alignment, and shared taste.",
              icon: Handshake,
            },
            {
              title: "Excellence",
              description:
                "Meticulous execution and a standard that shows in every finish.",
              icon: Award,
            },
          ],
        }
  return (
    <section className="bg-muted/30">
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
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
        >
          {copy.values.map(({ title, description, icon: Icon }) => (
            <motion.div
              key={title}
              className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              variants={fadeInUp}
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary ring-1 ring-gold/20">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-serif text-foreground">
                {title}
              </h3>
              <p className="mt-2 font-sans text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
