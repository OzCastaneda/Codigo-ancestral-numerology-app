# Arquitectura del Proyecto

## Visión General

Aplicación SPA de Numerología Cabalística construida con **React 18**, **Vite 5** y una arquitectura basada en **features**. Combina cálculos numerológicos pitagóricos con la tradición cabalística (22 letras hebreas, Árbol de la Vida, Sephiroth). Incluye reportes PDF, gráficas Recharts y sistema de contacto con EmailJS.

## Principios Arquitectónicos

- **Feature-based**: La lógica de numerología está aislada en `features/numerology/`
- **Separación de responsabilidades**: Engine (cálculos puros) ≠ Data (estática) ≠ Components (UI) ≠ Service (agregación)
- **Estado global centralizado**: Zustand store único
- **Inmutabilidad**: Todos los datos estáticos usan `Object.freeze()`
- **Lazy loading**: Páginas pesadas cargadas bajo demanda; cada tab de resultados también es lazy
- **Sin backend**: Toda la lógica es client-side; PDF se genera con `@react-pdf/renderer`, formularios con EmailJS

## Diagrama de Capas

```
┌─────────────────────────────────────────────────────────────────────┐
│                         Páginas (pages/)                            │
│  HomePage / ResultsPage / AboutPage / ContactPage / NotFoundPage    │
└──────────────┬──────────────────────────┬──────────────────────────┘
               │                          │
     ┌─────────▼──────────┐    ┌──────────▼──────────┐
     │  Componentes UI     │    │  Feature Comps       │
     │  (layout/forms/     │    │  (numerology/        │
     │   cards/charts/     │    │   components/)       │
     │   contact/results/  │    │                      │
     │   kabbalah/pdf/)    │    │                      │
     └─────────┬──────────┘    └──────────┬──────────┘
               │                          │
     ┌─────────▼──────────────────────────▼──────────┐
     │              Zustand Store (store/)            │
     │          useNumerologyStore                   │
     └─────────┬──────────────────────────┬──────────┘
               │                          │
     ┌─────────▼──────────┐    ┌──────────▼──────────┐
     │  Service Layer      │    │    Engine            │
     │  (numerologyService)│    │   (pure fns)         │
     └─────────┬──────────┘    └──────────┬──────────┘
               │                          │
     ┌─────────▼──────────────────────────▼──────────┐
     │               Data Layer                       │
     │   numerologyData.js /                         │
     │   numerologyInterpretations.js                │
     └───────────────────────────────────────────────┘
```

## Flujo de Datos (Cálculo Numerológico)

```
InputForm (nombre + fecha)
       │
       ▼
useNumerologyStore.calculate()
       │
       ▼
calculateAll(fullName, birthdate)  ← engine puro
       │
       ▼
results = { name, destiny, soul, personality, mission }
       │
       ▼
navega a /results
       │
       ▼
ResultsPage → computeFullProfile()
       │
       ├── calculateAll() → resultados base
       ├── getInterpretations(num, categoria) → significado + fortalezas + etc.
       ├── getLetter(num) → letra hebrea + esotérico
       ├── getSephirah(num) → sephirah del Árbol de la Vida
       └── getZodiacSignIndex(date) → signo zodiacal hebreo
       │
       ▼
profile = { results, interpretations, kabbalistic, zodiac }
       │
       ▼
ResultsTabs (6 tabs con lazy loading c/u)
  ├── ResumenTab         → grid + energía dominante + insights
  ├── InterpretacionesTab → accordion con expand/contract
  ├── GraficasTab        → radar + donut + timeline
  ├── ArbolTab           → TreeOfLife + KabbalisticSection
  ├── EnergiasTab        → planetas + arquetipos + colores + astrología
  └── PDFTab             → descarga PDF
```

## Árbol de Componentes

