import type { Metadata } from "next"
import Link from "next/link"

import { NavbarSection } from "@/components/common/NavbarSection"
import { HeroSection } from "@/components/contact/HeroSection"
import { FormSection } from "@/components/contact/FormSection"

export const metadata: Metadata = {
  title: "Contact | FZ Concept",
  description:
    "Contact FZ Concept for interior design, renovation, and luxury styling in Morocco.",
}

export default function ContactPage() {
  return (
    <div>
      <NavbarSection />
      <main>
        <HeroSection />
        <div id="contact-form">
          <FormSection />
        </div>
      </main>
    </div>
  )
}
