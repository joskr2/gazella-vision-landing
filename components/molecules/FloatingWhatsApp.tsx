'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useWhatsAppContext } from '@/components/providers/WhatsAppProvider'

export function FloatingWhatsApp() {
  const { openWhatsApp } = useWhatsAppContext()
  return (
    <motion.div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <button
        onClick={() => openWhatsApp("consultar")}
        className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group min-h-[56px] min-w-[56px] sm:min-h-[64px] sm:min-w-[64px] flex items-center justify-center"
      >
        <Image
          src="/whatsapp-icon-seeklogo.svg"
          alt="WhatsApp"
          width={24}
          height={24}
          className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300"
        />

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            ¡Chatea con nosotros!
          </div>
        </div>
      </button>
    </motion.div>
  )
}
