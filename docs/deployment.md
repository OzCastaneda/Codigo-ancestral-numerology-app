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
│   ├── index-*.css              (~42 kB)
│   ├── index-*.js               (~352 kB)  — bundle principal
│   ├── ResultsPage-*.js         (~79 kB)   — lazy loaded
│   ├── ContactPage-*.js         (~3 kB)    — lazy loaded
│   ├── AboutPage-*.js           (~2 kB)    — lazy loaded
│   └── NotFoundPage-*.js        (~1.3 kB)  — lazy loaded
```

## Previsualización Local

```bash
npm run preview
```

## Opciones de Hosting

### Vercel (recomendado)

1. Conecta el repositorio en [vercel.com](https://vercel.com)
2. Framework: `Vite`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Despliegue automático en cada push

### Netlify

1. Conecta el repositorio en [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Agrega `redirects` en `public/_redirects`:
   ```
   /*    /index.html   200
   ```

### GitHub Pages

1. En `vite.config.js`: `base: '/<repo-name>/'`
2. `npm run build`
3. Desplegar `dist/` a la branch `gh-pages`

## Variables de Entorno

Crear archivo `.env` en la raíz:

```env
# EmailJS (opcional — si no se configura, el formulario usa mailto:)
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=xxx
```

## Performance

- **Lazy loading** automático en rutas secundarias y tabs de resultados
- **CSS crítico** inline en el HTML
- **Iconos SVG** con Lucide (sin dependencias de font icons)
- **Gzip** habilitado por defecto en Vite
- **PDF con @react-pdf/renderer** cargado solo en ResultsPage (lazy)
- **Recharts** cargado solo en GraficasTab (lazy)
