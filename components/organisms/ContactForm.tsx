"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Send, CheckCircle, Loader, AlertCircle } from "lucide-react"

// Schema de validación con Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Tu nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, ingresa un correo válido." }),
  phone: z.string().min(10, { message: "Por favor, ingresa un teléfono válido." }).optional(),
  message: z.string().min(10, { message: "Tu mensaje debe tener al menos 10 caracteres." }).max(500, { message: "El mensaje no puede exceder los 500 caracteres." }),
})

interface ContactFormProps {
  formspreeEndpoint?: string
}

export function ContactForm({ formspreeEndpoint = "YOUR_FORMSPREE_ENDPOINT" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Definir el formulario con react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  // Función para manejar el envío
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (formspreeEndpoint === "YOUR_FORMSPREE_ENDPOINT") {
      setError("Por favor, configura tu endpoint de Formspree")
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          _subject: "Nueva consulta desde Gazella Vision",
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        form.reset()
      } else {
        const errorData = await response.json()
        setError(errorData.error || "Error al enviar el formulario")
      }
    } catch (error) {
      console.error("Error de red:", error)
      setError("Error de conexión. Por favor, intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <motion.div 
        className="text-center py-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">¡Mensaje enviado!</h3>
        <p className="text-muted-foreground mb-4">
          Gracias por contactarnos. Te responderemos pronto.
        </p>
        <Button 
          onClick={() => setIsSuccess(false)}
          variant="outline"
        >
          Enviar otro mensaje
        </Button>
      </motion.div>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto border-2 border-primary/20 shadow-xl shadow-primary/10">
      <CardHeader className="text-center">
        <CardTitle className="font-heading text-3xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Hablemos
        </CardTitle>
        <CardDescription className="text-lg">
          ¿Tienes una pregunta? Llena el formulario y nos pondremos en contacto.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <motion.div 
            className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AlertCircle className="w-5 h-5 text-red-500" />
            <span className="text-red-700 dark:text-red-400">{error}</span>
          </motion.div>
        )}
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre Completo</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Ej: Pedro Perez" 
                        className="focus:ring-2 focus:ring-primary/20"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teléfono (Opcional)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Ej: +51 983 765 362" 
                        className="focus:ring-2 focus:ring-primary/20"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="tucorreo@ejemplo.com" 
                      className="focus:ring-2 focus:ring-primary/20"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensaje</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Cuéntanos cómo podemos ayudarte. Menciona si estás interesado en el programa, tienes preguntas sobre el programa, necesitas más información sobre precios, etc."
                      className="resize-none h-32 focus:ring-2 focus:ring-primary/20"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                type="submit" 
                className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/80 hover:to-purple-600/80 transition-all duration-300" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </motion.div>
          </form>
        </Form>
        
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>También puedes contactarnos directamente:</p>
          <div className="mt-2 space-y-1">
            <p>josretamozovar@gmail.com</p>
            <p>WhatsApp: +51 983 765 362</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
