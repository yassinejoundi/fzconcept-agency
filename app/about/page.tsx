import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Award, Brush, Gem, Handshake, MapPin, Sparkles } from "lucide-react"

import heroBg from "@/assets/images/home-page/hero-background.webp"
import { NavbarSection } from "@/components/common/NavbarSection"
import { CTASection } from "@/components/home/CTASection"
import { TestimonialsSection } from "@/components/home/TestimonialsSection"
import { Button } from "@/components/ui/button"

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
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${heroBg.src}')` }}
          >
            <div className="absolute inset-0 bg-linear-to-b from-white/75 via-white/55 to-white/75" />
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-32">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 shadow-lg border border-gold/30">
                <div className="h-2 w-2 rounded-full bg-gold" />
                <span className="text-sm font-medium text-primary tracking-wide uppercase">
                  About
                </span>
              </div>

              <h1 className="font-serif text-5xl font-bold leading-tight text-foreground md:text-7xl">
                A Studio Built On
                <span className="block mt-2 bg-gradient-to-r from-primary via-yellow-600 to-gold bg-clip-text text-transparent pb-3">
                  Heritage & Detail
                </span>
              </h1>

              <p className="max-w-2xl font-sans text-muted-foreground text-base md:text-lg leading-relaxed">
                FZ Concept is a Moroccan interior redesign agency focused on
                creating premium spaces that feel timeless, personal, and
                beautifully crafted.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
                <Button
                  asChild
                  size="xl"
                  className="rounded-xl bg-primary text-primary-foreground shadow-xl transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-2xl hover:shadow-gold/20"
                >
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="xl"
                  className="rounded-xl border-2 border-primary/20 bg-white/80 text-primary shadow-lg transition-all duration-300 hover:border-gold hover:bg-white hover:text-gold"
                >
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm font-bold uppercase text-gold tracking-widest">
                  Our Story
                </p>
                <h2 className="mt-2 text-3xl font-bold font-serif text-primary md:text-5xl">
                  Moroccan Soul, Modern Luxury
                </h2>
                <p className="mt-5 font-sans text-muted-foreground leading-relaxed">
                  We believe luxury isn&apos;t loud — it&apos;s intentional.
                  Every line, texture, and finish is chosen to reflect your
                  identity while honoring Moroccan craftsmanship.
                </p>
                <p className="mt-4 font-sans text-muted-foreground leading-relaxed">
                  From riads to villas, boutiques to private residences, our
                  team brings clarity and calm to the design process — with
                  premium visuals, curated materials, and meticulous execution.
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
                    <p className="font-serif text-3xl font-bold text-primary">
                      5+
                    </p>
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
              </div>

              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
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
              </div>
            </div>
          </div>
        </section>

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
