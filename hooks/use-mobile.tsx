import { useMediaQuery } from 'react-responsive'
import { useState, useEffect } from 'react'

/**
 * Breakpoints estándar para consistencia en toda la app
 */
export const BREAKPOINTS = {
  mobile: 767,
  tablet: 1023,
  desktop: 1024,
  largeDesktop: 1280,
} as const

/**
 * Hook para detectar dispositivos móviles usando react-responsive
 * 
 * Ventajas de react-responsive:
 * - Librería bien mantenida y probada en producción
 * - SSR support built-in con configuración adecuada
 * - Performance optimizado
 * - API rica y flexible
 * - Menos código custom para mantener
 */
export function useIsMobile(): boolean {
  const [hasMounted, setHasMounted] = useState(false)
  
  // react-responsive con configuración SSR-safe
  const isMobileQuery = useMediaQuery(
    { maxWidth: BREAKPOINTS.mobile },
    undefined, // serverMediaQuery - undefined para consistencia SSR
  )

  useEffect(() => {
    setHasMounted(true)
  }, [])

  // Solo retornar el valor real después de la hidratación
  // Esto evita hydration mismatches
  return hasMounted ? isMobileQuery : false
}

/**
 * Hook para detectar tablets
 */
export function useIsTablet(): boolean {
  const [hasMounted, setHasMounted] = useState(false)
  
  const isTabletQuery = useMediaQuery({
    minWidth: BREAKPOINTS.mobile + 1,
    maxWidth: BREAKPOINTS.tablet,
  })

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted ? isTabletQuery : false
}

/**
 * Hook para detectar desktop
 */
export function useIsDesktop(): boolean {
  const [hasMounted, setHasMounted] = useState(false)
  
  const isDesktopQuery = useMediaQuery({
    minWidth: BREAKPOINTS.desktop,
  })

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted ? isDesktopQuery : false
}

/**
 * Hook completo para todos los breakpoints
 * Más eficiente que usar múltiples hooks individuales
 */
export function useBreakpoint() {
  const [hasMounted, setHasMounted] = useState(false)
  
  const isMobile = useMediaQuery({ maxWidth: BREAKPOINTS.mobile })
  const isTablet = useMediaQuery({
    minWidth: BREAKPOINTS.mobile + 1,
    maxWidth: BREAKPOINTS.tablet,
  })
  const isDesktop = useMediaQuery({ minWidth: BREAKPOINTS.desktop })
  const isLargeDesktop = useMediaQuery({ minWidth: BREAKPOINTS.largeDesktop })

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: false,
      isLargeDesktop: false,
      // Aliases útiles
      isSmall: false,
      isMedium: false,
      isLarge: false,
    }
  }

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
 * Hooks adicionales para casos de uso comunes
 * Usando implementación manual para mayor compatibilidad
 */
export function useIsRetina(): boolean {
  return useMediaQuerySSR('(min-resolution: 2dppx)')
}

export function useIsLandscape(): boolean {
  return useMediaQuerySSR('(orientation: landscape)')
}

export function usePrefersReducedMotion(): boolean {
  return useMediaQuerySSR('(prefers-reduced-motion: reduce)')
}

export function usePrefersDarkMode(): boolean {
  return useMediaQuerySSR('(prefers-color-scheme: dark)')
}

/**
 * Hook helper para media queries con implementación manual SSR-safe
 */
function useMediaQuerySSR(query: string, serverDefault: boolean = false): boolean {
  const [hasMounted, setHasMounted] = useState(false)
  const [matches, setMatches] = useState(serverDefault)

  useEffect(() => {
    setHasMounted(true)

    if (typeof window === 'undefined' || !window.matchMedia) {
      return
    }

    const mediaQuery = window.matchMedia(query)
    const updateMatches = () => setMatches(mediaQuery.matches)
    
    updateMatches()
    mediaQuery.addEventListener('change', updateMatches)
    
    return () => mediaQuery.removeEventListener('change', updateMatches)
  }, [query])

  return hasMounted ? matches : serverDefault
}
