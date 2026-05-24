# Estado Global (Zustand)

**Archivo:** `src/store/useNumerologyStore.js`

Store único de Zustand que centraliza todo el estado de la aplicación.

## Estado

| Propiedad   | Tipo                  | Default     | Descripción                          |
| ----------- | --------------------- | ----------- | ------------------------------------ |
| `fullName`  | `string`              | `''`        | Nombre completo del usuario          |
| `birthdate` | `string`              | `''`        | Fecha de nacimiento (`YYYY-MM-DD`)   |
| `results`   | `object │ null`       | `null`      | Resultados del cálculo numerológico  |
| `isLoading` | `boolean`             | `false`     | Indicador de carga                   |
| `error`     | `string │ null`       | `null`      | Mensaje de error                     |
| `toast`     | `{message, type} │ null` | `null`   | Notificación temporal                |

## Acciones

### `setFullName(name)`
Actualiza el nombre completo.

### `setBirthdate(date)`
Actualiza la fecha de nacimiento.

### `calculate()`
Ejecuta el cálculo numerológico:
1. Valida que `fullName` y `birthdate` no estén vacíos
2. Verifica que haya al menos nombre y apellido (2+ palabras)
3. Llama a `calculateAll(fullName, birthdate)` del engine
4. Guarda resultados o establece error
5. Retorna `true`/`false`

### `showToast(message, type)`
Muestra una notificación tipo toast. `type` puede ser `'error'` o `'success'`. Se autolimpia a los 3 segundos.

### `clearToast()`
Limpia la notificación activa.

### `reset()`
Reinicia todo el estado a valores iniciales.

## Uso en componentes

```jsx
import useNumerologyStore from '../../store/useNumerologyStore';

function MyComponent() {
  const fullName = useNumerologyStore((s) => s.fullName);
  const results = useNumerologyStore((s) => s.results);
  const calculate = useNumerologyStore((s) => s.calculate);
  const showToast = useNumerologyStore((s) => s.showToast);

  // Selectores individuales evitan re-renders innecesarios
}
```
