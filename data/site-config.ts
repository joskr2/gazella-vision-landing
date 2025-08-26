import { Users, Zap, Target, Award, DiamondPlus, Code } from "lucide-react"

// Configuración del sitio web
export const siteConfig = {
  name: "Gazella Vision",
  title: "Desarrollador Web Completo en 8 semanas",
  subtitle: "Frontend + Backend + Base de Datos", 
  description: "Lanza tu primera aplicación web profesional y úsala para conseguir trabajo o crear tu propio negocio.",
  nextGroupDate: "1 Sept 2025",
  phoneNumber: "51983765362",
  urls: {
    website: "https://josue-patricio.vercel.app",
    linkedin: "https://www.linkedin.com/in/josue-retamozo/"
  }
}

// Mensajes predefinidos de WhatsApp
export const whatsappMessages = {
  postular: "¡Hola! Me interesa postular al programa Gazella Vision de React + Next.js. ¿Podrían darme más información sobre el proceso de inscripción?",
  starter: "¡Hola! Me interesa el plan Starter de Gazella Vision. ¿Podrían darme más detalles sobre qué incluye y cómo comenzar?",
  reservar: "¡Hola! Quiero reservar mi cupo en el programa Lanzamiento de Gazella Vision. ¿Cuándo inicia la próxima cohorte?",
  premium: "¡Hola! Me interesa postular al plan Premium de Gazella Vision con mentoría 1:1. ¿Podrían darme más información?",
  consultar: "¡Hola! Tengo algunas preguntas sobre el programa Gazella Vision. ¿Podrían ayudarme con más información?"
}

// Features badges para el hero section
export const heroFeatures = [
  { icon: Users, text: "Máximo 15 alumnos" },
  { icon: Zap, text: "Clases en vivo" },
  { icon: Target, text: "Proyecto real" },
  { icon: Award, text: "MVP en producción" },
  { icon: DiamondPlus, text: "Docentes expertos" }
]

// Features principales para la sección de características
export const mainFeatures = [
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
]

// FAQ data
export const faqData = [
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
]
