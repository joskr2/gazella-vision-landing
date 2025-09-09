"use client"

import { motion } from "framer-motion"
import { ContactForm } from "./ContactForm"
import { MessageCircle, Clock, CheckCircle } from "lucide-react"

interface ContactSectionProps {
  formspreeEndpoint?: string
}

export function ContactSection({ formspreeEndpoint }: ContactSectionProps) {
  const features = [
    {
      icon: MessageCircle,
      title: "Respuesta Rápida",
      description: "Te respondemos en menos de 24 horas"
    },
    {
      icon: Clock,
      title: "Consulta Gratuita",
      description: "Primera consulta completamente sin costo"
    },
    {
      icon: CheckCircle,
      title: "Asesoría Personalizada",
      description: "Orientación adaptada a tu perfil y objetivos"
    }
  ]

  return (
    <section 
      id="contacto" 
      className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            ¿Listo para empezar o tienes dudas?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte a dar el siguiente paso en tu carrera. 
            Resuelve tus dudas y descubre cómo nuestro bootcamp puede transformar tu futuro profesional.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ContactForm formspreeEndpoint={formspreeEndpoint} />
        </motion.div>

        {/* FAQ or Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto p-8 rounded-lg bg-gradient-to-r from-primary/5 to-purple-500/5 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Preguntas frecuentes?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  ¿Necesito experiencia previa?
                </h4>
                <p className="text-muted-foreground text-sm">
                  No es necesario. Nuestro programa está diseñado para llevarte desde cero hasta un nivel profesional.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  ¿Qué incluye el programa?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Clases en vivo, proyectos reales, mentorías 1:1, y soporte para encontrar empleo.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  ¿Hay opciones de financiamiento?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Sí, ofrecemos planes de pago flexibles y opciones de financiamiento adaptadas a tu situación.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  ¿Cuándo empieza el próximo grupo?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Tenemos grupos iniciando cada mes. Contacta para conocer las fechas disponibles.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
