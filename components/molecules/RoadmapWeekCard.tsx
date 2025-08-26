"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target } from "lucide-react"
import Image from "next/image"

interface RoadmapWeekCardProps {
  week: {
    weeks: string
    title: string
    subtitle: string
    description: string
    technologies: Array<{ name: string; logo: string }>
    project: string
  }
  index: number
}

export function RoadmapWeekCard({ week, index }: RoadmapWeekCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="relative border-2 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 bg-gradient-to-br backdrop-blur-sm overflow-hidden h-full">
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl" />

        <CardHeader className="relative z-10 pb-4 min-h-40 md:min-h-80 flex flex-col justify-between">
          {/* Week Badge */}
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline" className="font-mono text-xs bg-white/80 dark:bg-gray-700/80 dark:text-gray-200">
              {week.weeks}
            </Badge>
          </div>

          {/* Technology Logos - Prominent Display */}
          <div className="flex items-center justify-center gap-4 mb-6 p-4 bg-white/50 dark:bg-gray-700/50 rounded-xl border border-white/20 dark:border-gray-600/30">
            {week.technologies.map((tech, techIndex) => (
              <motion.div
                key={techIndex}
                className="group/tech"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative">
                  <Image
                    src={tech.logo}
                    width={64}
                    height={64}
                    alt={tech.name}
                    className="w-12 h-12 lg:w-16 lg:h-16 object-contain group-hover/tech:drop-shadow-lg transition-all duration-300"
                  />
                  {/* Tech name tooltip */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/tech:opacity-100 transition-opacity">
                    <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      {tech.name}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <CardTitle className="font-heading text-xl lg:text-2xl mb-2 group-hover:text-primary transition-colors">
            {week.title}
          </CardTitle>
          <CardDescription className="text-primary font-semibold text-base mb-3">
            {week.subtitle}
          </CardDescription>
        </CardHeader>

        <CardContent className="relative z-10 space-y-4 max-h-60 overflow-y-auto">
          <div className="min-h-[120px] flex flex-col justify-between">
            <p className="text-muted-foreground leading-relaxed">
              {week.description}
            </p>
          </div>
        </CardContent>

        <CardFooter className="relative z-10 pt-4 bottom-0">
          <div className="w-full p-3 bg-accent/10 rounded-lg border border-accent/20">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-accent flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Proyecto Final:</p>
                <p className="text-sm font-semibold text-foreground">{week.project}</p>
              </div>
            </div>
          </div>
        </CardFooter>

        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
        </div>
      </Card>
    </motion.div>
  )
}