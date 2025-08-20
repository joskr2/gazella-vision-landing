"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Users, Code, Zap, Target, MessageCircle, Menu, X } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function GazellaVisionLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"])

  useEffect(() => {
    const updateScrollY = () => setScrollPosition(window.scrollY)
    window.addEventListener("scroll", updateScrollY)
    return () => window.removeEventListener("scroll", updateScrollY)
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Enhanced Header with Glassmorphism */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <motion.div
              className="font-heading font-bold text-xl lg:text-2xl text-foreground"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Gazella Vision
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {["Programa", "Características", "Testimonios", "Precios", "Contacto"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace("í", "i")}`}
                  className="text-muted-foreground hover:text-foreground transition-colors relative"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg bg-white/20 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop CTA */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button className="btn-primary hover:scale-105 transition-transform">
                Postula ahora
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden bg-white/95 backdrop-blur-xl border-t border-white/20 ${mobileMenuOpen ? "block" : "hidden"
            }`}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: mobileMenuOpen ? 1 : 0,
            height: mobileMenuOpen ? "auto" : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-6 space-y-4">
            {["Programa", "Características", "Testimonios", "Precios", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace("í", "i")}`}
                className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="btn-primary w-full mt-4">
              Postula ahora
            </Button>
          </div>
        </motion.div>
      </motion.header>

      {/* Hero Section with Parallax */}
      <motion.section
        ref={targetRef}
        className="section-padding bg-gradient-to-br from-blue-50 to-green-50 pt-24 lg:pt-32 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Parallax Background Elements */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{ y: parallaxY }}
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-4">
                <motion.h1
                  className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Fullstack en 8 semanas: React + Supabase + Next.js
                </motion.h1>
                <motion.p
                  className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Publica tu primer MVP SaaS en producción y compártelo en entrevistas o lánzalo como negocio.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button size="lg" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                    Reserva tu cupo
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4 bg-transparent w-full sm:w-auto">
                    Descargar temario (PDF)
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {[
                  { icon: Users, text: "Cohorte limitada a 15 alumnos" },
                  { icon: Zap, text: "Clases en vivo" },
                  { icon: Target, text: "Proyecto final publicado en Vercel" }
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  >
                    <Badge variant="secondary" className="px-3 py-2 hover:scale-105 transition-transform">
                      <badge.icon className="w-4 h-4 mr-2" />
                      {badge.text}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src="/modern-dashboard-mockup.png"
                  alt="Dashboard MVP mockup showing a modern SaaS application interface"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-2xl backdrop-blur-sm" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section with Scroll Animations */}
      <section id="caracteristicas" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Por qué Gazella Vision
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Un enfoque práctico que te lleva de cero a MVP en producción
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: Code,
                title: "Aprende construyendo",
                description: "Menos pizarra, más código. Cada semana un entregable real.",
                color: "text-primary"
              },
              {
                icon: Target,
                title: "MVP en producción",
                description: "Deploy a Vercel, base de datos y auth con Supabase. Nada simulado.",
                color: "text-accent"
              },
              {
                icon: Users,
                title: "Soporte cercano",
                description: "Clases en vivo, comunidad privada y feedback en tu código.",
                color: "text-primary"
              },
              {
                icon: Zap,
                title: "Stack empleable",
                description: "React, Next.js, Supabase, React Query, Tailwind, Zustand.",
                color: "text-accent"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group h-full">
                  <CardHeader className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <feature.icon className={`w-12 h-12 ${feature.color} mb-4 mx-auto`} />
                    </motion.div>
                    <CardTitle className="font-heading text-lg lg:text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Section with Enhanced Mobile Layout */}
      <section id="programa" className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Programa de 8 semanas
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">De fundamentos a MVP en producción</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                weeks: "Semana 1–2",
                title: "Fundamentos de React + Tailwind",
                subtitle: "To-Do App & Landing Page",
                color: "border-primary"
              },
              {
                weeks: "Semana 3–4",
                title: "Next.js, rutas y UI",
                subtitle: "Dashboard MVP",
                color: "border-accent"
              },
              {
                weeks: "Semana 5–6",
                title: "Supabase (Auth + CRUD) + React Query",
                subtitle: "Task Manager real",
                color: "border-primary"
              },
              {
                weeks: "Semana 7",
                title: "Zustand + validaciones + API Routes",
                subtitle: "React Hook Form & estado global",
                color: "border-accent"
              },
              {
                weeks: "Semana 8",
                title: "Deploy en Vercel + Demo Day",
                subtitle: "Proyecto final presentado",
                color: "border-primary"
              }
            ].map((week, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className={`bg-white p-4 sm:p-6 rounded-xl border-l-4 ${week.color} shadow-sm hover:shadow-md transition-shadow`}>
                  <h3 className="font-heading font-semibold text-base sm:text-lg mb-2">
                    {week.weeks}: {week.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{week.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Parallax */}
      <section id="testimonios" className="section-padding relative overflow-hidden">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                quote: "En 8 semanas lancé mi app de reservas y la usé como carta de presentación.",
                name: "Fiorella R.",
                role: "Frontend Jr.",
                avatar: "/professional-woman-avatar.png"
              },
              {
                quote: "La mentoría 1:1 marcó la diferencia. Pasé de tutoriales a un proyecto publicable.",
                name: "Jorge M.",
                role: "Dev en transición",
                avatar: "/professional-man-avatar.png"
              },
              {
                quote: "El enfoque práctico me ayudó a entender React y Next.js desde el día uno.",
                name: "Carla T.",
                role: "Diseñadora → Dev",
                avatar: "/professional-woman-designer-avatar.png"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-2 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm h-full">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                        >
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-4 text-sm sm:text-base">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-sm sm:text-base">{testimonial.name}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section id="precios" className="section-padding bg-gray-50">
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
              ¿Bootcamps de 3–6 meses a S/1,700? Olvídalo. Con Gazella Vision, en 8 semanas construyes y publicas tu MVP SaaS.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="font-heading text-xl lg:text-2xl">Starter</CardTitle>
                  <div className="text-2xl lg:text-3xl font-bold text-foreground">S/ 390</div>
                  <CardDescription>Para autodidactas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { included: true, text: "Acceso a clases grabadas" },
                      { included: true, text: "Comunidad privada" },
                      { included: true, text: "Actualizaciones del curso" },
                      { included: false, text: "Sin sesiones en vivo ni feedback 1:1" }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        {feature.included ? (
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        ) : (
                          <span className="w-5 h-5 text-center flex-shrink-0 text-muted-foreground">✗</span>
                        )}
                        <span className={feature.included ? "" : "text-muted-foreground text-sm"}>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full btn-secondary mt-8">Empezar con Starter</Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Lanzamiento Plan - Recommended */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-primary relative hover:shadow-xl transition-all duration-300 h-full">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">Recomendado</Badge>
                </div>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="font-heading text-xl lg:text-2xl">Lanzamiento</CardTitle>
                  <div className="text-2xl lg:text-3xl font-bold text-foreground">S/ 990</div>
                  <CardDescription>Cohorte en vivo (8 semanas)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      "2 clases en vivo/semana (2h c/u)",
                      "Proyectos semanales guiados",
                      "Feedback grupal de código",
                      "Proyecto final publicado en Vercel",
                      "Certificado de finalización",
                      "Cupos limitados a 15"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm lg:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full btn-primary mt-8">Reservar mi cupo</Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 hover:shadow-lg transition-all duration-300 h-full md:col-span-2 lg:col-span-1">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="font-heading text-xl lg:text-2xl">Premium</CardTitle>
                  <div className="text-2xl lg:text-3xl font-bold text-foreground">S/ 1,900</div>
                  <CardDescription>Mentoría cercana</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      "Todo lo del plan Lanzamiento",
                      "4 sesiones 1:1 (15–20 min)",
                      "Revisión de CV/LinkedIn",
                      "Simulacro de entrevista técnica",
                      "Soporte prioritario"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm lg:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full btn-secondary mt-8">Postular a Premium</Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            className="mt-16 text-center space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground">
              Política de devolución de 7 días. Facilidades de pago disponibles.
            </p>

            <div className="max-w-2xl mx-auto">
              <h3 className="font-heading font-semibold text-lg lg:text-xl mb-6">Preguntas frecuentes</h3>
              <div className="space-y-4 text-left">
                {[
                  {
                    question: "¿Qué prerrequisitos necesito?",
                    answer: "Conocimientos básicos de HTML, CSS y JavaScript. No necesitas experiencia previa con React."
                  },
                  {
                    question: "¿Las clases quedan grabadas?",
                    answer: "Sí, todas las sesiones en vivo quedan grabadas y disponibles por 6 meses."
                  },
                  {
                    question: "¿Incluye certificado?",
                    answer: "Sí, recibes un certificado de finalización al completar el programa y el proyecto final."
                  }
                ].map((faq, index) => (
                  <motion.details
                    key={index}
                    className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border"
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

      {/* Final CTA with Parallax */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{ y: parallaxY }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Tu app en producción en 8 semanas. ¿Listo/a?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Únete a la próxima cohorte y construye el MVP que cambiará tu carrera
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg w-full sm:w-auto">
                Postula ahora
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg bg-transparent w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hablar por WhatsApp
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Enhanced Footer */}
      <footer id="contacto" className="bg-gray-900 text-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="font-heading font-bold text-xl mb-4">Gazella Vision</div>
              <p className="text-gray-400">Formamos desarrolladores fullstack con proyectos reales en producción.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-semibold mb-4">Enlaces</h3>
              <div className="space-y-2">
                {["Programa", "Características", "Testimonios", "Precios", "Contacto", "Términos y Privacidad"].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace("í", "i")}`}
                    className="block text-gray-400 hover:text-white transition-colors py-1"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                {[
                  { name: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                  { name: "Instagram", icon: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zm4.624 7.512l-2.077 2.077c-.285-.196-.634-.315-1.017-.315-.634 0-1.195.315-1.556.79l-1.556-1.556c.475-.361 1.076-.634 1.712-.634.383 0 .732.119 1.017.315l2.077-2.077c.196.285.315.634.315 1.017 0 .636-.315 1.237-.79 1.598l1.556 1.556c.361-.475.634-1.076.634-1.712 0-.383-.119-.732-.315-1.017z" },
                  { name: "YouTube", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    aria-label={social.name}
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.2, y: -2 }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-gray-800 pt-8 text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2025 Gazella Vision. Todos los derechos reservados.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
