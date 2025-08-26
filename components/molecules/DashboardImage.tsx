"use client"

import { motion } from "framer-motion"
import { Calendar, Users, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { siteConfig } from "@/data"

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
      className="relative max-w-4xl mx-auto space-y-4"
    >
      {/* Date Banner - Above image on mobile, overlay on desktop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="block sm:absolute sm:top-4 sm:right-4 sm:z-10"
      >
        <div className="bg-gradient-to-r from-gv-blue-primary to-gv-blue-dark backdrop-blur-sm text-white rounded-lg sm:rounded-xl px-4 py-3 sm:px-6 sm:py-3 shadow-xl border border-gv-blue-primary/30 w-full sm:w-auto">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <Calendar className="w-5 h-5 text-white flex-shrink-0" />
            <div className="text-center sm:text-left">
              <span className="font-medium opacity-90 text-sm mr-4">Próximo Grupo</span>
              <span className="font-bold text-white text-base">{siteConfig.nextGroupDate}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Dashboard Image */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative"
      >
        <div className="w-full aspect-[16/9] relative">
          <Image
            src="/modern-dashboard-mockup.png"
            alt="Dashboard MVP mockup showing a modern SaaS application interface"
            fill
            className="object-cover rounded-2xl shadow-2xl border border-white/20"
            sizes="(min-width: 1024px) 1200px, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl" />
          {/* CTA Buttons - Only overlay on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="hidden sm:flex absolute bottom-4 right-4 flex-row gap-3 p-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="sm"
                className="bg-gv-blue-primary hover:bg-gv-blue-dark text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={onReservar}
              >
                <Users className="w-4 h-4 mr-2" />
                Reserva
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="sm"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gv-blue-primary text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-300 bg-transparent backdrop-blur-sm"
                onClick={onDownloadTemario}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Ver temario
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Buttons - Below image on mobile only */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex sm:hidden flex-col gap-3 w-full"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            size="lg"
            className="bg-gv-blue-primary hover:bg-gv-blue-dark text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full"
            onClick={onReservar}
          >
            <Users className="w-5 h-5 mr-3" />
            Reserva tu cupo
          </Button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-gv-blue-primary text-gv-blue-primary hover:bg-gv-blue-primary hover:text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all duration-300 w-full"
            onClick={onDownloadTemario}
          >
            <BookOpen className="w-5 h-5 mr-3" />
            Ver temario completo
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
