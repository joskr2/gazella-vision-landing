"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code } from "lucide-react"
import { RoadmapWeekCard } from "@/components/molecules/RoadmapWeekCard"
import { roadmapWeeks } from "@/data"

interface ProgramSectionProps {
  onReservar: () => void
  onDownloadTemario: () => void
}

export function ProgramSection({ onReservar, onDownloadTemario }: ProgramSectionProps) {
  return (
    <section id="programa" className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-black dark:to-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-4 py-2">
            <Code className="w-4 h-4 mr-2" />
            Programa Intensivo
          </Badge>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            8 Semanas • 10 Tecnologías • 1 MVP Real
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            De fundamentos a producción. Cada semana dominas nuevas tecnologías y construyes proyectos reales.
          </p>
        </motion.div>

        {/* Roadmap Cards Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">
          {roadmapWeeks.map((week, index) => (
            <RoadmapWeekCard key={index} week={week} index={index} />
          ))}
        </div>

        {/* Final CTA for Program Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="font-heading text-xl lg:text-2xl font-bold mb-4">
              ¿Listo para construir tu MVP en 8 semanas?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Únete a desarrolladores que ya están trabajando con estas tecnologías en empresas reales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gv-blue-primary hover:bg-gv-blue-dark text-white px-8 py-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={onReservar}
              >
                Reservar mi cupo
              </Button>
              <Button
                variant="outline"
                className="border-gv-blue-primary text-gv-blue-primary hover:bg-gv-blue-primary hover:text-white px-8 py-3 transition-all duration-300"
                onClick={onDownloadTemario}
              >
                Ver temario completo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}