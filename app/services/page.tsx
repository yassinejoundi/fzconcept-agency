import type { Metadata } from "next"
import Link from "next/link"

import heroBg from "@/assets/images/home-page/hero-background.webp"
import { NavbarSection } from "@/components/common/NavbarSection"
import { HeroSection } from "@/components/services/HeroSection"
import { WhatWeDoSection } from "@/components/services/WhatWeDoSection"

import { CTASection } from "@/components/home/CTASection"
import { ServicesSection } from "@/components/home/ServicesSection"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Brush,
  Building2,
  CheckCircle2,
  Compass,
  Home,
  LayoutGrid,
  Sofa,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services | FZ Concept",
  description:
    "Discover FZ Concept’s interior design services: consultation, concept design, renovation, styling, and turnkey execution.",
}

export default function ServicesPage() {
  const offerings = [
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
  ] as const

  const deliverables = [
    "Mood boards and concept direction",
    "Material, color, and finish selections",
    "Space planning and furniture layouts",
    "3D visualization for key areas",
    "Sourcing and procurement guidance",
    "Final styling and on-site detailing",
  ] as const

  const faqs = [
    {
      question: "Do you work outside Marrakech?",
      answer:
        "Yes. We take projects across Morocco and internationally depending on scope and timeline.",
    },
    {
      question: "Can you handle the full renovation?",
      answer:
        "Absolutely. We offer turnkey project management—planning, sourcing, coordination, and finishing.",
    },
    {
      question: "Do you offer online design services?",
      answer:
        "Yes. Online consultations are available for direction, selections, and a structured design roadmap.",
    },
    {
      question: "How do we start a project?",
      answer:
        "Begin with a consultation. We’ll define the brief, timeline, and next steps for design and execution.",
    },
  ] as const

  return (
    <div>
      <NavbarSection />
      <main>
        <HeroSection />
        <WhatWeDoSection />

        <ServicesSection />

        <section className="bg-muted/30">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <p className="text-sm font-bold uppercase text-gold tracking-widest">
                  Deliverables
                </p>
                <h2 className="mt-2 text-3xl font-bold font-serif text-primary md:text-5xl">
                  What You Receive
                </h2>
                <p className="mt-4 font-sans text-muted-foreground max-w-xl">
                  A premium, structured process with curated selections and
                  clear execution—so you always know what comes next.
                </p>
                <div className="mt-8 grid gap-3">
                  {deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-gold" />
                      <p className="font-sans text-sm text-foreground">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
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
                      Natural textures, refined palettes, and finishes chosen
                      for longevity.
                    </p>
                  </div>
                  <div className="rounded-xl bg-secondary/50 p-5">
                    <p className="font-serif font-semibold text-primary">
                      Artisan Craft
                    </p>
                    <p className="mt-2 font-sans text-sm text-muted-foreground">
                      Authentic Moroccan artistry integrated with modern
                      details.
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
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase text-gold tracking-widest">
                FAQ
              </p>
              <h2 className="mt-2 text-3xl font-bold font-serif text-primary md:text-5xl">
                Questions, Answered
              </h2>
              <p className="mt-4 font-sans text-muted-foreground">
                Clear answers to help you choose the right service and move
                forward with confidence.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-3xl">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.question}
                    value={`item-${index}`}
                    className="border border-border bg-card rounded-xl px-6 shadow-sm transition-all hover:shadow-md"
                  >
                    <AccordionTrigger className="text-xl font-serif font-bold text-foreground hover:no-underline hover:text-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base font-sans font-light text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
    </div>
  )
}
