"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import * as motion from "motion/react-client"
import { fadeInUp } from "@/lib/animations"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gold blur-3xl" />
      </div>

      <motion.div
        className="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center md:px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="mb-6 text-4xl font-bold font-serif leading-tight md:text-6xl">
          Ready to Redefine Your Space?
        </h2>
        <p className="mb-10 max-w-2xl text-lg text-primary-foreground/90 font-sans md:text-xl">
          Let&apos;s collaborate to create an interior that reflects your unique
          style and elevates your everyday living.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full bg-gold px-8 text-lg font-semibold text-white hover:bg-gold/90 transition-all hover:scale-105"
          >
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-14 rounded-full border-white/30 bg-transparent px-8 text-lg font-semibold text-white hover:bg-white/10 transition-all"
          >
            <Link href="/portfolio">View Portfolio</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
