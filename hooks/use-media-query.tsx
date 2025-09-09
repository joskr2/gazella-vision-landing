import * as React from "react"

/**
 * Hook avanzado para media queries con soporte completo para SSR
 * 
 * Características:
 * - SSR-safe: Sin hydration mismatches
 * - Performance optimizado: useCallback, cleanup adecuado
 * - Flexible: Soporta cualquier media query
 * - TypeScript estricto: Tipos bien definidos
 * - Error handling: Maneja casos edge
 */
export function useMediaQuery(query: string): boolean {
  const [hasMounted, setHasMounted] = React.useState(false)
  const [matches, setMatches] = React.useState(false)

  const updateMatches = React.useCallback((mediaQuery: MediaQueryList) => {
    setMatches(mediaQuery.matches)
  }, [])

  React.useEffect(() => {
    setHasMounted(true)

    // Guards para SSR y compatibilidad
    if (typeof window === 'undefined' || !window.matchMedia) {
      console.warn('matchMedia is not available')
      return
    }

    let mediaQuery: MediaQueryList
    
    try {
      mediaQuery = window.matchMedia(query)
    } catch (error) {
      console.warn(`Invalid media query: ${query}`, error)
      return
    }

    // Handler para cambios de media query
    const handleChange = (event: MediaQueryListEvent) => {
      updateMatches(event.target as MediaQueryList)
    }

    // Establecer valor inicial
    updateMatches(mediaQuery)

    // Suscribirse a cambios
    mediaQuery.addEventListener('change', handleChange)

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [query, updateMatches])

  // Solo retornar el valor real después de la hidratación
  return hasMounted ? matches : false
}

/**
 * Hook específico para detección móvil usando el hook de media query
 * Más limpio y reutilizable
 */
export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 767px)')
}

/**
 * Hook para múltiples breakpoints comunes
 * Útil para responsive design más complejo
 */
export function useBreakpoint() {
  const isMobile = useMediaQuery('(max-width: 767px)')
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const isLargeDesktop = useMediaQuery('(min-width: 1280px)')

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    // Aliases útiles
    isSmall: isMobile,
    isMedium: isTablet,
    isLarge: isDesktop || isLargeDesktop,
  }
}

/**
 * Constantes de breakpoints para consistencia
 */
export const BREAKPOINTS = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
  largeDesktop: '(min-width: 1280px)',
  // Orientación
  portrait: '(orientation: portrait)',
  landscape: '(orientation: landscape)',
  // Preferencias del usuario
  reducedMotion: '(prefers-reduced-motion: reduce)',
  darkMode: '(prefers-color-scheme: dark)',
} as const
