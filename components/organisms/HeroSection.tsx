"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Users, Zap, Target, Award, DiamondPlus } from "lucide-react"
import { DashboardImage } from "@/components/molecules/DashboardImage"
import { TechIcon } from "@/components/atoms/TechIcon"
import { FeatureBadge } from "@/components/atoms/FeatureBadge"

interface HeroSectionProps {
  onReservar: () => void
  onDownloadTemario: () => void
}

export function HeroSection({ onReservar, onDownloadTemario }: HeroSectionProps) {
  const [isMounted, setIsMounted] = useState(false)
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: isMounted ? targetRef : undefined,
    offset: ["start end", "end start"]
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const technologies = [
    { name: "React", logo: "/react-svg-logo.svg" },
    { name: "Next.js", logo: "/nextjs-icon-svgrepo-com.svg" },
    { name: "Supabase", logo: "/supabase-logo-icon.svg" },
    { name: "Tailwind", logo: "/tailwindcss-logo.svg" },
    { name: "Java", logo: "/java-svg.svg" },
    { name: "Spring Boot", logo: "/spring-boot-svg.svg" },
    { name: "AWS", logo: "/aws-logo-svg.svg" }
  ]

  const features = [
    { icon: Users, text: "Máximo 15 alumnos" },
    { icon: Zap, text: "Clases en vivo" },
    { icon: Target, text: "Proyecto real" },
    { icon: Award, text: "MVP en producción" },
    { icon: DiamondPlus, text: "Docentes con basta experiencia" }
  ]

  return (
    <motion.section
      ref={targetRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/80 to-gv-blue-primary/10 dark:from-gray-900 dark:via-gray-800/80 dark:to-gv-blue-primary/20" />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{ y: parallaxY }}
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-gv-blue-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gv-blue-light/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gv-blue-primary/5 to-transparent rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <div className="text-center space-y-8">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight max-w-5xl mx-auto">
              Desarrollador Web Completo en
              <span className="block bg-gradient-to-r from-gv-blue-primary to-gv-blue-dark bg-clip-text text-transparent">
                8 semanas
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-gv-blue-dark max-w-4xl mx-auto">
              Frontend + Backend + Base de Datos
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            Lanza tu primera aplicación web profesional y úsala para conseguir trabajo o crear tu propio negocio.
          </motion.p>

          {/* Dashboard Image with CTAs */}
          <DashboardImage onReservar={onReservar} onDownloadTemario={onDownloadTemario} />

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="pt-8"
          >
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">
              Stack tecnológico que dominarás
            </p>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {technologies.map((tech, index) => (
                <TechIcon key={tech.name} {...tech} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Features Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-wrap gap-4 justify-center pt-4"
          >
            {features.map((feature, index) => (
              <FeatureBadge key={feature.text} {...feature} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
