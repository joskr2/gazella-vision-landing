"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import { PricingCard } from "@/components/molecules/PricingCard"
import { pricingPlans, faqData, siteConfig } from "@/data"

interface PricingSectionProps {
  onAction: (action: string) => void
}

export function PricingSection({ onAction }: PricingSectionProps) {
  return (
    <section id="precios" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
            Planes de estudio
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            ¿Bootcamps de 3–6 meses a precios elevados? Olvídalo. Con Gazella Vision, en 8 semanas construyes y publicas tu MVP SaaS.
          </p>

          {/* Banner de fecha destacado */}
          <motion.div
            className="bg-gradient-to-r from-gv-blue-primary to-gv-blue-dark text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto mb-6 sm:mb-8 shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Próximo Grupo</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Inicia el {siteConfig.nextGroupDate}</h3>
              <p className="text-gv-blue-light text-xs sm:text-sm">
                ¡Solo quedan pocos cupos disponibles!
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4 sm:px-0">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              index={index}
              onAction={onAction}
            />
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-12 sm:mt-16 text-center space-y-4 sm:space-y-6 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="font-heading font-semibold text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">Preguntas frecuentes</h3>
            <div className="space-y-3 sm:space-y-4 text-left">
              {faqData.map((faq, index) => (
                <motion.details
                  key={index}
                  className="bg-white dark:bg-gray-800 p-3 sm:p-4 lg:p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
                  whileHover={{ scale: 1.01 }}
                >
                  <summary className="font-medium cursor-pointer text-sm sm:text-base leading-relaxed py-1">{faq.question}</summary>
                  <p className="mt-2 text-muted-foreground text-xs sm:text-sm leading-relaxed">{faq.answer}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}