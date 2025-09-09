import * as React from "react"

const MOBILE_BREAKPOINT = 768

/**
 * Hook para detectar si el dispositivo es móvil de forma SSR-safe
 * 
 * Sigue el patrón recomendado por React para evitar hydration mismatches:
 * - Retorna `false` consistentemente en servidor y cliente inicial
 * - Solo actualiza después de la hidratación para evitar layout shift
 * - Usa matchMedia para mejor rendimiento y precisión
 */
export function useIsMobile() {
  // Estado para trackear si el componente ya se montó (hidratación completa)
  const [hasMounted, setHasMounted] = React.useState(false)
  
  // Estado para el valor real de isMobile
  const [isMobile, setIsMobile] = React.useState(false)

  // Handler optimizado con useCallback para evitar re-renders innecesarios
  const updateIsMobile = React.useCallback((mediaQuery: MediaQueryList) => {
    setIsMobile(mediaQuery.matches)
  }, [])

  React.useEffect(() => {
    // Marcar como montado para habilitar detección móvil
    setHasMounted(true)

    // Verificar si matchMedia está disponible (puede no estar en algunos entornos)
    if (typeof window === 'undefined' || !window.matchMedia) {
      return
    }

    // Usar matchMedia para detección precisa y eficiente
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Handler que usa el callback optimizado
    const handleChange = (mq: MediaQueryListEvent) => updateIsMobile(mq.target as MediaQueryList)
    
    // Establecer valor inicial
    updateIsMobile(mediaQuery)
    
    // Escuchar cambios
    mediaQuery.addEventListener('change', handleChange)
    
    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [updateIsMobile])

  // Solo retornar el valor real después de la hidratación
  // Esto garantiza consistencia servidor/cliente y evita hydration mismatch
  return hasMounted ? isMobile : false
}
