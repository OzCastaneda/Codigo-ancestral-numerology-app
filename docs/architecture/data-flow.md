# Flujo de Datos

## 1. Carga Inicial (Home)

```
main.jsx
  → importa styles/*.css
  → renderiza <App />
    → <BrowserRouter>
      → <AppProviders>
        → <AuthProvider>
          → useEffect: onAuthStateChange()
          → <Layout>
            → <Header />
            → <HomePage />
              → <InputForm />
            → <AppFooter />
          → <Toast />
```

## 2. Autenticación y Registro

```
RegisterForm.handleFormSubmit()
  ├── Zod validation (min 8 chars, max 100, confirm match)
  ├── zxcvbn on each keystroke:
  │   → validatePassword(password)
  │   → setPasswordStrength({ score, feedback, isStrong, strengthLabel })
  │   → barra visual se actualiza en tiempo real
  │   → botón deshabilitado si score < 3
  │
  ├── onSubmit(data)
  │   → authService.signUp({ email, password, fullName })
  │   → Supabase crea usuario
  │   → onAuthStateChange actualiza AuthContext.user
  │   → navigate('/dashboard')
  │
  └── catch(err)
      → setError('root', { message: err.message })
      → muestra error banner

AuthContext.provider
  ├── state: { user, session, loading }
  ├── register(email, password, fullName)
  │   → authService.signUp(...)
  │   → navigate('/dashboard')
  ├── login(email, password)
  │   → authService.signIn(...)
  │   → navigate('/dashboard')
  └── logout()
      → authService.signOut()
      → navigate('/')
```

## 3. Cálculo y Navegación a Resultados

```
InputForm.handleSubmit()
  → store.calculate()
    → validate (nombre + apellido requerido)
    → calculateAll(fullName, birthdate)  ← engine
    → store.setState({ results })
  → if (user) {
      createReport({ user_id, full_name, ...results })
        → INSERT INTO numerology_reports
    }
  → navigate('/results')
```

## 4. Dashboard — Carga de Historial (con caché y paginación)

```
DashboardPage
  → useEffect → loadReports()
    → store.getUserReports(user.id, currentPage, 10)
      ├── check reportCache[`${userId}_${page}`]
      │   ├── if cached + TTL válido → return cached data
      │   └── else:
      │       ├── countQuery = SELECT count(*) FROM numerology_reports WHERE user_id = ?
      │       ├── dataQuery = SELECT * FROM numerology_reports WHERE user_id = ?
      │       │               ORDER BY created_at DESC LIMIT 10 OFFSET ?
      │       ├── await Promise.all([countQuery, dataQuery])
      │       └── cachear resultado en reportCache con timestamp
      ├── setReports(data.reports)
      ├── setTotalPages(Math.ceil(data.total / 10))
      └── setHasMore(data.hasMore)

  → render:
    ├── Profile header (avatar + nombre + email)
    ├── if (reports.length === 0) → mensaje vacío
    ├── else → lista de reportes con números y fecha
    │   └── cada reporte → link a /report/:id
    ├── paginación (prev/next) con disabled states
    └── Logout button + "Actualizar" (clearReportCache + reload)
```

## 5. Renderizado de Resultados

```
ResultsPage
  → ErrorBoundary
    → store.results  (de Zustand)
    → computeFullProfile(fullName, birthdate)
      → calculateAll(fullName, birthdate)
      → getInterpretations(num, 'Destino'), etc.
      → getLetter(num) para cada resultado
      → getZodiacSignIndex(birthdate)
    → render:
      ResultsGrid         → store.results
      CalculationTabs     → store.results + fullName + birthdate
      InterpretationSection → profile.interpretations
      KabbalisticSection  → profile.kabbalistic
      AstrologyProfile    → profile.zodiac
      ResultsTabs
        → ErrorBoundary key={activeTab}
          → Suspense + lazy tab component
```

## 6. Flujo General

```
┌──────────┐    ┌──────────────────┐    ┌───────────┐
│ InputForm│───▶│  Zustand Store   │───▶│ Results   │
│ (set)    │    │  (selectores)    │    │ (get)     │
└──────────┘    │  fullName        │    └───────────┘
                │  birthdate       │    ┌───────────┐
┌──────────┐    │  results         │───▶│  Pages    │
│ Engine   │◀──▶│  isLoading       │    │ (render)  │
│ (pure)   │    │  error           │    └───────────┘
└──────────┘    │  toast           │    ┌───────────┐
                │  reportCache     │    │  Toast    │
                └──────────────────┘    │ (animate) │
                                        └───────────┘
┌──────────────────┐
│  Supabase        │
│  Auth            │◀──▶ AuthContext ───▶ ProtectedRoute
│  DB (reports)    │◀──▶ reportService ──▶ DashboardPage (paginado)
│  Storage (PDF)   │◀──▶ storageService ─▶ PDFTab (dedup SHA-256)
└──────────────────┘

┌──────────────────────┐
│  Validación cliente  │
│  Zod (min 8)         │
│  zxcvbn (score >= 3) │◀── RegisterForm
│  ErrorBoundary       │◀── Cada sección
└──────────────────────┘
```
