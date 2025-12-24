import heroBg from "@/assets/images/home-page/hero-background.webp"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import * as motion from "motion/react-client"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { getRequestLocale } from "@/lib/locale.server"
import React from "react"

export async function HeroSection() {
  const locale = await getRequestLocale()
  const copy =
    locale === "fr"
      ? {
          badge: "Design d’intérieur premium",
          titleA: "Transformez votre",
          titleB: "Espace de vie",
          description:
            "Sublimez votre intérieur avec un design sur mesure mêlant élégance intemporelle et sophistication moderne. Nous créons des espaces qui inspirent.",
          ctaPrimary: "Démarrer votre projet",
          ctaSecondary: "Voir le portfolio",
          stats: [
            { value: "50+", label: "Projets réalisés" },
            { value: "5+", label: "Années d’expérience" },
            { value: "98%", label: "Satisfaction client" },
          ],
        }
      : {
          badge: "Premium Interior Design",
          titleA: "Transform Your",
          titleB: "Living Space",
          description:
            "Elevate your home with bespoke interior design solutions that blend timeless elegance with modern sophistication. We create spaces that inspire.",
          ctaPrimary: "Start Your Project",
          ctaSecondary: "View Portfolio",
          stats: [
            { value: "50+", label: "Projects Completed" },
            { value: "5+", label: "Years Experience" },
            { value: "98%", label: "Client Satisfaction" },
          ],
        }
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${heroBg.src}')` }}
      >
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-white/70 via-white/50 to-white/70"></div>
      </div>

      {/* Content Container */}
      <div className="relative mx-auto w-full max-w-7xl px-6 py-18 md:px-10 md:py-24 lg:py-28">
        {/* Hero Content */}
        <motion.div
          key={locale}
          className="flex min-h-[85vh] flex-col justify-center mx-auto w-full max-w-4xl gap-8 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Badge */}
          <motion.div className="flex justify-center" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-5 py-2.5 shadow-lg border border-gold/30">
              <div className="h-2 w-2 rounded-full bg-gold animate-pulse"></div>
              <span className="text-sm font-medium text-primary tracking-wide uppercase">
                {copy.badge}
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            className="flex flex-col items-center gap-y-3"
            variants={fadeInUp}
          >
            <h1 className="text-center font-serif text-5xl font-bold leading-tight text-foreground md:text-7xl lg:text-8xl">
              {copy.titleA}
              <span className="block mt-2 bg-linear-to-r from-primary via-yellow-600 to-gold bg-clip-text text-transparent pb-4">
                {copy.titleB}
              </span>
            </h1>
            <p className="text-center font-sans text-muted-foreground max-w-2xl text-base md:text-lg lg:text-xl leading-relaxed">
              {copy.description}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
            variants={fadeInUp}
          >
            <Button
              asChild
              size="xl"
              className="group relative rounded-xl bg-primary text-primary-foreground text-base font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-2xl hover:shadow-gold/20 md:text-lg overflow-hidden"
            >
              <Link href="/contact">{copy.ctaPrimary}</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="xl"
              className="group gap-3 rounded-xl border-2 border-primary/20 bg-white/80 backdrop-blur-sm text-base font-semibold text-primary shadow-lg transition-all duration-300 hover:border-gold hover:bg-white hover:shadow-xl md:text-lg hover:text-gold"
            >
              <Link href="/portfolio">
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                <span>{copy.ctaSecondary}</span>
              </Link>
            </Button>
          </motion.div>

          {/* Stats/Trust Indicators */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12 pt-8"
            variants={fadeInUp}
          >
            {copy.stats.map((s, idx) => (
              <React.Fragment key={s.label}>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary">
                    {s.value}
                  </p>
                  <p className="font-sans text-sm text-muted-foreground">
                    {s.label}
                  </p>
                </div>
                {idx < copy.stats.length - 1 ? (
                  <div className="h-12 w-px bg-border" />
                ) : null}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
