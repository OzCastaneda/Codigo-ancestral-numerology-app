# Arquitectura del Proyecto

## Visión General

Aplicación SPA de Numerología Cabalística construida con **React 18**, **Vite 5** y una arquitectura basada en **features**. Combina cálculos numerológicos pitagóricos con la tradición cabalística (22 letras hebreas, Árbol de la Vida, Sephiroth). Incluye autenticación **Supabase**, reportes PDF, gráficas Recharts, validación de contraseñas con **zxcvbn** y testing con **Vitest**.

## Principios Arquitectónicos

- **Feature-based**: La lógica de numerología está aislada en `features/numerology/`
- **Separación de responsabilidades**: Engine (cálculos puros) ≠ Data (estática) ≠ Components (UI) ≠ Service (agregación)
- **Estado global centralizado**: Zustand store único con selectores individuales para evitar re-renders
- **Inmutabilidad**: Todos los datos estáticos usan `Object.freeze()`
- **Lazy loading**: Páginas pesadas cargadas bajo demanda; cada tab de resultados también es lazy; sub-secciones de astrología lazy dentro de EnergiasTab
- **ErrorBoundary**: Aislamiento de errores por sección (class component con componentDidCatch)
- **Autenticación**: Supabase Auth con `onAuthStateChange`, sesión persistente, ProtectedRoute
- **Seguridad**: Validación de contraseñas con zxcvbn en el cliente (score < 3 bloquea el submit)
- **Responsive mobile-first**: TailwindCSS utilities sin media queries hardcodeadas
- **Testing**: Vitest con mocks de Supabase para la capa de servicios

## Diagrama de Capas

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                           Páginas (pages/)                                   │
│  Home / Results / About / Contact / Login / Register / Dashboard / 404       │
└──────────────┬──────────────────────────────┬───────────────────────────────┘
               │                              │
      ┌─────────▼──────────┐        ┌──────────▼──────────┐
      │  Componentes UI     │        │  Feature Comps       │
      │  (layout/forms/     │        │  (numerology/        │
      │   charts/results/   │        │   components/)       │
      │   contact/kabbalah/ │        │                      │
      │   pdf/)             │        │                      │
      │   ErrorBoundary     │        │                      │
      └─────────┬──────────┘        └──────────┬──────────┘
                │                              │
      ┌─────────▼──────────────────────────────▼──────────┐
      │              Zustand Store (store/)                │
      │          useNumerologyStore                       │
      │  15+ selectores (useFullName, useResults, etc.)   │
      │  reportCache con TTL 5 min                        │
      └───────────────────────────────────────────────────┘
                │                              │
      ┌─────────▼──────────┐        ┌──────────▼──────────┐
      │  Service Layer      │        │    Engine            │
      │  (numerologyService)│        │   (pure fns)         │
      │  (authService)      │        │                      │
      │  (reportService)    │        │                      │
      │  (storageService)   │        │                      │
      └─────────┬──────────┘        └──────────┬──────────┘
                │                              │
      ┌─────────▼──────────────────────────────▼──────────┐
      │               Data Layer                           │
      │   numerologyData.js / numerologyInterpretations.js│
      │   astrologiaKabalisticaData.js / tikunCompleteData.js│
      └───────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│                     Supabase (external)                                      │
│  Auth: signUp / signIn / signOut / onAuthStateChange                        │
│  DB:  numerology_reports (user_id, full_name, numbers, created_at)          │
│  Storage: PDF upload con hash SHA-256 dedup                                 │
└──────────────────────────────────────────────────────────────────────────────┘
```

## Flujo de Autenticación

```
AppProviders
  └── AuthProvider (context/AuthContext.jsx)
        ├── Escucha supabase.auth.onAuthStateChange()
        ├── user / session / loading state
        ├── login(email, password)
        ├── register(email, password, fullName)
        └── logout()

RegisterForm (validación cliente)
  ├── Zod schema: min(8), max(100)
  ├── zxcvbn en cada onChange → passwordStrength state
  ├── Barra visual (rojo/amarillo/verde) + sugerencias
  └── Botón submit deshabilitado si score < 3

