# Estructura de Componentes - Atomic Design

Esta aplicación está organizada siguiendo el patrón **Atomic Design** de Brad Frost, dividiendo los componentes en 5 niveles jerárquicos:

## 📁 Estructura de Directorios

```
components/
├── atoms/          # Componentes básicos e indivisibles
├── molecules/      # Combinaciones simples de atoms
├── organisms/      # Combinaciones complejas de molecules
├── templates/      # Estructuras de página sin contenido específico
├── ui/            # Componentes base de shadcn/ui
└── index.ts       # Exportaciones centralizadas

hooks/
└── business/      # Lógica de negocio reutilizable
    └── useActions.ts
```

## 🔬 Atoms (Componentes básicos)

### `CTAButton`

- **Propósito**: Botón de llamada a la acción reutilizable
- **Props**: `variant`, `size`, `icon`, `onClick`, `children`
- **Variantes**: `primary`, `secondary`, `outline`

### `TechIcon`

- **Propósito**: Icono de tecnología con animaciones
- **Props**: `name`, `logo`, `index`
- **Uso**: Mostrar logos de tecnologías con hover effects

### `FeatureBadge`

- **Propósito**: Badge de característica con icono
- **Props**: `icon`, `text`, `index`
- **Uso**: Resaltar características principales

## 🧪 Molecules (Combinaciones simples)

### `FloatingWhatsApp`

- **Propósito**: Botón flotante de WhatsApp
- **Props**: `onClick`
- **Características**: Posición fija, animaciones, tooltip

### `DashboardImage`

- **Propósito**: Imagen principal con CTAs superpuestos
- **Props**: `onReservar`, `onDownloadTemario`
- **Características**: Banner de fecha, botones superpuestos, efectos visuales

### `NavigationMenu`

- **Propósito**: Menú de navegación responsive
- **Props**: `mobileMenuOpen`, `setMobileMenuOpen`, `onPostular`
- **Características**: Desktop/mobile adaptive, animaciones

## 🦠 Organisms (Combinaciones complejas)

### `Header`

- **Propósito**: Cabecera completa de la aplicación
- **Props**: `onPostular`
- **Incluye**: Logo, navegación, CTA, menú móvil

### `HeroSection`

- **Propósito**: Sección principal de la landing page
- **Props**: `onReservar`, `onDownloadTemario`
- **Incluye**: Título, descripción, imagen dashboard, tech stack, badges

## 📄 Templates (Estructuras de página)

### `LandingPageTemplate`

- **Propósito**: Template principal de la landing page
- **Responsabilidades**: Layout general, coordinación de organismos
- **Estado**: Maneja lógica de negocio centralizada

## 🎣 Hooks de Negocio

### `useWhatsApp`

- **Funciones**: `getWhatsAppLink`, `openWhatsApp`
- **Propósito**: Gestionar enlaces y acciones de WhatsApp

### `useDownload`

- **Funciones**: `downloadTemario`
- **Propósito**: Manejar descargas de archivos

## 🎨 Beneficios de esta estructura

1. **Reutilización**: Componentes atómicos reutilizables
2. **Mantenibilidad**: Separación clara de responsabilidades
3. **Escalabilidad**: Fácil agregar nuevas funcionalidades
4. **Testabilidad**: Componentes aislados y fáciles de testear
5. **Consistencia**: Design system coherente

## 🚀 Uso

```tsx
// Importar template principal
import { LandingPageTemplate } from "@/components/templates/LandingPageTemplate";

// Usar en page.tsx
export default function HomePage() {
  return <LandingPageTemplate />;
}

// Importar componentes individuales
import { CTAButton, TechIcon } from "@/components";
```

## 📝 Convenciones

- **Atoms**: Componentes sin lógica de negocio
- **Molecules**: Combinan atoms con lógica simple
- **Organisms**: Contienen lógica de negocio específica
- **Templates**: Coordinan organismos y manejan estado global
- **Hooks**: Lógica de negocio reutilizable

## 🔄 Próximos pasos

Para completar la refactorización, se pueden crear:

- `FeaturesSection` organism
- `TechnologySection` organism
- `ProgramSection` organism
- `TestimonialsSection` organism
- `PricingSection` organism
- `Footer` organism

Cada uno siguiendo el mismo patrón de composición y reutilización.
