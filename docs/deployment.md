# Despliegue

## Build de Producción

```bash
npm run build
```

Genera en `dist/`:
```
dist/
├── index.html                   (~0.9 kB)
├── assets/
│   ├── imagenes/numerologo.png  (hero image)
│   ├── index-*.css              (~99 kB)
│   ├── index-*.js               (~575 kB)  — bundle principal
│   ├── ResultsPage-*.js         (~137 kB)  — lazy loaded
│   ├── LoginPage-*.js           (~3.8 kB)
│   ├── RegisterPage-*.js        (~825 kB)  — incluye zxcvbn
│   ├── DashboardPage-*.js       (~9 kB)
│   ├── ReportDetailPage-*.js    (~2.4 kB)
│   ├── ContactPage-*.js         (~13 kB)
│   ├── AboutPage-*.js           (~2.3 kB)
│   ├── NotFoundPage-*.js        (~1 kB)
│   ├── PDFTab-*.js              (~1.5 MB)  — @react-pdf/renderer
│   ├── GraficasTab-*.js         (~366 kB)  — Recharts
│   ├── InterpretacionesTab-*.js (~22 kB)
│   ├── HerenciasTab-*.js        (~17 kB)
│   ├── tikunCompleteData-*.js   (~35 kB)
│   └── (astrology sub-sections) (~2-5 kB c/u)
```

## Previsualización Local

```bash
npm run preview
```

## Tests

```bash
npm run test
```

Ejecuta Vitest con jsdom. Los tests de servicios usan mocked Supabase.

## Opciones de Hosting

### Vercel (recomendado)

1. Conecta el repositorio en [vercel.com](https://vercel.com)
2. Framework: `Vite`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Variables de entorno: Agregar `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_EMAILJS_*`
6. Despliegue automático en cada push

### Netlify

1. Conecta el repositorio en [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Agrega `redirects` en `public/_redirects`:
   ```
   /*    /index.html   200
   ```
5. Variables de entorno en Dashboard → Site settings → Environment variables

### GitHub Pages

1. En `vite.config.js`: `base: '/<repo-name>/'`
2. `npm run build`
3. Desplegar `dist/` a la branch `gh-pages`
4. Las variables de entorno deben estar en `.env` durante el build

## Variables de Entorno

```env
# Supabase (OBLIGATORIO para auth y base de datos)
VITE_SUPABASE_URL=https://wtkwpppbwhtshuxqgasi.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...

# EmailJS (opcional — si no se configura, el formulario usa mailto:)
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=xxx
```

> **Nota**: Si `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` no están configurados, el cliente Supabase se crea como `null` y los services lanzan un error claro.

## Performance

- **Lazy loading** en rutas secundarias, tabs de resultados, sub-secciones de astrología, y páginas de auth
- **ErrorBoundary** aísla fallos por sección
- **Caché de reportes** con TTL 5 minutos en el store
- **PDF deduplicado** con hash SHA-256
- **Selectores Zustand individuales** evitan re-renders innecesarios
- **CSS crítico** inline en el HTML
- **Iconos SVG** con Lucide (sin dependencias de font icons)
- **Gzip** habilitado por defecto en Vite
- **TailwindCSS JIT** genera solo las utilidades usadas
