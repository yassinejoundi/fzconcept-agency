import type { Metadata } from "next"
import Link from "next/link"
import * as motion from "motion/react-client"
import { fadeInUp, staggerContainer } from "@/lib/animations"

import heroBg from "@/assets/images/home-page/hero-background.webp"
import { NavbarSection } from "@/components/common/NavbarSection"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy Policy | FZ Concept",
  description:
    "FZ Concept privacy policy describing how we collect, use, and protect your information.",
}

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Contact details you provide (name, email, phone, location, message).",
        "Project information you share to help us evaluate your needs.",
        "Basic technical data (e.g., browser type) when you navigate our site.",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "To respond to inquiries and schedule consultations.",
        "To provide proposals, project planning, and service delivery.",
        "To improve our website and communication quality.",
      ],
    },
    {
      title: "Sharing & Disclosure",
      content: [
        "We do not sell your personal data.",
        "We may share limited information with trusted service providers involved in delivering our services.",
        "We may disclose information if required by law or to protect our rights.",
      ],
    },
    {
      title: "Data Retention",
      content: [
        "We keep your information only as long as needed for the purposes described above or as required by law.",
      ],
    },
    {
      title: "Your Rights",
      content: [
        "You may request access, correction, or deletion of your personal information.",
        "You may object to certain processing or withdraw consent where applicable.",
      ],
    },
    {
      title: "Contact",
      content: [
        "For privacy questions, contact us at info@fzconcept.com or via the contact page.",
      ],
    },
  ] as const

  return (
    <div>
      <NavbarSection />
      <main>
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${heroBg.src}')` }}
          >
            <div className="absolute inset-0 bg-linear-to-b from-white/75 via-white/55 to-white/75" />
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 pt-28 md:px-10 md:pb-16 md:pt-32">
            <motion.div
              className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 shadow-lg border border-gold/30">
                <div className="h-2 w-2 rounded-full bg-gold" />
                <span className="text-sm font-medium text-primary tracking-wide uppercase">
                  Legal
                </span>
              </div>

              <h1 className="font-serif text-5xl font-bold leading-tight text-foreground md:text-7xl">
                Privacy Policy
                <span className="block mt-2 bg-linear-to-r from-primary via-yellow-600 to-gold bg-clip-text text-transparent pb-3">
                  Your Trust Matters
                </span>
              </h1>

              <p className="max-w-2xl font-sans text-muted-foreground text-base md:text-lg leading-relaxed">
                This policy explains how FZ Concept collects, uses, and protects
                your information when you contact us or use our website.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
                <Button
                  asChild
                  size="xl"
                  className="rounded-xl bg-primary text-primary-foreground shadow-xl transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-2xl hover:shadow-gold/20"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="xl"
                  className="rounded-xl border-2 border-primary/20 bg-white/80 text-primary shadow-lg transition-all duration-300 hover:border-gold hover:bg-white hover:text-gold"
                >
                  <Link href="/terms-of-service">Terms of Service</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
            <motion.div
              className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div className="grid gap-10">
                {sections.map((section) => (
                  <motion.div key={section.title} variants={fadeInUp}>
                    <h2 className="text-2xl font-bold font-serif text-foreground">
                      {section.title}
                    </h2>
                    <div className="mt-4 grid gap-3 font-sans text-sm text-muted-foreground">
                      {section.content.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-10 rounded-xl border border-border bg-secondary/40 p-6"
                variants={fadeInUp}
              >
                <p className="font-sans text-sm text-muted-foreground">
                  This page is provided for general information and does not
                  constitute legal advice. If you have specific questions,
                  please consult a qualified professional.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
