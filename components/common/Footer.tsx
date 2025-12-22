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

export function Footer() {
  const currentYear = new Date().getFullYear()

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
              Elevating spaces with Moroccan heritage and modern luxury. We
              create interiors that tell your unique story.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
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
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4 font-sans text-white/80">
              <li>
                <Link href="/" className="transition-colors hover:text-gold">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-gold"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="transition-colors hover:text-gold"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-gold"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-gold"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-lg font-bold font-serif text-gold">
              Services
            </h4>
            <ul className="flex flex-col gap-4 font-sans text-white/80">
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-gold"
                >
                  Interior Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-gold"
                >
                  Space Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-gold"
                >
                  Furniture Selection
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-gold"
                >
                  Renovation
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-gold"
                >
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-lg font-bold font-serif text-gold">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-6 font-sans text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-6 w-6 shrink-0 text-gold" />
                <span>
                  123 Luxury Avenue, Hivernage
                  <br />
                  Marrakech, Morocco
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-gold" />
                <a
                  href="tel:+212500000000"
                  className="hover:text-gold transition-colors"
                >
                  +212 5 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-gold" />
                <a
                  href="mailto:info@fzconcept.com"
                  className="hover:text-gold transition-colors"
                >
                  info@fzconcept.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 bg-black/20 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center text-sm text-white/50 md:flex-row md:px-10 md:text-left font-sans">
          <p>&copy; {currentYear} FZ Concept. All rights reserved.</p>
          <div className="flex gap-8">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
