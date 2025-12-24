"use client"

import { useState, FormEvent } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import * as motion from "motion/react-client"
import { scaleIn, slideInLeft } from "@/lib/animations"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useI18n } from "@/components/common/I18nProvider"

export function FormSection() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const { locale } = useI18n()

  const copy =
    locale === "fr"
      ? {
          eyebrow: "Contact",
          title: "Parlons de votre espace",
          description:
            "Partagez vos objectifs, votre calendrier et vos préférences. Nous répondrons avec des prochaines étapes claires et une consultation adaptée.",
          locationTitle: "Marrakech, Maroc",
          locationSubtitle: "Disponible partout au Maroc",
          hours: "Lun–Sam, 9:00–18:00",
          replyTime: "Réponse sous 24–48h",
          fullName: "Nom complet",
          fullNamePlaceholder: "Votre nom",
          phoneOptional: "Téléphone (optionnel)",
          email: "Email",
          reason: "Motif de contact",
          reasonPlaceholder: "Choisir un motif",
          reasons: {
            quote: "Demander un devis",
            newProject: "Nouveau projet",
            renovation: "Rénovation",
            consultation: "Consultation",
            partnership: "Partenariat",
            press: "Presse",
            other: "Autre",
          },
          projectLocation: "Lieu du projet",
          projectLocationPlaceholder: "Marrakech, Casablanca…",
          message: "Message",
          messagePlaceholder:
            "Décrivez votre espace, votre calendrier et vos objectifs.",
          privacy: "J’accepte la Politique de confidentialité.",
          sending: "Envoi…",
          send: "Envoyer",
          success: "Merci — votre message a bien été reçu. Réponse sous peu.",
          error: "Une erreur est survenue. Veuillez réessayer.",
        }
      : {
          eyebrow: "Contact",
          title: "Let’s Talk About Your Space",
          description:
            "Share your goals, timeline, and style preferences. We’ll respond with clear next steps and a tailored consultation.",
          locationTitle: "Marrakech, Morocco",
          locationSubtitle: "Available across Morocco",
          hours: "Mon–Sat, 9:00–18:00",
          replyTime: "We reply within 24–48 hours",
          fullName: "Full name",
          fullNamePlaceholder: "Your name",
          phoneOptional: "Phone (optional)",
          email: "Email",
          reason: "Reason for contact",
          reasonPlaceholder: "Select a reason",
          reasons: {
            quote: "Request a Quote",
            newProject: "New Project",
            renovation: "Renovation",
            consultation: "Consultation",
            partnership: "Partnership",
            press: "Press",
            other: "Other",
          },
          projectLocation: "Project location",
          projectLocationPlaceholder: "Marrakech, Casablanca...",
          message: "Message",
          messagePlaceholder:
            "Tell us about your space, timeline, and what you’d love to achieve.",
          privacy: "I agree to the Privacy Policy.",
          sending: "Sending...",
          send: "Send Message",
          success: "Thanks — we received your message and will reply shortly.",
          error: "Something went wrong. Please try again.",
        }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setStatus("submitting")
    setErrorMessage(null)

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      reason: formData.get("reason"),
      location: formData.get("location"),
      message: formData.get("message"),
      website: formData.get("website"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string
        } | null
        setStatus("error")
        setErrorMessage(data?.error ?? copy.error)
        return
      }

      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
      setErrorMessage(copy.error)
    }
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
                {copy.eyebrow}
              </p>
            </div>
            <h2 className="text-4xl font-bold font-serif text-primary md:text-5xl">
              {copy.title}
            </h2>
            <p className="mt-4 max-w-xl font-sans text-muted-foreground">
              {copy.description}
            </p>

            <div className="mt-10 grid gap-4">
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-sm">
                <MapPin className="mt-0.5 h-5 w-5 text-gold" />
                <div>
                  <p className="font-serif font-semibold text-foreground">
                    {copy.locationTitle}
                  </p>
                  <p className="font-sans text-sm text-muted-foreground">
                    {copy.locationSubtitle}
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
                    {copy.hours}
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
                    {copy.replyTime}
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
              <input
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium font-sans text-foreground">
                    {copy.fullName}
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    placeholder={copy.fullNamePlaceholder}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium font-sans text-foreground">
                    {copy.phoneOptional}
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
                  {copy.email}
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
                    {copy.reason}
                  </label>
                  <select
                    name="reason"
                    required
                    defaultValue=""
                    className="mt-2 w-full appearance-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  >
                    <option value="" disabled>
                      {copy.reasonPlaceholder}
                    </option>
                    <option value="quote">{copy.reasons.quote}</option>
                    <option value="new-project">
                      {copy.reasons.newProject}
                    </option>
                    <option value="renovation">
                      {copy.reasons.renovation}
                    </option>
                    <option value="consultation">
                      {copy.reasons.consultation}
                    </option>
                    <option value="partnership">
                      {copy.reasons.partnership}
                    </option>
                    <option value="press">{copy.reasons.press}</option>
                    <option value="other">{copy.reasons.other}</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium font-sans text-foreground">
                    {copy.projectLocation}
                  </label>
                  <input
                    name="location"
                    type="text"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    placeholder={copy.projectLocationPlaceholder}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium font-sans text-foreground">
                  {copy.message}
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  placeholder={copy.messagePlaceholder}
                />
              </div>

              <label className="flex items-start gap-3">
                <Checkbox
                  id="privacy-policy"
                  required
                  className="mt-1 h-4 w-4 rounded border-border text-primary"
                />
                <span className="text-sm font-sans text-muted-foreground">
                  {copy.privacy}
                </span>
              </label>

              <div className="grid gap-3">
                <Button
                  className="h-12 rounded-xl bg-primary text-primary-foreground shadow-lg transition-all hover:bg-primary/90"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? copy.sending : copy.send}
                </Button>
                {status === "success" ? (
                  <p className="text-center text-sm font-sans text-muted-foreground">
                    {copy.success}
                  </p>
                ) : status === "error" ? (
                  <p className="text-center text-sm font-sans text-destructive">
                    {errorMessage ?? copy.error}
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
