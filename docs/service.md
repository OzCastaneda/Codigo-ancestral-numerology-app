# Capa de Servicio

## Numerology Service

**Archivo:** `src/features/numerology/services/numerologyService.js`

Capa de abstracción que combina los resultados del engine, las interpretaciones y los datos cabalísticos en un perfil completo listo para renderizar.

### `computeFullProfile(fullName, birthdate)`

```js
computeFullProfile('María García López', '1990-05-15')
```

**Retorno:**

```js
{
  results: { name, destiny, soul, personality, mission },
  interpretations: { destiny: {...}, soul: {...}, personality: {...}, mission: {...} },
  kabbalistic: { destiny: {...}, soul: {...}, personality: {...}, mission: {...} },
  zodiac: { index: 3, sign: {...} }
}
```

### Punto de extensión

Diseñada para crecer: exportPDF, getAIGuidance, saveToHistory.

---

## Auth Service

**Archivo:** `src/services/authService.js`

Wrapper tipado sobre la API de Supabase Auth.

### `signUp({ email, password, fullName })`

Registra un nuevo usuario con metadata `full_name`.

### `signIn({ email, password })`

Inicia sesión con email y contraseña.

### `signOut()`

Cierra la sesión actual.

### `getCurrentUser()`

Retorna el usuario autenticado o `null`.

### `getSession()`

Retorna la sesión activa o `null`.

Todas las funciones lanzan error si Supabase no está configurado (env vars faltantes).

---

## Report Service

**Archivo:** `src/services/reportService.js`

CRUD para la tabla `numerology_reports` en Supabase.

### `createReport(reportData)`

Inserta un reporte. `reportData` debe incluir:

```js
{
  user_id: string,
  full_name: string,
  birth_date: string (YYYY-MM-DD),
  destiny_number: number,
  soul_number: number,
  personality_number: number,
  karmic_number: number,
  report_data: object
}
```

### `getUserReports(userId)`

Retorna todos los reportes de un usuario, ordenados por fecha descendente.

### `getReportById(reportId)`

Retorna un reporte específico por ID.
