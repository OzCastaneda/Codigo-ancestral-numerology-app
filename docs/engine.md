# Motor de Cálculo Numerológico

**Archivo:** `src/features/numerology/engine/numerologyEngine.js`

Contiene **funciones puras** que nunca tocan el DOM ni el estado global. Toda función recibe datos y retorna resultados sin efectos secundarios.

## Funciones

### `calculateAll(fullName, birthdate)`

Función principal que orquesta los 4 cálculos fundamentales.

```js
calculateAll('María García López', '1990-05-15')
// → { name: 'MARÍA GARCÍA LÓPEZ', destiny: 7, soul: 9, personality: 7, mission: 7 }
```

| Parámetro   | Tipo     | Descripción                          |
| ----------- | -------- | ------------------------------------ |
| `fullName`  | `string` | Nombre completo (nombre + apellidos) |
| `birthdate` | `string` | Fecha ISO `YYYY-MM-DD`               |

**Retorno:** `{ name: string, destiny: number, soul: number, personality: number, mission: number }`

### `calculateNameNumber(name, filterFn)`

Calcula la suma numerológica de un nombre aplicando un filtro opcional (vocales/consonantes).

| Parámetro  | Tipo       | Descripción                                    |
| ---------- | ---------- | ---------------------------------------------- |
| `name`     | `string`   | Nombre en mayúsculas                           |
| `filterFn` | `function` | `(char) => boolean` — filtro de caracteres     |

**Retorno:** `number` (valor reducido)

### `reduceToSingleDigit(n)`

Reduce un número a un dígito simple (1-9), respetando números maestros.

| Parámetro | Tipo     | Descripción          |
| --------- | -------- | -------------------- |
| `n`       | `number` | Número a reducir     |

**Reglas:**
- Si `n` es miembro de `MASTER_NUMBERS` (11, 22, 33, 44), retorna `n`
- Si `n ≤ 9`, retorna `n`
- En otro caso, suma dígitos recursivamente

### `reductionChain(n)`

Retorna una cadena legible del proceso de reducción.

```js
reductionChain(1990)
// → "1+9+9+0 = 19 → 1+9 = 10 → 1+0 = 1"
```

### `getZodiacSignIndex(birthdate)`

Determina el índice del signo zodiacal hebreo (0-11).

| Parámetro   | Tipo     | Descripción        |
| ----------- | -------- | ------------------ |
| `birthdate` | `string` | Fecha `YYYY-MM-DD` |

**Retorno:** `number` (índice 0-11 en `KABBALAH.zodiac`)

### `buildLetterSection(name, title, filterFn)`

Construye la sección de letras (vocales/consonantes) para los tabs de detalle.

**Retorno:** `string` formateada con el desglose letra por letra.
