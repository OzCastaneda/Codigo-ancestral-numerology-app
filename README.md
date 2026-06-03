# Código Ancestral ✨

Tu código ancestral, revelado en números. **Numerología pitagórica y cabalística.**

Aplicación web SPA que combina la sabiduría del matemático griego Pitágoras con la tradición mística judía del Sepher Yetzirah, el Árbol de la Vida y las 22 letras hebreas. Incluye autenticación con Supabase, reportes PDF descargables, gráficas interactivas y sistema de contacto funcional.

![React](https://img.shields.io/badge/React-18-8B5CF6?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-06B6D4?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-0EA5E9?style=flat&logo=tailwindcss)
![Supabase](https://img.shields.io/badge/Supabase-2-3ECF8E?style=flat&logo=supabase)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat&logo=framer)
![Recharts](https://img.shields.io/badge/Recharts-2-22D3EE?style=flat)
![License](https://img.shields.io/badge/license-MIT-F59E0B?style=flat)

---

## ✨ Características

- **Autenticación Supabase**: Login/register con sesión persistente, protected routes
- **Dashboard personal**: Historial de reportes guardados por usuario
- **Cálculo numerológico completo**: Número de Destino, Alma, Personalidad y Misión de Vida
- **Interpretaciones detalladas**: Significado, fortalezas, debilidades, aprendizajes kármicos y compatibilidades (44 entradas)
- **Correspondencias cabalísticas**: Las 22 letras hebreas del Sepher Yetzirah asociadas a cada número
- **Perfil astrológico hebreo**: Signo zodiacal, letras del Sepher Yetzirah y planeta regente
- **Árbol de la Vida**: Los 10 Sephiroth con visualización SVG interactiva
- **Gráficas interactivas**: Radar chart energético, donut charts por número, timeline espiritual
- **Reportes PDF profesionales**: Descarga tu perfil completo con portada, interpretaciones y datos cabalísticos
- **Dashboard por pestañas**: Resultados en 6 tabs (Resumen, Interpretaciones, Gráficas, Árbol, Energías, PDF)
- **Sistema de contacto**: Botones funcionales WhatsApp/Email + formulario con EmailJS + fallback mailto
- **Interfaz moderna**: Glassmorphism, tipografía premium (Outfit + Inter), animaciones Framer Motion
- **Responsive mobile-first**: TailwindCSS responsive utilities (sm/md/lg/xl/2xl), hamburger menu, touch targets 44×44px
- **Dark mode premium**: Paleta oscura cósmica con detalles dorados, violetas y cian

## 🚀 Stack Tecnológico

| Tecnología             | Versión | Propósito                               |
| ---------------------- | ------- | --------------------------------------- |
| React                  | 18      | UI framework                            |
| Vite                   | 5       | Build tool                              |
| React Router           | 7       | Navegación SPA con lazy loading         |
| Zustand                | 5       | Estado global                           |
| TailwindCSS            | 4       | Utilidades CSS responsive mobile-first  |
| Supabase               | 2       | Autenticación + base de datos           |
| React Hook Form        | 7       | Formularios con validación              |
| Zod                    | 3       | Esquemas de validación                  |
| Framer Motion          | 11      | Animaciones                             |
| Lucide React           | ^0.500+ | Iconografía moderna                     |
| Recharts               | 2       | Gráficas interactivas (radar, donut)    |
| @react-pdf/renderer    | 4       | Generación de PDF server-side           |
| @emailjs/browser       | 4       | Envío de formularios sin backend        |

## 📁 Estructura del Proyecto

```
src/
├── App.jsx                         # Entry point con BrowserRouter + AppProviders
├── main.jsx                        # Render root + imports CSS
├── components/
│   ├── layout/
│   │   ├── Layout.jsx              # Wrapper con orbs decorativos
│   │   ├── Header.jsx              # Hero + nav responsiva (hamburger mobile)
│   │   ├── AppFooter.jsx           # Footer responsive 1/2/3 columnas
│   │   └── Toast.jsx               # Notificaciones animadas
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
│   │   ├── ResultsTabs.jsx         # Sistema de 6 tabs responsive (iconos mobile)
│   │   └── tabs/
│   │       ├── ResumenTab.jsx      # Resumen con energía dominante
│   │       ├── InterpretacionesTab.jsx  # Accordion de interpretaciones
│   │       ├── GraficasTab.jsx     # Charts con espacio amplio
│   │       ├── ArbolTab.jsx        # Árbol + info + kabbalah
│   │       ├── EnergiasTab.jsx     # Planetas, arquetipos, colores
│   │       └── PDFTab.jsx          # Descarga de reporte PDF
│   └── contact/
│       ├── ContactSection.jsx      # Sección de contacto responsive grid
│       ├── ContactButtons.jsx      # WhatsApp + Email funcionales
│       ├── ContactForm.jsx         # Formulario con EmailJS + mailto
│       └── ConsultationCards.jsx   # Cards de servicios
├── context/
│   └── AuthContext.jsx             # Contexto de autenticación Supabase
├── features/
│   └── numerology/
│       ├── engine/
│       │   └── numerologyEngine.js # Funciones puras de cálculo
│       ├── data/
│       │   ├── numerologyData.js   # Base de datos cabalística (frozen)
│       │   └── numerologyInterpretations.js  # 44 interpretaciones
│       ├── components/
│       │   ├── ResultsGrid.jsx     # Grid de 4 cards numerológicas
│       │   ├── CalculationTabs.jsx # Tabs con detalle de cálculos
│       │   ├── InterpretationSection.jsx  # Interpretaciones
│       │   ├── KabbalisticSection.jsx     # Cartas cabalísticas
│       │   ├── AstrologyProfile.jsx       # Perfil zodiacal hebreo
│       │   └── helpers.js          # Utilidades (colorHex)
│       └── services/
│           └── numerologyService.js # Servicio que agrega perfil completo
├── hooks/
│   └── useAuth.js                  # Hook de autenticación
├── lib/
│   └── supabase.js                 # Cliente Supabase (createClient)
├── pages/
│   ├── Home/
│   │   └── HomePage.jsx            # Grid responsive 1/2/3 columnas
│   ├── Results/
│   │   └── ResultsPage.jsx         # Resultados con sistema de tabs
│   ├── Login/
│   │   ├── LoginPage.jsx           # Página de inicio de sesión
│   │   └── LoginForm.jsx           # Formulario con React Hook Form + Zod
│   ├── Register/
│   │   ├── RegisterPage.jsx        # Página de registro
│   │   └── RegisterForm.jsx        # Formulario con validación + confirmación
│   ├── Dashboard/
│   │   └── DashboardPage.jsx       # Dashboard con historial de reportes
│   ├── About/
│   │   └── AboutPage.jsx           # Información del sistema
│   ├── Contact/
│   │   └── ContactPage.jsx         # Página de contacto
│   └── NotFound/
│       └── NotFoundPage.jsx        # 404 animado
├── pdf/
│   ├── NumerologyReport.jsx        # Documento PDF principal
│   ├── PDFDownloadButton.jsx       # Botón de descarga con estados
│   ├── components/
│   │   ├── PDFCover.jsx            # Portada A4 oscura premium
│   │   ├── PDFSection.jsx          # Sección con título y divider
│   │   ├── PDFSectionTitle.jsx     # Título de sección 22px
│   │   ├── PDFCard.jsx             # Card con variantes de color
│   │   ├── PDFNumerologyCard.jsx   # Card de resultado numerológico
│   │   ├── PDFInterpretationCard.jsx  # Card de interpretación
│   │   ├── PDFBulletList.jsx       # Lista con bullets
│   │   ├── PDFTextBlock.jsx        # Bloque de texto
│   │   ├── PDFPageWrapper.jsx      # Wrapper de página estándar
│   │   └── PDFFooter.jsx           # Footer con branding
│   └── utils/
│       ├── helpers.js              # Formateo de fechas + significados
│       └── fonts.js                # Registro de fuentes
├── providers/
│   └── AppProviders.jsx            # Provider composition (AuthProvider)
├── routes/
│   ├── index.jsx                   # Configuración de rutas con lazy
│   └── ProtectedRoute.jsx          # Guard de autenticación
├── services/
│   ├── authService.js              # signUp / signIn / signOut / getCurrentUser
│   └── reportService.js            # createReport / getUserReports / getReportById
├── store/
│   └── useNumerologyStore.js       # Store Zustand
└── styles/
    ├── tokens.css                  # TailwindCSS + variables + tema
    ├── global.css                  # Reset, animaciones, scrollbar
    ├── components.css              # Todos los estilos de componentes
    └── responsive.css              # Media queries (reducidas, prefers-reduced-motion)
```

## 🧠 Lógica Numerológica

### Números calculados

| Número            | Cálculo                                     | Significado                              |
| ----------------- | ------------------------------------------- | ---------------------------------------- |
| **Destino**       | Suma reducida de la fecha de nacimiento     | Camino de vida y propósito existencial   |
| **Alma**          | Suma reducida de las vocales del nombre     | Deseos internos y motivaciones profundas |
| **Personalidad**  | Suma reducida de las consonantes del nombre | Imagen externa y percepción de los demás |
| **Misión**        | Destino + Alma (reducido)                   | Propósito esencial y contribución única  |

### Números maestros

Los números **11, 22, 33, 44** no se reducen — se consideran números maestros con vibraciones espirituales elevadas.

## 🎨 Diseño Visual

- **Paleta**: Fondo `#070B1A`, primario `#8B5CF6` (púrpura), secundario `#06B6D4` (cian), acento `#F59E0B` (dorado)
- **Glassmorphism**: Cards con `backdrop-filter: blur(20px)` y bordes semitransparentes
- **Orbes decorativos**: 3 esferas con blur animadas en el fondo
- **Hero image**: Imagen del numerólogo con máscara radial, blend mode screen y efecto starfield
- **Tipografía**: Outfit para títulos, Inter para cuerpo
- **Animaciones**: Fade-in, slide-up, glow pulsante, float, pop-in con Framer Motion
- **Responsive**: Tailwind utilities con enfoque mobile-first; hamburger menu en mobile, icon-only tabs, grid adaptativo

## 🔐 Autenticación

Sistema completo con Supabase:

| Ruta        | Descripción                          | Protegida |
| ----------- | ------------------------------------ | --------- |
| `/login`    | Inicio de sesión                     | ❌        |
| `/register` | Registro de cuenta                   | ❌        |
| `/dashboard`| Dashboard personal con historial     | ✅        |

**Flujo**: El `AuthContext` escucha `onAuthStateChange` de Supabase y persiste la sesión automáticamente. `ProtectedRoute` redirige a `/login` si no hay sesión. El Header muestra "Ingresar" o "Dashboard" según el estado de auth.

## 📦 Instalación

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

## 🔧 Scripts

| Comando           | Descripción                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Inicia servidor de desarrollo  |
| `npm run build`   | Build de producción            |
| `npm run preview` | Previsualiza build localmente  |

## 🌐 Rutas

| Ruta        | Página                   | Lazy Loading |
| ----------- | ------------------------ | ------------ |
| `/`         | Home (hero + form)       | ❌           |
| `/results`  | Resultados (tabs)        | ✅           |
| `/about`    | Información              | ✅           |
| `/contact`  | Contacto                 | ✅           |
| `/login`    | Inicio de sesión         | ✅           |
| `/register` | Registro                 | ✅           |
| `/dashboard`| Dashboard (protegida)    | ✅           |
| `*`         | 404                      | ✅           |

## 📄 PDF Report

El sistema de PDF genera un reporte de 4+ páginas:

| Página | Contenido                                |
| ------ | ---------------------------------------- |
| 1      | Portada oscura premium con nombre y fecha |
| 2      | Resultados numerológicos (4 cards)       |
| 3      | Interpretaciones 1-2 (Destino + Alma)    |
| 4      | Interpretaciones 3-4 (Personalidad + Misión) |
| 5+     | Correspondencias cabalísticas + Astrología |

## 📬 Contacto

- **WhatsApp**: [wa.me/573228352645](https://wa.me/573228352645)
- **Email**: angelusignis777@gmail.com
- **Formulario**: Página `/contact` con validación y EmailJS (fallback mailto:)

## 👤 Autor

**Oswaldo Castañeda** — Desarrollado con amor

## 📄 Licencia

MIT
