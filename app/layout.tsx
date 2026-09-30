import type { Metadata } from "next"
import "@fontsource/fraunces/600.css"
import "@fontsource/fraunces/700.css"
import "@fontsource/merriweather-sans/400.css"
import "@fontsource/merriweather-sans/500.css"
import "@fontsource/merriweather-sans/600.css"
import "@fontsource/merriweather-sans/700.css"
import "./globals.css"

import { Footer } from "@/components/common/Footer"
import { I18nProvider } from "@/components/common/I18nProvider"
import { getRequestLocale } from "@/lib/locale.server"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale()
  return locale === "fr"
    ? {
        title: "FZ Concept — Design d’intérieur au Maroc",
        description:
          "FZ Concept est un studio marocain de design d’intérieur et redesign haut de gamme.",
      }
    : {
        title: "FZ Concept — Interior Design in Morocco",
        description:
          "FZ Concept is a Moroccan interior design and redesign studio for premium spaces.",
      }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getRequestLocale()
  return (
    <html lang={locale}>
      <body className="antialiased">
        <I18nProvider initialLocale={locale}>
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  )
}
