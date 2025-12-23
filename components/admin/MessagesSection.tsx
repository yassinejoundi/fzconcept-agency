"use client"

import { useEffect, useState } from "react"
import { MapPin, Phone, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"

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

type ApiResponse =
  | { ok: true; messages: ContactMessage[] }
  | { ok: false; error: string }

function formatDate(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ""
  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export function MessagesSection() {
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading")
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  async function requestMessages(signal?: AbortSignal) {
    try {
      const response = await fetch("/api/admin/messages", {
        method: "GET",
        headers: { Accept: "application/json" },
        signal,
      })

      const data = (await response
        .json()
        .catch(() => null)) as ApiResponse | null
      if (!response.ok || !data || data.ok === false) {
        return {
          ok: false as const,
          error:
            data && "error" in data ? data.error : "Failed to load messages.",
        }
      }

      return { ok: true as const, messages: data.messages ?? [] }
    } catch {
      return { ok: false as const, error: "Failed to load messages." }
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    void requestMessages(controller.signal).then((result) => {
      if (controller.signal.aborted) return
      if (!result.ok) {
        setStatus("error")
        setErrorMessage(result.error)
        return
      }
      setMessages(result.messages)
      setStatus("ready")
    })

    return () => controller.abort()
  }, [])

  async function refresh() {
    setStatus("loading")
    setErrorMessage(null)
    const result = await requestMessages()
    if (!result.ok) {
      setStatus("error")
      setErrorMessage(result.error)
      return
    }
    setMessages(result.messages)
    setStatus("ready")
  }

  return (
    <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase text-gold tracking-widest">
            Messages
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Latest Inquiries
          </h2>
          <p className="mt-3 font-sans text-sm text-muted-foreground">
            Showing the latest{" "}
            <span className="text-foreground">{messages.length}</span> messages.
          </p>
        </div>

        <Button
          type="button"
          variant="outline"
          onClick={() => void refresh()}
          disabled={status === "loading"}
          className="rounded-xl border-2 border-primary/20 bg-white/80 text-primary shadow-lg transition-all duration-300 hover:border-gold hover:bg-white hover:text-gold"
        >
          <RefreshCw className="mr-2 h-5 w-5" />
          Refresh
        </Button>
      </div>

      {status === "loading" ? (
        <div className="mt-8 rounded-xl border border-border bg-secondary/40 p-6">
          <p className="font-sans text-sm text-muted-foreground">
            Loading messages...
          </p>
        </div>
      ) : status === "error" ? (
        <div className="mt-8 rounded-xl border border-border bg-secondary/40 p-6">
          <p className="font-sans text-sm text-destructive">
            {errorMessage ?? "Failed to load messages."}
          </p>
        </div>
      ) : messages.length === 0 ? (
        <div className="mt-8 rounded-xl border border-border bg-secondary/40 p-6">
          <p className="font-sans text-sm text-muted-foreground">
            No messages yet. When a visitor submits the contact form, it will
            appear here.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className="rounded-2xl border border-border bg-background p-6 shadow-sm"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <p className="font-serif text-xl font-bold text-foreground">
                      {message.name}
                    </p>
                    <span className="text-xs font-sans text-muted-foreground">
                      {formatDate(message.created_at)}
                    </span>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <a
                      href={`mailto:${message.email}`}
                      className="font-sans hover:text-gold transition-colors"
                    >
                      {message.email}
                    </a>
                    {message.phone ? (
                      <span className="inline-flex items-center gap-2 font-sans">
                        <Phone className="h-4 w-4 text-gold" />
                        {message.phone}
                      </span>
                    ) : null}
                    {message.location ? (
                      <span className="inline-flex items-center gap-2 font-sans">
                        <MapPin className="h-4 w-4 text-gold" />
                        {message.location}
                      </span>
                    ) : null}
                    {message.reason ? (
                      <span className="font-sans">{message.reason}</span>
                    ) : null}
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-xl border-2 border-primary/20 bg-white/80 text-primary shadow-lg transition-all duration-300 hover:border-gold hover:bg-white hover:text-gold"
                  >
                    <a href={`mailto:${message.email}`}>Reply</a>
                  </Button>
                  {message.phone ? (
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-xl border-2 border-primary/20 bg-white/80 text-primary shadow-lg transition-all duration-300 hover:border-gold hover:bg-white hover:text-gold"
                    >
                      <a href={`tel:${message.phone}`}>Call</a>
                    </Button>
                  ) : null}
                </div>
              </div>

              <p className="mt-5 whitespace-pre-line font-sans text-sm leading-relaxed text-foreground">
                {message.message}
              </p>

              {message.page_url ? (
                <p className="mt-4 font-sans text-xs text-muted-foreground">
                  Source: {message.page_url}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
