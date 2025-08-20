"use client"

import { Header } from "@/components/organisms/Header"
import { HeroSection } from "@/components/organisms/HeroSection"
import { FloatingWhatsApp } from "@/components/molecules/FloatingWhatsApp"
import { useWhatsApp, useDownload } from "@/hooks/business/useActions"

export function LandingPageTemplate() {
  const { openWhatsApp } = useWhatsApp()
  const { downloadTemario } = useDownload()

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp onClick={() => openWhatsApp("consultar")} />

      {/* Header */}
      <Header onPostular={() => openWhatsApp("postular")} />

      {/* Hero Section */}
      <HeroSection
        onReservar={() => openWhatsApp("reservar")}
        onDownloadTemario={downloadTemario}
      />

      {/* TODO: Agregar las demás secciones aquí */}
      {/* <FeaturesSection />
      <TechnologySection />
      <ProgramSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer /> */}
    </div>
  )
}
