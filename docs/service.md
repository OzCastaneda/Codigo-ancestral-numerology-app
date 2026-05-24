# Capa de Servicio

**Archivo:** `src/features/numerology/services/numerologyService.js`

Capa de abstracción que combina los resultados del engine, las interpretaciones y los datos cabalísticos en un perfil completo listo para renderizar.

## `computeFullProfile(fullName, birthdate)`

Función principal que orquesta todos los datos del perfil numerológico.

```js
computeFullProfile('María García López', '1990-05-15')
```

### Retorno

```js
{
  results: {
    name: 'MARÍA GARCÍA LÓPEZ',
    destiny: 7,
    soul: 9,
    personality: 7,
    mission: 7
  },
  interpretations: {
    destiny: { /* entry from numerologyInterpretations */ },
    soul: { /* ... */ },
    personality: { /* ... */ },
    mission: { /* ... */ }
  },
  kabbalistic: {
    destiny: { /* letter from KABBALAH.letters */ },
    soul: { /* ... */ },
    personality: { /* ... */ },
    mission: { /* ... */ }
  },
  zodiac: {
    index: 3,  // índice 0-11
    sign: { /* entry from KABBALAH.zodiac */ }
  }
}
```

### Manejo de errores

Si el cálculo falla, la función lanza un error. Los componentes consumidores (`ResultsPage`) deben manejar este error con `try/catch`.

### Punto de extensión

Esta capa está diseñada para crecer:
- **Exportación PDF**: Agregar método `exportPDF(profile)` 
- **Servicio AI**: Agregar método `getAIGuidance(profile)` 
- **Historial**: Agregar método `saveToHistory(profile)`
