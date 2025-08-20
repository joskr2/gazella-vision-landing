"use client"

import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationMenuProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  onPostular: () => void
}

export function NavigationMenu({ mobileMenuOpen, setMobileMenuOpen, onPostular }: NavigationMenuProps) {
  const menuItems = ["Programa", "Características", "Testimonios", "Precios", "Contacto"]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        {menuItems.map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase().replace("í", "i")}`}
            className="text-foreground/80 hover:text-foreground transition-colors py-2 relative group"
            whileHover={{ y: -2 }}
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gv-blue-primary transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 rounded-lg bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm text-foreground"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Desktop CTA */}
      <motion.div
        className="hidden lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Button
          className="btn-primary hover:scale-105 transition-transform"
          onClick={onPostular}
        >
          Postula ahora
        </Button>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        className={`lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/20 ${mobileMenuOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-6 space-y-4">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace("í", "i")}`}
              className="block text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          <Button
            className="btn-primary w-full mt-4"
            onClick={onPostular}
          >
            Postula ahora
          </Button>
        </div>
      </motion.div>
    </>
  )
}
