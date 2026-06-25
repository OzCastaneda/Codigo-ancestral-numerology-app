import { MAP, VOWELS, CONSONANTS, MASTER_NUMBERS } from '../data/numerologyData';
import { parseDateISO } from '../../../lib/dateUtils';

export function normalizeName(name) {
  return name
    .toUpperCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^A-Z\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function reduceToSingleDigit(n) {
  while (n > 9 && !MASTER_NUMBERS.has(n)) {
    n = Math.floor(n / 10) + (n % 10);
  }
  return n;
}

export function reductionChain(n) {
  if (n <= 9 || MASTER_NUMBERS.has(n)) return String(n);
  const digits = String(n).split('').map(Number);
  const sum = digits.reduce((a, b) => a + b, 0);
  const step = `${digits.join('+')} = ${sum}`;
  if (sum <= 9 || MASTER_NUMBERS.has(sum)) return step;
  return `${step} → ${reductionChain(sum)}`;
}

function calculateDestinyNumber(birthdate) {
  const parsed = parseDateISO(birthdate);
  if (!parsed) throw new Error('Fecha de nacimiento inválida');
  const d = reduceToSingleDigit(parsed.day);
  const m = reduceToSingleDigit(parsed.month);
  const y = reduceToSingleDigit(parsed.year);
  return reduceToSingleDigit(d + m + y);
}

function sumLetters(name, filterFn) {
  let total = 0;
  for (const ch of name) {
    if (filterFn(ch)) total += MAP[ch] || 0;
  }
  return total;
}

function calculateSoulNumber(name) {
  const total = sumLetters(name, ch => VOWELS.has(ch));
  return reduceToSingleDigit(total);
}

function calculatePersonalityNumber(name) {
  const total = sumLetters(name, ch => CONSONANTS.has(ch));
  return reduceToSingleDigit(total);
}

function calculateMissionNumber(destiny, soul) {
  return reduceToSingleDigit(destiny + soul);
}

export function calculateAll(fullName, birthdate) {
  const name = normalizeName(fullName);
  const destiny = calculateDestinyNumber(birthdate);
  const soul = calculateSoulNumber(name);
  const personality = calculatePersonalityNumber(name);
  const mission = calculateMissionNumber(destiny, soul);
  return { name, destiny, soul, personality, mission };
}

export function getZodiacSignIndex(birthdate) {
  const parsed = parseDateISO(birthdate);
  if (!parsed) return -1;
  const md = parsed.month * 100 + parsed.day;
  if (md >= 1222 || md <= 119) return 9;
  if (md >= 120 && md <= 218) return 10;
  if (md >= 219 && md <= 320) return 11;
  if (md >= 321 && md <= 419) return 0;
  if (md >= 420 && md <= 520) return 1;
  if (md >= 521 && md <= 620) return 2;
  if (md >= 621 && md <= 722) return 3;
  if (md >= 723 && md <= 822) return 4;
  if (md >= 823 && md <= 922) return 5;
  if (md >= 923 && md <= 1022) return 6;
  if (md >= 1023 && md <= 1121) return 7;
  return 8;
}

export function buildLetterSection(name, label, filterFn) {
  const letters = [...name].filter(filterFn);
  let html = `Nombre: ${name}<br>${label}: ${letters.join(', ') || 'Ninguna'}<br>`;
  if (letters.length === 0) {
    return html + '<strong>Total: 0</strong>';
  }
  const values = letters.map(ch => `${ch}=${MAP[ch]}`);
  const sum = letters.reduce((s, ch) => s + MAP[ch], 0);
  html += `Valores: ${values.join(', ')}<br>`;
  html += `<strong>Suma: ${letters.map(ch => MAP[ch]).join('+')} = ${sum} → ${reduceToSingleDigit(sum)}</strong>`;
  return html;
}
