import { Brush } from "lucide-react"
import Image from "next/image"
import * as motion from "motion/react-client"
import { scaleIn, slideInLeft } from "@/lib/animations"

export function ProcessSection() {
  const processSteps = [
    {
      title: "Consultation & Brief",
      description: "We define your goals, priorities, and design direction.",
    },
    {
      title: "Concept & Visualization",
      description:
        "Mood boards, layouts, and visuals that guide every decision.",
    },
    {
      title: "Execution & Styling",
      description:
        "Coordinated sourcing, craftsmanship, and final finishing touches.",
    },
  ] as const
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <motion.div
            className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <p className="text-sm font-bold uppercase text-gold tracking-widest">
              How We Work
            </p>
            <h2 className="mt-2 text-3xl font-bold font-serif text-primary md:text-5xl">
              A Calm, Premium Process
            </h2>
            <p className="mt-4 font-sans text-muted-foreground leading-relaxed">
              We combine creative direction with real-world execution. That
              means you get visuals, selections, and management designed to
              reduce friction and elevate results.
            </p>

            <div className="mt-8 grid gap-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-xl border border-border bg-background p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary ring-1 ring-gold/20">
                    <span className="font-serif font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <p className="font-serif font-semibold text-foreground">
                      {step.title}
                    </p>
                    <p className="mt-1 font-sans text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border bg-muted shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            <Image
              src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1400&auto=format&fit=crop"
              alt="Luxury interior styling"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/85 p-6 backdrop-blur-sm border border-gold/20">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-white shadow-md">
                  <Brush className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-serif font-semibold text-foreground">
                    Design With Meaning
                  </p>
                  <p className="mt-1 font-sans text-sm text-muted-foreground">
                    Every detail is selected to feel cohesive, warm, and
                    distinctly yours.
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
