"use client"

import Link from "next/link"
import { Home, Mail, ArrowLeft } from "lucide-react"
import * as motion from "motion/react-client"

import { NavbarSection } from "@/components/common/NavbarSection"
import { Button } from "@/components/ui/button"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export default function NotFound() {
  return (
    <div>
      <NavbarSection />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-secondary/40 via-background to-background" />
          <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div
                className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 shadow-lg border border-gold/30"
                variants={fadeInUp}
              >
                <span className="text-sm font-medium text-primary tracking-wide uppercase">
                  Not Found
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="text-sm font-medium text-gold tracking-wide">
                  404
                </span>
              </motion.div>

              <motion.h1
                className="mt-6 font-serif text-5xl font-bold leading-tight text-foreground md:text-7xl"
                variants={fadeInUp}
              >
                This page doesn&apos;t exist
              </motion.h1>

              <motion.p
                className="mt-4 font-sans text-muted-foreground md:text-lg"
                variants={fadeInUp}
              >
                The link may be broken, or the page may have moved. Let&apos;s
                get you back to a beautiful place.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
                variants={fadeInUp}
              >
                <Button
                  asChild
                  size="xl"
                  className="rounded-xl bg-primary text-primary-foreground shadow-xl transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-2xl hover:shadow-gold/20"
                >
                  <Link href="/">
                    <Home className="mr-2 h-5 w-5" />
                    Back Home
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="xl"
                  className="rounded-xl border-2 border-primary/20 bg-white/80 text-primary shadow-lg transition-all duration-300 hover:border-gold hover:bg-white hover:text-gold"
                >
                  <Link href="/services">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Explore Services
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="xl"
                  className="rounded-xl border-2 border-primary/20 bg-white/80 text-primary shadow-lg transition-all duration-300 hover:border-gold hover:bg-white hover:text-gold"
                >
                  <Link href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                className="mx-auto mt-12 max-w-xl rounded-2xl border border-border bg-card p-6 shadow-sm"
                variants={fadeInUp}
              >
                <p className="font-serif text-lg font-semibold text-foreground">
                  Looking for inspiration?
                </p>
                <p className="mt-2 font-sans text-sm text-muted-foreground">
                  Browse our portfolio to see Moroccan heritage paired with
                  modern luxury.
                </p>
                <div className="mt-5">
                  <Button
                    asChild
                    className="rounded-xl bg-gold text-white shadow-md transition-all hover:bg-gold/90"
                  >
                    <Link href="/portfolio">View Portfolio</Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
