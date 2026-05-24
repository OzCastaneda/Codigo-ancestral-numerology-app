const COLOR_HEX_MAP = Object.freeze({
  'Blanco': '#ffffff', 'Amarillo': '#ffd54f', 'Rojo': '#e53935',
  'Naranja': '#fb8c00', 'Verde': '#66bb6a', 'Azul': '#42a5f5',
  'Índigo': '#5c6bc0', 'Violeta': '#ab47bc',
});

export function colorHex(colorName) {
  return COLOR_HEX_MAP[colorName] || '#a0a0c0';
}
