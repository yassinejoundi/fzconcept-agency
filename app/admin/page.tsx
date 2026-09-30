"use client"

import { FormEvent, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { useI18n } from "@/components/common/I18nProvider"
import { authClient } from "@/lib/auth/client"

export default function AdminLoginPage() {
  const router = useRouter()
  const { locale, setLocale } = useI18n()
  const fr = locale === "fr"
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const text = fr
    ? {
        skip: "Aller à la connexion",
        nav: "Navigation du studio",
        language: "Langue",
        website: "Voir le site",
        studio: "FZ Concept · Marrakech",
        imageCaption: "Un intérieur pensé autour de vous.",
        eyebrow: "Espace studio",
        title: "Bon retour",
        intro: "Connectez-vous pour gérer les demandes du studio.",
        email: "Adresse e-mail",
        password: "Mot de passe",
        emailPlaceholder: "vous@exemple.com",
        submit: "Se connecter",
        submitting: "Connexion en cours…",
        invalid: "E-mail ou mot de passe incorrect. Vérifiez vos identifiants et réessayez.",
        unauthorized:
          "Ce compte n’est pas autorisé à ouvrir le tableau de bord. Contactez l’administrateur du studio.",
        failed: "Connexion impossible. Vérifiez votre connexion et réessayez.",
        access: "L’accès est réservé aux comptes autorisés du studio.",
        privacy: "Confidentialité",
        terms: "Conditions d’utilisation",
      }
    : {
        skip: "Skip to sign in",
        nav: "Studio navigation",
        language: "Language",
        website: "View website",
        studio: "FZ Concept · Marrakech",
        imageCaption: "A home shaped around its owner.",
        eyebrow: "Studio access",
        title: "Welcome back",
        intro: "Sign in to manage studio enquiries.",
        email: "Email address",
        password: "Password",
        emailPlaceholder: "you@example.com",
        submit: "Sign in",
        submitting: "Signing in…",
        invalid: "Email or password is incorrect. Check both and try again.",
        unauthorized:
          "This account cannot open the admin dashboard. Contact the studio administrator.",
        failed: "Unable to sign in. Check your connection and try again.",
        access: "Access is limited to approved studio accounts.",
        privacy: "Privacy",
        terms: "Terms of service",
      }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    const formData = new FormData(event.currentTarget)
    const email = String(formData.get("email") ?? "").trim().toLowerCase()
    const password = String(formData.get("password") ?? "")

    try {
      const { error } = await authClient.signIn.email({ email, password })
      if (error) {
        setErrorMessage(text.invalid)
        setIsSubmitting(false)
        return
      }

      const access = await fetch("/api/admin/session", { cache: "no-store" })
      if (!access.ok) {
        await authClient.signOut()
        setErrorMessage(text.unauthorized)
        setIsSubmitting(false)
        return
      }

      router.replace("/admin/dashboard")
      router.refresh()
    } catch {
      setErrorMessage(text.failed)
      setIsSubmitting(false)
    }
  }

  function changeLocale(next: "en" | "fr") {
    if (next === locale) return
    setLocale(next)
    router.refresh()
  }

  return (
    <div className="min-h-svh bg-[#f5f0e9] font-body text-[#251716]">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[#3c1012] focus:px-4 focus:py-3 focus:text-[#f5f0e9] focus:outline-2 focus:outline-offset-2 focus:outline-[#251716]"
        href="#admin-main"
      >
        {text.skip}
      </a>

      <header className="flex min-h-[4.5rem] items-center justify-between gap-3 border-b border-[#d5c5b4] px-4 sm:px-8">
        <Link
          className="inline-flex min-h-11 items-baseline gap-2 text-[#3c1012] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3c1012]"
          href="/"
          aria-label="FZ Concept — home"
        >
          <span className="font-headline text-3xl leading-none tracking-[-0.08em]">
            FZ
          </span>
          <span className="hidden text-[0.62rem] font-bold tracking-[0.25em] min-[360px]:inline-block">
            CONCEPT
          </span>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-5" aria-label={text.nav}>
          <div
            className="flex items-center"
            role="group"
            aria-label={text.language}
          >
            <button
              className={`min-h-11 min-w-10 px-2 text-xs font-bold tracking-[0.1em] underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3c1012] ${!fr ? "text-[#3c1012] underline" : "text-[#675751] hover:text-[#3c1012]"}`}
              type="button"
              aria-pressed={!fr}
              onClick={() => changeLocale("en")}
            >
              EN
            </button>
            <span aria-hidden="true" className="text-[#a6814d]">
              /
            </span>
            <button
              className={`min-h-11 min-w-10 px-2 text-xs font-bold tracking-[0.1em] underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3c1012] ${fr ? "text-[#3c1012] underline" : "text-[#675751] hover:text-[#3c1012]"}`}
              type="button"
              aria-pressed={fr}
              onClick={() => changeLocale("fr")}
            >
              FR
            </button>
          </div>
          <span aria-hidden="true" className="h-5 w-px bg-[#d5c5b4]" />
          <Link
            className="inline-flex min-h-11 items-center px-1 text-sm font-semibold text-[#3c1012] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3c1012]"
            href="/"
          >
            {text.website}
          </Link>
        </nav>
      </header>

      <main
        className="mx-auto grid min-h-[calc(100svh-4.5rem)] w-full max-w-[1440px] grid-flow-dense lg:grid-cols-2"
        id="admin-main"
      >
        <figure className="grid min-h-[20rem] grid-rows-[1fr_auto] overflow-hidden bg-[#3c1012] lg:min-h-[calc(100svh-4.5rem)]">
          <div className="relative min-h-[14rem] overflow-hidden bg-[#e4cfb4] sm:min-h-[18rem] lg:min-h-0">
            <Image
              alt=""
              className="object-cover object-[center_56%]"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              src="/images/soft-living.webp"
            />
          </div>
          <figcaption className="border-t border-white/15 bg-[#3c1012] px-6 py-5 text-[#f5f0e9] sm:px-8 sm:py-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e4cfb4]">
              {text.studio}
            </p>
            <p className="mt-2 max-w-xl font-headline text-xl leading-tight text-balance sm:text-2xl">
              {text.imageCaption}
            </p>
          </figcaption>
        </figure>

        <section className="flex items-center justify-center px-5 py-12 sm:px-10 sm:py-16 lg:px-12 xl:px-20">
          <div className="w-full max-w-md">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#765b36]">
              {text.eyebrow}
            </p>
            <h1 className="mt-4 max-w-5xl font-headline text-[clamp(2.6rem,5vw,4rem)] leading-[1.08] tracking-[-0.045em] text-[#3c1012] text-balance">
              {text.title}
            </h1>
            <p className="mt-4 max-w-[36ch] text-base leading-relaxed text-[#554942] text-pretty">
              {text.intro}
            </p>

            <form className="mt-9 grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <label
                  className="text-sm font-semibold text-[#251716]"
                  htmlFor="admin-email"
                >
                  {text.email}
                </label>
                <input
                  autoComplete="username"
                  className="min-h-12 w-full border border-[#bca999] bg-[#fbf8f3] px-4 text-base text-[#251716] placeholder:text-[#71645c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3c1012]"
                  id="admin-email"
                  name="email"
                  placeholder={text.emailPlaceholder}
                  required
                  type="email"
                />
              </div>

              <div className="grid gap-2">
                <label
                  className="text-sm font-semibold text-[#251716]"
                  htmlFor="admin-password"
                >
                  {text.password}
                </label>
                <input
                  autoComplete="current-password"
                  className="min-h-12 w-full border border-[#bca999] bg-[#fbf8f3] px-4 text-base text-[#251716] placeholder:text-[#71645c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3c1012]"
                  id="admin-password"
                  name="password"
                  required
                  type="password"
                />
              </div>

              <button
                className="mt-1 min-h-12 w-full bg-[#3c1012] px-5 text-sm font-bold text-[#f5f0e9] transition-colors duration-150 hover:bg-[#251716] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3c1012] disabled:cursor-wait disabled:opacity-70 motion-reduce:transition-none"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? text.submitting : text.submit}
              </button>
            </form>

            <p
              aria-live="polite"
              aria-atomic="true"
              className="mt-4 min-h-6 text-sm leading-relaxed text-[#7d2023]"
              role="status"
            >
              {errorMessage}
            </p>

            <p className="mt-3 border-t border-[#d5c5b4] pt-4 text-sm leading-relaxed text-[#554942]">
              {text.access}
            </p>
          </div>
        </section>
      </main>

      <footer className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-[#d5c5b4] px-5 py-4 text-xs text-[#554942] sm:px-8">
        <span>© {new Date().getFullYear()} FZ Concept</span>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label={fr ? "Liens juridiques" : "Legal links"}>
          <Link
            className="underline decoration-transparent underline-offset-4 hover:text-[#3c1012] hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3c1012]"
            href="/privacy-policy"
          >
            {text.privacy}
          </Link>
          <Link
            className="underline decoration-transparent underline-offset-4 hover:text-[#3c1012] hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3c1012]"
            href="/terms-of-service"
          >
            {text.terms}
          </Link>
        </nav>
      </footer>
    </div>
  )
}
