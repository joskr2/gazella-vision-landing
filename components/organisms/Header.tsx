"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { NavigationMenu } from "@/components/molecules/NavigationMenu"
import Image from "next/image"
import { useWhatsAppContext } from "@/components/providers/WhatsAppProvider"

export function Header() {
  const { openWhatsApp } = useWhatsAppContext()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-black/20 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/20 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Image
              src="/gazella-vision-svg-logo.svg"
              alt="Gazella Vision Logo"
              width={64}
              height={64}
              className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto drop-shadow-lg"
              priority
            />
          </motion.div>

          <NavigationMenu
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            onPostular={() => openWhatsApp("postular")}
          />
        </div>
      </div>
    </motion.header>
  )
}
