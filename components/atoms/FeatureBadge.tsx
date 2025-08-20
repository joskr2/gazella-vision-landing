"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface FeatureBadgeProps {
  icon: LucideIcon
  text: string
  index?: number
}

export function FeatureBadge({ icon: Icon, text, index = 0 }: FeatureBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: 1.8 + index * 0.1,
        type: "spring",
        stiffness: 200
      }}
      whileHover={{ scale: 1.05 }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gv-blue-primary/10 dark:border-gv-blue-light/20 rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4 text-gv-blue-primary" />
        <span className="text-sm font-medium text-foreground">{text}</span>
      </div>
    </motion.div>
  )
}
