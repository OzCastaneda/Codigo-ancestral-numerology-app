# Componentes

## Árbol de Componentes

```
Layout
├── Header (Hero + Nav)
├── Routes
│   ├── HomePage
│   │   ├── Hero image (máscara radial + starfield)
│   │   ├── Descripción + Benefits list
│   │   └── InputForm
│   ├── ResultsPage (lazy)
│   │   └── ResultsTabs
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
│   ├── AboutPage (lazy)
│   ├── ContactPage (lazy)
│   │   └── ContactSection
│   │       ├── ContactButtons (WhatsApp + Email)
│   │       ├── ConsultationCards × 5
│   │       └── ContactForm (EmailJS + mailto fallback)
│   └── NotFoundPage (lazy)
├── AppFooter (3 columnas, enlaces funcionales)
└── Toast
```

## Organización por directorios

| Directorio                        | Propósito                                    |
| --------------------------------- | -------------------------------------------- |
| `components/layout/`              | Header, AppFooter, Toast, Layout             |
| `components/forms/`               | InputForm                                    |
| `components/cards/`               | NumberCard                                   |
| `components/charts/`              | EnergyRadarChart, NumberDonutChart, SpiritualTimeline, ChartsDashboard, chartConfig |
| `components/kabbalah/`            | TreeOfLife (Árbol de la Vida SVG)           |
| `components/results/`             | ResultsTabs y 6 tab components               |
| `components/results/tabs/`        | ResumenTab, InterpretacionesTab, GraficasTab, ArbolTab, EnergiasTab, PDFTab |
| `components/contact/`             | ContactSection, ContactButtons, ContactForm, ConsultationCards |
| `features/numerology/components/` | ResultsGrid, CalculationTabs, InterpretationSection, KabbalisticSection, AstrologyProfile |
| `features/numerology/engine/`     | Funciones puras de cálculo                   |
| `features/numerology/data/`       | Datos estáticos congelados                   |
| `features/numerology/services/`   | Capa de servicio (computeFullProfile)        |
| `pdf/`                            | Sistema de reportes PDF (11 componentes)     |
| `pages/`                          | HomePage, ResultsPage, AboutPage, ContactPage, NotFoundPage |
| `store/`                          | Zustand store                                |
| `styles/`                         | tokens.css, global.css, components.css, responsive.css |

## Convenciones

- Componentes de layout van en `components/layout/`
- Componentes de formulario en `components/forms/`
- Componentes de cards en `components/cards/`
- Componentes del dominio de negocio en `features/numerology/components/`
- Páginas en `pages/<PageName>/<PageName>Page.jsx`
- Componentes puros memoizados con `memo()` donde hay beneficios de performance
- Animaciones con `framer-motion` (entradas con `initial`/`animate`/`transition`)
- Cada tab de resultados es `lazy()` — solo se carga al hacer clic
- Los componentes PDF usan `@react-pdf/renderer` (estilo `StyleSheet.create`)
- Los componentes de contacto usan EmailJS con fallback a `mailto:`
