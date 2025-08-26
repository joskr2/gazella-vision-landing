"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface CTASectionProps {
  onPostular: () => void
  onConsultar: () => void
}

export function CTASection({ onPostular, onConsultar }: CTASectionProps) {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"])

  return (
    <section 
      ref={targetRef}
      className="section-padding bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden"
    >
      {/* Overlay oscuro solo en modo dark */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block" style={{ background: 'rgba(0,0,0,0.60)' }} />
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y: parallaxY }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 dark:from-gray-200/5 to-transparent" />
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Tu app en producción en 8 semanas. ¿Listo/a?
        </h2>
        <p className="text-lg sm:text-xl mb-8 opacity-90">
          Únete a la próxima clase y construye el MVP que cambiará tu carrera
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-white dark:bg-gray-800 text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-8 py-4 text-lg w-full sm:w-auto"
              onClick={onPostular}
            >
              Postula ahora
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-white dark:border-gray-300 text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:text-primary dark:hover:text-white px-8 py-4 text-lg bg-transparent w-full sm:w-auto"
              onClick={onConsultar}
            >
              <Image src="/whatsapp-icon-seeklogo.svg" alt="WhatsApp" width={20} height={20} className="w-5 h-5 mr-2" />
              Hablar por WhatsApp
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}