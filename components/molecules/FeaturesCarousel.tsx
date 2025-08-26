"use client"

import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { FeatureBadge } from "@/components/atoms/FeatureBadge"
import { heroFeatures } from "@/data"

export function FeaturesCarousel() {
  return (
    <div className="w-full max-w-md mx-auto">
      <Carousel
        opts={{
          align: "center",
          loop: true,
          dragFree: true,
          containScroll: "trimSnaps",
        }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full relative"
      >
        <CarouselContent className="-ml-2">
          {heroFeatures.map((feature, index) => (
            <CarouselItem key={feature.text} className="pl-2 basis-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="flex justify-center"
              >
                <FeatureBadge {...feature} index={index} />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
    </div>
  )
}
