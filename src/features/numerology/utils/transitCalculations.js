import { reduceToSingleDigit } from '../engine/numerologyEngine';
import { parseDateISO } from '../../../lib/dateUtils';

const CYCLE_MEANINGS = {
  1: {
    title: 'Nuevos Comienzos',
    meaning: 'Año de siembra. Tiempo de iniciar proyectos, tomar la iniciativa y plantar semillas para el futuro. Es un año de independencia y liderazgo.',
    energy: 'Creación, independencia, ambición',
    advice: 'Atrévete a empezar. Este año el universo apoya tus nuevos proyectos. Toma la iniciativa.',
  },
  2: {
    title: 'Conexión y Paciencia',
    meaning: 'Año de cooperación y relaciones. Tiempo de escuchar, colaborar y construir puentes. La paciencia y la diplomacia son tus mejores aliadas.',
    energy: 'Cooperación, sensibilidad, equilibrio',
    advice: 'Escucha más de lo que hablas. Las conexiones que formes este año serán la base de tu futuro.',
  },
  3: {
    title: 'Creatividad y Expresión',
    meaning: 'Año de alegría, creatividad y expansión social. Tiempo de expresarte, compartir tus talentos y disfrutar de las relaciones.',
    energy: 'Creatividad, optimismo, comunicación',
    advice: 'Exprésate sin miedo. Este año es para brillar, compartir tu luz y celebrar la vida.',
  },
  4: {
    title: 'Construcción y Estabilidad',
    meaning: 'Año de trabajo duro, disciplina y construcción de bases sólidas. Tiempo de ordenar, organizar y consolidar lo que empezaste.',
    energy: 'Disciplina, orden, responsabilidad',
    advice: 'Pon los cimientos. El trabajo constante de este año dará frutos duraderos. No te rindas.',
  },
  5: {
    title: 'Cambio y Libertad',
    meaning: 'Año de transformación, aventura y libertad. Tiempo de soltar lo viejo, explorar nuevas posibilidades y abrazar el cambio.',
    energy: 'Libertad, aventura, versatilidad',
    advice: 'Abraza los cambios. La libertad está en soltar lo que ya no te sirve. Di sí a lo nuevo.',
  },
  6: {
    title: 'Amor y Responsabilidad',
    meaning: 'Año de hogar, familia y responsabilidad. Tiempo de nutrir tus relaciones, embellecer tu entorno y servir con amor.',
    energy: 'Armonía, servicio, responsabilidad',
    advice: 'Cuida tus vínculos. El amor que siembres este año regresará multiplicado. Prioriza lo que importa.',
  },
  7: {
    title: 'Reflexión y Sabiduría',
    meaning: 'Año de introspección, estudio y crecimiento espiritual. Tiempo de retirarte del ruido exterior para conectar con tu sabiduría interior.',
    energy: 'Introspección, sabiduría, espiritualidad',
    advice: 'El silencio es tu maestro. Busca la soledad consciente para escuchar la voz de tu alma.',
  },
  8: {
    title: 'Poder y Abundancia',
    meaning: 'Año de cosecha, reconocimiento y poder personal. Tiempo de recoger los frutos de tu trabajo y manifestar abundancia.',
    energy: 'Abundancia, poder, realización',
    advice: 'Reclama tu poder. Es tiempo de cosechar lo sembrado. Reconoce tu valía y actúa en grande.',
  },
  9: {
    title: 'Cierre y Trascendencia',
    meaning: 'Año de finalización, liberación y trascendencia. Tiempo de cerrar ciclos, soltar lo que ya no resuena y prepararte para el nuevo comienzo.',
    energy: 'Compasión, trascendencia, liberación',
    advice: 'Suelta con gratitud. Lo que termina abre espacio para lo nuevo. Confía en el proceso.',
  },
};

export function calculatePersonalYear(birthMonth, birthDay, currentYear) {
  const month = reduceToSingleDigit(birthMonth);
  const day = reduceToSingleDigit(birthDay);
  const year = reduceToSingleDigit(currentYear);
  return reduceToSingleDigit(month + day + year);
}

export function calculateNineYearCycle(birthDate, currentDate) {
  const parsedBirth = parseDateISO(birthDate);
  if (!parsedBirth) return null;

  const now = currentDate ? new Date(currentDate) : new Date();
  const currentYear = now.getFullYear();

  const personalYear = calculatePersonalYear(parsedBirth.month, parsedBirth.day, currentYear);
  const cycleInfo = CYCLE_MEANINGS[personalYear];

  if (!cycleInfo) return null;

  return {
    cycleNumber: personalYear,
    title: cycleInfo.title,
    meaning: cycleInfo.meaning,
    energy: cycleInfo.energy,
    advice: cycleInfo.advice,
    progress: (personalYear / 9) * 100,
  };
}

export function getFullCycle() {
  const years = [];
  for (let i = 1; i <= 9; i++) {
    years.push({
      number: i,
      ...CYCLE_MEANINGS[i],
    });
  }
  return years;
}
