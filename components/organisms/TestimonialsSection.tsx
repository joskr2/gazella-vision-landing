"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { TestimonialCard } from "@/components/molecules/TestimonialCard"
import { testimonials } from "@/data"

export function TestimonialsSection() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"])

  return (
    <section id="testimonios" className="section-padding relative overflow-hidden" ref={targetRef}>
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y: parallaxY }}
      >
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Lo que dicen nuestros estudiantes
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 6000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard testimonial={testimonial} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Subtle indicator */}
          <div className="text-center mt-8">
            <p className="text-xs text-muted-foreground/60">
              Testimonios reales • Desliza para ver más
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}