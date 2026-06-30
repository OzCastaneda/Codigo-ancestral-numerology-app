# Componentes

## Árbol de Componentes

```
Layout
├── Header (Hero + Nav responsiva, hamburger mobile)
├── Routes
│   ├── HomePage (grid 1/2/3 cols responsive)
│   │   ├── Hero image (hidden en tablet/mobile)
│   │   ├── Descripción + Benefits list
│   │   └── InputForm
│   ├── ResultsPage (lazy)  ← envuelto en ErrorBoundary
│   │   └── ResultsTabs (icon-only mobile, full desktop)
│   │       └── ErrorBoundary key={activeTab}  ← cada tab aislado
│   │           ├── ResumenTab (lazy)
│   │           │   ├── ResultsGrid → NumberCard × 4
│   │           │   ├── DominantEnergy
│   │           │   └── QuickInsights
│   │           ├── InterpretacionesTab (lazy)
│   │           │   └── AccordionItem × 4
│   │           ├── GraficasTab (lazy)
│   │           │   ├── EnergyRadarChart
│   │           │   ├── NumberDonutChart
│   │           │   └── SpiritualTimeline
│   │           ├── ArbolTab (lazy)
│   │           │   ├── TreeOfLife
│   │           │   └── KabbalisticSection → KabbalisticCard × 4
│   │           ├── EnergiasTab (lazy)  ← shell 3.5 KB
│   │           │   └── Suspense + lazy 7 sub-secciones:
│   │           │       ├── ResumenAstrologico (lazy)
│   │           │       ├── TuTikunSection (lazy)
│   │           │       ├── VidaAnteriorSection (lazy)
│   │           │       ├── TareaEspiritualSection (lazy)
│   │           │       ├── DesafiosSolucionesSection (lazy)
│   │           │       ├── LetrasHebreasSection (lazy)
│   │           │       └── PeriodosAnoSection (lazy)
│   │           ├── TransitosTab (lazy)
│   │           ├── EsquemaTab (lazy)
│   │           ├── HerenciasTab (lazy)
│   │           └── PDFTab (lazy)  ← @react-pdf
│   │               └── PDFDownloadButton
│   ├── LoginPage (lazy)
│   │   └── LoginForm (React Hook Form + Zod)
│   ├── RegisterPage (lazy)
│   │   └── RegisterForm (React Hook Form + Zod + zxcvbn)
│   ├── DashboardPage (lazy, protected)  ← envuelto en ErrorBoundary
│   │   ├── Profile header
│   │   ├── Report list (paginado, con caché)
│   │   └── Logout button
│   ├── ReportDetailPage (lazy, protected)
│   ├── AboutPage (lazy)
│   ├── ContactPage (lazy)
│   │   └── ContactSection (grid responsive)
│   │       ├── ContactButtons (WhatsApp + Email)
│   │       ├── ConsultationCards × 5
│   │       └── ContactForm (EmailJS + mailto fallback)
│   └── NotFoundPage (lazy)
├── AppFooter (grid 1/2/3 cols responsive)
└── Toast
```

## Organización por directorios

| Directorio                        | Propósito                                    |
| --------------------------------- | -------------------------------------------- |
| `components/layout/`              | Header, AppFooter, Toast, Layout, ErrorBoundary |
| `components/forms/`               | InputForm (con guardado Supabase)            |
| `components/charts/`              | EnergyRadarChart, NumberDonutChart, SpiritualTimeline |
| `components/kabbalah/`            | TreeOfLife (Árbol de la Vida SVG)           |
| `components/results/`             | ResultsTabs y 9 tab components               |
| `components/results/tabs/`        | ResumenTab, InterpretacionesTab, GraficasTab, ArbolTab, EnergiasTab, TransitosTab, EsquemaTab, HerenciasTab, PDFTab |
| `components/results/tabs/astrology/` | 7 sub-secciones lazy de Astrología       |
| `components/contact/`             | ContactSection, ContactButtons, ContactForm, ConsultationCards |
| `features/numerology/components/` | ResultsGrid, CalculationTabs, InterpretationSection, KabbalisticSection, AstrologyProfile |
| `features/numerology/engine/`     | Funciones puras de cálculo                   |
| `features/numerology/data/`       | Datos estáticos congelados                   |
| `features/numerology/services/`   | computeFullProfile (agregación de datos)     |
| `context/`                        | AuthContext (estado de sesión Supabase)      |
| `hooks/`                          | useAuth (wrapper del contexto)               |
| `lib/`                            | Cliente Supabase (createClient + ensureClient) |
| `providers/`                      | AppProviders (composición de providers)      |
| `services/`                       | authService, reportService (CRUD + paginación + caché), storageService (PDF dedup) |
| `pdf/`                            | Sistema de reportes PDF (11 componentes)     |
| `pages/`                          | Home, Results, Login, Register, Dashboard, ReportDetail, About, Contact, 404 |
| `store/`                          | Zustand store con selectores + reportCache   |
| `utils/`                          | passwordValidator (zxcvbn)                   |
| `__tests__/`                      | Tests unitarios (Vitest)                     |
| `styles/`                         | tokens.css, global.css, components.css, passwordStrength.css, responsive.css |

## Convenciones

- Componentes de layout van en `components/layout/`
- Componentes de formulario en `components/forms/`
- Componentes del dominio de negocio en `features/numerology/components/`
- Páginas en `pages/<PageName>/<PageName>Page.jsx`
- Cada tab de resultados es `lazy()` — solo se carga al hacer clic
- Sub-secciones de Astrología también son `lazy()` con Suspense
- Cada tab renderizado está envuelto en `ErrorBoundary` con `key={activeTab}`
- Componentes de auth usan React Hook Form + Zod + zxcvbn
- Tests en `__tests__/` con estructura espejo de `src/`
