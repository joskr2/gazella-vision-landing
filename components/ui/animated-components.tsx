"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxElementProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxElement({ children, speed = 0.5, className = "" }: ParallaxElementProps) {
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y: `calc(${speed} * 100vh)`
      }}
    >
      {children}
    </motion.div>
  )
}

export function GlassCard({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      className={`glass-strong rounded-2xl p-6 ${className}`}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}
