"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, CheckCircle } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  testimonial: {
    name: string
    role: string
    company: string
    quote: string
    rating: number
    avatar: string
    gradient: string
  }
  index: number
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <Card className={`relative border-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 bg-gradient-to-br ${testimonial.gradient} backdrop-blur-sm h-full overflow-hidden hover:border-primary/30`}>
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/20 dark:border-gray-600/30" />

        {/* Floating orb decoration */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-sm group-hover:scale-150 transition-transform duration-700" />

        <CardContent className="relative z-10 pt-6 h-full flex flex-col">
          {/* Rating Stars */}
          <div className="flex mb-4 justify-center">
            {[...Array(testimonial.rating)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  delay: index * 0.1 + i * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              </motion.div>
            ))}
          </div>

          {/* Quote with enhanced styling */}
          <div className="relative mb-6 flex-1">
            <div className="absolute -top-2 -left-2 text-4xl text-primary/20 font-serif leading-none">&ldquo;</div>
            <blockquote className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed pl-6 italic">
              {testimonial.quote}
            </blockquote>
            <div className="absolute -bottom-2 -right-2 text-4xl text-primary/20 font-serif leading-none transform rotate-180">&rdquo;</div>
          </div>

          {/* Author info with enhanced design */}
          <div className="flex items-center gap-4 mt-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-sm group-hover:scale-110 transition-transform duration-300" />
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={48}
                height={48}
                className="relative w-12 h-12 rounded-full object-cover border-2 border-white/50 group-hover:border-primary/50 transition-colors duration-300"
              />

              {/* Online status indicator */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
            </div>

            <div className="flex-1">
              <div className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors duration-300">
                {testimonial.name}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                {testimonial.role}
              </div>
              <div className="text-xs text-primary/70 font-medium">
                @ {testimonial.company}
              </div>
            </div>

            {/* Verification badge */}
            <div className="flex-shrink-0">
              <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
            </div>
          </div>
        </CardContent>

        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-sm animate-pulse" />
        </div>
      </Card>
    </motion.div>
  )
}