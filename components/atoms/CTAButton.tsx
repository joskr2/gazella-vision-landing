"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface CTAButtonProps {
  children: React.ReactNode
  onClick: () => void
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  icon?: LucideIcon
  className?: string
  disabled?: boolean
}

export function CTAButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  icon: Icon,
  className = "",
  disabled = false
}: CTAButtonProps) {
  const baseClasses = "font-semibold transition-all duration-300 backdrop-blur-sm shadow-xl"

  const variantClasses = {
    primary: "bg-gv-blue-primary hover:bg-gv-blue-dark text-white border-2 border-white/30 hover:shadow-gv-blue-primary/50",
    secondary: "bg-green-600 hover:bg-green-700 text-white border-2 border-green-500/30",
    outline: "bg-white/90 border-2 border-gv-blue-primary text-gv-blue-primary hover:bg-gv-blue-primary hover:text-white"
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-5 text-lg rounded-xl"
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full"
    >
      <Button
        size="lg"
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} w-full`}
        onClick={onClick}
        disabled={disabled}
      >
        {Icon && <Icon className="w-5 h-5 mr-2" />}
        {children}
      </Button>
    </motion.div>
  )
}
