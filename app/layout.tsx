import type { Metadata } from "next"
import { Fraunces, Merriweather_Sans } from "next/font/google"
import "./globals.css"

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["600", "700"], // semibold and bold
})

const merriweatherSans = Merriweather_Sans({
  variable: "--font-merriweather-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // regular, medium, semibold, and bold
})

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
      <body
        className={`${fraunces.variable} ${merriweatherSans.variable} antialiased`}
      >
        <I18nProvider initialLocale={locale}>
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  )
}
