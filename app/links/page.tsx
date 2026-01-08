import { Metadata } from "next"
import { LinksList } from "@/components/links/LinksList"

export const metadata: Metadata = {
  title: "Liens | FZ Concept",
  description: "Connectez-vous avec FZ Concept : Téléphone, WhatsApp, Instagram, Email et Site Web.",
}

export default function LinksPage() {
  return (
    <main className="min-h-screen w-full bg-background">
      <LinksList />
    </main>
  )
}
