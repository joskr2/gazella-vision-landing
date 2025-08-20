"use client"

import { motion } from "framer-motion"

interface TechIconProps {
  name: string
  logo: string
  index?: number
}

export function TechIcon({ name, logo, index = 0 }: TechIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 1.4 + index * 0.1,
        type: "spring",
        stiffness: 200
      }}
      whileHover={{ scale: 1.1 }}
      className="group"
    >
      <div className="w-16 h-16 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg group-hover:shadow-xl group-hover:border-gv-blue-primary/30 transition-all duration-300">
        <img
          src={logo}
          alt={`${name} logo`}
          className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <p className="text-xs font-medium text-muted-foreground mt-2 group-hover:text-gv-blue-primary transition-colors duration-300">
        {name}
      </p>
    </motion.div>
  )
}
