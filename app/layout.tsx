import type React from "react"
import type { Metadata } from "next"
import { Roboto, Roboto_Slab } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
})

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto-slab",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Gazella Vision - Fullstack en 8 semanas: React + Supabase + Next.js",
  description:
    "Publica tu primer MVP SaaS en producción y compártelo en entrevistas o lánzalo como negocio. Clases limitadas a 15 alumnos.",
  generator: "v0.app",
  icons: {
    icon: "/favicon-gazella-vision.svg",
    shortcut: "/favicon-gazella-vision.svg",
    apple: "/favicon-gazella-vision.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${roboto.variable} ${robotoSlab.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
