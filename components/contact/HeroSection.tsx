import Link from "next/link"
import { Button } from "../ui/button"
import heroBg from "@/assets/images/home-page/hero-background.webp"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${heroBg.src}')` }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-white/75 via-white/55 to-white/75" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 pt-28 md:px-10 md:pb-16 md:pt-32">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 shadow-lg border border-gold/30">
            <div className="h-2 w-2 rounded-full bg-gold" />
            <span className="text-sm font-medium text-primary tracking-wide uppercase">
              Contact
            </span>
          </div>

          <h1 className="font-serif text-5xl font-bold leading-tight text-foreground md:text-7xl">
            Let&apos;s Create Something
            <span className="block mt-2 bg-gradient-to-r from-primary via-yellow-600 to-gold bg-clip-text text-transparent pb-3">
              Exceptional
            </span>
          </h1>

          <p className="max-w-2xl font-sans text-muted-foreground text-base md:text-lg leading-relaxed">
            Tell us what you’re envisioning. We’ll guide you from inspiration to
            execution with a premium, Moroccan-luxury signature.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
            <Button
              asChild
              size="xl"
              className="rounded-xl bg-primary text-primary-foreground shadow-xl transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-2xl hover:shadow-gold/20"
            >
              <Link href="#contact-form">Send a Message</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="rounded-xl border-2 border-primary/20 bg-white/80 text-primary shadow-lg transition-all duration-300 hover:border-gold hover:bg-white hover:text-gold"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
