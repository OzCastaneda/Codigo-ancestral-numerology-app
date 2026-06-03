# Sistema de Rutas

**Archivo:** `src/routes/index.jsx`

## Configuración

| Ruta         | Componente         | Lazy | Protegida | Descripción                           |
| ------------ | ------------------ | ---- | --------- | ------------------------------------- |
| `/`          | `HomePage`         | ❌   | ❌        | Hero image + formulario + beneficios  |
| `/results`   | `ResultsPage`      | ✅   | ❌        | Resultados con sistema de 6 tabs      |
| `/login`     | `LoginPage`        | ✅   | ❌        | Inicio de sesión                      |
| `/register`  | `RegisterPage`     | ✅   | ❌        | Registro de cuenta                    |
| `/dashboard` | `DashboardPage`    | ✅   | ✅        | Dashboard con historial de reportes   |
| `/about`     | `AboutPage`        | ✅   | ❌        | Información del sistema               |
| `/contact`   | `ContactPage`      | ✅   | ❌        | Contacto + formulario de consulta     |
| `*`          | `NotFoundPage`     | ✅   | ❌        | Página 404                            |

## Lazy Loading

Todas las rutas excepto `/` usan `React.lazy()` + `Suspense`:

```jsx
const LoginPage = lazy(() => import('../pages/Login/LoginPage'));
const DashboardPage = lazy(() => import('../pages/Dashboard/DashboardPage'));
```

Cada tab dentro de ResultsPage también es lazy:

```jsx
const ResumenTab = lazy(() => import('./tabs/ResumenTab'));
```

## Protección de Rutas

`/dashboard` está envuelta en `ProtectedRoute`:

```jsx
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  }
/>
```

`ProtectedRoute` verifica `useAuth()`:
- `loading` → muestra spinner
- Sin `user` → redirige a `/login`
- Con `user` → renderiza children

## Navegación

- **Home → Results**: `InputForm` llama `calculate()`, redirige a `/results`
- **Header**: Nav responsiva — hamburger en mobile, horizontal en desktop. Muestra "Ingresar" o "Dashboard" según auth
- **Footer**: Enlace a "Consultas Personalizadas" en `/contact`
- **Auth**: Login redirige a `/dashboard`; Register redirige a `/dashboard`; Logout redirige a `/`
- **404**: Enlace "Volver al Inicio"
