import type { Metadata } from "next"
import { NavbarSection } from "@/components/common/NavbarSection"
import { LinksList } from "@/components/links/LinksList"
import { getRequestLocale } from "@/lib/locale.server"

export async function generateMetadata(): Promise<Metadata> {
  const fr = (await getRequestLocale()) === "fr"
  return {
    title: fr ? "Liens | FZ Concept" : "Links | FZ Concept",
    description: fr ? "Retrouvez FZ Concept à Marrakech et contactez le studio." : "Find FZ Concept in Marrakech and contact the studio.",
  }
}

export default function LinksPage() {
  return <div className="fz-site fz-inner-page"><NavbarSection /><main id="main-content"><LinksList /></main></div>
}
