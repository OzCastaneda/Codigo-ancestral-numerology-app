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
│   ├── ResultsPage (lazy)
│   │   └── ResultsTabs (icon-only mobile, full desktop)
│   │       ├── ResumenTab
│   │       │   ├── ResultsGrid → NumberCard × 4
│   │       │   ├── DominantEnergy
│   │       │   └── QuickInsights
│   │       ├── InterpretacionesTab
│   │       │   └── AccordionItem × 4
│   │       ├── GraficasTab
│   │       │   ├── EnergyRadarChart
│   │       │   ├── NumberDonutChart
│   │       │   └── SpiritualTimeline
│   │       ├── ArbolTab
│   │       │   ├── TreeOfLife
│   │       │   └── KabbalisticSection → KabbalisticCard × 4
│   │       ├── EnergiasTab
│   │       │   ├── PlanetsSection
│   │       │   ├── ArchetypesSection
│   │       │   ├── PlanetaryColorsSection
│   │       │   └── AstrologyProfile
│   │       └── PDFTab
│   │           └── PDFDownloadButton
│   ├── LoginPage (lazy)
│   │   └── LoginForm (React Hook Form + Zod)
│   ├── RegisterPage (lazy)
│   │   └── RegisterForm (React Hook Form + Zod)
│   ├── DashboardPage (lazy, protected)
│   │   ├── Profile header
│   │   ├── Report list (vacío o con cards)
│   │   └── Logout button
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
| `components/layout/`              | Header, AppFooter, Toast, Layout             |
| `components/forms/`               | InputForm (con guardado Supabase)            |
| `components/charts/`              | EnergyRadarChart, NumberDonutChart, SpiritualTimeline, ChartsDashboard, chartConfig |
| `components/kabbalah/`            | TreeOfLife (Árbol de la Vida SVG)           |
| `components/results/`             | ResultsTabs y 6 tab components               |
| `components/results/tabs/`        | ResumenTab, InterpretacionesTab, GraficasTab, ArbolTab, EnergiasTab, PDFTab |
| `components/contact/`             | ContactSection, ContactButtons, ContactForm, ConsultationCards |
| `features/numerology/components/` | ResultsGrid, CalculationTabs, InterpretationSection, KabbalisticSection, AstrologyProfile |
| `features/numerology/engine/`     | Funciones puras de cálculo                   |
| `features/numerology/data/`       | Datos estáticos congelados                   |
| `features/numerology/services/`   | computeFullProfile (agregación de datos)     |
| `context/`                        | AuthContext (estado de sesión Supabase)      |
| `hooks/`                          | useAuth (wrapper del contexto)               |
| `lib/`                            | Cliente Supabase (createClient)              |
| `providers/`                      | AppProviders (composición de providers)      |
| `services/`                       | authService (signUp/signIn/signOut), reportService (CRUD) |
| `pdf/`                            | Sistema de reportes PDF (11 componentes)     |
| `pages/`                          | Home, Results, Login, Register, Dashboard, About, Contact, 404 |
| `store/`                          | Zustand store                                |
| `styles/`                         | tokens.css, global.css, components.css, responsive.css |

## Convenciones

- Componentes de layout van en `components/layout/`
- Componentes de formulario en `components/forms/`
- Componentes del dominio de negocio en `features/numerology/components/`
- Páginas en `pages/<PageName>/<PageName>Page.jsx`
- Componentes puros memoizados con `memo()` donde hay beneficios de performance
- Animaciones con `framer-motion` (entradas con `initial`/`animate`/`transition`)
- Cada tab de resultados es `lazy()` — solo se carga al hacer clic
- Los componentes PDF usan `@react-pdf/renderer` (estilo `StyleSheet.create`)
- Los componentes de auth usan React Hook Form + Zod + glassmorphism
- Todas las páginas usan Tailwind responsive classes (sm/md/lg/xl) con enfoque mobile-first
- Touch targets mínimos de 44×44px en mobile
- Cada página auth/página protegida usa lazy loading
