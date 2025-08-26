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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Planes de estudio
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            ¿Bootcamps de 3–6 meses a precios elevados? Olvídalo. Con Gazella Vision, en 8 semanas construyes y publicas tu MVP SaaS.
          </p>

          {/* Banner de fecha destacado */}
          <motion.div
            className="bg-gradient-to-r from-gv-blue-primary to-gv-blue-dark text-white rounded-2xl p-6 max-w-2xl mx-auto mb-8 shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Calendar className="w-6 h-6" />
                <span className="text-sm font-semibold uppercase tracking-wider">Próximo Grupo</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Inicia el {siteConfig.nextGroupDate}</h3>
              <p className="text-gv-blue-light text-sm">
                ¡Solo quedan pocos cupos disponibles!
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
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
          className="mt-16 text-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="font-heading font-semibold text-lg lg:text-xl mb-6">Preguntas frecuentes</h3>
            <div className="space-y-4 text-left">
              {faqData.map((faq, index) => (
                <motion.details
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
                  whileHover={{ scale: 1.01 }}
                >
                  <summary className="font-medium cursor-pointer text-sm lg:text-base">{faq.question}</summary>
                  <p className="mt-2 text-muted-foreground text-sm lg:text-base">{faq.answer}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}