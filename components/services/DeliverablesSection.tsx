import { CheckCircle2 } from "lucide-react"
import * as motion from "motion/react-client"
import { scaleIn, slideInLeft } from "@/lib/animations"
import { getRequestLocale } from "@/lib/locale.server"

export async function DeliverablesSection() {
  const locale = await getRequestLocale()
  const copy =
    locale === "fr"
      ? {
          eyebrow: "Livrables",
          title: "Ce que vous recevez",
          description:
            "Un processus premium et structuré, avec des sélections soignées et une exécution claire pour savoir à chaque étape ce qui suit.",
          deliverables: [
            "Mood boards et direction concept",
            "Sélection matériaux, couleurs et finitions",
            "Planification d’espace et layouts mobilier",
            "Visualisation 3D des zones clés",
            "Conseils sourcing et achats",
            "Styling final et détails sur site",
          ] as const,
          standardsEyebrow: "Standards signature",
          standardsTitle: "La promesse FZ Concept",
          standards: [
            {
              title: "Matériaux sélectionnés",
              description:
                "Textures naturelles, palettes raffinées et finitions choisies pour durer.",
            },
            {
              title: "Artisanat",
              description:
                "Un savoir-faire marocain authentique intégré à des détails contemporains.",
            },
            {
              title: "Exécution élevée",
              description:
                "Délais clairs, standards exigeants et coordination minutieuse sur site.",
            },
          ],
        }
      : {
          eyebrow: "Deliverables",
          title: "What You Receive",
          description:
            "A premium, structured process with curated selections and clear execution so you always know what comes next.",
          deliverables: [
            "Mood boards and concept direction",
            "Material, color, and finish selections",
            "Space planning and furniture layouts",
            "3D visualization for key areas",
            "Sourcing and procurement guidance",
            "Final styling and on-site detailing",
          ] as const,
          standardsEyebrow: "Signature Standards",
          standardsTitle: "The FZ Concept Promise",
          standards: [
            {
              title: "Curated Materials",
              description:
                "Natural textures, refined palettes, and finishes chosen for longevity.",
            },
            {
              title: "Artisan Craft",
              description:
                "Authentic Moroccan artistry integrated with modern details.",
            },
            {
              title: "Elevated Execution",
              description:
                "Clear timelines, high standards, and meticulous on-site coordination.",
            },
          ],
        }

  return (
    <section className="bg-muted/30">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
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
            <p className="mt-4 font-sans text-muted-foreground max-w-xl">
              {copy.description}
            </p>
            <div className="mt-8 grid gap-3">
              {copy.deliverables.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-gold" />
                  <p className="font-sans text-sm text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-border bg-card p-8 shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            <p className="text-sm font-bold uppercase text-gold tracking-widest">
              {copy.standardsEyebrow}
            </p>
            <h3 className="mt-2 text-2xl font-bold font-serif text-foreground">
              {copy.standardsTitle}
            </h3>
            <div className="mt-6 grid gap-4">
              {copy.standards.map((s) => (
                <div key={s.title} className="rounded-xl bg-secondary/50 p-5">
                  <p className="font-serif font-semibold text-primary">
                    {s.title}
                  </p>
                  <p className="mt-2 font-sans text-sm text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
