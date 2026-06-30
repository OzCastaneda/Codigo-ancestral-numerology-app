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

---

## Auth Service

**Archivo:** `src/services/authService.js`

Wrapper sobre la API de Supabase Auth.

| Función | Descripción |
| ------- | ----------- |
| `signUp({ email, password, fullName })` | Registra un nuevo usuario con metadata `full_name` |
| `signIn({ email, password })` | Inicia sesión con email y contraseña |
| `signOut()` | Cierra la sesión actual |
| `getCurrentUser()` | Retorna el usuario autenticado o `null` |
| `getSession()` | Retorna la sesión activa o `null` |

Todas lanzan error si Supabase no está configurado.

---

## Report Service

**Archivo:** `src/services/reportService.js`

CRUD para la tabla `numerology_reports` en Supabase.

### `createReport(reportData)`

Inserta un reporte. `reportData` debe incluir:
```js
{ user_id, full_name, birth_date, destiny_number, soul_number, personality_number, karmic_number, report_data }
```

### `getUserReports(userId, page = 1, pageSize = 10)`

Retorna reportes paginados. Usa `.range(offset, offset + pageSize - 1)` y `Promise.all` para ejecutar count + data en paralelo.

**Retorno:**
```js
{
  reports: [...],
  total: number,       // conteo exacto (head: true)
  page: number,
  pageSize: number,
  hasMore: boolean     // true si offset + pageSize < total
}
```

### `getReportById(reportId)`

Retorna un reporte específico por ID.

### `updateReportPDF(reportId, pdfUrl)`

Actualiza el campo `pdf_url` de un reporte después de subir el PDF a Storage.

### `deleteReport(reportId)`

Elimina un reporte por ID. Retorna `{ success: true, deletedId }`.

---

## Storage Service

**Archivo:** `src/services/storageService.js`

Maneja la subida de PDFs a Supabase Storage con deduplicación.

### `uploadPDF(blob)`

1. Calcula hash SHA-256 del blob usando `crypto.subtle.digest()`
2. Si el mismo hash existe en `uploadedPDFs` Map (caché en memoria), retorna URL cacheada
3. Si no, sube a Supabase Storage bucket `report-pdfs`
4. Cachea el resultado (TTL: 1 hora, limpieza automática cada 30 min)

**Retorno:**
```js
{ path: string, publicUrl: string, cached: boolean }
```

### `getPDFPublicUrl(path)`

Obtiene la URL pública de un PDF ya subido.

---

## Password Validator

**Archivo:** `src/utils/passwordValidator.js`

### `validatePassword(password)`

Usa zxcvbn para analizar la fortaleza de una contraseña.

```js
validatePassword('MiC0ntr@s3ñ4!')
// → { score: 3, feedback: [...], isStrong: true, strengthLabel: 'Fuerte' }
```

**Retorno:**
```js
{
  score: 0-4,           // 0=muy débil, 4=muy fuerte
  feedback: string[],   // sugerencias de mejora
  isStrong: boolean,    // true si score >= 3
  strengthLabel: string // 'Muy débil' | 'Débil' | 'Normal' | 'Fuerte' | 'Muy fuerte'
}
```
