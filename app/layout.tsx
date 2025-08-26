import type React from "react"
import type { Metadata } from "next"
import { Roboto, Roboto_Slab } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/organisms/Header"
import { Footer } from "@/components/organisms/Footer"
import { FloatingWhatsApp } from "@/components/molecules/FloatingWhatsApp"
import { WhatsAppProvider } from "@/components/providers/WhatsAppProvider"
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
    "Publica tu primer MVP  en producción y compártelo en entrevistas o lánzalo como negocio. Clases limitadas de pocos alumnos.",
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
    <html lang="es" className={`${roboto.variable} ${robotoSlab.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <WhatsAppProvider>
            {/* Floating WhatsApp Button */}
            <FloatingWhatsApp />

            {/* Header */}
            <Header />

            {/* Main Content */}
            <main>
              {children}
            </main>

            {/* Footer */}
            <Footer />
          </WhatsAppProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
