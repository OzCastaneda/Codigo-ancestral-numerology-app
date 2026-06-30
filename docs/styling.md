# Sistema de Estilos

## Arquitectura CSS

```
src/styles/
├── tokens.css              → TailwindCSS + variables CSS (colores, fuentes, radius)
├── global.css              → Reset, body, animaciones @keyframes, scrollbar, print
├── components.css          → Todos los estilos de componentes (~4700 líneas)
├── passwordStrength.css    → Barra de fortaleza de contraseñas (zxcvbn)
└── responsive.css          → Media queries mínimas (prefers-reduced-motion)
```

La mayoría del diseño responsive se maneja con **TailwindCSS utilities** directamente en los componentes JSX.

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
}
```

## Paleta de Colores

| Token                | Color   | Uso                              |
| -------------------- | ------- | -------------------------------- |
| `--color-deep-950`   | #050814 | Fondo base                       |
| `--color-primary`    | #8B5CF6 | Púrpura — botones, acentos UI    |
| `--color-secondary`  | #06B6D4 | Cian — acentos secundarios       |
| `--color-accent`     | #F59E0B | Dorado — letras hebreas          |
| `--color-text-primary`   | #F1F5F9 | Texto principal               |
| `--color-text-muted`     | #64748B | Texto sutil / placeholders    |

## Responsive con Tailwind

| Breakpoint | Clase     | Destino          |
| ---------- | --------- | ---------------- |
| 0px        | (base)    | Móvil vertical   |
| 640px      | `sm:`     | Móvil horizontal |
| 768px      | `md:`     | Tablet vertical  |
| 1024px     | `lg:`     | Tablet horizontal |
| 1280px     | `xl:`     | Desktop          |
| 1536px     | `2xl:`    | Desktop grande   |

## Glassmorphism

```css
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
}
```

## Hero Image

La imagen principal usa `::before` con máscara radial (vendor prefix antes que standard):

```css
.home-grid-image::before {
  -webkit-mask-image: radial-gradient(...);
  mask-image: radial-gradient(...);
  mix-blend-mode: screen;
}
```

## Validación de contraseñas (passwordStrength.css)

```css
.strength-bar-bg              → track gris de 6px
.strength-bar-fill            → fill animado (300ms transition)
  [data-score="0"] [data-score="1"]  → rojo #ef4444
  [data-score="2"]                   → amarillo #f59e0b
  [data-score="3"]                   → verde #22c55e
  [data-score="4"]                   → verde oscuro #16a34a
.strength-label               → label "Muy débil" / "Débil" / etc.
.strength-suggestions         → lista <ul> con sugerencias de zxcvbn
```

## Error Boundary

```css
.error-boundary-fallback      → contenedor centrado, min-height 240px
.error-boundary-detail        → bloque <pre> con error en dev (borde rojo)
.error-boundary-content .btn-primary → botón "Recargar" con gradiente púrpura
```

## Animaciones

| Nombre        | Duración | Uso                        |
| ------------- | -------- | -------------------------- |
| `fadeIn`      | 0.3-0.6s | Cards, secciones           |
| `slideUp`     | 0.5-0.8s | Hero, formulario           |
| `popIn`       | 0.5s     | Valores numéricos          |
| `glow`        | 4s       | Botón primario             |
| `pulseGlow`   | 6-8s     | Fondo del hero             |

Todas se desactivan con `prefers-reduced-motion: reduce`.

## Componentes de Autenticación

```css
.auth-card        → glassmorphism + padding responsive
.auth-input       → min-h-[48px] mobile / min-h-[44px] desktop
.auth-submit-btn  → deshabilitado si !passwordStrength?.isStrong
.auth-spinner     → animación circular para estado de carga
```
