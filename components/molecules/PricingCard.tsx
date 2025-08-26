"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface PricingCardProps {
  plan: {
    name: string
    price: string
    originalPrice: string
    description: string
    features: Array<string | { text: string; schedule?: string; included?: boolean }>
    action: string
    buttonText: string
    buttonVariant: "primary" | "secondary"
    highlighted: boolean
    badge?: string
  }
  index: number
  onAction: (action: string) => void
}

export function PricingCard({ plan, index, onAction }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <Card className={`${plan.highlighted ? 'border-2 border-primary' : 'border-2'} hover:shadow-lg transition-all duration-300 h-full ${plan.highlighted ? 'hover:shadow-xl' : ''} ${plan.highlighted ? 'md:col-span-2 lg:col-span-1' : ''}`}>
        {plan.badge && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-primary text-primary-foreground px-4 py-1">{plan.badge}</Badge>
          </div>
        )}
        
        <CardHeader className="text-center pb-4 sm:pb-6">
          <CardTitle className="font-heading text-base sm:text-lg lg:text-xl">{plan.name}</CardTitle>
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">{plan.price}</div>
            <div className="text-sm sm:text-base text-gray-400 line-through">{plan.originalPrice}</div>
          </div>
          <div className="text-xs text-gray-400 mt-1">*Facilidades de pago</div>
          <CardDescription className="text-xs sm:text-sm">{plan.description}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="space-y-2">
            {plan.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center gap-2">
                {typeof feature === 'object' && 'included' in feature ? (
                  <>
                    {feature.included ? (
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                    ) : (
                      <span className="w-4 h-4 sm:w-5 sm:h-5 text-center flex-shrink-0 text-muted-foreground text-xs">✗</span>
                    )}
                    <div className="flex flex-col">
                      <span className={feature.included ? "text-xs sm:text-sm" : "text-muted-foreground text-xs sm:text-sm"}>
                        {feature.text}
                      </span>
                      {feature.schedule && (
                        <span className="text-xs text-gray-500">{feature.schedule}</span>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                    {typeof feature === 'string' ? (
                      <span className="text-xs sm:text-sm">{feature}</span>
                    ) : (
                      <div className="flex flex-col">
                        <span className="text-xs sm:text-sm">{feature.text}</span>
                        {feature.schedule && (
                          <span className="text-xs text-gray-500">{feature.schedule}</span>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </CardContent>

        <CardFooter>
          <motion.div 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
            className="w-full"
          >
            <Button
              className={`w-full mt-4 sm:mt-6 ${plan.buttonVariant === 'primary' ? 'btn-primary' : 'btn-secondary'} text-sm sm:text-base py-3 sm:py-4 min-h-[44px] sm:min-h-[48px]`}
              onClick={() => onAction(plan.action)}
            >
              {plan.buttonText}
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}