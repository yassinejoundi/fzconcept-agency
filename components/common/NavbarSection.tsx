"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

export function NavbarSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const COMPANY_NAME = "FZ Concept"
  const CTA_BUTTON_TEXT = "Book a Consultation"
  const NavigationItem = [
    {
      title: "Home",
      href: "/",
      description: "Return to the homepage",
    },
    {
      title: "Portfolio",
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
  ]

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
              {COMPANY_NAME}
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
                {NavigationItem.map((section) => (
                  <NavigationMenuItem key={section.title}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={section.href}
                        className={`group relative px-4 py-2 text-sm font-medium font-sans transition-colors hover:text-gold ${
                          scrolled
                            ? "text-foreground hover:text-gold"
                            : "text-foreground hover:text-gold"
                        }`}
                      >
                        {section.title}
                        <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button
              asChild
              className="ml-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              <Link href="/contact">{CTA_BUTTON_TEXT}</Link>
            </Button>
          </motion.div>

          {/* Desktop CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden md:flex items-center"
          >
            <Link href="/contact">
              <Button
                className={`rounded-xl px-6 py-2 font-bold font-body transition-all duration-300 ${
                  scrolled
                    ? "bg-sage text-background hover:bg-sage/90"
                    : "bg-white text-foreground hover:bg-white/90"
                }`}
              >
                {CTA_BUTTON_TEXT}
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={scrolled ? "text-foreground" : "text-white"}
                >
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8 px-4">
                  {/* Mobile Navigation Items */}
                  {NavigationItem.map((section) => (
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
                      <Button className="w-full bg-sage hover:bg-sage/90 text-background font-body rounded-xl py-6">
                        {CTA_BUTTON_TEXT}
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
