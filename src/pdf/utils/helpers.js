export function formatDate(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}

export function todayFormatted() {
  const d = new Date();
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

export function getReportFileName(fullName) {
  const name = fullName
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join('-');
  return `Reporte-Numerologico-${name}.pdf`;
}

export function getNumberDescription(key) {
  const map = {
    destiny: 'Tu camino de vida y propósito existencial. Representa las oportunidades y desafíos que enfrentarás.',
    soul: 'Tus deseos internos, motivaciones profundas y lo que realmente anhelas en la vida.',
    personality: 'Cómo te perciben los demás, tu imagen externa y la forma en que interactúas con el mundo.',
    mission: 'Tu propósito esencial, lo que viniste a aprender y contribuir en esta existencia.',
  };
  return map[key] || '';
}

const NUMEROLOGY_MEANINGS = {
  1: 'Liderazgo, independencia, creatividad, originalidad.',
  2: 'Cooperación, sensibilidad, diplomacia, equilibrio.',
  3: 'Expresión, comunicación, optimismo, alegría.',
  4: 'Estabilidad, trabajo duro, disciplina, orden.',
  5: 'Libertad, aventura, cambios, versatilidad.',
  6: 'Responsabilidad, amor, armonía, servicio.',
  7: 'Sabiduría, introspección, espiritualidad, análisis.',
  8: 'Poder, éxito, abundancia, autoridad.',
  9: 'Compasión, humanitarismo, sabiduría universal.',
  11: 'Maestro espiritual, intuición elevada, iluminación.',
  22: 'Constructor maestro, visión práctica, manifestación.',
  33: 'Maestro sanador, amor incondicional, enseñanza.',
  44: 'Maestro de la materia, transformación estructural.',
};

export function getNumerologyMeaning(num) {
  return NUMEROLOGY_MEANINGS[num] || 'Número con vibración única y profunda.';
}
