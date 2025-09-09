// ALTERNATIVA: Usando react-responsive para casos más complejos
// npm install react-responsive
// npm install --save-dev @types/react-responsive

import { useMediaQuery } from 'react-responsive'
import { useState, useEffect } from 'react'

/**
 * Hook usando react-responsive con SSR support
 * 
 * Ventajas:
 * - Librería bien mantenida y probada
 * - Muchas funcionalidades adicionales
 * - SSR support built-in con hydrationBehavior
 * 
 * Desventajas:
 * - Dependencia externa adicional
 * - Bundle size ligeramente mayor
 */
export function useIsMobileResponsive(): boolean {
  const [hasMounted, setHasMounted] = useState(false)
  
  const isMobile = useMediaQuery(
    { maxWidth: 767 },
    undefined, // serverMediaQuery - usar undefined para SSR consistency
    { hydrationBehavior: 'client-side-only' } // Evita hydration mismatch
  )

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted ? isMobile : false
}

/**
 * Ejemplo más avanzado con react-responsive
 */
export function useAdvancedResponsive() {
  const [hasMounted, setHasMounted] = useState(false)

  const breakpoints = {
    isMobile: useMediaQuery({ maxWidth: 767 }),
    isTablet: useMediaQuery({ minWidth: 768, maxWidth: 1023 }),
    isDesktop: useMediaQuery({ minWidth: 1024 }),
    isRetina: useMediaQuery({ minResolution: '2dppx' }),
    isLandscape: useMediaQuery({ orientation: 'landscape' }),
    prefersReducedMotion: useMediaQuery({ prefersReducedMotion: 'reduce' }),
  }

  useEffect(() => {
    setHasMounted(true)
  }, [])

  // Solo retornar valores reales después de la hidratación
  if (!hasMounted) {
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: false,
      isRetina: false,
      isLandscape: false,
      prefersReducedMotion: false,
    }
  }

  return breakpoints
}

/**
 * INSTRUCCIONES DE INSTALACIÓN:
 * 
 * npm install react-responsive
 * npm install --save-dev @types/react-responsive
 * 
 * CUÁNDO USAR CADA OPCIÓN:
 * 
 * 1. useIsMobile (custom mejorado):
 *    - Proyectos que quieren mínimas dependencias
 *    - Control total sobre la implementación
 *    - Casos de uso simples
 * 
 * 2. react-responsive:
 *    - Proyectos con muchas media queries complejas
 *    - Equipos que prefieren librerías establecidas
 *    - Necesitas funcionalidades adicionales (device detection, etc.)
 * 
 * 3. useMediaQuery + useBreakpoint (nuestra implementación):
 *    - Balance perfecto entre control y funcionalidad
 *    - TypeScript-first
 *    - SSR-optimized
 */
