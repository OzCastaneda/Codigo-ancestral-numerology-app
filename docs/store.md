# Estado Global (Zustand)

**Archivo:** `src/store/useNumerologyStore.js`

Store único de Zustand que centraliza todo el estado de la aplicación. Usa **selectores individuales** para evitar re-renders innecesarios.

## Estado

| Propiedad     | Tipo                  | Default     | Descripción                          |
| ------------- | --------------------- | ----------- | ------------------------------------ |
| `fullName`    | `string`              | `''`        | Nombre completo del usuario          |
| `birthdate`   | `string`              | `''`        | Fecha de nacimiento (`YYYY-MM-DD`)   |
| `sex`         | `string`              | `''`        | Sexo ('masculino' / 'femenino')      |
| `results`     | `object │ null`       | `null`      | Resultados del cálculo numerológico  |
| `reportId`    | `string │ null`       | `null`      | ID del reporte guardado              |
| `isLoading`   | `boolean`             | `false`     | Indicador de carga                   |
| `error`       | `string │ null`       | `null`      | Mensaje de error                     |
| `toast`       | `{message, type} │ null` | `null`   | Notificación temporal                |
| `reportCache` | `Map<string, CacheEntry>` | `{}`     | Caché de reportes (TTL 5 min)        |

## Selectores

Se exportan hooks individuales para subscribirse solo a la propiedad necesaria:

| Hook                  | Retorna       | Uso típico                     |
| --------------------- | ------------- | ------------------------------ |
| `useFullName()`       | `string`      | Nombre del usuario             |
| `useBirthdate()`      | `string`      | Fecha de nacimiento            |
| `useSex()`            | `string`      | Sexo del usuario               |
| `useResults()`        | `object|null` | Resultados numerológicos       |
| `useReportId()`       | `string|null` | ID del reporte activo          |
| `useIsLoading()`      | `boolean`     | Estado de carga                |
| `useError()`          | `string|null` | Mensaje de error               |
| `useToastValue()`     | `object|null` | Notificación activa            |
| `useSetFullName()`    | `function`    | Setter de fullName             |
| `useSetBirthdate()`   | `function`    | Setter de birthdate            |
| `useSetSex()`         | `function`    | Setter de sex                  |
| `useSetReportId()`    | `function`    | Setter de reportId             |
| `useShowToast()`      | `function`    | Muestra toast (message, type)  |
| `useClearToast()`     | `function`    | Limpia toast                   |
| `useCalculate()`      | `function`    | Ejecuta cálculo numerológico   |
| `useGetUserReports()` | `function`    | Obtiene reportes (con caché)   |
| `useClearReportCache()`| `function`   | Limpia caché de reportes       |

## Acciones

### `calculate()`
Ejecuta el cálculo numerológico:
1. Valida que `fullName` y `birthdate` no estén vacíos
2. Verifica que haya al menos nombre y apellido (2+ palabras)
3. Llama a `calculateAll(fullName, birthdate)` del engine
4. Guarda resultados o establece error
5. Retorna `true`/`false`

### `getUserReports(userId, page = 1, pageSize = 10)`
Obtiene reportes con caché:
1. Construye key `"${userId}_${page}"`
2. Si existe en `reportCache` y no ha expirado (TTL 5 min), retorna datos cacheados
3. Si no, llama a `getUserReports` del service y guarda en caché
4. Retorna `{ reports, total, page, pageSize, hasMore }`

### `clearReportCache()`
Limpia toda la caché de reportes.

### `showToast(message, type)`
Muestra una notificación tipo toast. `type` puede ser `'error'` o `'success'`. Se autolimpia a los 3 segundos.

### `clearToast()`
Limpia la notificación activa.

### `reset()`
Reinicia todo el estado a valores iniciales.

## Uso en componentes

```jsx
import { useFullName, useResults, useCalculate } from '../../store/useNumerologyStore';

function MyComponent() {
  const fullName = useFullName();
  const results = useResults();
  const calculate = useCalculate();

  // Solo se re-renderiza si fullName o results cambian
}
```
