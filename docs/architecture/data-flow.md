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
            → <Header />          (hero + nav, muestra "Ingresar" o "Dashboard")
            → <HomePage />        (grid 1/2/3 cols responsive)
              → <InputForm />     (conectado al store + guardado Supabase)
            → <AppFooter />
          → <Toast />
```

## 2. Autenticación

```
AuthContext.provider
  ├── state: { user, session, loading }
  ├── login(email, password)
  │   → authService.signIn({ email, password })
  │   → Supabase actualiza sesión
  │   → onAuthStateChange actualiza user
  │   → navigate('/dashboard')
  ├── register(email, password, fullName)
  │   → authService.signUp({ email, password, fullName })
  │   → Supabase crea usuario
  │   → navigate('/dashboard')
  └── logout()
      → authService.signOut()
      → Supabase limpia sesión
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

## 4. Dashboard — Carga de Historial

```
DashboardPage
  → useEffect → loadReports()
    → getUserReports(user.id)
      → SELECT * FROM numerology_reports WHERE user_id = ? ORDER BY created_at DESC
    → setReports(data)
    → console.log(data)
  → render:
    ├── Profile header (avatar + nombre + email)
    ├── if (reports.length === 0) → mensaje vacío
    ├── else → lista de reportes con números y fecha
    └── Logout button
```

## 5. Renderizado de Resultados

```
ResultsPage
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
```

## 6. Notificaciones

```
Cualquier componente:
  → store.showToast('mensaje', 'error')
    → store.setState({ toast: { message, type } })
    → setTimeout(3s) → clearToast()

Toast component:
  → store.toast  (subscribe)
  → AnimatePresence → motion.div
```

## Flujo General

```
┌──────────┐    ┌──────────────┐    ┌──────────┐
│ InputForm│───▶│ Zustand Store│───▶│ Results  │
│ (set)    │    │              │    │ (get)    │
└──────────┘    │  fullName    │    └──────────┘
                │  birthdate   │    ┌──────────┐
┌──────────┐    │  results     │───▶│  Pages   │
│ Engine   │◀──▶│  isLoading   │    │ (render) │
│ (pure)   │    │  error       │    └──────────┘
└──────────┘    │  toast       │    ┌──────────┐
                └──────────────┘    │  Toast   │
                                    │(animate) │
┌──────────┐                        └──────────┘
│ Supabase │
│  Auth    │◀──▶ AuthContext ───▶ ProtectedRoute
│  DB      │◀──▶ reportService ──▶ DashboardPage
└──────────┘
```
