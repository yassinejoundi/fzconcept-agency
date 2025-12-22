import { CheckCircle2 } from "lucide-react"
import * as motion from "motion/react-client"
import { scaleIn, slideInLeft } from "@/lib/animations"

export function DeliverablesSection() {
  const deliverables = [
    "Mood boards and concept direction",
    "Material, color, and finish selections",
    "Space planning and furniture layouts",
    "3D visualization for key areas",
    "Sourcing and procurement guidance",
    "Final styling and on-site detailing",
  ] as const

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
              Deliverables
            </p>
            <h2 className="mt-2 text-3xl font-bold font-serif text-primary md:text-5xl">
              What You Receive
            </h2>
            <p className="mt-4 font-sans text-muted-foreground max-w-xl">
              A premium, structured process with curated selections and clear
              execution so you always know what comes next.
            </p>
            <div className="mt-8 grid gap-3">
              {deliverables.map((item) => (
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
              Signature Standards
            </p>
            <h3 className="mt-2 text-2xl font-bold font-serif text-foreground">
              The FZ Concept Promise
            </h3>
            <div className="mt-6 grid gap-4">
              <div className="rounded-xl bg-secondary/50 p-5">
                <p className="font-serif font-semibold text-primary">
                  Curated Materials
                </p>
                <p className="mt-2 font-sans text-sm text-muted-foreground">
                  Natural textures, refined palettes, and finishes chosen for
                  longevity.
                </p>
              </div>
              <div className="rounded-xl bg-secondary/50 p-5">
                <p className="font-serif font-semibold text-primary">
                  Artisan Craft
                </p>
                <p className="mt-2 font-sans text-sm text-muted-foreground">
                  Authentic Moroccan artistry integrated with modern details.
                </p>
              </div>
              <div className="rounded-xl bg-secondary/50 p-5">
                <p className="font-serif font-semibold text-primary">
                  Elevated Execution
                </p>
                <p className="mt-2 font-sans text-sm text-muted-foreground">
                  Clear timelines, high standards, and meticulous on-site
                  coordination.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
