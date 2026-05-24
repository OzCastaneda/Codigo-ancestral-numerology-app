import { calculateAll, getZodiacSignIndex } from '../engine/numerologyEngine';
import { getLetter, getSephirah, KABBALAH } from '../data/numerologyData';
import { getInterpretations } from '../data/numerologyInterpretations';

export function computeFullProfile(fullName, birthdate) {
  const results = calculateAll(fullName, birthdate);
  const zodiacIdx = getZodiacSignIndex(birthdate);
  const sign = KABBALAH.zodiac[zodiacIdx] || null;

  const NUMBERS = [
    { key: 'destiny', categoria: 'Destino' },
    { key: 'soul', categoria: 'MotivacionAlma' },
    { key: 'personality', categoria: 'PersonalidadExpresion' },
    { key: 'mission', categoria: 'YoInternoKarmico' },
  ];

  const interpretations = {};
  const kabbalistic = {};

  NUMBERS.forEach(({ key, categoria }) => {
    const n = results[key];
    interpretations[key] = getInterpretations(n, categoria);
    kabbalistic[key] = getLetter(n);
  });

  return { results, zodiacIdx, sign, interpretations, kabbalistic };
}
