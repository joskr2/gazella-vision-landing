export const pricingPlans = [
  {
    name: "Full MVP",
    price: "S/ 690",
    originalPrice: "S/ 1,000",
    description:
      "Clases en vivo (8 semanas). A producción en dos meses, NextJS + Java con Spring Boot y AWS",
    features: [
      {
        text: "6 clases semanales en vivo",
        schedule: "(Lun-Vie 7-10PM • Sáb 8AM-11AM)",
      },
      "Proyectos semanales guiados",
      "Feedback grupal de código",
      "Proyecto final publicado en Vercel + AWS",
      "Certificado de finalización",
      "Cupos limitados a 15",
    ],
    action: "reservar",
    buttonText: "Reservar mi cupo",
    buttonVariant: "primary" as const,
    highlighted: true,
    badge: "Recomendado",
  },
  {
    name: "Fast MVP - Starter",
    price: "S/ 500",
    originalPrice: "S/ 850",
    description:
      "Clases en vivo (4 semanas). A producción en un mes, NextJS + Supabase",
    features: [
      {
        text: "6 clases semanales en vivo",
        schedule: "(Lun-Vie 7-10PM • Sáb 8AM-11AM)",
      },
      "Proyectos semanales guiados",
      "Feedback grupal de código",
      "Proyecto final publicado en Vercel + Supabase Cloud",
      "Certificado de finalización",
      "Cupos limitados a 15",
    ],
    action: "starter",
    buttonText: "Empezar con Starter",
    buttonVariant: "secondary" as const,
    highlighted: false,
  }
];
