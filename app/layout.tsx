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

export const metadata: Metadata = {
  title: "FZConcept Agency",
  description: "FZConcept Agency",
}

import { Footer } from "@/components/common/Footer"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${merriweatherSans.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}
