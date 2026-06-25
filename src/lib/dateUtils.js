const FORMATS = [
  [/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/, (m) => ({ y: +m[1], m: +m[2], d: +m[3] })],
  [/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/, (m) => {
    const a = +m[1], b = +m[2], c = +m[3];
    if (a > 12) return { y: c, m: b, d: a };
    if (b > 12) return { y: c, m: a, d: b };
    return { y: c, m: b, d: a };
  }],
];

export function parseDateISO(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') return null;
  for (const [re, fn] of FORMATS) {
    const m = dateStr.trim().match(re);
    if (m) {
      const { y, m: month, d } = fn(m);
      if (month >= 1 && month <= 12 && d >= 1 && d <= 31) {
        return { year: y, month, day: d };
      }
    }
  }
  return null;
}
