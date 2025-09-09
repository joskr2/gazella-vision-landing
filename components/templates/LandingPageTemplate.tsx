"use client"

import { HeroSection } from "@/components/organisms/HeroSection"
import { FeaturesSection } from "@/components/organisms/FeaturesSection"
import { TechnologySection } from "@/components/organisms/TechnologySection"
import { ProgramSection } from "@/components/organisms/ProgramSection"
import { TestimonialsSection } from "@/components/organisms/TestimonialsSection"
import { PricingSection } from "@/components/organisms/PricingSection"
import { ContactSection } from "@/components/organisms/ContactSection"
import { CTASection } from "@/components/organisms/CTASection"
import { useWhatsApp, useDownload } from "@/hooks/business/useActions"

export function
  LandingPageTemplate() {
  const { openWhatsApp } = useWhatsApp()
  const { downloadTemario } = useDownload()

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">
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

      {/* Contact Section */}
      <ContactSection formspreeEndpoint={process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT} />

      {/* CTA Section */}
      <CTASection
        onPostular={() => openWhatsApp("postular")}
        onConsultar={() => openWhatsApp("consultar")}
      />
    </div>
  )
}
