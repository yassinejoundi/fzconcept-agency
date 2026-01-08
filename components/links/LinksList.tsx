"use client"

import {
  Instagram,
  Mail,
  Phone,
  Globe,
  MessageCircle,
  ExternalLink,
} from "lucide-react"
import * as motion from "motion/react-client"
import { useI18n } from "@/components/common/I18nProvider"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function LinksList() {
  const { locale } = useI18n()

  const links = [
    {
      label: "+212 5 00 00 00 00",
      icon: Phone,
      href: "tel:+212500000000",
      type: "external",
    },
    {
      label: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/212500000000",
      type: "external",
    },
    {
      label: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/f.zconcept",
      type: "external",
    },
    {
      label: "info@fzconcept.com",
      icon: Mail,
      href: "mailto:info@fzconcept.com",
      type: "external",
    },
    {
      label: locale === "fr" ? "Visiter le site web" : "Visit Website",
      icon: Globe,
      href: "/",
      type: "internal",
    },
  ]

  return (
    <motion.div
      className="mx-auto w-full max-w-sm px-6 py-12 md:py-20"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Header / Brand */}
      <motion.div className="mb-10 text-center" variants={fadeInUp}>
        <div className="mb-4 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold/10 ring-1 ring-gold/30">
            <span className="font-serif text-3xl font-bold text-gold">FZ</span>
          </div>
        </div>
        <h1 className="font-serif text-2xl font-bold text-foreground">
          FZ Concept
        </h1>
        <p className="mt-2 font-sans text-sm text-muted-foreground">
          {locale === "fr"
            ? "Architecture d’Intérieur & Design"
            : "Interior Architecture & Design"}
        </p>
      </motion.div>

      {/* Links */}
      <motion.div className="flex flex-col gap-4" variants={staggerContainer}>
        {links.map((link, index) => {
          const Icon = link.icon
          const isExternal = link.type === "external"

          return (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex w-full items-center justify-between rounded-xl border border-border bg-card px-5 py-4 shadow-sm transition-all duration-300 hover:border-gold hover:shadow-md hover:shadow-gold/10 hover:-translate-y-0.5"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary transition-colors group-hover:bg-gold/10 group-hover:text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-sans font-medium text-foreground">
                  {link.label}
                </span>
              </div>
              {isExternal && (
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-gold" />
              )}
            </motion.a>
          )
        })}
      </motion.div>

      {/* Footer */}
      <motion.div className="mt-12 text-center" variants={fadeInUp}>
        <p className="font-sans text-xs text-muted-foreground opacity-60">
          © {new Date().getFullYear()} FZ Concept
        </p>
      </motion.div>
    </motion.div>
  )
}
