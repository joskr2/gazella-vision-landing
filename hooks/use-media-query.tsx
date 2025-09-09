import { useMediaQuery as useMediaQueryRR } from 'react-responsive'
import { useState, useEffect } from 'react'

/**
 * Re-export de los hooks y constantes principales desde use-mobile.tsx
 * para mantener compatibilidad y consistencia
 */
export {
  useIsMobile,
  useIsTablet,
  useIsDesktop,
  useBreakpoint,
  useIsRetina,
  useIsLandscape,
  usePrefersReducedMotion,
  usePrefersDarkMode,
  BREAKPOINTS,
} from './use-mobile'

/**
 * Hook para media queries usando react-responsive con soporte SSR
 * 
 * Wrapper mejorado que:
 * - Usa react-responsive internamente
 * - SSR-safe por defecto
 * - API consistente con string queries
 * - TypeScript estricto
 */
export function useMediaQuery(query: string): boolean {
  const [hasMounted, setHasMounted] = useState(false)
  
  // react-responsive no soporta query strings directamente en la nueva API
  // Para mantener compatibilidad, usamos el patrón SSR-safe manual
  const [matches, setMatches] = useState(false)

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

  return hasMounted ? matches : false
}

/**
 * Constantes de breakpoints como strings para compatibilidad
 */
export const BREAKPOINT_QUERIES = {
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
  // Resolución
  retina: '(min-resolution: 2dppx)',
  print: '(print)',
} as const

/**
 * Hook para múltiples media queries simultáneas
 * Útil para casos complejos donde necesitas evaluar varias condiciones
 */
export function useMediaQueries<T extends Record<string, string>>(
  queries: T
): { [K in keyof T]: boolean } & { hasMounted: boolean } {
  const [hasMounted, setHasMounted] = useState(false)
  const [results, setResults] = useState<Record<string, boolean>>({})

  useEffect(() => {
    setHasMounted(true)
    
    if (typeof window === 'undefined' || !window.matchMedia) {
      return
    }

    const mediaQueries = new Map<string, MediaQueryList>()
    const updateResults = () => {
      const newResults = Object.entries(queries).reduce((acc, [key, query]) => {
        const mq = mediaQueries.get(key)
        acc[key] = mq ? mq.matches : false
        return acc
      }, {} as Record<string, boolean>)
      setResults(newResults)
    }

    // Crear y suscribir a todas las media queries
    Object.entries(queries).forEach(([key, query]) => {
      const mq = window.matchMedia(query)
      mediaQueries.set(key, mq)
      mq.addEventListener('change', updateResults)
    })

    // Establecer valores iniciales
    updateResults()

    // Cleanup
    return () => {
      mediaQueries.forEach(mq => {
        mq.removeEventListener('change', updateResults)
      })
    }
  }, [queries])

  // Solo retornar valores reales después de hidratación
  if (!hasMounted) {
    const defaultResults = Object.keys(queries).reduce((acc, key) => {
      acc[key] = false
      return acc
    }, {} as Record<string, boolean>)
    
    return {
      ...defaultResults,
      hasMounted: false,
    } as { [K in keyof T]: boolean } & { hasMounted: boolean }
  }

  return {
    ...results,
    hasMounted: true,
  } as { [K in keyof T]: boolean } & { hasMounted: boolean }
}

/**
 * Ejemplos de uso avanzado
 */
export function useResponsiveValue<T>(
  values: {
    mobile?: T
    tablet?: T
    desktop?: T
    largeDesktop?: T
    default: T
  }
): T {
  // Usar media queries directamente para evitar referencia circular
  const [hasMounted, setHasMounted] = useState(false)
  const [currentValue, setCurrentValue] = useState<T>(values.default)

  useEffect(() => {
    setHasMounted(true)
    
    if (typeof window === 'undefined' || !window.matchMedia) {
      return
    }

    const queries = {
      mobile: window.matchMedia('(max-width: 767px)'),
      tablet: window.matchMedia('(min-width: 768px) and (max-width: 1023px)'),
      desktop: window.matchMedia('(min-width: 1024px) and (max-width: 1279px)'),
      largeDesktop: window.matchMedia('(min-width: 1280px)'),
    }

    const updateValue = () => {
      if (queries.mobile.matches && values.mobile !== undefined) {
        setCurrentValue(values.mobile)
      } else if (queries.tablet.matches && values.tablet !== undefined) {
        setCurrentValue(values.tablet)
      } else if (queries.largeDesktop.matches && values.largeDesktop !== undefined) {
        setCurrentValue(values.largeDesktop)
      } else if (queries.desktop.matches && values.desktop !== undefined) {
        setCurrentValue(values.desktop)
      } else {
        setCurrentValue(values.default)
      }
    }

    // Suscribirse a cambios
    Object.values(queries).forEach(mq => {
      mq.addEventListener('change', updateValue)
    })

    // Establecer valor inicial
    updateValue()

    // Cleanup
    return () => {
      Object.values(queries).forEach(mq => {
        mq.removeEventListener('change', updateValue)
      })
    }
  }, [values])

  return hasMounted ? currentValue : values.default
}
