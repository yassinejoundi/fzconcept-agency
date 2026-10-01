"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faEnvelope, faInbox, faLocationDot, faPhone, faRotate } from "@fortawesome/free-solid-svg-icons"
import { useI18n } from "@/components/common/I18nProvider"

type ContactMessage = {
  id: string
  created_at: string
  name: string
  email: string
  phone: string | null
  reason: string | null
  location: string | null
  message: string
  page_url: string | null
}

type ApiResponse = { ok: true; messages: ContactMessage[] } | { ok: false; error: string }
type LoadResult = { ok: true; messages: ContactMessage[] } | { ok: false; unauthorized: boolean }

async function requestMessages(): Promise<LoadResult> {
  try {
    const response = await fetch("/api/admin/messages", {
      headers: { Accept: "application/json" },
      cache: "no-store",
    })
    if (response.status === 401 || response.status === 403) return { ok: false, unauthorized: true }
    const data = (await response.json().catch(() => null)) as ApiResponse | null
    if (!response.ok || !data || !data.ok) return { ok: false, unauthorized: false }
    return { ok: true, messages: data.messages ?? [] }
  } catch {
    return { ok: false, unauthorized: false }
  }
}

function formatDate(value: string, fr: boolean) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ""
  return new Intl.DateTimeFormat(fr ? "fr-MA" : "en-GB", {
    year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit",
  }).format(date)
}

function reasonLabel(reason: string | null, fr: boolean) {
  if (!reason) return fr ? "Demande générale" : "General enquiry"
  const labels: Record<string, [string, string]> = {
    interior: ["Aménagement intérieur", "Interior furnishing"],
    furniture: ["Ameublement sur mesure", "Bespoke furniture"],
    decoration: ["Décoration", "Decoration"],
    other: ["Autre demande", "Other enquiry"],
  }
  return labels[reason]?.[fr ? 0 : 1] ?? reason
}

export function MessagesSection() {
  const { locale } = useI18n()
  const fr = locale === "fr"
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading")
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [unauthorized, setUnauthorized] = useState(false)
  const copy = fr ? {
    eyebrow: "Boîte de réception",
    title: "Dernières demandes",
    count: (count: number) => `${count} message${count > 1 ? "s" : ""} récent${count > 1 ? "s" : ""}`,
    refresh: "Actualiser",
    loading: "Chargement des demandes…",
    error: "Impossible de charger les messages. Réessayez.",
    expired: "Votre session a expiré. Reconnectez-vous pour voir les demandes.",
    signIn: "Se reconnecter",
    emptyTitle: "Aucun message pour le moment.",
    emptyText: "Les demandes envoyées depuis le formulaire apparaîtront ici.",
    contact: "Voir le formulaire",
    reply: "Répondre",
    call: "Appeler",
    source: "Page d’origine",
  } : {
    eyebrow: "Inbox",
    title: "Latest enquiries",
    count: (count: number) => `${count} recent message${count === 1 ? "" : "s"}`,
    refresh: "Refresh",
    loading: "Loading enquiries…",
    error: "Unable to load messages. Try again.",
    expired: "Your session has expired. Sign in again to view enquiries.",
    signIn: "Sign in again",
    emptyTitle: "No messages yet.",
    emptyText: "Enquiries sent through the contact form will appear here.",
    contact: "View contact form",
    reply: "Reply",
    call: "Call",
    source: "Source page",
  }

  useEffect(() => {
    let active = true
    void requestMessages().then((result) => {
      if (!active) return
      if (!result.ok) {
        setUnauthorized(result.unauthorized)
        setStatus("error")
        return
      }
      setMessages(result.messages)
      setStatus("ready")
    })
    return () => { active = false }
  }, [])

  async function refresh() {
    setStatus("loading")
    const result = await requestMessages()
    if (!result.ok) {
      setUnauthorized(result.unauthorized)
      setStatus("error")
      return
    }
    setMessages(result.messages)
    setStatus("ready")
  }

  return (
    <section className="fz-admin-inbox fz-admin-shell" aria-labelledby="fz-admin-inbox-title">
      <div className="fz-admin-inbox-header">
        <div>
          <p className="fz-admin-kicker">{copy.eyebrow}</p>
          <h2 id="fz-admin-inbox-title">{copy.title}</h2>
          <p className="fz-admin-inbox-count" role="status" aria-live="polite">{status === "ready" ? copy.count(messages.length) : ""}</p>
        </div>
        <button className="fz-admin-refresh" type="button" onClick={() => void refresh()} disabled={status === "loading"}>
          <FontAwesomeIcon icon={faRotate} aria-hidden="true" />{copy.refresh}
        </button>
      </div>

      {status === "loading" ? (
        <div className="fz-admin-state" role="status">{copy.loading}</div>
      ) : status === "error" ? (
        <div className="fz-admin-state fz-admin-error" role="alert">
          <p>{unauthorized ? copy.expired : copy.error}</p>
          {unauthorized ? <Link className="fz-admin-text-link" href="/admin">{copy.signIn}<FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link> :
            <button className="fz-admin-text-link" type="button" onClick={() => void refresh()}>{copy.refresh}<FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></button>}
        </div>
      ) : messages.length === 0 ? (
        <div className="fz-admin-state fz-admin-empty">
          <FontAwesomeIcon icon={faInbox} aria-hidden="true" />
          <h3>{copy.emptyTitle}</h3>
          <p>{copy.emptyText}</p>
          <Link className="fz-admin-text-link" href="/contact">{copy.contact}<FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link>
        </div>
      ) : (
        <div className="fz-admin-message-list">
          {messages.map((message) => (
            <article className="fz-admin-message" key={message.id}>
              <header className="fz-admin-message-head">
                <div><p>{reasonLabel(message.reason, fr)}</p><h3>{message.name}</h3></div>
                <time dateTime={message.created_at}>{formatDate(message.created_at, fr)}</time>
              </header>
              <div className="fz-admin-message-contact">
                <a href={`mailto:${message.email}`}><FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />{message.email}</a>
                {message.phone ? <a href={`tel:${message.phone}`}><FontAwesomeIcon icon={faPhone} aria-hidden="true" />{message.phone}</a> : null}
                {message.location ? <span><FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />{message.location}</span> : null}
              </div>
              <p className="fz-admin-message-body">{message.message}</p>
              <footer className="fz-admin-message-footer">
                {message.page_url ? <p><span>{copy.source}</span>{message.page_url}</p> : <span />}
                <div>
                  <a className="fz-admin-reply" href={`mailto:${message.email}`}>{copy.reply}<FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></a>
                  {message.phone ? <a className="fz-admin-call" href={`tel:${message.phone}`}>{copy.call}</a> : null}
                </div>
              </footer>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
