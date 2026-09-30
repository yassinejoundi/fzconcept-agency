import { redirect } from "next/navigation"
import { AdminHeader } from "@/components/admin/AdminHeader"
import { MessagesSection } from "@/components/admin/MessagesSection"
import { getAdminSession } from "@/lib/adminAuth"
import { getRequestLocale } from "@/lib/locale.server"

export const dynamic = "force-dynamic"

export default async function AdminDashboardPage() {
  const session = await getAdminSession()
  if (!session) redirect("/admin")

  const fr = (await getRequestLocale()) === "fr"
  const copy = fr ? {
    skip: "Aller aux demandes",
    eyebrow: "Espace studio · Marrakech",
    title: "Vos demandes, en un lieu.",
    intro: "Consultez les messages envoyés depuis le site et poursuivez chaque conversation directement.",
    signedIn: "Session ouverte avec",
    footer: "Espace privé du studio",
  } : {
    skip: "Skip to enquiries",
    eyebrow: "Studio workspace · Marrakech",
    title: "Your enquiries, in one place.",
    intro: "Review messages from the website and continue each conversation directly.",
    signedIn: "Signed in as",
    footer: "Private studio workspace",
  }

  return (
    <div className="fz-admin fz-admin-dashboard">
      <a className="fz-admin-skip" href="#admin-main">{copy.skip}</a>
      <AdminHeader signedIn />
      <main id="admin-main">
        <section className="fz-admin-dashboard-hero">
          <div className="fz-admin-shell fz-admin-dashboard-hero-grid">
            <div>
              <p className="fz-admin-kicker">{copy.eyebrow}</p>
              <h1>{copy.title}</h1>
              <p className="fz-admin-dashboard-intro">{copy.intro}</p>
            </div>
            <div className="fz-admin-account">
              <span>{copy.signedIn}</span>
              <strong>{session.email}</strong>
            </div>
          </div>
        </section>
        <MessagesSection />
      </main>
      <footer className="fz-admin-dashboard-footer">
        <div className="fz-admin-shell"><span>© {new Date().getFullYear()} FZ Concept</span><span>{copy.footer}</span></div>
      </footer>
    </div>
  )
}
