"use client"

import Link from "next/link"
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import { useI18n } from "@/components/common/I18nProvider"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { locale } = useI18n()

  const copy =
    locale === "fr"
      ? {
          brandBlurb:
            "Sublimer les espaces avec l’héritage marocain et le luxe moderne. Nous créons des intérieurs qui racontent votre histoire.",
          quickLinks: "Liens rapides",
          services: "Services",
          contactUs: "Contact",
          links: {
            home: "Accueil",
            about: "À propos",
            portfolio: "Réalisations",
            services: "Services",
            contact: "Contact",
            privacy: "Politique de confidentialité",
            terms: "Conditions d’utilisation",
          },
          serviceItems: [
            "Design d’intérieur",
            "Planification d’espace",
            "Sélection de mobilier",
            "Rénovation",
            "Consultation",
          ],
          address: "Marrakech, Maroc",
          rights: "Tous droits réservés.",
          createdBy: "Créé par",
        }
      : {
          brandBlurb:
            "Elevating spaces with Moroccan heritage and modern luxury. We create interiors that tell your unique story.",
          quickLinks: "Quick Links",
          services: "Services",
          contactUs: "Contact Us",
          links: {
            home: "Home",
            about: "About Us",
            portfolio: "Our Work",
            services: "Services",
            contact: "Contact",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
          },
          serviceItems: [
            "Interior Design",
            "Space Planning",
            "Furniture Selection",
            "Renovation",
            "Consultation",
          ],
          address: "Marrakech, Morocco",
          rights: "All rights reserved.",
          createdBy: "Created by",
        }

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="text-3xl font-bold font-serif text-white tracking-tight"
            >
              FZ Concept
            </Link>
            <p className="text-white/70 font-sans max-w-xs">
              {copy.brandBlurb}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/f.zconcept"
                target="_blank"
                className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-gold hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-gold hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-gold hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-gold hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold font-serif text-gold">
              {copy.quickLinks}
            </h4>
            <ul className="flex flex-col gap-4 font-sans text-white/80">
              <li>
                <Link href="/" className="transition-colors hover:text-gold">
                  {copy.links.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-gold"
                >
                  {copy.links.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="transition-colors hover:text-gold"
                >
                  {copy.links.portfolio}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-gold"
                >
                  {copy.links.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-gold"
                >
                  {copy.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-lg font-bold font-serif text-gold">
              {copy.services}
            </h4>
            <ul className="flex flex-col gap-4 font-sans text-white/80">
              {copy.serviceItems.map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="transition-colors hover:text-gold"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-lg font-bold font-serif text-gold">
              {copy.contactUs}
            </h4>
            <ul className="flex flex-col gap-6 font-sans text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-6 w-6 shrink-0 text-gold" />
                <span>{copy.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-gold" />
                <a
                  href="tel:+212777779909"
                  className="hover:text-gold transition-colors"
                >
                  +212 7 77 77 99 09
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-gold" />
                <a
                  href="mailto:contact@fzconcept.agency"
                  className="hover:text-gold transition-colors"
                >
                  contact@fzconcept.agency
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 bg-black/20 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center text-sm text-white/50 md:flex-row md:px-10 md:text-left font-sans">
          <p>
            &copy; {currentYear} FZ Concept. {copy.rights} | {copy.createdBy}{" "}
            <a
              href="https://yassinejoundi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Yassine Joundi
            </a>
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              {copy.links.privacy}
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              {copy.links.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
