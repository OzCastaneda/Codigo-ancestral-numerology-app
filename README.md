# Código Ancestral

Tu código ancestral, revelado en números. **Numerología pitagórica y cabalística.**

Aplicación web SPA que combina la sabiduría del matemático griego Pitágoras con la tradición mística judía del Sepher Yetzirah, el Árbol de la Vida y las 22 letras hebreas. Incluye autenticación con Supabase, reportes PDF descargables, gráficas interactivas, validación de contraseñas con zxcvbn y sistema de contacto funcional.

![React](https://img.shields.io/badge/React-18-8B5CF6?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-06B6D4?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-0EA5E9?style=flat&logo=tailwindcss)
![Supabase](https://img.shields.io/badge/Supabase-2-3ECF8E?style=flat&logo=supabase)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat&logo=framer)
![Recharts](https://img.shields.io/badge/Recharts-2-22D3EE?style=flat)
![Vitest](https://img.shields.io/badge/Vitest-4-6B8F71?style=flat&logo=vitest)
![License](https://img.shields.io/badge/license-MIT-F59E0B?style=flat)

---

## Características

- **Autenticación Supabase**: Login/register con sesión persistente, protected routes
- **Validación de contraseñas**: zxcvbn con barra de fortaleza visual y botón deshabilitado si score < 3
- **ErrorBoundary**: Aislamiento de errores por sección — si un tab falla, los demás siguen funcionando
- **Dashboard personal**: Historial de reportes guardados por usuario con paginación y caché
- **Cálculo numerológico completo**: Número de Destino, Alma, Personalidad y Misión de Vida
- **Interpretaciones detalladas**: Significado, fortalezas, debilidades, aprendizajes kármicos y compatibilidades (44 entradas)
- **Correspondencias cabalísticas**: Las 22 letras hebreas del Sepher Yetzirah asociadas a cada número
- **Perfil astrológico hebreo**: Signo zodiacal, letras del Sepher Yetzirah y planeta regente
- **Astrología Cabalística expandida**: 7 secciones con navegación vertical — Resumen Astrológico, Tu Tikun (Corrección), Vida Anterior, Tarea Espiritual, Desafíos y Soluciones, Letras Hebreas, Períodos del Año. Basado en el libro *"Astrología Cabalística y el Significado de Nuestras Vidas"* del Rav Philip S. Berg
- **Árbol de la Vida**: Los 10 Sephiroth con visualización SVG interactiva
- **Esquema psico-energético**: 7 planos del ser
- **Herencia familiar**: Análisis de legados paternos
- **Ciclos y tránsitos**: Año personal, ciclo de 9 años, etapas de vida
- **Gráficas interactivas**: Radar chart energético, donut charts por número, timeline espiritual
- **Reportes PDF profesionales**: Descarga tu perfil completo con portada, interpretaciones y datos cabalísticos
- **Dashboard por pestañas**: Resultados en 9 tabs con lazy loading individual
- **Code splitting**: Sub-secciones de astrología cargadas bajo demanda (~55 KB diferidos del bundle inicial)
- **Layout 3 columnas**: Sidebar izquierdo con números clave + letra hebrea + ciclo actual, contenido central, sidebar derecho con stats rápidos
- **Caché de reportes**: TTL de 5 minutos con refresco manual
- **PDF deduplicado**: Subida a Supabase Storage con hash SHA-256 para evitar duplicados
- **Sistema de contacto**: Botones funcionales WhatsApp/Email + formulario con EmailJS + fallback mailto
- **Interfaz moderna**: Glassmorphism, tipografía dual serif/sans-serif, animaciones Framer Motion
- **Responsive mobile-first**: TailwindCSS responsive utilities, hamburger menu, touch targets 44×44px
- **Dark mode premium**: Paleta oscura cósmica con detalles dorados, violetas y cian
- **Unit tests**: Vitest con mocks de Supabase para la capa de servicios

## Stack Tecnológico

| Tecnología             | Versión | Propósito                               |
| ---------------------- | ------- | --------------------------------------- |
| React                  | 18      | UI framework                            |
| Vite                   | 5       | Build tool                              |
| React Router           | 7       | Navegación SPA con lazy loading         |
| Zustand                | 5       | Estado global con selectores individuales |
| TailwindCSS            | 4       | Utilidades CSS responsive mobile-first  |
| Supabase               | 2       | Autenticación + base de datos           |
| React Hook Form        | 7       | Formularios con validación              |
| Zod                    | 3       | Esquemas de validación                  |
| zxcvbn                 | 4       | Análisis de fortaleza de contraseñas    |
| Framer Motion          | 11      | Animaciones                             |
| Lucide React           | ^0.500+ | Iconografía moderna                     |
| Recharts               | 2       | Gráficas interactivas (radar, donut)    |
| @react-pdf/renderer    | 4       | Generación de PDF server-side           |
| @emailjs/browser       | 4       | Envío de formularios sin backend        |
| Vitest                 | 4       | Testing unitario                        |

## Estructura del Proyecto

```
src/
├── App.jsx                         # Entry point con BrowserRouter + AppProviders
├── main.jsx                        # Render root + imports CSS
├── components/
│   ├── layout/
│   │   ├── Layout.jsx              # Wrapper con orbs decorativos
│   │   ├── Header.jsx              # Hero + nav responsiva (hamburger mobile)
│   │   ├── AppFooter.jsx           # Footer responsive 1/2/3 columnas
│   │   ├── Toast.jsx               # Notificaciones animadas
│   │   └── ErrorBoundary.jsx       # Captura errores por sección (class component)
│   ├── forms/
│   │   └── InputForm.jsx           # Formulario + guardado en Supabase
│   ├── charts/
│   │   ├── chartConfig.js          # Colores y utilidades gráficas
│   │   ├── EnergyRadarChart.jsx    # Radar chart energético
│   │   ├── NumberDonutChart.jsx    # Donut charts por número
│   │   ├── SpiritualTimeline.jsx   # Timeline espiritual
│   │   └── ChartsDashboard.jsx     # Dashboard visual unificado
│   ├── kabbalah/
│   │   └── TreeOfLife.jsx          # Árbol de la Vida SVG interactivo
│   ├── results/
│   │   ├── ResultsTabs.jsx         # Sistema de 9 tabs con ErrorBoundary por tab
│   │   └── tabs/
│   │       ├── ResumenTab.jsx      # Resumen con energía dominante
│   │       ├── InterpretacionesTab.jsx
│   │       ├── GraficasTab.jsx
│   │       ├── ArbolTab.jsx
│   │       ├── EnergiasTab.jsx     # 7 sub-secciones lazy con Suspense
│   │       ├── TransitosTab.jsx
│   │       ├── EsquemaTab.jsx
│   │       ├── HerenciasTab.jsx
│   │       ├── PDFTab.jsx          # Descarga de reporte PDF
│   │       └── astrology/          # Componentes lazy de Astrología
│   │           ├── ResumenAstrologico.jsx
│   │           ├── TuTikunSection.jsx
│   │           ├── VidaAnteriorSection.jsx
│   │           ├── TareaEspiritualSection.jsx
│   │           ├── DesafiosSolucionesSection.jsx
│   │           ├── LetrasHebreasSection.jsx
│   │           └── PeriodosAnoSection.jsx
│   └── contact/
│       ├── ContactSection.jsx
│       ├── ContactButtons.jsx
│       ├── ContactForm.jsx
│       └── ConsultationCards.jsx
├── context/
│   └── AuthContext.jsx             # Contexto de autenticación Supabase
├── features/
│   └── numerology/
│       ├── engine/
│       │   └── numerologyEngine.js # Funciones puras de cálculo
│       ├── data/
│       │   ├── numerologyData.js   # Base de datos cabalística (frozen)
│       │   └── numerologyInterpretations.js
│       ├── components/
│       │   ├── ResultsGrid.jsx
│       │   ├── CalculationTabs.jsx
│       │   ├── InterpretationSection.jsx
│       │   ├── KabbalisticSection.jsx
│       │   ├── AstrologyProfile.jsx
│       │   └── helpers.js
│       └── services/
│           └── numerologyService.js
├── data/
│   ├── astrologiaKabalisticaData.js
│   └── tikunCompleteData.js        # ZODIAC_OPPOSITES, TIKUN_PREVIOUS_LIFE, TIKUN_TABLE
├── hooks/
│   └── useAuth.js                  # Hook de autenticación
├── lib/
│   └── supabase.js                 # Cliente Supabase (createClient + ensureClient)
├── pages/
│   ├── Home/HomePage.jsx
│   ├── Results/ResultsPage.jsx     # Layout 3 columnas con ErrorBoundary
│   ├── Login/LoginPage.jsx + LoginForm.jsx
│   ├── Register/RegisterPage.jsx + RegisterForm.jsx  # Validación zxcvbn
│   ├── Dashboard/DashboardPage.jsx # Paginación + caché de reportes
│   ├── About/AboutPage.jsx
│   ├── Contact/ContactPage.jsx
│   ├── ReportDetail/ReportDetailPage.jsx
│   └── NotFound/NotFoundPage.jsx
├── pdf/
│   ├── NumerologyReport.jsx
│   ├── PDFDownloadButton.jsx
│   ├── components/ (11 subcomponentes)
│   └── utils/helpers.js + fonts.js
├── providers/
│   └── AppProviders.jsx
├── routes/
│   ├── index.jsx                   # Rutas con lazy + ErrorBoundary en Dashboard
│   └── ProtectedRoute.jsx
├── services/
│   ├── authService.js              # signUp / signIn / signOut / getCurrentUser
│   ├── reportService.js            # CRUD con paginación y caché
│   └── storageService.js           # Subida PDF con hash SHA-256 dedup
├── store/
│   └── useNumerologyStore.js       # Store Zustand con 15+ selectores
├── utils/
│   └── passwordValidator.js        # validatePassword() con zxcvbn
├── __tests__/
│   └── services/
│       └── reportService.test.js   # 10 tests con mocked Supabase
└── styles/
    ├── fonts.css
    ├── tokens.css
    ├── global.css
    ├── components.css
    ├── passwordStrength.css        # Barra de fortaleza de contraseñas
    └── responsive.css
```

## Lógica Numerológica

### Números calculados

| Número            | Cálculo                                     | Significado                              |
| ----------------- | ------------------------------------------- | ---------------------------------------- |
| **Destino**       | Suma reducida de la fecha de nacimiento     | Camino de vida y propósito existencial   |
| **Alma**          | Suma reducida de las vocales del nombre     | Deseos internos y motivaciones profundas |
| **Personalidad**  | Suma reducida de las consonantes del nombre | Imagen externa y percepción de los demás |
| **Misión**        | Destino + Alma (reducido)                   | Propósito esencial y contribución única  |

### Números maestros

Los números **11, 22, 33, 44** no se reducen — se consideran números maestros con vibraciones espirituales elevadas.

## Astrología Cabalística

Sección expandida basada en el libro *"Astrología Cabalística y el Significado de Nuestras Vidas"* del **Rav Philip S. Berg**, director del Centro de la Cábala.

### Sistema de 7 secciones con navegación vertical

| Sección | Contenido |
| ------- | --------- |
| **Resumen Astrológico** | 4 cards: Signo Convencional, Tikun (corrección), Vida Anterior, Misión Espiritual |
| **Tu Tikun** | Corrección espiritual determinada por año de nacimiento (Tikun Table), reto principal, síntesis del alma |
| **Vida Anterior** | Determinada por el signo opuesto al zodiacal (no al Tikun). Banner de transición, fortalezas heredadas |
| **Tarea Espiritual** | Objetivo general, 7 pasos de transformación, virtudes, lecciones clave |
| **Desafíos y Soluciones** | 4 desafíos por signo con origen kabalístico + solución práctica |
| **Letras Hebreas** | Letra del mes de nacimiento + letra del signo del Tikun, meditación |
| **Períodos del Año** | Tabla de 12 meses hebreos, mes personal, mes del Tikun, ciclos de 9 años |

### Tikun (sistema Rav Berg)

- **Tikun**: Corrección en hebreo. Determinado por el año de nacimiento según la **TIKUN_TABLE** (NO por el opuesto del signo zodiacal)
- **Vida anterior**: Determinada por el signo opuesto al zodiacal (Nodo Sur) — corregido: antes se calculaba incorrectamente como el opuesto del Tikun
- **Dos signos importantes**: Signo zodiacal convencional (natal) + Signo del Tikun
- **Libre albedrío**: La Cábala no es determinista — el Tikun muestra el camino, no lo impone

## Seguridad

### Validación de contraseñas (zxcvbn)

El formulario de registro utiliza **zxcvbn** (Dropbox) para evaluar la fortaleza de la contraseña en tiempo real:

- **Barra visual**: Rojo (score 0-1) → Amarillo (2) → Verde (3-4), ancho proporcional
- **Botón deshabilitado**: Mientras `score < 3` el botón "Crear Cuenta" está gris con texto "Crea una contraseña más fuerte"
- **Sugerencias**: zxcvbn devuelve sugeruencias de mejora que se muestran como lista
- **Zod**: Validación de mínimo 8 caracteres (`.min(8)`)
- **Feedback inmediato**: Se actualiza en cada tecleo vía `onChange`

### ErrorBoundary

Cada sección crítica está envuelta en un `<ErrorBoundary>` que captura errores de renderizado:

- **ResultsTabs** y cada tab individualmente — si un tab falla, los demás siguen funcionando
- **DashboardPage** — aislado del resto de la app
- Muestra "Algo salió mal en esta sección" + botón "Recargar"
- En desarrollo (`import.meta.env.DEV`) muestra el error en un bloque `<pre>`

### Caché y optimizaciones

- **Report cache**: Las consultas a Supabase se cachean 5 minutos por página (`userId_page`)
- **PDF dedup**: Subida a Storage con hash SHA-256; si el mismo blob se sube dentro de 1 hora, retorna URL cacheada
- **Paginación**: `getUserReports(page, pageSize)` con `.range()` y conteo exacto
- **Code splitting**: 7 sub-secciones de astrología cargadas con `React.lazy()` (~55 KB diferidos)

## Diseño Visual

### Tipografía

| Fuente | Uso |
| ------ | --- |
| **Playfair Display** | Headings, títulos decorativos |
| **Crimson Text** | Cuerpo de texto serif |
| **Inter** | UI, navegación, tabs, formularios |
| **JetBrains Mono** | Bloques de código, cálculos |

### Layout

- **Home**: Hero centrado con gradient text + badge + CTA + features grid + formulario
- **Resultados**: Layout 3 columnas `[sidebar 260px | main 1fr | sidebar 220px]` con sidebars sticky
- **Astrología**: Sidebar vertical con 7 tabs en desktop, dropdown `<select>` en mobile
- **Dashboard**: max-w-720px centrado, header flexible, paginación

### Paleta

- **Fondo**: `#050814` → `#0B1020` (gradiente profundo)
- **Primario**: `#8B5CF6` (púrpura)
- **Secundario**: `#06B6D4` (cian)
- **Acento**: `#F59E0B` (dorado/ámbar)
- **Crimson**: `#DC143C` (acento de fuego)
- **Glassmorphism**: Cards con `backdrop-filter: blur(20px)` y bordes semitransparentes

## Autenticación

Sistema completo con Supabase:

| Ruta        | Descripción                          | Protegida |
| ----------- | ------------------------------------ | --------- |
| `/login`    | Inicio de sesión                     | ❌        |
| `/register` | Registro con validación zxcvbn       | ❌        |
| `/dashboard`| Dashboard personal con historial     | ✅        |
| `/report/:id`| Detalle de reporte guardado         | ✅        |

**Flujo**: El `AuthContext` escucha `onAuthStateChange` de Supabase y persiste la sesión automáticamente. `ProtectedRoute` redirige a `/login` si no hay sesión.

## Instalación

```bash
git clone <repo-url>
cd numerologia-app
npm install
npm run dev
```

### Variables de entorno

Crear archivo `.env`:

```env
# Supabase (obligatorio para auth)
VITE_SUPABASE_URL=https://wtkwpppbwhtshuxqgasi.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# EmailJS (opcional — fallback a mailto:)
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=xxx
```

## Scripts

| Comando           | Descripción                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Inicia servidor de desarrollo  |
| `npm run build`   | Build de producción            |
| `npm run preview` | Previsualiza build localmente  |
| `npm run test`    | Ejecuta tests (Vitest)         |

## Testing

El proyecto usa **Vitest** con **jsdom** para tests unitarios:

```bash
npm run test
```

Los tests mockean `ensureClient()` de Supabase para evitar dependencias externas:

- `src/__tests__/services/reportService.test.js` — 10 tests para CRUD de reportes con cliente mockeado

## Rutas

| Ruta         | Página                   | Lazy Loading |
| ------------ | ------------------------ | ------------ |
| `/`          | Home (hero + form)       | ❌           |
| `/results`   | Resultados (3 columnas)  | ✅           |
| `/about`     | Información              | ✅           |
| `/contact`   | Contacto                 | ✅           |
| `/login`     | Inicio de sesión         | ✅           |
| `/register`  | Registro                 | ✅           |
| `/dashboard` | Dashboard (protegida)    | ✅           |
| `/report/:id`| Detalle de reporte       | ✅           |
| `*`          | 404                      | ✅           |

## PDF Report

El sistema de PDF genera un reporte de 4+ páginas con @react-pdf/renderer:

| Página | Contenido                                |
| ------ | ---------------------------------------- |
| 1      | Portada oscura premium con nombre y fecha |
| 2      | Resultados numerológicos (4 cards)       |
| 3-4    | Interpretaciones (Destino, Alma, Personalidad, Misión) |
| 5+     | Correspondencias cabalísticas + Astrología |

## Contacto

- **WhatsApp**: [wa.me/573228352645](https://wa.me/573228352645)
- **Email**: angelusignis777@gmail.com
- **Formulario**: Página `/contact` con validación y EmailJS (fallback mailto:)

## Autor

**Oswaldo Castañeda** — Desarrollado con amor

## Licencia

MIT
