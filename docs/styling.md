# Sistema de Estilos

## Arquitectura CSS

```
src/styles/
├── tokens.css        → TailwindCSS + variables CSS (colores, fuentes, radius)
├── global.css        → Reset, body, animaciones @keyframes, scrollbar, print
├── components.css    → Todos los estilos de componentes (~1950 líneas)
└── responsive.css    → Media queries (breakpoints 1100px, 900px, 768px, 480px)
```

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

Todas las animaciones se desactivan con `prefers-reduced-motion: reduce`.

## Hero Image (Wizard)

La imagen principal usa un `::before` con máscara radial para difuminar los bordes:

```css
.home-hero-image::before {
  mask-image: radial-gradient(ellipse 80% 90% at 50% 45%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%);
  mix-blend-mode: screen;
  filter: drop-shadow(0 0 60px rgba(139, 92, 246, 0.3));
}
```

Un `::after` aplica un overlay de fusión con el fondo oscuro, y `.home-hero-starfield` genera estrellas parpadeantes mediante `radial-gradient` multi-capa animado.

## Secciones principales del layout

| Sección                     | Clase CSS            | Layout                          |
| --------------------------- | -------------------- | ------------------------------- |
| Hero portada                | `.home-hero`         | flex row 50/50 (image + content) |
| Tabs de resultados          | `.results-tabs`      | flex sticky nav + content       |
| Grid de contacto            | `.contact-grid`      | 2-column grid                   |
| Árbol de la Vida            | `.tree-layout`       | 2-column grid                   |
| Gráficas                    | `.charts-grid`       | 2-column grid                   |

## Responsive

| Breakpoint | Destino            | Cambios clave                              |
| ---------- | ------------------ | ------------------------------------------ |
| 1100px     | Tablet landscape   | Hero → column, image 300px top banner      |
| 900px      | Tablet             | Contact grid → 1 col, tree → 1 col         |
| 768px      | Tablet portrait    | Tabs icons only, 2 col results             |
| 480px      | Mobile             | Image 220px, padding reducido              |