```
<BrowserRouter>
  <Layout>
    ├── <Header />          — Hero + nav (Inicio, Sobre, Contacto)
    ├── <Routes>
    │   ├── / → <HomePage>
    │   │   ├── Hero image (máscara radial + starfield)
    │   │   ├── Descripción + Beneficios list
    │   │   └── <InputForm />
    │   ├── /results → <ResultsPage> (lazy)
    │   │   └── <ResultsTabs>
    │   │       ├── <ResumenTab />
    │   │       │   ├── <ResultsGrid>
    │   │       │   │   └── <NumberCard /> × 4
    │   │       │   ├── DominantEnergy
    │   │       │   └── QuickInsights
    │   │       ├── <InterpretacionesTab />
    │   │       │   └── AccordionItem × 4
    │   │       ├── <GraficasTab />
    │   │       │   ├── <EnergyRadarChart />
    │   │       │   ├── <NumberDonutChart />
    │   │       │   └── <SpiritualTimeline />
    │   │       ├── <ArbolTab />
    │   │       │   ├── <TreeOfLife />
    │   │       │   └── <KabbalisticSection />
    │   │       ├── <EnergiasTab />
    │   │       │   ├── Planetas + Arquetipos + Colores
    │   │       │   └── <AstrologyProfile />
    │   │       └── <PDFTab />
    │   │           └── <PDFDownloadButton />
    │   ├── /about → <AboutPage> (lazy)
    │   ├── /contact → <ContactPage> (lazy)
    │   │   └── <ContactSection>
    │   │       ├── <ContactButtons />   — WhatsApp + Email
    │   │       ├── <ConsultationCards /> — 5 servicios
    │   │       └── <ContactForm />       — EmailJS + mailto
    │   └── * → <NotFoundPage> (lazy)
    ├── <AppFooter />       — 3 columnas con enlaces funcionales
    └── <Toast />           — notificaciones animadas
  </Layout>
</BrowserRouter>
```

## Capa PDF

```
src/pdf/
├── NumerologyReport.jsx        → Documento PDF completo (4+ páginas)
├── PDFDownloadButton.jsx       → Botón con pdf().toBlob()
├── components/
│   ├── PDFCover.jsx            → Portada oscura A4
│   ├── PDFSection.jsx          → Sección con icono + divider
│   ├── PDFSectionTitle.jsx     → Título 22px + subtítulo
│   ├── PDFCard.jsx             → Card con variantes (gold/green/red)
│   ├── PDFNumerologyCard.jsx   → Card de resultado numerológico
│   ├── PDFInterpretationCard.jsx → Card de interpretación con listas
│   ├── PDFBulletList.jsx       → Lista con bullets coloreados
│   ├── PDFTextBlock.jsx        → Párrafo con variantes
│   ├── PDFPageWrapper.jsx      → Página A4 estándar con footer
│   └── PDFFooter.jsx           → Footer con branding + número
└── utils/
    ├── helpers.js              → formatDate, meanings, fileName
    └── fonts.js                → registerFonts()
```

Distribución de páginas:
- **Página 1**: Portada
- **Página 2**: Resultados (4 cards)
- **Página 3**: Interpretaciones 1-2 (Destino + Alma)
- **Página 4**: Interpretaciones 3-4 (Personalidad + Misión)
- **Página 5+**: Correspondencias cabalísticas + Astrología

## Sistema de Contacto

```
src/components/contact/
├── ContactSection.jsx      → Layout 2-column (buttons left, form right)
├── ContactButtons.jsx      → WhatsApp (wa.me) + Email (mailto: directo)
├── ContactForm.jsx         → 6 campos + EmailJS (fallback mailto:)
└── ConsultationCards.jsx   → 5 cards de servicios con hover
```

- WhatsApp: `https://wa.me/573228352645?text=...`
- Email: `mailto:angelusignis777@gmail.com?subject=...&body=...`
- Formulario: EmailJS si `VITE_EMAILJS_*` configurado, fallback a `mailto:`
