import type { Metadata } from "next"
import Image from "next/image"
import { Award, Brush, Gem, Handshake, Sparkles } from "lucide-react"

import { NavbarSection } from "@/components/common/NavbarSection"
import { HeroSection } from "@/components/about/HeroSection"
import { OurStorySection } from "@/components/about/OurStorySection"

import { CTASection } from "@/components/home/CTASection"
import { TestimonialsSection } from "@/components/home/TestimonialsSection"

export const metadata: Metadata = {
  title: "About | FZ Concept",
  description:
    "Meet FZ Concept — a Moroccan interior redesign studio crafting luxury spaces with heritage, precision, and modern elegance.",
}

export default function AboutPage() {
  return (
    <div>
      <NavbarSection />
      <main>
        <HeroSection />
        <OurStorySection />

        <section className="bg-muted/30">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase text-gold tracking-widest">
                Values
              </p>
              <h2 className="mt-2 text-3xl font-bold font-serif text-primary md:text-5xl">
                What Guides Our Work
              </h2>
              <p className="mt-4 font-sans text-muted-foreground">
                A premium experience is built on clarity, craft, and care — from
                the first mood board to the final styling.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
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
              ].map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
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
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10">
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
                  {[
                    {
                      title: "Consultation & Brief",
                      description:
                        "We define your goals, priorities, and design direction.",
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
                  ].map((step, index) => (
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
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
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
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />
        <CTASection />
      </main>
    </div>
  )
}
