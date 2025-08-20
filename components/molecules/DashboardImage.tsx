"use client"

import { motion } from "framer-motion"
import { Calendar, Users, FileText } from "lucide-react"
import { CTAButton } from "@/components/atoms/CTAButton"

interface DashboardImageProps {
  onReservar: () => void
  onDownloadTemario: () => void
}

export function DashboardImage({ onReservar, onDownloadTemario }: DashboardImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="relative max-w-6xl mx-auto"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative"
      >
        <img
          src="/modern-dashboard-mockup.png"
          alt="Dashboard MVP mockup showing a modern SaaS application interface"
          className="w-full h-auto min-h-[600px] object-cover rounded-2xl shadow-2xl border border-white/20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 rounded-2xl" />

        {/* Date Banner - En la esquina superior derecha */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0]
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.8 },
            scale: { duration: 0.6, delay: 0.8 },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -top-4 -right-4 z-10"
        >
          <div className="bg-gradient-to-r from-gv-blue-primary to-gv-blue-dark text-white rounded-2xl px-6 py-3 shadow-xl border border-white/20 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-wider opacity-90">Próximo Grupo</p>
                <p className="text-sm font-bold">1 Sept 2025</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons - Parte inferior, lado a lado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-row gap-4 z-10 px-4 w-full max-w-2xl"
        >
          <div className="flex-1">
            <CTAButton
              variant="primary"
              size="lg"
              icon={Users}
              onClick={onReservar}
            >
              Reserva tu cupo
            </CTAButton>
          </div>

          <div className="flex-1">
            <CTAButton
              variant="secondary"
              size="lg"
              icon={FileText}
              onClick={onDownloadTemario}
            >
              Ver temario (PDF)
            </CTAButton>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
