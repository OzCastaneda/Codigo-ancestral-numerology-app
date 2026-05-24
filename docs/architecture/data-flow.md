# Flujo de Datos

## 1. Carga Inicial (Home)

```
main.jsx
  → importa styles/*.css
  → renderiza <App />
    → <BrowserRouter>
      → <Layout>
        → <Header />          (hero estático)
        → <HomePage />
          → <InputForm />     (conectado al store)
          → <SephirothTable /> (datos de KABBALAH.sephiroth)
          → <PlanetaryGrid />  (datos de KABBALAH.planetaryColors)
        → <AppFooter />
```

## 2. Cálculo y Navegación a Resultados

```
InputForm.handleSubmit()
  → store.calculate()
    → validate (nombre + apellido requerido)
    → calculateAll(fullName, birthdate)  ← engine
    → store.setState({ results })
  → navigate('/results')
```

## 3. Renderizado de Resultados

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

## 4. Notificaciones

```
Cualquier componente:
  → store.showToast('mensaje', 'error')
    → store.setState({ toast: { message, type } })
    → setTimeout(3s) → clearToast()

Toast component:
  → store.toast  (subscribe)
  → AnimatePresence → motion.div
```

## Flujo de Store

```
┌──────────┐     ┌──────────────┐     ┌──────────┐
│ InputForm│────▶│ Zustand Store│────▶│ Results  │
│ (set)    │     │              │     │ (get)    │
└──────────┘     │  fullName    │     └──────────┘
                 │  birthdate   │     ┌──────────┐
┌──────────┐     │  results     │────▶│  Pages   │
│ Engine   │◀───▶│  isLoading   │     │ (render) │
│ (pure)   │     │  error       │     └──────────┘
└──────────┘     │  toast       │     ┌──────────┐
                 └──────────────┘     │  Toast   │
                                      │(animate) │
                                      └──────────┘
```
