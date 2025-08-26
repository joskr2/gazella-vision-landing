"use client"

import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { TechIcon } from "@/components/atoms/TechIcon"
import { heroTechStack } from "@/data"

export function TechStackCarousel() {
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
            delay: 3500,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full relative"
      >
        <CarouselContent className="-ml-2">
          {heroTechStack.map((tech, index) => (
            <CarouselItem key={tech.name} className="pl-2 basis-1/3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="flex justify-center"
              >
                <TechIcon {...tech} index={index} />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

    </div>
  )
}
