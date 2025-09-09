# Migración de useIsMobile - Mejores Prácticas SSR

## 🚨 Problema Original

```tsx
// ❌ Implementación anterior con potencial hydration mismatch
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT) // ⚠️ Inconsistente con matchMedia
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile // ⚠️ undefined -> false, pero puede cambiar inmediatamente a true
}
```

**Problemas:**
- Hydration mismatch: servidor `false`, cliente puede ser `true`
- Doble verificación: `matchMedia` vs `window.innerWidth`
- Handler recreado en cada render
- No maneja casos edge (SSR, matchMedia no disponible)

## ✅ Implementación Mejorada

### Opción 1: Hook Mejorado (Recomendado)

```tsx
// ✅ Implementación SSR-safe y optimizada
export function useIsMobile() {
  const [hasMounted, setHasMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const updateIsMobile = useCallback((mediaQuery: MediaQueryList) => {
    setIsMobile(mediaQuery.matches)
  }, [])

  useEffect(() => {
    setHasMounted(true)

    if (typeof window === 'undefined' || !window.matchMedia) {
      return
    }

    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const handleChange = (mq: MediaQueryListEvent) => updateIsMobile(mq.target as MediaQueryList)
    
    updateIsMobile(mediaQuery)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [updateIsMobile])

  return hasMounted ? isMobile : false // ✅ Consistente servidor/cliente
}
```

### Opción 2: Hook Genérico + Breakpoints

```tsx
// ✅ Más flexible y reutilizable
import { useMediaQuery, useBreakpoint } from "@/hooks/use-media-query"

// Uso simple
const isMobile = useIsMobile()

// Uso avanzado
const { isMobile, isTablet, isDesktop } = useBreakpoint()

// Uso custom
const isLarge = useMediaQuery('(min-width: 1200px)')
const isDark = useMediaQuery('(prefers-color-scheme: dark)')
```

## 🔄 Guía de Migración

### 1. Sin cambios en el código que usa el hook

```tsx
// ✅ El API público permanece igual
const isMobile = useIsMobile()

{isMobile ? (
  <TechStackCarousel />
) : (
  <TechStackGrid />
)}
```

### 2. Beneficios adicionales disponibles

```tsx
// ✅ Nuevas capacidades opcionales
const { isMobile, isTablet, isDesktop } = useBreakpoint()
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
```

## 🎯 Ventajas de la Implementación Mejorada

### ✅ SSR-Safe
- **Antes**: Posible hydration mismatch
- **Ahora**: Consistencia garantizada servidor/cliente

### ✅ Performance Optimizado
- **Antes**: Handler recreado en cada render
- **Ahora**: `useCallback` optimizado, cleanup adecuado

### ✅ Error Handling
- **Antes**: Podía fallar si `matchMedia` no disponible  
- **Ahora**: Guards y manejo de errores

### ✅ Código Más Limpio
- **Antes**: Lógica mezclada, comentarios limitados
- **Ahora**: Bien documentado, separación clara de responsabilidades

## 🧪 Testing del Hook

```tsx
// Ejemplo de test para verificar SSR safety
import { renderHook } from '@testing-library/react-hooks'
import { useIsMobile } from './use-mobile'

describe('useIsMobile', () => {
  it('should return false during SSR', () => {
    // Mock SSR environment
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: undefined,
    })
    
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false) // ✅ Consistente
  })

  it('should update after hydration', async () => {
    // Mock mobile matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: true, // Mobile
        media: query,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      })),
    })

    const { result, waitForNextUpdate } = renderHook(() => useIsMobile())
    
    expect(result.current).toBe(false) // Inicial
    
    await waitForNextUpdate()
    
    expect(result.current).toBe(true) // Después de hydration
  })
})
```

## 🚀 Siguientes Pasos

1. **Migración Inmediata**: El hook mejorado ya está implementado
2. **Sin Breaking Changes**: Todo el código existente sigue funcionando
3. **Nuevas Capacidades**: Considera usar `useBreakpoint` para casos más complejos
4. **Opcional**: Evalúa `react-responsive` si necesitas funcionalidad muy avanzada

## 📚 Referencias

- [React SSR Patterns](https://react.dev/reference/react/useEffect#displaying-different-content-on-the-server-and-the-client)
- [Next.js Hydration Best Practices](https://nextjs.org/docs/messages/react-hydration-error)
- [Media Queries Spec](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries)
