"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { CheckCircle, Star, Users, Code, Zap, Target, MessageCircle, Menu, X, Award, Calendar, DiamondPlus, FileText, BookOpen } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Autoplay from "embla-carousel-autoplay"
import { ModeToggle } from "@/components/mode-toggle"
import TypingAnimation from "@/components/molecules/typing-animation"

export default function GazellaVisionLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const targetRef = useRef<HTMLDivElement>(null)

  // Solo usar useScroll después de que el componente esté montado
  const { scrollYProgress } = useScroll({
    target: isMounted ? targetRef : undefined,
    offset: ["start end", "end start"]
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"])

  // Marcar como montado al inicializar
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Datos estáticos de tecnologías
  const technologies = [
    {
      name: "React",
      description: "Biblioteca de JavaScript para construir interfaces de usuario",
      icon: <Code className="w-8 h-8" />,
      logo: "/react-svg-logo.svg",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      name: "Next.js",
      description: "Framework de React para aplicaciones web de producción",
      icon: <Zap className="w-8 h-8" />,
      logo: "/nextjs-icon-svgrepo-com.svg",
      color: "from-gray-800 to-black",
      bgColor: "bg-gray-50"
    },
    {
      name: "JavaScript",
      description: "Lenguaje de programación moderno y versátil",
      icon: <Target className="w-8 h-8" />,
      logo: "/js-logo.svg",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      name: "Tailwind CSS",
      description: "Framework de CSS para diseño rápido y responsive",
      icon: <DiamondPlus className="w-8 h-8" />,
      logo: "/tailwindcss-logo.svg",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50"
    },
    {
      name: "Supabase",
      description: "Base de datos y backend como servicio",
      icon: <Users className="w-8 h-8" />,
      logo: "/supabase-logo-icon.svg",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      name: "Zustand",
      description: "Gestión de estado simple y poderosa",
      icon: <Star className="w-8 h-8" />,
      logo: "/zustand.svg",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      name: "Java",
      description: "Lenguaje de programación orientado a objetos",
      icon: <Code className="w-8 h-8" />,
      logo: "/java-svg.svg",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50"
    },
    {
      name: "Spring Boot",
      description: "Framework para aplicaciones Java",
      icon: <Zap className="w-8 h-8" />,
      logo: "/spring-boot-svg.svg",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      name: "AWS",
      description: "Servicios de nube de Amazon",
      icon: <Target className="w-8 h-8" />,
      logo: "/aws-logo-svg.svg",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      name: "PostgreSQL",
      description: "Sistema de gestión de bases de datos relacional",
      icon: <Target className="w-8 h-8" />,
      logo: "/psql-svg.svg",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    }
  ]

  // Datos estáticos de testimonios
  const testimonials = [
    {
      name: "María González",
      role: "Frontend Developer",
      company: "TechCorp",
      testimonial: "El programa de Gazella Vision transformó completamente mi carrera. Ahora trabajo como desarrolladora frontend en una empresa líder.",
      quote: "El programa de Gazella Vision transformó completamente mi carrera. Ahora trabajo como desarrolladora frontend en una empresa líder.",
      rating: 5,
      avatar: "/professional-woman-avatar.png",
      gradient: "from-pink-50 to-rose-50"
    },
    {
      name: "Carlos Ruiz",
      role: "Full Stack Developer",
      company: "StartupXYZ",
      testimonial: "Excelente metodología y mentores. En 8 semanas logré desarrollar proyectos que antes me parecían imposibles.",
      quote: "Excelente metodología y mentores. En 8 semanas logré desarrollar proyectos que antes me parecían imposibles.",
      rating: 5,
      avatar: "/professional-man-avatar.png",
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      name: "Ana Torres",
      role: "React Developer",
      company: "InnovateLab",
      testimonial: "La combinación de teoría y práctica es perfecta. Los proyectos son retadores y preparan para el mundo real.",
      quote: "La combinación de teoría y práctica es perfecta. Los proyectos son retadores y preparan para el mundo real.",
      rating: 5,
      avatar: "/professional-woman-designer-avatar.png",
      gradient: "from-green-50 to-emerald-50"
    }
  ]

  // Función para generar enlaces de WhatsApp con mensajes predeterminados
  const getWhatsAppLink = (action: string) => {
    const phoneNumber = "51983765362"
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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">
      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          onClick={() => window.open(getWhatsAppLink("consultar"), '_blank')}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <Image
            src="/whatsapp-icon-seeklogo.svg"
            alt="WhatsApp"
            width={28}
            height={28}
            className="group-hover:scale-110 transition-transform duration-300"
          />

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
              ¡Chatea con nosotros!
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
            </div>
          </div>
        </button>
      </motion.div>
      {/* Enhanced Header with Glassmorphism */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-black/30 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/50 shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image
                src="/gazella-vision-svg-logo.svg"
                alt="Gazella Vision Logo"
                width={64}
                height={64}
                className="h-12 sm:h-14 lg:h-16 w-auto drop-shadow-lg"
              />
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

            {/* Right side controls */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <ModeToggle />

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg bg-white/20 dark:bg-gray-800/40 backdrop-blur-sm"
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
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/50 ${mobileMenuOpen ? "block" : "hidden"
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

      {/* Hero Section - Redesigned */}
      <motion.section
        ref={targetRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/80 to-gv-blue-primary/10 dark:from-black dark:via-gray-900/80 dark:to-gv-blue-primary/20" />
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{ y: parallaxY }}
          >
            <div className="absolute top-20 left-10 w-72 h-72 bg-gv-blue-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gv-blue-light/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gv-blue-primary/5 to-transparent rounded-full blur-3xl" />
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
          <div className="text-center space-y-8">

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight max-w-5xl mx-auto">
                Desarrollador Web Completo en
                <span className="bg-gradient-to-r from-gv-blue-primary to-gv-blue-dark bg-clip-text text-transparent"> 8 semanas</span>
              </h1>
              <p className="text-md sm:text-lg lg:text-xl text-gv-blue-dark max-w-4xl mx-auto">
                Frontend + Backend + Base de Datos
              </p>
            </motion.div>

            {/* Description */}
            <TypingAnimation />

            {/* Dashboard Image Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative max-w-4xl mx-auto space-y-4"
            >
              {/* Date Banner - Above image on mobile, overlay on desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="block sm:absolute sm:top-4 sm:right-4 sm:z-10"
              >
                <div className="bg-gradient-to-r from-gv-blue-primary to-gv-blue-dark backdrop-blur-sm text-white rounded-lg sm:rounded-xl px-4 py-3 sm:px-6 sm:py-3 shadow-xl border border-gv-blue-primary/30 w-full sm:w-auto">
                  <div className="flex items-center justify-center sm:justify-start gap-3">
                    <Calendar className="w-5 h-5 text-white flex-shrink-0" />
                    <div className="text-center sm:text-left">
                      <span className="font-medium opacity-90 text-sm mr-4">Próximo Grupo</span>
                      <span className="font-bold text-white text-base">1 Sept 2025</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Dashboard Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative"
              >
                <div className="w-full aspect-[16/9] relative">
                  <Image
                    src="/modern-dashboard-mockup.png"
                    alt="Dashboard MVP mockup showing a modern SaaS application interface"
                    fill
                    className="object-cover rounded-2xl shadow-2xl border border-white/20"
                    sizes="(min-width: 1024px) 1200px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl" />
                  {/* CTA Buttons - Only overlay on desktop */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="hidden sm:flex absolute bottom-4 right-4 flex-row gap-3 p-2"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="sm"
                        className="bg-gv-blue-primary hover:bg-gv-blue-dark text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                        onClick={() => window.open(getWhatsAppLink("reservar"), '_blank')}
                      >
                        <Users className="w-4 h-4 mr-2" />
                        Reserva
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-2 border-white text-white hover:bg-white hover:text-gv-blue-primary text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-300 bg-transparent backdrop-blur-sm"
                        onClick={downloadTemario}
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Ver temario
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* CTA Buttons - Below image on mobile only */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex sm:hidden flex-col gap-3 w-full"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="bg-gv-blue-primary hover:bg-gv-blue-dark text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full"
                    onClick={() => window.open(getWhatsAppLink("reservar"), '_blank')}
                  >
                    <Users className="w-5 h-5 mr-3" />
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
                    className="border-2 border-gv-blue-primary text-gv-blue-primary hover:bg-gv-blue-primary hover:text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all duration-300 w-full"
                    onClick={downloadTemario}
                  >
                    <BookOpen className="w-5 h-5 mr-3" />
                    Ver temario completo
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="pt-8"
            >
              <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">
                Stack tecnológico que dominarás
              </p>
              <div className="flex justify-center items-center gap-6 flex-wrap">
                {[
                  { name: "React", logo: "/react-svg-logo.svg" },
                  { name: "JavaScript", logo: "/js-logo.svg" },
                  { name: "Zustand", logo: "/zustand.svg" },
                  { name: "Next.js", logo: "/nextjs-icon-svgrepo-com.svg" },
                  { name: "Supabase", logo: "/supabase-logo-icon.svg" },
                  { name: "Tailwind", logo: "/tailwindcss-logo.svg" },
                  { name: "Java", logo: "/java-svg.svg" },
                  { name: "Spring Boot", logo: "/spring-boot-svg.svg" },
                  { name: "AWS", logo: "/aws-logo-svg.svg" }
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 1.4 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.1 }}
                    className="group"
                  >
                    <div className="w-16 h-16 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-600 shadow-lg group-hover:shadow-xl group-hover:border-gv-blue-primary/30 transition-all duration-300">
                      <Image
                        src={tech.logo}
                        alt={`${tech.name} logo`}
                        width={32}
                        height={32}
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-xs font-medium text-muted-foreground mt-2 group-hover:text-gv-blue-primary transition-colors duration-300">
                      {tech.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Features Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-wrap gap-4 justify-center pt-4"
            >
              {[
                { icon: Users, text: "Máximo 15 alumnos" },
                { icon: Zap, text: "Clases en vivo" },
                { icon: Target, text: "Proyecto real" },
                { icon: Award, text: "MVP en producción" },
                { icon: DiamondPlus, text: "Docentes con basta experiencia" }

              ].map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 1.8 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gv-blue-primary/10 dark:border-gv-blue-primary/20 rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <badge.icon className="w-4 h-4 text-gv-blue-primary" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{badge.text}</span>
                  </div>
                </motion.div>
              ))}
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
                gradient: "from-gv-blue-light/10 via-primary/5 to-transparent",
                bgIcon: "bg-gv-blue-light/10"
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
                title: "Proyecto Real",
                description: "Construye un dashboard completo con autenticación, CRUD, estado global y deploy profesional.",
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

      {/* Technology Stack Section */}
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
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {technologies.map((tech, index) => (
                  <CarouselItem key={tech.name} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
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
                      <Card className={`relative h-full border-2 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden ${tech.bgColor}/50 backdrop-blur-sm`}>
                        {/* Glassmorphism background */}
                        <div className="absolute inset-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl" />

                        {/* Gradient overlay on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                        <CardContent className="relative z-10 p-6 text-center h-full flex flex-col justify-center">
                          {/* Logo */}
                          <motion.div
                            className="mb-4 mx-auto"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto flex items-center justify-center">
                              <Image
                                src={tech.logo}
                                alt={`${tech.name} logo`}
                                width={80}
                                height={80}
                                className="object-contain group-hover:drop-shadow-lg transition-all duration-300"
                              />
                            </div>
                          </motion.div>

                          {/* Technology Name */}
                          <h3 className="font-bold text-lg lg:text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                            {tech.name}
                          </h3>

                          {/* Description */}
                          <p className="text-sm text-muted-foreground group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                            {tech.description}
                          </p>

                          {/* Progress bar on hover */}
                          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className={`h-1 bg-gradient-to-r ${tech.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                          </div>
                        </CardContent>

                        {/* Shine effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-gray-300/20 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
                        </div>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))
                }
              </CarouselContent>
            </Carousel>

            {/* Subtle indicator */}
            <div className="text-center mt-6">
              <p className="text-xs text-muted-foreground/60">
                Tecnologías en movimiento • Pausa al hover
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section with Enhanced Design */}
      <section id="programa" className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-black dark:to-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-4 py-2">
              <Code className="w-4 h-4 mr-2" />
              Programa Intensivo
            </Badge>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              8 Semanas • 5 Tecnologías • 1 MVP Real
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              De fundamentos a producción. Cada semana dominas nuevas tecnologías y construyes proyectos reales.
            </p>
          </motion.div>

          {/* Primera fila: 2 elementos */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {[
              {
                weeks: "Semanas 1-2",
                title: "Fundamentos Sólidos",
                subtitle: "React + Tailwind CSS",
                description: "Domina los componentes de React, hooks esenciales, y crea interfaces modernas con Tailwind CSS. Tu primera app funcional lista.",
                technologies: [
                  { name: "React", logo: "/react-svg-logo.svg", color: "text-gv-blue-primary" },
                  { name: "Tailwind CSS", logo: "/tailwindcss-logo.svg", color: "text-gv-blue-light" },
                  { name: "JavaScript", logo: "/js-logo.svg", color: "text-yellow-500" }
                ],
                skills: ["Componentes", "Hooks", "Estado", "Estilos"],
                project: "To-Do App + Landing Page",
                gradient: "from-gv-blue-primary/5 via-gv-blue-light/5 to-gv-blue-primary/5",
                borderColor: "border-gv-blue-primary/20"
              },
              {
                weeks: "Semanas 3-4",
                title: "Framework Profesional",
                subtitle: "Next.js App Router",
                description: "Construye aplicaciones de nivel empresarial con Next.js. Rutas, layouts, componentes server y client. Dashboard completo.",
                technologies: [
                  { name: "Next.js", logo: "/nextjs-icon-svgrepo-com.svg", color: "text-gray-800" },
                  { name: "React", logo: "/react-svg-logo.svg", color: "text-gv-blue-primary" }
                ],
                skills: ["App Router", "Layouts", "SSR", "Componentes UI"],
                project: "Dashboard MVP Profesional",
                gradient: "from-gray-500/5 via-gv-blue-primary/5 to-gray-500/5",
                borderColor: "border-gray-500/20"
              }
            ].map((week, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={`relative border-2 ${week.borderColor} hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 bg-gradient-to-br ${week.gradient} backdrop-blur-sm overflow-hidden h-full`}>
                  {/* Glassmorphism background */}
                  <div className="absolute inset-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl" />

                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                  <CardHeader className="relative z-10 pb-4">
                    {/* Week Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="font-mono text-xs bg-white/80 dark:bg-gray-700/80 dark:text-gray-200">
                        {week.weeks}
                      </Badge>
                      <div className="flex items-center gap-1">
                        {week.technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="w-2 h-2 rounded-full bg-primary/20" />
                        ))}
                      </div>
                    </div>

                    {/* Technology Logos - Prominent Display */}
                    <div className="flex items-center justify-center gap-4 mb-6 p-4 bg-white/50 dark:bg-gray-700/50 rounded-xl border border-white/20 dark:border-gray-600/30">
                      {week.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          className="group/tech"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="relative">
                            <Image
                              src={tech.logo}
                              width={64}
                              height={64}
                              alt={tech.name}
                              className="w-12 h-12 lg:w-16 lg:h-16 object-contain group-hover/tech:drop-shadow-lg transition-all duration-300"
                            />
                            {/* Tech name tooltip */}
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/tech:opacity-100 transition-opacity">
                              <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                {tech.name}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <CardTitle className="font-heading text-xl lg:text-2xl mb-2 group-hover:text-primary transition-colors">
                      {week.title}
                    </CardTitle>
                    <CardDescription className="text-primary font-semibold text-base mb-3">
                      {week.subtitle}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {week.description}
                    </p>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      {week.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                          className="flex items-center gap-2 p-2 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                        >
                          <CheckCircle className="w-3 h-3 text-accent flex-shrink-0" />
                          <span className="text-xs lg:text-sm font-medium">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="relative z-10 pt-4">
                    <div className="w-full p-3 bg-accent/10 rounded-lg border border-accent/20">
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-accent flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground">Proyecto Final:</p>
                          <p className="text-sm font-semibold text-foreground">{week.project}</p>
                        </div>
                      </div>
                    </div>
                  </CardFooter>

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Segunda fila: 3 elementos */}
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                weeks: "Semanas 5-6",
                title: "Backend & Estado",
                subtitle: "Supabase + React Query",
                description: "Integra base de datos real, autenticación segura y gestión de estado avanzada. Tu app cobra vida con datos reales.",
                technologies: [
                  { name: "Supabase", logo: "/supabase-logo-icon.svg", color: "text-green-500" },
                  { name: "React Query", logo: "/react-query-seeklogo.svg", color: "text-red-500" }
                ],
                skills: ["PostgreSQL", "Auth", "Queries", "Caché"],
                project: "Task Manager con Usuarios",
                gradient: "from-green-500/5 via-emerald-500/5 to-green-500/5",
                borderColor: "border-green-500/20"
              },
              {
                weeks: "Semana 7",
                title: "Estado Global",
                subtitle: "Zustand + Validaciones",
                description: "Optimiza el estado global, implementa validaciones robustas y APIs propias. Nivel profesional alcanzado.",
                technologies: [
                  { name: "Zustand", logo: "/zustand.svg", color: "text-orange-500" }
                ],
                skills: ["Estado Global", "React Hook Form", "Zod", "API Routes"],
                project: "App con Formularios Avanzados",
                gradient: "from-orange-500/5 via-amber-500/5 to-orange-500/5",
                borderColor: "border-orange-500/20"
              },
              {
                weeks: "Semana 8",
                title: "Producción & Demo",
                subtitle: "Deploy en Vercel",
                description: "Lleva tu MVP a producción con Vercel. Configura dominios, variables de entorno y presenta tu proyecto al mundo.",
                technologies: [
                  { name: "Vercel", logo: "/vercel-seeklogo.svg", color: "text-gray-800" }
                ],
                skills: ["Deploy", "Dominios", "ENV Variables", "Presentación"],
                project: "MVP SaaS en Producción",
                gradient: "from-purple-500/5 via-indigo-500/5 to-purple-500/5",
                borderColor: "border-purple-500/20"
              }
            ].map((week, index) => (
              <motion.div
                key={index + 2} // Offset index for second row
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={`relative border-2 ${week.borderColor} hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 bg-gradient-to-br ${week.gradient} backdrop-blur-sm overflow-hidden h-full`}>
                  {/* Glassmorphism background */}
                  <div className="absolute inset-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl" />

                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                  <CardHeader className="relative z-10 pb-4">
                    {/* Week Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="font-mono text-xs bg-white/80 dark:bg-gray-700/80 dark:text-gray-200">
                        {week.weeks}
                      </Badge>
                      <div className="flex items-center gap-1">
                        {week.technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="w-2 h-2 rounded-full bg-primary/20" />
                        ))}
                      </div>
                    </div>

                    {/* Technology Logos - Prominent Display */}
                    <div className="flex items-center justify-center gap-4 mb-6 p-4 bg-white/50 dark:bg-gray-700/50 rounded-xl border border-white/20 dark:border-gray-600/30">
                      {week.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          className="group/tech"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="relative">
                            <Image
                              src={tech.logo}
                              width={64}
                              height={64}
                              alt={tech.name}
                              className="w-12 h-12 lg:w-16 lg:h-16 object-contain group-hover/tech:drop-shadow-lg transition-all duration-300"
                            />
                            {/* Tech name tooltip */}
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/tech:opacity-100 transition-opacity">
                              <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                {tech.name}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <CardTitle className="font-heading text-xl lg:text-2xl mb-2 group-hover:text-primary transition-colors">
                      {week.title}
                    </CardTitle>
                    <CardDescription className="text-primary font-semibold text-base mb-3">
                      {week.subtitle}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {week.description}
                    </p>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      {week.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: (index + 2) * 0.1 + skillIndex * 0.05 }}
                          className="flex items-center gap-2 p-2 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                        >
                          <CheckCircle className="w-3 h-3 text-accent flex-shrink-0" />
                          <span className="text-xs lg:text-sm font-medium">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="relative z-10 pt-4">
                    <div className="w-full p-3 bg-accent/10 rounded-lg border border-accent/20">
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-accent flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground">Proyecto Final:</p>
                          <p className="text-sm font-semibold text-foreground">{week.project}</p>
                        </div>
                      </div>
                    </div>
                  </CardFooter>

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Final CTA for Program Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
              <h3 className="font-heading text-xl lg:text-2xl font-bold mb-4">
                ¿Listo para construir tu MVP en 8 semanas?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Únete a desarrolladores que ya están trabajando con estas tecnologías en empresas reales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-gv-blue-primary hover:bg-gv-blue-dark text-white px-8 py-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => window.open(getWhatsAppLink("reservar"), '_blank')}
                >
                  Reservar mi cupo
                </Button>
                <Button
                  variant="outline"
                  className="border-gv-blue-primary text-gv-blue-primary hover:bg-gv-blue-primary hover:text-white px-8 py-3 transition-all duration-300"
                  onClick={downloadTemario}
                >
                  Ver temario completo
                </Button>
              </div>
            </div>
          </motion.div>
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
                            <div className="absolute -top-2 -left-2 text-4xl text-primary/20 font-serif leading-none">"</div>
                            <blockquote className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed pl-6 italic">
                              {testimonial.quote}
                            </blockquote>
                            <div className="absolute -bottom-2 -right-2 text-4xl text-primary/20 font-serif leading-none transform rotate-180">"</div>
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
                  </CarouselItem>
                ))
                }
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

      {/* Enhanced Pricing Section */}
      <section id="precios" className="section-padding bg-gray-50 dark:bg-gray-900">
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

            {/* Banner de fecha destacado */}
            <motion.div
              className="bg-gradient-to-r from-gv-blue-primary to-gv-blue-dark text-white rounded-2xl p-6 max-w-2xl mx-auto mb-8 shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Calendar className="w-6 h-6" />
                  <span className="text-sm font-semibold uppercase tracking-wider">Próximo Grupo</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Inicia el 1 de Septiembre 2025</h3>
                <p className="text-gv-blue-light text-sm">
                  ¡Solo quedan pocos cupos disponibles!
                </p>
              </div>
            </motion.div>
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
                      { included: true, text: "2 clases semanales en vivo", schedule: "(Mar-Jue 7-8PM • Sáb 1-3PM)" },
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
                        <div className="flex flex-col">
                          <span className={feature.included ? "" : "text-muted-foreground text-sm"}>
                            {feature.text}
                          </span>
                          {feature.schedule && (
                            <span className="text-xs text-gray-500">{feature.schedule}</span>
                          )}
                        </div>
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
                      { text: "5 clases semanales en vivo", schedule: "(Lun-Vie 7-9PM • Sáb 8AM-1PM)" },
                      "Proyectos semanales guiados",
                      "Feedback grupal de código",
                      "Proyecto final publicado en Vercel",
                      "Certificado de finalización",
                      "Cupos limitados a 15"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        {typeof feature === 'string' ? (
                          <span className="text-sm lg:text-base">{feature}</span>
                        ) : (
                          <div className="flex flex-col">
                            <span className="text-sm lg:text-base">{feature.text}</span>
                            <span className="text-xs text-gray-500">{feature.schedule}</span>
                          </div>
                        )}
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
                    className="bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
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
        {/* Overlay oscuro solo en modo dark */}
        <div className="absolute inset-0 pointer-events-none hidden dark:block" style={{ background: 'rgba(0,0,0,0.60)' }} />
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{ y: parallaxY }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 dark:from-gray-200/5 to-transparent" />
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
                className="bg-white dark:bg-gray-800 text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-8 py-4 text-lg w-full sm:w-auto"
                onClick={() => window.open(getWhatsAppLink("postular"), '_blank')}
              >
                Postula ahora
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white dark:border-gray-300 text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:text-primary dark:hover:text-white px-8 py-4 text-lg bg-transparent w-full sm:w-auto"
                onClick={() => window.open(getWhatsAppLink("consultar"), '_blank')}
              >
                <Image src="/whatsapp-icon-seeklogo.svg" alt="WhatsApp" width={20} height={20} className="w-5 h-5 mr-2" />
                Hablar por WhatsApp
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Enhanced Footer */}
      <footer id="contacto" className="bg-white/10 dark:bg-black/30 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/50 text-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 items-start lg:items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <Image
                  src="/gazella-vision-footer-logo.svg"
                  alt="Gazella Vision"
                  width={48}
                  height={48}
                  className="h-12 w-auto mr-3"
                />
              </div>
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
                    className="block text-gray-400 hover:text-gray-200 transition-colors py-1"
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
                  className="flex items-center gap-3 text-gray-400 hover:text-gray-200 transition-colors py-1 group"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-200 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM3 5h18v2.4L12 13 3 7.4V5zm0 4.6l9 5.4 9-5.4V19H3V9.6z" />
                  </svg>
                  <span>Sitio Web</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/josue-retamozo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-gray-200 transition-colors py-1 group"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-200 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>LinkedIn</span>
                </motion.a>
                <motion.a
                  href={`https://wa.me/51983765362?text=${encodeURIComponent("¡Hola! Tengo algunas preguntas sobre el programa Gazella Vision. ¿Podrían ayudarme con más información?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-gray-200 transition-colors py-1 group"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-200 transition-colors" fill="currentColor" viewBox="0 0 24 24">
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
