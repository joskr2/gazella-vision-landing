export const pricingPlans = [
  {
    name: "Starter",
    price: "S/ 390",
    originalPrice: "S/ 550",
    description: "Para autodidactas",
    features: [
      { 
        included: true, 
        text: "2 clases semanales en vivo", 
        schedule: "(Mar-Jue 7-8PM • Sáb 1-3PM)" 
      },
      { included: true, text: "Acceso a clases grabadas" },
      { included: true, text: "Comunidad privada" },
      { included: true, text: "Actualizaciones del curso" },
      { included: false, text: "Sin feedback 1:1 personalizado" }
    ],
    action: "starter",
    buttonText: "Empezar con Starter",
    buttonVariant: "secondary" as const,
    highlighted: false
  },
  {
    name: "Lanzamiento", 
    price: "S/ 990",
    originalPrice: "S/ 1,500",
    description: "Clases en vivo (8 semanas)",
    features: [
      { text: "5 clases semanales en vivo", schedule: "(Lun-Vie 7-9PM • Sáb 8AM-1PM)" },
      "Proyectos semanales guiados",
      "Feedback grupal de código", 
      "Proyecto final publicado en Vercel",
      "Certificado de finalización",
      "Cupos limitados a 15"
    ],
    action: "reservar",
    buttonText: "Reservar mi cupo",
    buttonVariant: "primary" as const,
    highlighted: true,
    badge: "Recomendado"
  },
  {
    name: "Premium",
    price: "S/ 1,500", 
    originalPrice: "S/ 2,000",
    description: "Mentoría cercana",
    features: [
      "Todo lo del plan Lanzamiento",
      "4 sesiones 1:1 (15–20 min)",
      "Revisión de CV/LinkedIn",
      "Simulacro de entrevista técnica",
      "Soporte prioritario"
    ],
    action: "premium",
    buttonText: "Postular a Premium",
    buttonVariant: "secondary" as const,
    highlighted: false
  }
]