"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Code } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { technologies } from "@/data"

export function TechCarousel() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gv-blue-light/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-purple-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-4 py-2">
            <Code className="w-4 h-4 mr-2" />
            Stack Tecnológico
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary to-accent dark:from-gray-100 dark:via-primary dark:to-accent bg-clip-text text-transparent">
            Tecnologías que <span className="text-accent">buscan las empresas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Domina el stack completo de desarrollo moderno con las herramientas más demandadas del mercado
          </p>
        </motion.div>

        {/* Technology Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              dragFree: true,
              containScroll: "trimSnaps",
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {technologies.map((tech, index) => (
                <CarouselItem key={tech.name} className="pl-2 md:pl-4 basis-2/3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                    className="group h-full"
                  >
                    <Card className={`relative h-full border-2 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden ${tech.bgColor}/50 backdrop-blur-sm dark:border-gray-600 group/card`}>
                      {/* Glassmorphism background */}
                      <div className="absolute inset-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl" />

                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover/card:opacity-10 transition-opacity duration-500`} />

                      <CardContent className="relative z-10 p-4 sm:p-6 text-center h-full flex flex-col justify-center">
                        {/* Logo */}
                        <motion.div
                          className="mb-3 sm:mb-4 mx-auto"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto flex items-center justify-center">
                            <Image
                              src={tech.logo}
                              alt={`${tech.name} logo`}
                              width={64}
                              height={64}
                              className="object-contain group-hover/card:drop-shadow-lg transition-all duration-300"
                            />
                          </div>
                        </motion.div>

                        {/* Technology Name */}
                        <h3 className="font-bold text-sm sm:text-lg lg:text-xl mb-1 sm:mb-2 group-hover/card:text-primary transition-colors duration-300">
                          {tech.name}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-muted-foreground group-hover/card:text-gray-700 dark:group-hover/card:text-gray-300 transition-colors duration-300 line-clamp-2">
                          {tech.description}
                        </p>

                        {/* Progress bar on hover */}
                        <div className="mt-2 sm:mt-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                          <div className={`h-1 bg-gradient-to-r ${tech.color} rounded-full transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500`} />
                        </div>
                      </CardContent>

                      {/* Shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-gray-300/20 to-transparent transform -skew-x-12 translate-x-full group-hover/card:-translate-x-full transition-transform duration-1000" />
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

        </div>
      </div>
    </section>
  )
}
