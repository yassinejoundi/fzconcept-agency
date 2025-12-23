import Link from "next/link"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { LayoutDashboard, Mail, LogOut } from "lucide-react"

import { NavbarSection } from "@/components/common/NavbarSection"
import { MessagesSection } from "@/components/admin/MessagesSection"
import { Button } from "@/components/ui/button"
import {
  getAdminCookieName,
  verifyAdminSessionCookieValue,
} from "@/lib/adminSession"

export default async function AdminDashboardPage() {
  const secret = process.env.ADMIN_SESSION_SECRET ?? ""
  const sessionCookie = (await cookies()).get(getAdminCookieName())?.value ?? ""
  const session =
    secret && sessionCookie
      ? verifyAdminSessionCookieValue(sessionCookie, secret)
      : null

  if (!session) redirect("/admin")

  return (
    <div>
      <NavbarSection />
      <main>
        <section className="bg-secondary/20">
          <div className="mx-auto w-full max-w-7xl px-6 pb-12 pt-28 md:px-10 md:pb-16 md:pt-32">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase text-gold tracking-widest">
                  Dashboard
                </p>
                <h1 className="mt-2 font-serif text-4xl font-bold text-primary md:text-6xl">
                  Admin Overview
                </h1>
                <p className="mt-4 font-sans text-muted-foreground">
                  Signed in as{" "}
                  <span className="text-foreground">{session.email}</span>
                </p>
              </div>

              <form action="/api/admin/logout" method="post">
                <Button
                  type="submit"
                  variant="outline"
                  className="rounded-xl border-2 border-primary/20 bg-white/80 text-primary shadow-lg transition-all duration-300 hover:border-gold hover:bg-white hover:text-gold"
                >
                  <LogOut className="mr-2 h-5 w-5" />
                  Sign Out
                </Button>
              </form>
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-serif text-2xl font-bold text-foreground">
                      Inquiries
                    </p>
                    <p className="mt-2 font-sans text-sm text-muted-foreground">
                      Review and respond to contact messages.
                    </p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary ring-1 ring-gold/20">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="mt-6">
                  <Button
                    asChild
                    className="rounded-xl bg-primary text-primary-foreground shadow-lg transition-all hover:bg-primary/90"
                  >
                    <Link href="/contact">
                      <LayoutDashboard className="mr-2 h-5 w-5" />
                      Go to Contact Page
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <p className="font-serif text-2xl font-bold text-foreground">
                  Quick Links
                </p>
                <p className="mt-2 font-sans text-sm text-muted-foreground">
                  Jump to key pages.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-xl border-2 border-primary/20 bg-white/80 text-primary shadow-lg transition-all duration-300 hover:border-gold hover:bg-white hover:text-gold"
                  >
                    <Link href="/services">Services</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-xl border-2 border-primary/20 bg-white/80 text-primary shadow-lg transition-all duration-300 hover:border-gold hover:bg-white hover:text-gold"
                  >
                    <Link href="/portfolio">Portfolio</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-xl border-2 border-primary/20 bg-white/80 text-primary shadow-lg transition-all duration-300 hover:border-gold hover:bg-white hover:text-gold"
                  >
                    <Link href="/">Home</Link>
                  </Button>
                </div>
              </div>
            </div>

            <MessagesSection />
          </div>
        </section>
      </main>
    </div>
  )
}
