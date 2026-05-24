# Sistema de Rutas

**Archivo:** `src/routes/index.jsx`

## Configuración

| Ruta        | Componente       | Lazy | Descripción                               |
| ----------- | ---------------- | ---- | ----------------------------------------- |
| `/`         | `HomePage`       | ❌   | Hero image + formulario + beneficios      |
| `/results`  | `ResultsPage`    | ✅   | Resultados con sistema de 6 tabs          |
| `/about`    | `AboutPage`      | ✅   | Información del sistema                   |
| `/contact`  | `ContactPage`    | ✅   | Contacto + formulario de consulta         |
| `*`         | `NotFoundPage`   | ✅   | Página 404                                |

## Lazy Loading

Las rutas `/results`, `/about`, `/contact` y `*` usan `React.lazy()` + `Suspense`:

```jsx
const ResultsPage = lazy(() => import('../pages/Results/ResultsPage'));
const ContactPage = lazy(() => import('../pages/Contact/ContactPage'));
```

Cada tab dentro de ResultsPage también es lazy:

```jsx
const ResumenTab = lazy(() => import('./tabs/ResumenTab'));
```

## Fallback

Mientras se cargan las rutas lazy, se muestra un indicador de carga estilizado.

## Navegación entre páginas

- **Home → Results**: `InputForm` llama `calculate()`, redirige a `/results`
- **Results → Home**: Botón "Nueva Consulta" navega a `/`
- **Results → Contact**: Enlace en el footer
- **Header**: Barra de navegación con Inicio / Sobre Código Ancestral / Contacto
- **Footer**: Enlace a "Consultas Personalizadas" en `/contact`
- **Cualquier ruta inválida**: Redirige a componente 404 con enlace "Volver al Inicio"
