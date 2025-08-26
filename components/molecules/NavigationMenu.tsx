"use client"

import { motion } from "framer-motion"
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

      {/* Mobile Menu */}
      <motion.div
        className={`lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm ${mobileMenuOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        onClick={() => setMobileMenuOpen(false)}
      >
        <motion.div
          className="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-white dark:bg-gray-900 shadow-2xl border-l border-gray-200 dark:border-gray-700 overflow-y-auto"
          initial={{ x: "100%" }}
          animate={{ x: mobileMenuOpen ? 0 : "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 space-y-4">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Menu items with icons */}
            <div className="space-y-2 pt-12">
              {navigationItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace("í", "i")}`}
                  className="flex items-center gap-3 text-foreground hover:text-gv-blue-primary hover:bg-gray-50 dark:hover:bg-gray-800 transition-all rounded-lg px-4 py-3 text-base font-medium min-h-[48px]"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-5 h-5 bg-gv-blue-primary/20 rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-gv-blue-primary rounded-full" />
                  </div>
                  {item}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="pt-6 border-t border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                className="btn-primary w-full text-base py-4 min-h-[48px] font-semibold"
                onClick={() => {
                  onPostular()
                  setMobileMenuOpen(false)
                }}
              >
                🚀 Postula ahora
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
