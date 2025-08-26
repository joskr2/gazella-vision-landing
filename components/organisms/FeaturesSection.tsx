"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mainFeatures } from "@/data"

export function FeaturesSection() {
  return (
    <section id="caracteristicas" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
            ¿Por qué Gazella Vision?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Un enfoque práctico que te lleva de cero a MVP en producción
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className={`relative border-2 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 h-full overflow-hidden bg-gradient-to-br ${feature.gradient} backdrop-blur-sm`}>
                {/* Glassmorphism background */}
                <div className="absolute inset-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl" />

                {/* Animated background element */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                <CardHeader className="text-center relative z-10 pb-4">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`w-16 h-16 ${feature.bgIcon} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300`}>
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </div>

                    {/* Floating particles effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-primary/40 rounded-full"
                          initial={{ scale: 0, x: 0, y: 0 }}
                          animate={{
                            scale: [0, 1, 0],
                            x: [0, Math.random() * 40 - 20],
                            y: [0, Math.random() * 40 - 20],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                          style={{
                            left: "50%",
                            top: "50%",
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>

                  <CardTitle className="font-heading text-lg lg:text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 text-center">
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    {feature.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
                  </div>
                </CardContent>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}