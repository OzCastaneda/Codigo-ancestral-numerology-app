# Estructuras de Datos

## `numerologyData.js`

**Archivo:** `src/features/numerology/data/numerologyData.js`

Contiene 5 estructuras congeladas (`Object.freeze()`):

### `MAP`
```js
{ A: 1, B: 2, C: 3, ..., Z: 8 }
```
Tabla pitagórica que asigna cada letra del alfabeto a un número 1-9.

### `VOWELS` y `CONSONANTS`
```js
Set { 'A', 'E', 'I', 'O', 'U' }  // VOWELS
Set { 'B', 'C', 'D', ..., 'Z' }  // CONSONANTS
```

### `MASTER_NUMBERS`
```js
Set { 11, 22, 33, 44 }
```

### `KABBALAH`

Objeto principal con 5 secciones:

#### `KABBALAH.letters` (22 letras hebreas)
```js
{
  hebrew: 'א',     // Carácter hebreo
  name: 'Aleph',   // Nombre de la letra
  literal: 'A',    // Correspondencia latina
  number: 1,       // Valor numérico
  system: 'Aire',  // Elemento
  esoteric: '...', // Significado esotérico
  positive: '...', // Cualidad positiva
  negative: '...', // Cualidad negativa
  destructive: '...', // Aspecto destructivo
  element: 'Aire',   // Elemento asociado
  planet: 'Sol',     // Planeta regente
  color: 'Amarillo', // Color
  tarot: 'El Mago',  // Arcano mayor
  sephirah: 'Kether', // Sephirah correspondiente
  bodyPart: 'Cabeza',  // Parte del cuerpo
  attributes: '...',   // Atributos
  concepts: '...',     // Conceptos asociados
  meaning: '...'       // Significado especial (master)
}
```

#### `KABBALAH.sephiroth` (10 Sephiroth)
```js
{ n: 1, name: 'Kether', meaning: 'Corona', attr: 'Voluntad Divina', body: 'Cabeza' }
```

#### `KABBALAH.zodiac` (12 signos)
```js
{
  name: 'Aries',         // Nombre del signo
  hebrewMonth: 'Nissan', // Mes hebreo
  planet: 'Marte',       // Planeta regente
  positive: '...',       // Características positivas
  negative: '...',       // Características negativas
  tikkun: '...',         // Corrección espiritual
  signLetter: 'א',       // Letra del signo
  signLetterName: 'Aleph',
  planetLetter: 'ה',     // Letra del planeta
  planetLetterName: 'He'
}
```

#### `KABBALAH.planetaryColors` (7 planetas)
```js
{ planet: 'Sol', note: 'Do', color: 'Amarillo', vowel: 'A' }
```

## `numerologyInterpretations.js`

**Archivo:** `src/features/numerology/data/numerologyInterpretations.js`

44 entradas congeladas organizadas por número y categoría. Cada entrada:

```js
{
  numero: 1,
  categoria: 'Destino',  // Destino | MotivacionAlma | YoInternoKarmico | PersonalidadExpresion
  significado: '...',     // Descripción principal
  fortalezas: ['...'],    // Array de fortalezas
  debilidades: ['...'],   // Array de debilidades
  aprendizajesKarmicos: ['...'],  // Array de lecciones kármicas
  energiaEspiritual: '...',       // Descripción energética
  compatibilidades: [1, 3, 5]    // Números compatibles
}
```

### Función `getInterpretations(numero, categoria)`

```js
getInterpretations(7, 'Destino')
// → { numero: 7, categoria: 'Destino', significado: '...', fortalezas: [...], ... }
```

Retorna `null` si no encuentra coincidencia.
