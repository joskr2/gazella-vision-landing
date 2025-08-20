"use client"

import { motion } from "framer-motion"

interface FloatingWhatsAppProps {
  onClick: () => void
}

export function FloatingWhatsApp({ onClick }: FloatingWhatsAppProps) {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <button
        onClick={onClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <img
          src="/whatsapp-icon-seeklogo.svg"
          alt="WhatsApp"
          className="w-7 h-7 group-hover:scale-110 transition-transform duration-300"
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
