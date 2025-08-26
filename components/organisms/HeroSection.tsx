"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { DashboardImage } from "@/components/molecules/DashboardImage"
import { TechIcon } from "@/components/atoms/TechIcon"
import { FeatureBadge } from "@/components/atoms/FeatureBadge"
import TypingAnimation from "@/components/molecules/typing-animation"
import { heroTechStack, heroFeatures, siteConfig } from "@/data"

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
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/80 to-gv-blue-primary/10 dark:from-black dark:via-gray-900/80 dark:to-gv-blue-primary/20" />
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
              {siteConfig.title}
              <span className="bg-gradient-to-r from-gv-blue-primary to-gv-blue-dark bg-clip-text text-transparent"> 8 semanas</span>
            </h1>
            <p className="text-md sm:text-lg lg:text-xl text-gv-blue-dark max-w-4xl mx-auto">
              {siteConfig.subtitle}
            </p>
          </motion.div>

          {/* Description */}
          <TypingAnimation />

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
              {heroTechStack.map((tech, index) => (
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
            {heroFeatures.map((feature, index) => (
              <FeatureBadge key={feature.text} {...feature} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
