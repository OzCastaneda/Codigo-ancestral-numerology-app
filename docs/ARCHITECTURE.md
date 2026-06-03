# Arquitectura del Proyecto

## Visión General

Aplicación SPA de Numerología Cabalística construida con **React 18**, **Vite 5** y una arquitectura basada en **features**. Combina cálculos numerológicos pitagóricos con la tradición cabalística (22 letras hebreas, Árbol de la Vida, Sephiroth). Incluye autenticación **Supabase**, reportes PDF, gráficas Recharts y sistema de contacto con EmailJS.

## Principios Arquitectónicos

- **Feature-based**: La lógica de numerología está aislada en `features/numerology/`
- **Separación de responsabilidades**: Engine (cálculos puros) ≠ Data (estática) ≠ Components (UI) ≠ Service (agregación)
- **Estado global centralizado**: Zustand store único para numerology; AuthContext para sesión
- **Inmutabilidad**: Todos los datos estáticos usan `Object.freeze()`
- **Lazy loading**: Páginas pesadas cargadas bajo demanda; cada tab de resultados también es lazy
- **Autenticación**: Supabase Auth con `onAuthStateChange`, sesión persistente, ProtectedRoute
- **Responsive mobile-first**: TailwindCSS utilities (sm/md/lg/xl/2xl), sin media queries hardcodeadas
- **Sin backend propio**: Auth y DB via Supabase; PDF client-side; formularios con EmailJS

## Diagrama de Capas

```
┌──────────────────────────────────────────────────────────────────────────┐
│                           Páginas (pages/)                               │
│  Home / Results / About / Contact / Login / Register / Dashboard / 404   │
└──────────────┬──────────────────────────┬───────────────────────────────┘
               │                          │
     ┌─────────▼──────────┐    ┌──────────▼──────────┐
     │  Componentes UI     │    │  Feature Comps       │
     │  (layout/forms/     │    │  (numerology/        │
     │   charts/results/   │    │   components/)       │
     │   contact/kabbalah/ │    │                      │
     │   pdf/)             │    │                      │
     └─────────┬──────────┘    └──────────┬──────────┘
               │                          │
     ┌─────────▼──────────────────────────▼──────────┐
     │              Zustand Store (store/)            │
     │          useNumerologyStore                   │
     └───────────────────────────────────────────────┘
               │                          │
     ┌─────────▼──────────┐    ┌──────────▼──────────┐
     │  Service Layer      │    │    Engine            │
     │  (numerologyService)│    │   (pure fns)         │
     │  (authService)      │    │                      │
     │  (reportService)    │    │                      │
     └─────────┬──────────┘    └──────────┬──────────┘
               │                          │
     ┌─────────▼──────────────────────────▼──────────┐
     │               Data Layer                       │
     │   numerologyData.js /                         │
     │   numerologyInterpretations.js                │
     └───────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│                     Supabase (external)                                  │
│  Auth: signUp / signIn / signOut / onAuthStateChange                    │
│  DB:  numerology_reports (user_id, full_name, numbers, created_at)      │
└──────────────────────────────────────────────────────────────────────────┘
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

ProtectedRoute
  ├── loading → spinner
  ├── !user  → redirect /login
  └── user   → render children

Header
  ├── loading → no muestra link de auth
  ├── user    → muestra "Dashboard"
  └── !user   → muestra "Ingresar"
```

## Flujo de Guardado de Reportes

```
InputForm.handleSubmit()
  ├── store.calculate() → results
  ├── if (user) → createReport({ user_id, full_name, birth_date, ...numbers })
  └── navigate('/results')

DashboardPage
  └── useEffect → getUserReports(user.id) → setReports(data)
```

## Árbol de Componentes

```
<BrowserRouter>
  <AppProviders>
    <Layout>
      ├── <Header />          — Hero + nav responsiva (hamburger mobile)
      ├── <Routes>
      │   ├── / → <HomePage>  (grid 1/2/3 cols responsive)
      │   ├── /results → <ResultsPage> (lazy)
      │   │   └── <ResultsTabs> (icon-only mobile, full desktop)
      │   │       ├── <ResumenTab /> ...
      │   │       ├── <InterpretacionesTab /> ...
      │   │       ├── <GraficasTab /> ...
      │   │       ├── <ArbolTab /> ...
      │   │       ├── <EnergiasTab /> ...
      │   │       └── <PDFTab /> ...
      │   ├── /login → <LoginPage> (lazy)
      │   │   └── <LoginForm /> (React Hook Form + Zod)
      │   ├── /register → <RegisterPage> (lazy)
      │   │   └── <RegisterForm /> (React Hook Form + Zod)
      │   ├── /dashboard → <ProtectedRoute> → <DashboardPage> (lazy)
      │   ├── /about → <AboutPage> (lazy)
      │   ├── /contact → <ContactPage> (lazy)
      │   │   └── <ContactSection>
      │   │       ├── <ContactButtons />
      │   │       ├── <ConsultationCards />
      │   │       └── <ContactForm />
      │   └── * → <NotFoundPage> (lazy)
      ├── <AppFooter />       — Grid responsive 1/2/3 cols
      └── <Toast />           — notificaciones animadas
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
| ContactSection | 1 columna                | 1 columna          | 2 columnas        |
| Auth pages     | Padding reducido, 48px   | Padding normal     | Padding completo  |
