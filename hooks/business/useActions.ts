export function useWhatsApp() {
  const getWhatsAppLink = (action: string) => {
    const phoneNumber = "51983765362";
    const messages = {
      consultar:
        "¡Hola! Tengo algunas preguntas sobre el programa Gazella Vision. ¿Podrían ayudarme con más información?",
      postular:
        "¡Hola! Me interesa postular al programa de Desarrollador Web Completo de Gazella Vision. ¿Podrían darme más detalles sobre el proceso de inscripción?",
      reservar:
        "¡Hola! Quiero reservar mi cupo para el programa de Gazella Vision que inicia el 1 de Septiembre. ¿Qué pasos debo seguir?",
      starter:
        "¡Hola! Me interesa el plan Starter del programa Gazella Vision. ¿Podrían darme más información?",
      premium:
        "¡Hola! Me gustaría postular al plan Premium del programa Gazella Vision. ¿Cuáles son los requisitos?",
    };

    const message =
      messages[action as keyof typeof messages] || messages.consultar;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const openWhatsApp = (action: string) => {
    window.open(getWhatsAppLink(action), "_blank");
  };

  return { getWhatsAppLink, openWhatsApp };
}

export function useDownload() {
  const downloadTemario = () => {
    const link = document.createElement("a");
    link.href = "/react_plan.pdf";
    link.download = "gazella-vision-temario.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return { downloadTemario };
}
