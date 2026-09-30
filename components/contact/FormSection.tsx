"use client"

import { FormEvent, useState } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare, faChevronDown, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { useI18n } from "@/components/common/I18nProvider"

export function FormSection() {
  const { locale } = useI18n()
  const fr = locale === "fr"
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [error, setError] = useState("")
  const copy = fr ? {
    eyebrow: "Votre projet commence ici",
    title: "Racontez-nous votre espace.",
    text: "Quelques détails suffisent pour commencer la conversation. Nous vous recontacterons pour définir la suite ensemble.",
    name: "Nom complet",
    email: "Adresse email",
    phone: "Téléphone (facultatif)",
    reason: "Votre projet",
    reasonPlaceholder: "Sélectionnez un sujet",
    reasons: ["Aménagement intérieur", "Ameublement sur mesure", "Décoration", "Autre demande"],
    location: "Lieu du projet (facultatif)",
    message: "Parlez-nous de votre projet",
    messageHint: "Votre espace, vos envies et les délais envisagés",
    privacy: "politique de confidentialité",
    send: "Envoyer mon message",
    sending: "Envoi en cours…",
    success: "Votre message a bien été envoyé. Merci de nous avoir écrit.",
    failure: "Impossible d’envoyer le message. Vérifiez votre connexion et réessayez.",
    tooMany: "Trop de tentatives. Réessayez dans quelques minutes.",
    elsewhere: "Ou contactez-nous directement",
  } : {
    eyebrow: "Your project starts here",
    title: "Tell us about your space.",
    text: "A few details are enough to start the conversation. We will get back to you to decide the next steps together.",
    name: "Full name",
    email: "Email address",
    phone: "Phone (optional)",
    reason: "Your project",
    reasonPlaceholder: "Select a subject",
    reasons: ["Interior furnishing", "Bespoke furniture", "Decoration", "Other inquiry"],
    location: "Project location (optional)",
    message: "Tell us about your project",
    messageHint: "Your space, ideas, and expected timeline",
    privacy: "privacy policy",
    send: "Send my message",
    sending: "Sending…",
    success: "Your message has been sent. Thank you for writing to us.",
    failure: "Unable to send your message. Check your connection and try again.",
    tooMany: "Too many attempts. Please try again in a few minutes.",
    elsewhere: "Or reach us directly",
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setStatus("submitting")
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(["name", "email", "phone", "reason", "location", "message", "website"].map((key) => [key, data.get(key) ?? ""]))),
      })
      if (!response.ok) {
        setStatus("error")
        setError(response.status === 429 ? copy.tooMany : copy.failure)
        return
      }
      form.reset()
      setStatus("success")
    } catch {
      setStatus("error")
      setError(copy.failure)
    }
  }

  return (
    <section className="fz-section fz-contact-section" id="contact-form">
      <div className="fz-shell fz-contact-grid">
        <div className="fz-contact-info">
          <p className="fz-kicker">{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
          <p>{copy.text}</p>
          <div className="fz-contact-direct">
            <h3>{copy.elsewhere}</h3>
            <a href="tel:+212777779909"><FontAwesomeIcon icon={faPhone} aria-hidden="true" /> +212 7 77 77 99 09</a>
            <a href="mailto:contact@fzconcept.agency"><FontAwesomeIcon icon={faEnvelope} aria-hidden="true" /> contact@fzconcept.agency</a>
            <a href="https://wa.me/212777779909" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" /> WhatsApp <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" /></a>
            <a href="https://www.instagram.com/fzconcept.agency" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} aria-hidden="true" /> @fzconcept.agency <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" /></a>
            <span><FontAwesomeIcon icon={faLocationDot} aria-hidden="true" /> Marrakech, Maroc</span>
          </div>
        </div>

        <form className="fz-contact-form" onSubmit={handleSubmit}>
          <div className="fz-honeypot" aria-hidden="true"><label htmlFor="fz-website">Website</label><input id="fz-website" name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
          <div className="fz-field-row">
            <div className="fz-field"><label htmlFor="fz-name">{copy.name}</label><input id="fz-name" name="name" type="text" autoComplete="name" minLength={2} maxLength={200} required /></div>
            <div className="fz-field"><label htmlFor="fz-email">{copy.email}</label><input id="fz-email" name="email" type="email" autoComplete="email" maxLength={320} required /></div>
          </div>
          <div className="fz-field-row">
            <div className="fz-field"><label htmlFor="fz-phone">{copy.phone}</label><input id="fz-phone" name="phone" type="tel" autoComplete="tel" maxLength={50} /></div>
            <div className="fz-field"><label htmlFor="fz-location">{copy.location}</label><input id="fz-location" name="location" type="text" autoComplete="address-level2" maxLength={120} /></div>
          </div>
          <div className="fz-field"><label htmlFor="fz-reason">{copy.reason}</label><div className="fz-select-wrap"><select id="fz-reason" name="reason" defaultValue="" required><option value="" disabled>{copy.reasonPlaceholder}</option>{copy.reasons.map((reason, index) => <option key={reason} value={["interior", "furniture", "decoration", "other"][index]}>{reason}</option>)}</select><FontAwesomeIcon icon={faChevronDown} aria-hidden="true" /></div></div>
          <div className="fz-field"><label htmlFor="fz-message">{copy.message}</label><textarea id="fz-message" name="message" rows={6} minLength={10} maxLength={5000} placeholder={copy.messageHint} required /></div>
          <div className="fz-consent"><input id="fz-privacy" type="checkbox" required /><label htmlFor="fz-privacy">{fr ? "J’accepte la " : "I agree to the "}<Link href="/privacy-policy">{copy.privacy}</Link>.</label></div>
          <button className="fz-button fz-button-dark" type="submit" disabled={status === "submitting"}>{status === "submitting" ? copy.sending : copy.send}<FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" /></button>
          <p className="fz-form-feedback" role={status === "error" ? "alert" : "status"}>{status === "success" ? copy.success : status === "error" ? error : ""}</p>
        </form>
      </div>
    </section>
  )
}
