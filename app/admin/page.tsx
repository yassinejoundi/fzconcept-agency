"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Lock, ShieldCheck } from "lucide-react"
import * as motion from "motion/react-client"

import { NavbarSection } from "@/components/common/NavbarSection"
import { Button } from "@/components/ui/button"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { authClient } from "@/lib/auth/client"

export default function AdminLoginPage() {
  const router = useRouter()
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")
    setErrorMessage(null)

    const form = event.currentTarget
    const formData = new FormData(form)
    const email = String(formData.get("email") ?? "").trim().toLowerCase()
    const password = String(formData.get("password") ?? "")

    try {
      const { error } = await authClient.signIn.email({ email, password })
      if (error) {
        setStatus("error")
        setErrorMessage("Invalid email or password.")
        return
      }

      const access = await fetch("/api/admin/session", { cache: "no-store" })
      if (!access.ok) {
        await authClient.signOut()
        setStatus("error")
        setErrorMessage("This account is not authorized.")
        return
      }

      setStatus("success")
      router.replace("/admin/dashboard")
      router.refresh()
    } catch {
      setStatus("error")
      setErrorMessage("Login failed.")
    }
  }

  return (
    <div>
      <NavbarSection />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-secondary/40 via-background to-background" />
          <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32">
            <motion.div
              className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 shadow-lg border border-gold/30">
                  <div className="h-2 w-2 rounded-full bg-gold" />
                  <span className="text-sm font-medium text-primary tracking-wide uppercase">
                    Admin Access
                  </span>
                </div>

                <h1 className="mt-6 font-serif text-5xl font-bold leading-tight text-foreground md:text-6xl">
                  Secure Dashboard Login
                </h1>
                <p className="mt-4 font-sans text-muted-foreground md:text-lg">
                  Sign in to manage inquiries and keep the experience premium
                  and private.
                </p>

                <div className="mt-8 grid gap-4">
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-sm">
                    <ShieldCheck className="mt-0.5 h-5 w-5 text-gold" />
                    <div>
                      <p className="font-serif font-semibold text-foreground">
                        Protected Access
                      </p>
                      <p className="font-sans text-sm text-muted-foreground">
                        Only approved accounts can access the dashboard.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-sm">
                    <Lock className="mt-0.5 h-5 w-5 text-gold" />
                    <div>
                      <p className="font-serif font-semibold text-foreground">
                        Encrypted Session
                      </p>
                      <p className="font-sans text-sm text-muted-foreground">
                        Login creates a server-set, HTTP-only session cookie.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10"
                variants={fadeInUp}
              >
                <form onSubmit={handleSubmit} className="grid gap-6">
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

                  <div>
                    <label className="text-sm font-medium font-sans text-foreground">
                      Password
                    </label>
                    <input
                      name="password"
                      type="password"
                      required
                      minLength={8}
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                      placeholder="••••••••"
                    />
                  </div>

                  <div className="grid gap-3">
                    <Button
                      className="h-12 rounded-xl bg-primary text-primary-foreground shadow-lg transition-all hover:bg-primary/90"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? "Signing in..." : "Sign In"}
                    </Button>

                    {status === "error" ? (
                      <p className="text-center text-sm font-sans text-destructive">
                        {errorMessage ?? "Login failed."}
                      </p>
                    ) : null}

                    <p className="text-center text-sm font-sans text-muted-foreground">
                      Return to{" "}
                      <Link href="/" className="text-gold hover:underline">
                        Home
                      </Link>
                    </p>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

