'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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
      <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg group-hover:shadow-xl group-hover:border-gv-blue-primary/30 transition-all duration-300 min-h-[56px] min-w-[56px] sm:min-h-[64px] sm:min-w-[64px]">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={28}
          height={28}
          className="w-7 h-7 sm:w-8 sm:h-8 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <p className="text-xs font-small text-muted-foreground mt-2 sm:mt-2 group-hover:text-gv-blue-primary transition-colors duration-300 text-center px-1 whitespace-nowrap">
        {name}
      </p>
    </motion.div>
  )
}
