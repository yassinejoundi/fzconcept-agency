"use client"

import React, { useState, useEffect } from "react"
import * as motion from "motion/react-client"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { useI18n } from "@/components/common/I18nProvider"

export function NavbarSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { locale, setLocale } = useI18n()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const copy =
    locale === "fr"
      ? {
          companyName: "FZ Concept",
          cta: "Réserver une consultation",
          languageLabel: "Langue",
          nav: [
            { title: "Accueil", href: "/", description: "Retour à l’accueil" },
            {
              title: "Réalisations",
              href: "/portfolio",
              description: "Voir nos projets",
            },
            {
              title: "Services",
              href: "/services",
              description: "Nos services de design",
            },
            {
              title: "À propos",
              href: "/about",
              description: "Découvrir le studio",
            },
            {
              title: "Contact",
              href: "/contact",
              description: "Nous contacter",
            },
          ],
        }
      : {
          companyName: "FZ Concept",
          cta: "Book a Consultation",
          languageLabel: "Language",
          nav: [
            {
              title: "Home",
              href: "/",
              description: "Return to the homepage",
            },
            {
              title: "Our Work",
              href: "/portfolio",
              description: "View our projects",
            },
            {
              title: "Services",
              href: "/services",
              description: "Our design services",
            },
            {
              title: "About",
              href: "/about",
              description: "Learn about our studio",
            },
            {
              title: "Contact",
              href: "/contact",
              description: "Get in touch",
            },
          ],
        }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-premium"
          : "bg-transparent"
      }`}
    >
      <div className="container-premium">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center"
          >
            <Link
              href="/"
              className={`text-2xl font-bold font-serif tracking-tight transition-colors text-primary`}
            >
              {copy.companyName}
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden md:flex items-center space-x-2"
          >
            <NavigationMenu>
              <NavigationMenuList>
                {copy.nav.map((section) => (
                  <NavigationMenuItem key={section.title}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={section.href}
                        className="group relative px-4 py-2 text-sm font-medium font-sans transition-colors text-foreground hover:text-gold hover:bg-transparent"
                      >
                        {section.title}
                        <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </motion.div>

          {/* Desktop Language + CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden md:flex items-center gap-4"
          >
            <div
              className="inline-flex items-center rounded-full border border-border bg-background/70 p-1"
              role="group"
              aria-label={copy.languageLabel}
            >
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors ${
                  locale === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:text-gold"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLocale("fr")}
                className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors ${
                  locale === "fr"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:text-gold"
                }`}
              >
                FR
              </button>
            </div>
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">
                {copy.cta}
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8 px-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">
                      {copy.languageLabel}
                    </span>
                    <div
                      className="inline-flex items-center rounded-full border border-border bg-background p-1"
                      role="group"
                      aria-label={copy.languageLabel}
                    >
                      <button
                        type="button"
                        onClick={() => setLocale("en")}
                        className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors ${
                          locale === "en"
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground hover:text-gold"
                        }`}
                      >
                        EN
                      </button>
                      <button
                        type="button"
                        onClick={() => setLocale("fr")}
                        className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors ${
                          locale === "fr"
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground hover:text-gold"
                        }`}
                      >
                        FR
                      </button>
                    </div>
                  </div>
                  {/* Mobile Navigation Items */}
                  {copy.nav.map((section) => (
                    <Link
                      key={section.title}
                      href={section.href}
                      className="flex flex-col space-y-1 py-3 border-b border-border font-body hover:border-sage transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-lg font-medium text-foreground">
                        {section.title}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {section.description}
                      </span>
                    </Link>
                  ))}

                  {/* Mobile CTA Button */}
                  <div className="pt-4">
                    <Link href="/contact">
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">
                        {copy.cta}
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

// Menu Icon Component
const MenuIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
)
