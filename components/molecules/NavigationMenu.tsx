"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { navigationItems } from "@/data"

interface NavigationMenuProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  onPostular: () => void
}

export function NavigationMenu({ mobileMenuOpen, setMobileMenuOpen, onPostular }: NavigationMenuProps) {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        {navigationItems.map((item, index) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase().replace("í", "i")}`}
            className="text-muted-foreground hover:text-foreground transition-colors relative"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            {item}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </nav>

      {/* Right side controls */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <ModeToggle />

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg bg-white/20 dark:bg-gray-800/40 backdrop-blur-sm min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
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
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Content */}
      <motion.div
        className={`lg:hidden fixed inset-x-0 top-16 sm:top-20 bg-white dark:bg-gray-900 backdrop-blur-xl border-t border-gray-200 dark:border-gray-700 shadow-2xl z-50 ${mobileMenuOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-6 space-y-6">
          {navigationItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace("í", "i")}`}
              className="block text-gray-900 dark:text-white hover:text-gv-blue-primary transition-colors py-3 text-lg font-medium border-b border-gray-200 dark:border-gray-700 last:border-b-0 min-h-[48px] flex items-center"
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
          <div className="pt-4">
            <Button
              className="btn-primary w-full text-lg py-4 min-h-[48px]"
              onClick={() => {
                onPostular()
                setMobileMenuOpen(false)
              }}
            >
              Postula ahora
            </Button>
          </div>
        </div>
      </motion.div>
    </>
  )
}