ProtectedRoute
  ├── loading → spinner
  ├── !user  → redirect /login
  └── user   → render children
```

## Flujo de Guardado de Reportes

```
InputForm.handleSubmit()
  ├── store.calculate() → results
  ├── if (user) → createReport({ user_id, full_name, birth_date, ...numbers })
  └── navigate('/results')

DashboardPage (paginación + caché)
  └── useEffect → getUserReports(user.id, page, pageSize)
    ├── check reportCache[`${userId}_${page}`]
    ├── if cached → return cached data (TTL 5 min)
    ├── else → SELECT * FROM numerology_reports WHERE user_id = ? ORDER BY created_at DESC LIMIT ? OFFSET ?
    └── setReports(data)

PDF upload (deduplicación)
  └── uploadPDF(blob)
    ├── calcular SHA-256 del blob
    ├── if hash exists in uploadedPDFs Map → return cached URL
    └── else → upload to Supabase Storage, cache hash+URL
```

## Código dividido (Code Splitting)

```
ResultsTabs (lazy)
  ├── ResumenTab (lazy)
  ├── InterpretacionesTab (lazy)
  ├── GraficasTab (lazy)           ← Recharts (366 KB)
  ├── ArbolTab (lazy)
  ├── EnergiasTab (lazy)           ← shell 3.5 KB
  │   ├── ResumenAstrologico (lazy)
  │   ├── TuTikunSection (lazy)
  │   ├── VidaAnteriorSection (lazy)
  │   ├── TareaEspiritualSection (lazy)
  │   ├── DesafiosSolucionesSection (lazy)
  │   ├── LetrasHebreasSection (lazy)
  │   └── PeriodosAnoSection (lazy)
  ├── TransitosTab (lazy)
  ├── EsquemaTab (lazy)
  ├── HerenciasTab (lazy)
  └── PDFTab (lazy)                ← @react-pdf (1.5 MB)

Cada sección lazy envuelta en ErrorBoundary para aislamiento.
```

## Árbol de Componentes

```
<BrowserRouter>
  <AppProviders>
    <Layout>
      ├── <Header />
      ├── <Routes>
      │   ├── / → <HomePage>
      │   ├── /results → <ResultsPage> (lazy)
      │   │   └── <ErrorBoundary>
      │   │       └── <ResultsTabs>
      │   │           └── <ErrorBoundary key={activeTab}>
      │   │               └── <Suspense><ActiveComponent /></Suspense>
      │   ├── /login → <LoginPage> (lazy)
      │   ├── /register → <RegisterPage> (lazy)
      │   │   └── <RegisterForm /> (zxcvbn + Zod)
      │   ├── /dashboard → <ProtectedRoute>
      │   │   └── <ErrorBoundary><DashboardPage /></ErrorBoundary> (lazy)
      │   ├── /report/:id → <ProtectedRoute>
      │   │   └── <ReportDetailPage /> (lazy)
      │   ├── /about → <AboutPage> (lazy)
      │   ├── /contact → <ContactPage> (lazy)
      │   └── * → <NotFoundPage> (lazy)
      ├── <AppFooter />
      └── <Toast />
    </Layout>
  </AppProviders>
</BrowserRouter>
```

## Distribución Responsive

| Componente     | Mobile (<768px)          | Tablet (md)        | Desktop (xl)      |
| -------------- | ------------------------ | ------------------ | ----------------- |
| Header         | Hamburger + dropdown     | Nav horizontal     | Nav horizontal    |
| HomePage       | 1 columna                | 2 cols             | 3 cols            |
| Footer         | 1 columna                | 2 columnas         | 3 columnas        |
| ResultsTabs    | Iconos + scroll X        | Iconos + labels    | Iconos + labels   |
| Astrología     | Dropdown select          | Vertical tabs      | Vertical tabs     |
| Auth pages     | Padding reducido, 48px   | Padding normal     | Padding completo  |
