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

  // Función para generar enlaces de WhatsApp con mensajes predeterminados
  const getWhatsAppLink = (action: string) => {
    const phoneNumber = "983765362"
    const messages = {
      "postular": "¡Hola! Me interesa postular al programa Gazella Vision de React + Next.js. ¿Podrían darme más información sobre el proceso de inscripción?",
      "starter": "¡Hola! Me interesa el plan Starter de Gazella Vision. ¿Podrían darme más detalles sobre qué incluye y cómo comenzar?",
      "reservar": "¡Hola! Quiero reservar mi cupo en el programa Lanzamiento de Gazella Vision. ¿Cuándo inicia la próxima cohorte?",
      "premium": "¡Hola! Me interesa postular al plan Premium de Gazella Vision con mentoría 1:1. ¿Podrían darme más información?",
      "consultar": "¡Hola! Tengo algunas preguntas sobre el programa Gazella Vision. ¿Podrían ayudarme con más información?"
    }

    const message = messages[action as keyof typeof messages] || messages.consultar
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  }

  // Función para descargar el PDF del temario
  const downloadTemario = () => {
    const link = document.createElement('a')
    link.href = '/react_plan.pdf'
    link.download = 'Gazella_Vision_Temario_React.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
              <Button
                className="btn-primary hover:scale-105 transition-transform"
                onClick={() => window.open(getWhatsAppLink("postular"), '_blank')}
              >
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
            <Button
              className="btn-primary w-full mt-4"
              onClick={() => window.open(getWhatsAppLink("postular"), '_blank')}
            >
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
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {/* 1. Título */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight text-center">
                Fullstack en 8 semanas: React + Supabase + Next.js
              </h1>
            </motion.div>

            {/* 2. Imagen */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-2xl" />
              </motion.div>
            </motion.div>

            {/* 3. Descripción */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-center">
                Publica tu primer MVP SaaS en producción y compártelo en entrevistas o lánzalo como negocio.
              </p>
            </motion.div>

            {/* 4. Botones */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
                  onClick={() => window.open(getWhatsAppLink("reservar"), '_blank')}
                >
                  Reserva tu cupo
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-secondary text-lg px-8 py-4 bg-transparent w-full sm:w-auto"
                  onClick={downloadTemario}
                >
                  Descargar temario (PDF)
                </Button>
              </motion.div>
            </motion.div>

            {/* Badges */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {[
                { icon: Users, text: "Clases limitadas a 15 alumnos" },
                { icon: Zap, text: "Clases en vivo" },
                { icon: Target, text: "Proyecto final publicado en Vercel" }
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  <Badge variant="secondary" className="px-3 py-2 hover:scale-105 transition-transform">
                    <badge.icon className="w-4 h-4 mr-2" />
                    {badge.text}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
                  <Button
                    size="lg"
                    className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
                    onClick={() => window.open(getWhatsAppLink("reservar"), '_blank')}
                  >
                    Reserva tu cupo
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="btn-secondary text-lg px-8 py-4 bg-transparent w-full sm:w-auto"
                    onClick={downloadTemario}
                  >
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
                  { icon: Users, text: "Clases limitadas a 15 alumnos" },
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
                {/* Removed blur overlay to keep image crisp */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-2xl" />
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
              ¿Por qué Gazella Vision?
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
                description: "Menos pizarra, más código. Cada semana un entregable real que puedes mostrar en entrevistas.",
                color: "text-primary",
                gradient: "from-blue-500/10 via-primary/5 to-transparent",
                bgIcon: "bg-blue-500/10"
              },
              {
                icon: Target,
                title: "MVP en producción",
                description: "Deploy a Vercel, base de datos real con Supabase y autenticación. Nada simulado, todo funcional.",
                color: "text-accent",
                gradient: "from-green-500/10 via-accent/5 to-transparent",
                bgIcon: "bg-green-500/10"
              },
              {
                icon: Users,
                title: "Soporte cercano",
                description: "Clases en vivo, comunidad privada activa y feedback directo en tu código por parte de mentores.",
                color: "text-primary",
                gradient: "from-purple-500/10 via-primary/5 to-transparent",
                bgIcon: "bg-purple-500/10"
              },
              {
                icon: Zap,
                title: "Stack empleable",
                description: "React, Next.js, Supabase, React Query, Tailwind, Zustand. Las tecnologías que buscan las empresas.",
                color: "text-accent",
                gradient: "from-orange-500/10 via-accent/5 to-transparent",
                bgIcon: "bg-orange-500/10"
              }
            ].map((feature, index) => (
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
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-xl" />

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

          <div className="space-y-6">
            {[
              {
                weeks: "Semana 1–2",
                title: "Fundamentos de React + Tailwind",
                subtitle: "To-Do App & Landing Page",
                description: "Aprende los componentes de React, hooks básicos, y estiliza con Tailwind CSS. Crea tu primera aplicación funcional.",
                color: "border-primary",
                gradient: "from-blue-500/10 to-primary/5",
                icon: "⚛️",
                skills: ["JSX", "useState", "useEffect", "Tailwind CSS"],
                project: "To-Do App interactiva + Landing responsiva"
              },
              {
                weeks: "Semana 3–4",
                title: "Next.js, rutas y UI",
                subtitle: "Dashboard MVP",
                description: "Domina Next.js App Router, navegación, layouts y componentes UI. Construye dashboards profesionales.",
                color: "border-accent",
                gradient: "from-green-500/10 to-accent/5",
                icon: "🚀",
                skills: ["App Router", "Layouts", "Componentes UI", "Server Components"],
                project: "Dashboard MVP con navegación completa"
              },
              {
                weeks: "Semana 5–6",
                title: "Supabase (Auth + CRUD) + React Query",
                subtitle: "Task Manager real",
                description: "Integra base de datos real, autenticación y gestión de estado. Tu app cobra vida con datos reales.",
                color: "border-primary",
                gradient: "from-purple-500/10 to-primary/5",
                icon: "🗄️",
                skills: ["Supabase Auth", "PostgreSQL", "React Query", "Estado global"],
                project: "Task Manager con usuarios y persistencia"
              },
              {
                weeks: "Semana 7",
                title: "Zustand + validaciones + API Routes",
                subtitle: "React Hook Form & estado global",
                description: "Optimiza la gestión de estado, validaciones robustas y APIs propias. Nivel profesional alcanzado.",
                color: "border-accent",
                gradient: "from-orange-500/10 to-accent/5",
                icon: "⚡",
                skills: ["Zustand", "React Hook Form", "Zod", "API Routes"],
                project: "App completa con formularios y validaciones"
              },
              {
                weeks: "Semana 8",
                title: "Deploy en Vercel + Demo Day",
                subtitle: "Proyecto final presentado",
                description: "Lleva tu MVP a producción con Vercel. Presenta tu proyecto y recibe feedback de la comunidad.",
                color: "border-primary",
                gradient: "from-indigo-500/10 to-primary/5",
                icon: "🎯",
                skills: ["Vercel Deploy", "Environment Variables", "Presentación", "Demo"],
                project: "MVP SaaS funcionando en producción"
              }
            ].map((week, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group"
              >
                <Card className={`bg-gradient-to-br ${week.gradient} backdrop-blur-sm border-l-4 ${week.color} hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 relative overflow-hidden`}>
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border border-white/20 rounded-lg" />

                  {/* Content */}
                  <CardContent className="relative z-10 p-6">
                    <div className="flex items-start gap-4">
                      {/* Icon & Week */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {week.icon}
                        </div>
                        <Badge variant="outline" className="text-xs font-mono bg-white/80">
                          {week.weeks}
                        </Badge>
                      </div>

                      {/* Main Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading font-bold text-lg sm:text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                          {week.title}
                        </h3>
                        <p className="text-primary/80 font-medium text-sm sm:text-base mb-3">
                          {week.subtitle}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {week.description}
                        </p>

                        {/* Skills Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {week.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium hover:bg-primary/20 transition-colors"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>

                        {/* Project Outcome */}
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">
                            <strong className="text-foreground">Proyecto:</strong> {week.project}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>

                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-sm" />
                  </div>
                </Card>
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
                quote: "En 8 semanas lancé mi app de reservas y la usé como carta de presentación en entrevistas. ¡Funcionó!",
                name: "Fiorella R.",
                role: "Frontend Jr.",
                avatar: "/professional-woman-avatar.png",
                rating: 5,
                company: "Startup Tech",
                gradient: "from-pink-500/10 to-purple-500/10"
              },
              {
                quote: "La mentoría 1:1 marcó la diferencia. Pasé de ver tutoriales a tener un proyecto real publicado y funcionando.",
                name: "Jorge M.",
                role: "Dev en transición",
                avatar: "/professional-man-avatar.png",
                rating: 5,
                company: "Freelance",
                gradient: "from-blue-500/10 to-cyan-500/10"
              },
              {
                quote: "El enfoque práctico me ayudó a entender React y Next.js desde el día uno. Ahora desarrollo con confianza.",
                name: "Carla T.",
                role: "Diseñadora → Dev",
                avatar: "/professional-woman-designer-avatar.png",
                rating: 5,
                company: "Agencia Digital",
                gradient: "from-green-500/10 to-emerald-500/10"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={`relative border-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 bg-gradient-to-br ${testimonial.gradient} backdrop-blur-sm h-full overflow-hidden hover:border-primary/30`}>
                  {/* Glassmorphism background */}
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-xl border border-white/20" />

                  {/* Floating orb decoration */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-sm group-hover:scale-150 transition-transform duration-700" />

                  <CardContent className="relative z-10 pt-6">
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
                    <div className="relative mb-6">
                      <div className="absolute -top-2 -left-2 text-4xl text-primary/20 font-serif leading-none">"</div>
                      <blockquote className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed pl-6 italic">
                        {testimonial.quote}
                      </blockquote>
                      <div className="absolute -bottom-2 -right-2 text-4xl text-primary/20 font-serif leading-none transform rotate-180">"</div>
                    </div>

                    {/* Author info with enhanced design */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-sm group-hover:scale-110 transition-transform duration-300" />
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
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
              ¿Bootcamps de 3–6 meses a precios elevados? Olvídalo. Con Gazella Vision, en 8 semanas construyes y publicas tu MVP SaaS.
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
                  <div className="flex items-center justify-center gap-3">
                    <div className="text-2xl lg:text-3xl font-bold text-foreground">S/ 390</div>
                    <div className="text-lg text-gray-400 line-through">S/ 550</div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">*Facilidades de pago</div>
                  <CardDescription>Para autodidactas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { included: true, text: "2 clases semanales en vivo (Mar-Jue 7-9PM, 1h cada una)" },
                      { included: true, text: "Acceso a clases grabadas" },
                      { included: true, text: "Comunidad privada" },
                      { included: true, text: "Actualizaciones del curso" },
                      { included: false, text: "Sin feedback 1:1 personalizado" }
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
                    <Button
                      className="w-full btn-secondary mt-8"
                      onClick={() => window.open(getWhatsAppLink("starter"), '_blank')}
                    >
                      Empezar con Starter
                    </Button>
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
                  <div className="flex items-center justify-center gap-3">
                    <div className="text-2xl lg:text-3xl font-bold text-foreground">S/ 990</div>
                    <div className="text-lg text-gray-400 line-through">S/ 1,500</div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">*Facilidades de pago</div>
                  <CardDescription>Clases en vivo (8 semanas)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      "5 clases semanales en vivo (Lun-Vie 7-9PM, 2h cada una)",
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
                    <Button
                      className="w-full btn-primary mt-8"
                      onClick={() => window.open(getWhatsAppLink("reservar"), '_blank')}
                    >
                      Reservar mi cupo
                    </Button>
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
                  <div className="flex items-center justify-center gap-3">
                    <div className="text-2xl lg:text-3xl font-bold text-foreground">S/ 1,500</div>
                    <div className="text-lg text-gray-400 line-through">S/ 2,000</div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">*Facilidades de pago</div>
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
                    <Button
                      className="w-full btn-secondary mt-8"
                      onClick={() => window.open(getWhatsAppLink("premium"), '_blank')}
                    >
                      Postular a Premium
                    </Button>
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
            Únete a la próxima clase y construye el MVP que cambiará tu carrera
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg w-full sm:w-auto"
                onClick={() => window.open(getWhatsAppLink("postular"), '_blank')}
              >
                Postula ahora
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg bg-transparent w-full sm:w-auto"
                onClick={() => window.open(getWhatsAppLink("consultar"), '_blank')}
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
                {["Programa", "Características", "Testimonios", "Precios"].map((item) => (
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
              <h3 className="font-heading font-semibold mb-4">Contacto</h3>
              <div className="space-y-3">
                <motion.a
                  href="https://josue-patricio.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors py-1"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM3 5h18v2.4L12 13 3 7.4V5zm0 4.6l9 5.4 9-5.4V19H3V9.6z" />
                  </svg>
                  <span>Sitio Web</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/josue-retamozo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors py-1"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>LinkedIn</span>
                </motion.a>
                <motion.a
                  href={`https://wa.me/983765362?text=${encodeURIComponent("¡Hola! Tengo algunas preguntas sobre el programa Gazella Vision. ¿Podrían ayudarme con más información?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors py-1"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                  </svg>
                  <span>WhatsApp</span>
                </motion.a>
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
