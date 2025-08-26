"use client"

import { Header } from "@/components/organisms/Header"
import { HeroSection } from "@/components/organisms/HeroSection"
import { FeaturesSection } from "@/components/organisms/FeaturesSection"
import { TechnologySection } from "@/components/organisms/TechnologySection"
import { ProgramSection } from "@/components/organisms/ProgramSection"
import { TestimonialsSection } from "@/components/organisms/TestimonialsSection"
import { PricingSection } from "@/components/organisms/PricingSection"
import { CTASection } from "@/components/organisms/CTASection"
import { Footer } from "@/components/organisms/Footer"
import { FloatingWhatsApp } from "@/components/molecules/FloatingWhatsApp"
import { useWhatsApp, useDownload } from "@/hooks/business/useActions"

export function
  LandingPageTemplate() {
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

      {/* Features Section */}
      <FeaturesSection />

      {/* Technology Section */}
      <TechnologySection />

      {/* Program Section */}
      <ProgramSection
        onReservar={() => openWhatsApp("reservar")}
        onDownloadTemario={downloadTemario}
      />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <PricingSection onAction={openWhatsApp} />

      {/* CTA Section */}
      <CTASection
        onPostular={() => openWhatsApp("postular")}
        onConsultar={() => openWhatsApp("consultar")}
      />

      {/* Footer */}
      <Footer />
    </div>
  )
}
