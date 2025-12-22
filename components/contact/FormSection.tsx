"use client"

import * as React from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import * as motion from "motion/react-client"
import { scaleIn, slideInLeft } from "@/lib/animations"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export function FormSection() {
  const [submitted, setSubmitted] = React.useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-secondary/20" id="contact-form">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <div className="mb-4 flex items-center">
              <div className="mr-4 w-10 border-t border-gold" />
              <p className="text-sm font-medium font-sans text-gold uppercase tracking-wider">
                Contact
              </p>
            </div>
            <h2 className="text-4xl font-bold font-serif text-primary md:text-5xl">
              Let’s Talk About Your Space
            </h2>
            <p className="mt-4 max-w-xl font-sans text-muted-foreground">
              Share your goals, timeline, and style preferences. We’ll respond
              with clear next steps and a tailored consultation.
            </p>

            <div className="mt-10 grid gap-4">
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-sm">
                <MapPin className="mt-0.5 h-5 w-5 text-gold" />
                <div>
                  <p className="font-serif font-semibold text-foreground">
                    Marrakech, Morocco
                  </p>
                  <p className="font-sans text-sm text-muted-foreground">
                    Available across Morocco
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-sm">
                <Phone className="mt-0.5 h-5 w-5 text-gold" />
                <div>
                  <p className="font-serif font-semibold text-foreground">
                    +212 5 00 00 00 00
                  </p>
                  <p className="font-sans text-sm text-muted-foreground">
                    Mon–Sat, 9:00–18:00
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-sm">
                <Mail className="mt-0.5 h-5 w-5 text-gold" />
                <div>
                  <p className="font-serif font-semibold text-foreground">
                    info@fzconcept.com
                  </p>
                  <p className="font-sans text-sm text-muted-foreground">
                    We reply within 24–48 hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium font-sans text-foreground">
                    Full name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium font-sans text-foreground">
                    Phone (optional)
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    placeholder="+212 ..."
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium font-sans text-foreground">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  placeholder="you@domain.com"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium font-sans text-foreground">
                    Reason for contact
                  </label>
                  <select
                    name="reason"
                    required
                    defaultValue=""
                    className="mt-2 w-full appearance-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  >
                    <option value="" disabled>
                      Select a reason
                    </option>
                    <option value="new-project">New Project</option>
                    <option value="renovation">Renovation</option>
                    <option value="consultation">Consultation</option>
                    <option value="partnership">Partnership</option>
                    <option value="press">Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium font-sans text-foreground">
                    Project location
                  </label>
                  <input
                    name="location"
                    type="text"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    placeholder="Marrakech, Casablanca..."
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium font-sans text-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  placeholder="Tell us about your space, timeline, and what you’d love to achieve."
                />
              </div>

              <label className="flex items-start gap-3">
                <Checkbox
                  id="privacy-policy"
                  required
                  className="mt-1 h-4 w-4 rounded border-border text-primary"
                />
                <span className="text-sm font-sans text-muted-foreground">
                  I agree to the Privacy Policy.
                </span>
              </label>

              <div className="grid gap-3">
                <Button className="h-12 rounded-xl bg-primary text-primary-foreground shadow-lg transition-all hover:bg-primary/90">
                  Send Message
                </Button>
                {submitted ? (
                  <p className="text-center text-sm font-sans text-muted-foreground">
                    Thanks — we received your message and will reply shortly.
                  </p>
                ) : null}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
