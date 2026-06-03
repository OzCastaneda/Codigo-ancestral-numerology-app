# Sistema de Estilos

## Arquitectura CSS

```
src/styles/
├── tokens.css        → TailwindCSS + variables CSS (colores, fuentes, radius)
├── global.css        → Reset, body, animaciones @keyframes, scrollbar, print
├── components.css    → Todos los estilos de componentes (~2300 líneas)
└── responsive.css    → Media queries mínimas (prefers-reduced-motion)
```

La mayoría del diseño responsive se maneja con **TailwindCSS utilities** directamente en los componentes JSX, eliminando la necesidad de media queries hardcodeadas.

## TailwindCSS v4

Se usa `@tailwindcss/vite` plugin. La configuración del tema se define en CSS mediante `@theme`:

```css
@import "tailwindcss";

@theme {
  --font-display: 'Outfit', sans-serif;
  --font-body: 'Inter', sans-serif;
  --color-primary: #8B5CF6;
  --color-secondary: #06B6D4;
  --color-accent: #F59E0B;
  --color-deep-900: #070B1A;
  /* ... más tokens */
}
```

## Paleta de Colores

| Token                | Color   | Uso                              |
| -------------------- | ------- | -------------------------------- |
| `--color-deep-950`   | #050814 | Fondo base                       |
| `--color-deep-900`   | #070B1A | Fondo app-container              |
| `--color-deep-800`   | #0B1020 | Superficies secundarias          |
| `--color-primary`    | #8B5CF6 | Púrpura — botones, acentos UI    |
| `--color-secondary`  | #06B6D4 | Cian — acentos secundarios       |
| `--color-accent`     | #F59E0B | Dorado — letras hebreas, número destacado |
| `--color-text-primary`   | #F1F5F9 | Texto principal               |
| `--color-text-secondary` | #94A3B8 | Texto secundario              |
| `--color-text-muted`     | #64748B | Texto sutil / placeholders    |

## Responsive con Tailwind

Breakpoints estándar de Tailwind, enfoque mobile-first:

| Breakpoint | Clase     | Destino          |
| ---------- | --------- | ---------------- |
| 0px        | (base)    | Móvil vertical   |
| 640px      | `sm:`     | Móvil horizontal |
| 768px      | `md:`     | Tablet vertical  |
| 1024px     | `lg:`     | Tablet horizontal / desktop pequeño |
| 1280px     | `xl:`     | Desktop          |
| 1536px     | `2xl:`    | Desktop grande   |

### Ejemplos de uso

```jsx
// Grid que cambia de 1 → 2 → 3 columnas
<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

// Imagen visible solo en desktop
<div className="hidden xl:block">

// Tabs: iconos siempre visibles, labels solo desde sm
<button>
  <Icon size={18} />
  <span className="hidden sm:inline">Label</span>
</button>

// Touch targets 44px en mobile, 44px en desktop
<input className="min-h-[48px] sm:min-h-[44px] text-base" />

// Footer: 1 → 2 → 3 columnas
<footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
```

## Glassmorphism

Patrón recurrente en todos los cards:

```css
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
}
```

## Tipografía

- **Display (títulos)**: `Outfit` — pesos 600, 700, 800
- **Body (texto)**: `Inter` — pesos 300, 400, 500
- **Números**: `Outfit` 800 con gradiente
- **Mínimo 16px** en mobile para legibilidad

## Animaciones

| Nombre        | Duración | Easing     | Uso                        |
| ------------- | -------- | ---------- | -------------------------- |
| `fadeIn`      | 0.3-0.6s | ease-out   | Cards, secciones           |
| `slideUp`     | 0.5-0.8s | ease-out   | Hero, formulario           |
| `popIn`       | 0.5s     | cubic-bezier | Valores numéricos        |
| `glow`        | 4s       | ease-in-out | Botón primario            |
| `float`       | 4-20s    | ease-in-out | Orbes decorativos, iconos |
| `pulseGlow`   | 6-8s     | ease-in-out | Fondo del hero             |
| `shimmer`     | 1.5s     | linear     | Loading skeleton           |
| `twinkle`     | 3-5s     | ease-in-out | Starfield en hero image    |
| `auth-spin`   | 0.6s     | linear     | Spinner de carga en auth   |

Todas las animaciones se desactivan con `prefers-reduced-motion: reduce`.

## Hero Image (Wizard)

La imagen principal usa un `::before` con máscara radial para difuminar los bordes:

```css
.home-grid-image::before {
  mask-image: radial-gradient(ellipse 80% 90% at 50% 45%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%);
  mix-blend-mode: screen;
  filter: drop-shadow(0 0 60px rgba(139, 92, 246, 0.3));
}
```

Un `::after` aplica un overlay de fusión con el fondo oscuro, y `.home-grid-starfield` genera estrellas parpadeantes mediante `radial-gradient` multi-capa animado.

## Componentes de Autenticación

Los formularios de login/register usan un sistema de estilos dedicado:

```css
.auth-card        → glassmorphism + padding responsive (p-6 sm:p-8 md:p-10)
.auth-input       → min-h-[48px] mobile / min-h-[44px] desktop, text-base
.auth-submit-btn  → gradiente púrpura, hover elevate
.auth-error-banner → banner rojo translúcido con icono AlertCircle
.auth-spinner     → animación circular para estado de carga
```

## Secciones principales del layout

| Sección               | Layout responsive                         |
| --------------------- | ----------------------------------------- |
| Home hero             | grid 1 col → md 2 cols → xl 3 cols       |
| Tabs de resultados    | flex scroll horizontal mobile, wrap desktop |
| Grid de contacto      | grid 1 col → lg 2 cols                   |
| Footer                | grid 1 col → sm 2 cols → lg 3 cols       |
| Auth pages            | card centrado, max-w-[440px], padding adaptable |
| Dashboard             | max-w-720px centrado, header flexible     |
