'use strict';

/* ============================================================
   Numerología Pitagórica y Cabalística — App
   Separated architecture: Data → Engine → UI → Controller
   ============================================================ */


// ============================================================
//  1. Immutable Data Layer
// ============================================================

const _MAP = Object.freeze({
  A: 1, J: 1, S: 1,
  B: 2, K: 2, T: 2,
  C: 3, L: 3, U: 3,
  D: 4, M: 4, V: 4,
  E: 5, N: 5, W: 5,
  F: 6, O: 6, X: 6,
  G: 7, P: 7, Y: 7,
  H: 8, Q: 8, Z: 8,
  I: 9, R: 9,
});

const _VOWELS = Object.freeze(new Set(['A', 'E', 'I', 'O', 'U']));

const _CONSONANTS = Object.freeze(
  new Set(Object.keys(_MAP).filter(ch => !_VOWELS.has(ch)))
);

const NumerologyData = Object.freeze({

  MAP: _MAP,

  MASTER_NUMBERS: Object.freeze(new Set([11, 22, 33, 44])),

  VOWELS: _VOWELS,

  CONSONANTS: _CONSONANTS,

  /* ---- Kabbalah: 22 Hebrew Letters ---- */
  KABBALAH: Object.freeze({
    letters: Object.freeze({
      1: Object.freeze({
        hebrew: 'א', name: 'Aleph', literal: 'Cabeza de buey',
        esoteric: 'El aliento de Dios. Principio vital de todo, aliento necesario para pronunciar las otras 21 letras.',
        element: 'Aire', planet: 'Tauro', color: 'Blanco',
        tarot: 'El Mago', attributes: 'Control, iniciativa, liderazgo, ambición',
        concepts: 'Unidad, el "Yo Soy", semilla de la Deidad',
        sephirah: 'Kether', bodyPart: 'Cabeza / Glándula Pineal',
        system: 'Letra Madre',
        positive: 'Activo, ambicioso, con confianza en sí mismo y capacidad de liderazgo. Es el inventor, el innovador y el pensador original.',
        negative: 'Puede volverse agresivo, egoísta, terco o sumamente consciente de sí mismo hasta el punto de la timidez.',
        destructive: 'Se manifiesta como un tirano, un acosador (bully), antagonista o un fanático extremadamente egoísta.',
      }),
      2: Object.freeze({
        hebrew: 'ב', name: 'Beth', literal: 'Casa, Boca, Matriz',
        esoteric: 'El lugar de nacimiento de la creación. La cavidad bucal donde nacen las palabras.',
        planet: 'Luna', color: null, tarot: 'La Sacerdotisa',
        attributes: 'Sabiduría vs. Necedad, principio femenino receptivo',
        concepts: 'Dualidad, el "Be" (ser/existencia)',
        sephirah: 'Chochmah', bodyPart: 'Hemisferio Cerebral Derecho',
        system: 'Letra Doble',
        positive: 'Cooperativo, amable, modesto y diplomático. Posee un tacto natural para mantener la paz y es un excelente compañero.',
        negative: 'Indeciso por ver ambos lados de un asunto, inseguro, tímido y excesivamente emocional.',
        destructive: 'Mal genio, cruel, engañoso y propenso a la mentira o la cobardía.',
      }),
      3: Object.freeze({
        hebrew: 'ג', name: 'Gimel', literal: 'Camello',
        esoteric: 'La fluidez del habla y la comunicación. Como el camello almacena agua, la garganta es el resonador del sonido.',
        planet: 'Marte', color: null, tarot: 'La Emperatriz',
        attributes: 'Riqueza vs. Pobreza, salud vs. enfermedad',
        concepts: 'Producto de la unión (El Hijo), expresión creativa',
        sephirah: 'Binah', bodyPart: 'Hemisferio Cerebral Izquierdo',
        system: 'Letra Doble',
        positive: 'Alegre, entusiasta, con un gran sentido del humor y talento para las artes (escritura, canto, oratoria).',
        negative: 'Aburrido, vanidoso, impaciente con las responsabilidades y propenso a dispersar sus energías.',
        destructive: 'Chismoso, codicioso, celoso, hipócrita e intolerante.',
      }),
      4: Object.freeze({
        hebrew: 'ד', name: 'Daleth', literal: 'Puerta, Matriz Cósmica',
        esoteric: 'El acceso a la manifestación física. El útero es la puerta del nacimiento.',
        color: null, tarot: 'El Emperador',
        attributes: 'Conocimiento vs. Ignorancia',
        concepts: 'Estabilidad, orden, el cuadrado, integridad',
        sephirah: 'Chesed', bodyPart: 'Brazo Derecho',
        system: 'Letra Doble',
        positive: 'Disciplinado, honesto, organizado, paciente y patriótico. Es el trabajador incansable que busca una base firme.',
        negative: 'Argumentativo, seco, sin sentido del humor, estrecho de miras y adicto al trabajo.',
        destructive: 'Violento, vulgar, cruel y propenso al odio o al animalismo.',
      }),
      5: Object.freeze({
        hebrew: 'ה', name: 'He', literal: 'Ventana',
        esoteric: 'El aliento de vida. Potencia femenina en el nombre divino IHVH.',
        color: 'Amarillo',
        attributes: 'Habla, dar frutos',
        concepts: 'Vitalidad, procreación, los cinco sentidos',
        sephirah: 'Geburah', bodyPart: 'Brazo Izquierdo',
        system: 'Letra Simple',
        positive: 'Adaptable, aventurero, valiente, encantador y versátil. Es el "súper vendedor" con gran curiosidad mental.',
        negative: 'Impaciente, irresponsable, inquieto y propenso a postergar (procrastinar).',
        destructive: 'Disipación a través de los sentidos (drogas, exceso de comida o sexo), jugador compulsivo y perversión.',
      }),
      6: Object.freeze({
        hebrew: 'ו', name: 'Vav', literal: 'Clavo, Gancho, Ojo',
        esoteric: 'El eslabón que une lo humano con lo divino. El clavo que sostiene la creación.',
        planet: 'Tauro (Aldebarán)',
        attributes: 'Pensamiento',
        concepts: 'Responsabilidad, servicio, el Cuerpo',
        sephirah: 'Tiphereth', bodyPart: 'Plexo Solar / Corazón',
        system: 'Letra Simple',
        positive: 'Artístico, humanitario, protector y comprensivo. Posee talento musical y es un consejero nato.',
        negative: 'Entrometido, presumido, propenso a discutir y con necesidad constante de aprobación.',
        destructive: 'Tiranía doméstica, engreimiento, esclavitud hacia otros y tendencia a ser un mártir.',
      }),
      7: Object.freeze({
        hebrew: 'ז', name: 'Zain', literal: 'Arma, Espada, Cetro',
        esoteric: 'El dominio de la lengua. Las flechas son las palabras.',
        attributes: 'Movimiento',
        concepts: 'Victoria a través de la iluminación espiritual',
        sephirah: 'Netzach', bodyPart: 'Pierna Derecha',
        system: 'Letra Simple',
        positive: 'Analítico, dignificado, intuitivo y sabio. Prefiere la calidad a la cantidad y busca la perfección.',
        negative: 'Distante, frío, melancólico, escéptico y extremadamente reservado o solitario.',
        destructive: 'Engañoso, deshonesto, infiel, sarcástico y con motivos ocultos o maliciosos.',
      }),
      8: Object.freeze({
        hebrew: 'ח', name: 'Cheth', literal: 'Campo, Cerca',
        esoteric: 'El cultivo de la propia conciencia. Las limitaciones autoimpuestas.',
        attributes: 'Vista (Intuición)',
        concepts: 'Cosecha de los actos — como siembras, cosechas',
        sephirah: 'Hod', bodyPart: 'Pierna Izquierda',
        system: 'Letra Simple',
        positive: 'Ambicioso, eficiente, con gran capacidad ejecutiva y juicio sólido. Posee resistencia física y rítmica.',
        negative: 'Materialista, impaciente, desconsiderado con el dinero y represor de sentimientos.',
        destructive: 'Abusivo, cruel, intolerante, vengativo y esquemático.',
      }),
      9: Object.freeze({
        hebrew: 'ט', name: 'Teth', literal: 'Serpiente, Techo',
        esoteric: 'Sabiduría ganada. La serpiente enroscada representa la fuerza Kundalini.',
        attributes: 'Audición',
        concepts: 'Protección a través de la sabiduría',
        sephirah: 'Jesod', bodyPart: 'Sistema Generativo',
        system: 'Letra Simple',
        positive: 'Compasivo, generoso, idealista y con gran talento dramático o artístico. Ama a la humanidad.',
        negative: 'Sin rumbo, cargado emocionalmente, frustrado y demasiado sensible.',
        destructive: 'Amargo, inmoral, vulgar, posesivo y con malos hábitos.',
      }),
    }),

    masterNumbers: Object.freeze({
      11: Object.freeze({
        hebrew: 'כ', name: 'Kaph', literal: 'Palma de la mano',
        esoteric: 'Sostener oportunidades. La palma que bendice.',
        planet: 'Venus',
        attributes: 'Vida vs. Muerte, Amor divino vs. humano',
        sephirah: 'Chochmah + Binah (iluminación superior)',
        system: 'Letra Doble',
        meaning: 'Maestro de la iluminación espiritual. Canaliza sabiduría divina.',
        positive: 'Inspirado, intuitivo, carismático y con ideales elevados. Mensajero de inspiración.',
        negative: 'Soñador despierto, confundido, tacaño y poco práctico.',
        destructive: 'Diabólico, deshonesto, malvado y fanático religioso.',
      }),
      22: Object.freeze({
        hebrew: 'ת', name: 'Tau', literal: 'Signo de la Cruz',
        esoteric: 'El fin de un ciclo. Superación de limitaciones.',
        tarot: 'El Mundo',
        attributes: 'Belleza vs. Deformidad',
        sephirah: '32 Senderos (22 letras + 10 Sephiroth)',
        system: 'Letra Doble',
        meaning: 'Maestro constructor. Poder de manifestar lo imposible.',
        positive: 'Maestro del logro, líder capaz, dinámico y práctico. Capaz de materializar grandes sueños.',
        negative: 'Indiferente, con complejos de inferioridad y frustración.',
        destructive: 'Magia negra, líder de pandillas, criminal y malvado.',
      }),
      33: Object.freeze({
        hebrew: 'ל', name: 'Lamed', literal: 'Aguijón de buey',
        esoteric: 'El brazo extendido de Dios. Deseo sexual como fuerza evolutiva.',
        attributes: 'Amor y creatividad, empuje hacia adelante',
        sephirah: 'Jesod + Tiphereth (amor compasivo universal)',
        system: 'Letra Simple',
        meaning: 'Maestro de la compasión. Amor incondicional en acción.',
        positive: 'Compasivo, humilde y con gran capacidad de sacrificio personal por amor. Entrega altruista.',
        negative: 'Mártir, entrometido y esclavo de los demás.',
        destructive: 'Agotado, autodestructivo y desconsiderado.',
      }),
      44: Object.freeze({
        hebrew: 'ד-י', name: 'Dalet-Yod', literal: 'Puerta divina',
        esoteric: 'Resuelve necesidades materiales del mundo mediante la terapia espiritual o física.',
        sephirah: 'Chochmah + Binah + Tiphereth (sanación superior)',
        system: 'Número Maestro',
        meaning: 'Maestro terapeuta. Líder con control mental y fuerza de convicción.',
        positive: 'Líder con control mental y fuerza de convicción. Terapeuta nato que resuelve necesidades del mundo.',
        negative: 'Desconsiderado, agotado o autodestructivo.',
        destructive: 'Desconsiderado, agotado o autodestructivo.',
      }),
    }),

    /* ---- 10 Sephiroth (Tree of Life) ---- */
    sephiroth: Object.freeze([
      Object.freeze({ n: 1, name: 'Kether', meaning: 'La Corona', attr: 'Voluntad Divina', body: 'Cabeza / Pineal' }),
      Object.freeze({ n: 2, name: 'Chochmah', meaning: 'Sabiduría', attr: 'Padre', body: 'Hemisferio Derecho' }),
      Object.freeze({ n: 3, name: 'Binah', meaning: 'Entendimiento', attr: 'Madre', body: 'Hemisferio Izquierdo' }),
      Object.freeze({ n: 4, name: 'Chesed', meaning: 'Misericordia', attr: 'Amor', body: 'Brazo Derecho' }),
      Object.freeze({ n: 5, name: 'Geburah', meaning: 'Severidad', attr: 'Fuerza', body: 'Brazo Izquierdo' }),
      Object.freeze({ n: 6, name: 'Tiphereth', meaning: 'Belleza', attr: 'Armonía', body: 'Plexo Solar / Corazón' }),
      Object.freeze({ n: 7, name: 'Netzach', meaning: 'Victoria', attr: 'Firmeza', body: 'Pierna Derecha' }),
      Object.freeze({ n: 8, name: 'Hod', meaning: 'Gloria', attr: 'Esplendor', body: 'Pierna Izquierda' }),
      Object.freeze({ n: 9, name: 'Jesod', meaning: 'Fundamento', attr: 'Conexión', body: 'Sistema Generativo' }),
      Object.freeze({ n: 10, name: 'Malkuth', meaning: 'Reino', attr: 'Manifestación', body: 'Los dos Pies' }),
    ]),

    /* ---- Planetary / Color / Note correspondences ---- */
    planetaryColors: Object.freeze([
      Object.freeze({ planet: 'Marte', note: 'Do (C)', color: 'Rojo', vowel: 'Omicron (O)' }),
      Object.freeze({ planet: 'Sol', note: 'Re (D)', color: 'Naranja', vowel: 'Iota (I)' }),
      Object.freeze({ planet: 'Mercurio', note: 'Mi (E)', color: 'Amarillo', vowel: 'Epsilon (E)' }),
      Object.freeze({ planet: 'Saturno', note: 'Fa (F)', color: 'Verde', vowel: 'Omega (O)' }),
      Object.freeze({ planet: 'Júpiter', note: 'Sol (G)', color: 'Azul', vowel: 'Upsilon (Y)' }),
      Object.freeze({ planet: 'Venus', note: 'La (A)', color: 'Índigo', vowel: 'Eta (H)' }),
      Object.freeze({ planet: 'Luna', note: 'Si (B)', color: 'Violeta', vowel: 'Alpha (A)' }),
    ]),

    /* ---- Zodiac (12 signs) ---- */
    zodiac: Object.freeze([
      Object.freeze({ name: 'Aries', hebrewMonth: 'Nissan', signLetter: 'ה', signLetterName: 'He', planetLetter: 'ד', planetLetterName: 'Dalet', planet: 'Marte', positive: 'Espíritu pionero, entusiasmo desbordante, valor y amor por la libertad. Líderes naturales, audaces y sin temor a los enfrentamientos en nombre de una causa.', negative: 'Impulsividad, obstinación y egoísmo infantil, creyéndose el centro del universo. Inflexibles, sin diplomacia, actúan sin considerar consecuencias.', tikkun: 'Descubrir su propia identidad y mejorar su autoestima sin depender de la aprobación ajena, transformando su naturaleza combativa en un servicio desinteresado.' }),
      Object.freeze({ name: 'Tauro', hebrewMonth: 'Iyar', signLetter: 'ו', signLetterName: 'Vav', planetLetter: 'פ', planetLetterName: 'Pei', planet: 'Venus', positive: 'Leal, paciente, tolerante, amigable y confiable. Gran apreciación por la belleza, optimista y centrado en los aspectos positivos de la vida.', negative: 'Extremadamente terco y complaciente, aislándose en una burbuja de comodidad. Le falta ambición, iniciativa e imaginación, cayendo en el estancamiento.', tikkun: 'Superar la naturaleza autodestructiva y la desconfianza heredadas de una vida pasada en Escorpio, aprendiendo a disfrutar sin temor a la pérdida.' }),
      Object.freeze({ name: 'Géminis', hebrewMonth: 'Sivan', signLetter: 'ז', signLetterName: 'Záin', planetLetter: 'ר', planetLetterName: 'Resh', planet: 'Mercurio', positive: 'Rapidez mental extraordinaria, multitalentoso, abierto y comunicador persuasivo capaz de ver todos los lados de un problema.', negative: 'Superficialidad, inestabilidad y falta de perseverancia. Oportunista intelectual, chismoso y cínico, evita el compromiso emocional profundo.', tikkun: 'Superar el comportamiento de niño malcriado de su vida pasada en Sagitario, comprometiéndose con los demás y compartiendo conocimiento con humildad.' }),
      Object.freeze({ name: 'Cáncer', hebrewMonth: 'Tammuz', signLetter: 'ח', signLetterName: 'Chet', planetLetter: 'ת', planetLetterName: 'Tav', planet: 'Luna', positive: 'Extremadamente intuitivo, sensible y con gran capacidad para comprender las necesidades de los demás. Protector, valora el hogar y la familia.', negative: 'Inseguridad, inestabilidad emocional y miedo al futuro. Se esconde en una coraza de indiferencia o posesiones, paralizado por la ansiedad y la duda.', tikkun: 'Abandonar la obsesión por el éxito profesional y el prestigio social (herencia de Capricornio) para encontrar plenitud en el amor familiar y la piedad.' }),
      Object.freeze({ name: 'Leo', hebrewMonth: 'Av', signLetter: 'ט', signLetterName: 'Tet', planetLetter: 'כ', planetLetterName: 'Kaf', planet: 'Sol', positive: 'Carismático, generoso, honesto y líder natural con gran fuerza interior y creatividad. Transmite una gran seguridad en sí mismo.', negative: 'Arrogancia, vanidad y orgullo. Dictatorial, mal oyente, susceptible a halagos superficiales, cree que todo gira a su alrededor.', tikkun: 'Superar el deseo de originalidad superficial de su vida en Acuario para servir a la humanidad de forma altruista, silenciando el ego y practicando la modestia.' }),
      Object.freeze({ name: 'Virgo', hebrewMonth: 'Elul', signLetter: 'י', signLetterName: 'Iud', planetLetter: 'ר', planetLetterName: 'Resh', planet: 'Mercurio', positive: 'Analítico, lógico, metódico, responsable y con gran sentido del honor en el cumplimiento del deber. Busca la pureza y el orden perfecto.', negative: 'Excesivamente crítico, frío y falto de diplomacia. El perfeccionismo le impide ver el panorama completo, atrapado en detalles insignificantes.', tikkun: 'Transmutar el sentimentalismo y las fantasías de su vida pasada en Piscis hacia una visión realista y autodisciplinada, asumiendo responsabilidad aquí y ahora.' }),
      Object.freeze({ name: 'Libra', hebrewMonth: 'Tishrei', signLetter: 'ל', signLetterName: 'Lamed', planetLetter: 'פ', planetLetterName: 'Pei', planet: 'Venus', positive: 'Amistoso, caluroso, social y busca constantemente el equilibrio, la justicia y la armonía en sus relaciones.', negative: 'Indecisión paralizante y duda perpetua. Evita confrontaciones por miedo a errar y racionaliza sus sentimientos para no comprometerse del todo.', tikkun: 'Anular el orgullo y la autosuficiencia de su vida en Aries, aprendiendo a trabajar en equipo y a amar desinteresadamente a través del matrimonio.' }),
      Object.freeze({ name: 'Escorpio', hebrewMonth: 'Mar-Cheshván', signLetter: 'נ', signLetterName: 'Nun', planetLetter: 'ד', planetLetterName: 'Dalet', planet: 'Marte', positive: 'Magnetismo poderoso, gran fuerza de voluntad e intuición. Extremadamente independiente y capaz de una lealtad profunda si confía.', negative: 'Vengativo, celoso, cruel y dominado por emociones extremas de odio o amor ciego. Reservado y manipulador para mantener el control.', tikkun: 'Abandonar la terquedad y el materialismo de Tauro para permitir la espontaneidad y la confianza en la Luz, logrando una transformación hacia la empatía.' }),
      Object.freeze({ name: 'Sagitario', hebrewMonth: 'Kislev', signLetter: 'ס', signLetterName: 'Samech', planetLetter: 'ג', planetLetterName: 'Guimel', planet: 'Júpiter', positive: 'Aventurero, optimista, inteligente y responsable de sus errores sin culpar a otros. Posee una fe natural en que todo saldrá bien.', negative: 'Irresponsable, insensible a necesidades ajenas y buscador de gratificación instantánea. Le falta concentración y perseverancia.', tikkun: 'Definir metas claras y actuar con integridad para superar la superficialidad y la incertidumbre de su vida pasada en Géminis.' }),
      Object.freeze({ name: 'Capricornio', hebrewMonth: 'Tevet', signLetter: 'ע', signLetterName: 'Áin', planetLetter: 'ב', planetLetterName: 'Bet', planet: 'Saturno', positive: 'Serio, disciplinado, trabajador, práctico y altamente responsable desde temprana edad.', negative: 'Materialismo extremo, frialdad emocional y falta de caridad. Muy exigente, pesimista y reacio a cualquier riesgo que amenace su seguridad.', tikkun: 'Superar la dependencia emocional y el miedo al riesgo de su vida pasada en Cáncer, asumiendo responsabilidades sociales y madurez espiritual.' }),
      Object.freeze({ name: 'Acuario', hebrewMonth: 'Shvat', signLetter: 'צ', signLetterName: 'Tzadi', planetLetter: 'ב', planetLetterName: 'Bet', planet: 'Saturno', positive: 'Idealista, innovador y con visión unificada del mundo. Se preocupa por el bienestar de la humanidad y busca derribar estructuras obsoletas.', negative: 'Extremadamente obstinado y rebelde sin causa real. Descuidando individuos por enfocarse en las masas. Orgullo intelectual.', tikkun: 'Silenciar el ego real de su vida pasada en Leo para practicar la humildad, aceptando la interdependencia y la fraternidad universal.' }),
      Object.freeze({ name: 'Piscis', hebrewMonth: 'Adar', signLetter: 'ק', signLetterName: 'Kuf', planetLetter: 'ג', planetLetterName: 'Guimel', planet: 'Júpiter', positive: 'El signo más humilde, gentil y desinteresado, con un deseo natural de compartir y ayudar a los demás. Gran sensibilidad espiritual.', negative: 'Complaciente y pasivo, evita la acción bajo la creencia de que todo es una ilusión. A veces permite que su compasión encubra la verdad necesaria.', tikkun: 'Superar la lógica estricta y el perfeccionismo de su vida en Virgo para conectarse con la realidad espiritual y la compasión universal.' }),
    ]),
  }),

  getLetter(n) {
    const { letters, masterNumbers } = this.KABBALAH;
    return this.MASTER_NUMBERS.has(n) ? masterNumbers[n] : letters[n] || null;
  },

  getSephirah(n) {
    return this.KABBALAH.sephiroth.find(s => s.n === n) || null;
  },
});


// ============================================================
//  2. Engine — Pure calculation functions (no DOM)
// ============================================================

const NumerologyEngine = {

  normalizeName(name) {
    return name
      .toUpperCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^A-Z\s]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  },

  reduceToSingleDigit(n) {
    const { MASTER_NUMBERS } = NumerologyData;
    while (n > 9 && !MASTER_NUMBERS.has(n)) {
      n = Math.floor(n / 10) + (n % 10);
    }
    return n;
  },

  reductionChain(n) {
    const { MASTER_NUMBERS } = NumerologyData;
    if (n <= 9 || MASTER_NUMBERS.has(n)) return String(n);
    const digits = String(n).split('').map(Number);
    const sum = digits.reduce((a, b) => a + b, 0);
    const step = `${digits.join('+')} = ${sum}`;
    if (sum <= 9 || MASTER_NUMBERS.has(sum)) return step;
    return `${step} → ${this.reductionChain(sum)}`;
  },

  calculateDestinyNumber(birthdate) {
    const [year, month, day] = birthdate.split('-').map(Number);
    const d = this.reduceToSingleDigit(day);
    const m = this.reduceToSingleDigit(month);
    const y = this.reduceToSingleDigit(year);
    return this.reduceToSingleDigit(d + m + y);
  },

  _sumLetters(name, filterFn) {
    const { MAP } = NumerologyData;
    let total = 0;
    for (const ch of name) {
      if (filterFn(ch)) total += MAP[ch] || 0;
    }
    return total;
  },

  calculateSoulNumber(name) {
    const total = this._sumLetters(name, ch => NumerologyData.VOWELS.has(ch));
    return this.reduceToSingleDigit(total);
  },

  calculatePersonalityNumber(name) {
    const total = this._sumLetters(name, ch => NumerologyData.CONSONANTS.has(ch));
    return this.reduceToSingleDigit(total);
  },

  calculateMissionNumber(destiny, soul) {
    return this.reduceToSingleDigit(destiny + soul);
  },

  /* ---- Bulk calculation ---------- */
  calculateAll(fullName, birthdate) {
    const name = this.normalizeName(fullName);
    const destiny = this.calculateDestinyNumber(birthdate);
    const soul = this.calculateSoulNumber(name);
    const personality = this.calculatePersonalityNumber(name);
    const mission = this.calculateMissionNumber(destiny, soul);
    return { name, destiny, soul, personality, mission };
  },

  getZodiacSignIndex(birthdate) {
    const [, month, day] = birthdate.split('-').map(Number);
    const md = month * 100 + day;
    if (md >= 1222 || md <= 119) return 9;   // Capricorn
    if (md >= 120 && md <= 218) return 10;   // Aquarius
    if (md >= 219 && md <= 320) return 11;   // Pisces
    if (md >= 321 && md <= 419) return 0;    // Aries
    if (md >= 420 && md <= 520) return 1;    // Taurus
    if (md >= 521 && md <= 620) return 2;    // Gemini
    if (md >= 621 && md <= 722) return 3;    // Cancer
    if (md >= 723 && md <= 822) return 4;    // Leo
    if (md >= 823 && md <= 922) return 5;    // Virgo
    if (md >= 923 && md <= 1022) return 6;   // Libra
    if (md >= 1023 && md <= 1121) return 7;  // Scorpio
    return 8;                                 // Sagittarius
  },
};


// ============================================================
//  3. UI Module — DOM rendering & event wiring
// ============================================================

const NumerologyUI = {

  els: {},

  init() {
    this.els = {
      fullname: document.getElementById('fullname'),
      birthdate: document.getElementById('birthdate'),
      calculateBtn: document.getElementById('calculate-btn'),
      exportBtn: document.getElementById('export-btn'),
      graphBtn: document.getElementById('graph-btn'),
      resultsContainer: document.getElementById('results-container'),
      kabbalisticContainer: document.getElementById('kabbalistic-container'),
      destinyCalc: document.getElementById('destiny-calculation'),
      soulCalc: document.getElementById('soul-calculation'),
      personalityCalc: document.getElementById('personality-calculation'),
      missionCalc: document.getElementById('mission-calculation'),
      sephirothTable: document.getElementById('sephiroth-body'),
      planetaryGrid: document.getElementById('planetary-grid'),
      astrologicalContainer: document.getElementById('astrological-container'),
    };

    this.els.birthdate.max = new Date().toISOString().split('T')[0];
    this.setupTabs();
    this.bindEvents();
    this.renderSephirothTable();
    this.renderPlanetaryGrid();
  },

  bindEvents() {
    this.els.calculateBtn.addEventListener('click', () => AppController.handleCalculate());
    this.els.fullname.addEventListener('keydown', e => {
      if (e.key === 'Enter') AppController.handleCalculate();
    });
    this.els.birthdate.addEventListener('keydown', e => {
      if (e.key === 'Enter') AppController.handleCalculate();
    });
    this.els.exportBtn.addEventListener('click', () =>
      this.showToast('Función de exportación próximamente.', 'info'));
    this.els.graphBtn.addEventListener('click', () =>
      this.showToast('Función de gráfico próximamente.', 'info'));
  },

  setupTabs() {
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.tab, .tab-content')
          .forEach(el => el.classList.remove('active'));
        tab.classList.add('active');
        const content = document.getElementById(`${tab.dataset.tab}-content`);
        if (content) content.classList.add('active');
      });
    });
  },

  showToast(message, type = 'error') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.textContent = message;
    toast.setAttribute('role', 'alert');
    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('visible'));

    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  },

  /* ---- Main Results (4 number cards) ---- */
  displayResults(destiny, soul, personality, mission) {
    const values = [destiny, soul, personality, mission];
    const cards = this.els.resultsContainer.querySelectorAll('.number-card');
    cards.forEach((card, i) => {
      const el = card.querySelector('.number-value');
      if (el) {
        el.classList.remove('loading', 'pop');
        el.textContent = values[i];
        void el.offsetWidth;
        el.classList.add('pop');
      }
    });
  },

  /* ---- Calculation Detail Tabs ---- */
  displayCalculations(name, birthdate, results) {
    const { destiny, soul, personality, mission } = results;
    const [year, month, day] = birthdate.split('-');
    const dNum = parseInt(day, 10);
    const mNum = parseInt(month, 10);
    const yNum = parseInt(year, 10);

    const dRed = NumerologyEngine.reduceToSingleDigit(dNum);
    const mRed = NumerologyEngine.reduceToSingleDigit(mNum);
    const yRed = NumerologyEngine.reduceToSingleDigit(yNum);
    const intermediate = dRed + mRed + yRed;

    this.els.destinyCalc.innerHTML = `
      Fecha: ${day}/${month}/${year}<br>
      Día: ${dNum} → ${NumerologyEngine.reductionChain(dNum)}<br>
      Mes: ${mNum} → ${NumerologyEngine.reductionChain(mNum)}<br>
      Año: ${yNum} → ${NumerologyEngine.reductionChain(yNum)}<br><br>
      <strong>${dRed} + ${mRed} + ${yRed} = ${intermediate} → ${destiny}</strong>
    `;

    this.els.soulCalc.innerHTML = this.buildLetterSection(
      name, 'Vocales', ch => NumerologyData.VOWELS.has(ch));

    this.els.personalityCalc.innerHTML = this.buildLetterSection(
      name, 'Consonantes', ch => NumerologyData.CONSONANTS.has(ch));

    const sum = destiny + soul;
    this.els.missionCalc.innerHTML = `
      Número de Destino: ${destiny}<br>
      Número del Alma: ${soul}<br><br>
      <strong>${destiny} + ${soul} = ${sum} → ${mission}</strong>
    `;
  },

  buildLetterSection(name, label, filterFn) {
    const { MAP } = NumerologyData;
    const letters = [...name].filter(filterFn);
    let html = `Nombre: ${name}<br>${label}: ${letters.join(', ') || 'Ninguna'}<br>`;
    if (letters.length === 0) {
      return html + '<strong>Total: 0</strong>';
    }
    const values = letters.map(ch => `${ch}=${MAP[ch]}`);
    const sum = letters.reduce((s, ch) => s + MAP[ch], 0);
    html += `Valores: ${values.join(', ')}<br>`;
    html += `<strong>Suma: ${letters.map(ch => MAP[ch]).join('+')} = ${sum} → ${NumerologyEngine.reduceToSingleDigit(sum)}</strong>`;
    return html;
  },

  /* =============================================================
     Kabbalistic Interpretation
     ============================================================= */

  displayKabbalistic(destiny, soul, personality, mission) {
    const numbers = [destiny, soul, personality, mission];
    const labels = ['Destino', 'Alma', 'Personalidad', 'Misión'];
    const icons = ['fa-compass', 'fa-heart', 'fa-user', 'fa-star'];

    let html = '<div class="kabbalistic-grid">';
    numbers.forEach((n, i) => {
      const letter = NumerologyData.getLetter(n);
      if (!letter) {
        html += `<article class="kabbalistic-card">
          <h3 class="kabbalistic-card-title"><i class="fas ${icons[i]}"></i> ${labels[i]} — ${n}</h3>
          <p class="kabbalistic-empty">Sin correspondencia disponible</p>
        </article>`;
        return;
      }

      const sephirah = NumerologyData.getSephirah(n <= 9 ? n : null);

      html += `<article class="kabbalistic-card">
        <div class="kabbalistic-header">
          <span class="kabbalistic-hebrew">${letter.hebrew}</span>
          <div class="kabbalistic-meta">
            <h3 class="kabbalistic-card-title">
              <i class="fas ${icons[i]}"></i> ${labels[i]}
              <span class="kabbalistic-number">${n}</span>
            </h3>
            <span class="kabbalistic-letter-name">${letter.name} — ${letter.literal}</span>
            <span class="kabbalistic-system">${letter.system}</span>
          </div>
        </div>

        <p class="kabbalistic-esoteric">${letter.esoteric}</p>

        <div class="kabbalistic-tags">
          ${letter.element ? `<span class="tag tag-element"><i class="fas fa-wind"></i> ${letter.element}</span>` : ''}
          ${letter.planet ? `<span class="tag tag-planet"><i class="fas fa-globe"></i> ${letter.planet}</span>` : ''}
          ${letter.color ? `<span class="tag tag-color" style="--tag-color: ${this._colorHex(letter.color)}"><i class="fas fa-palette"></i> ${letter.color}</span>` : ''}
          ${letter.tarot ? `<span class="tag tag-tarot"><i class="fas fa-cards"></i> ${letter.tarot}</span>` : ''}
        </div>

        <div class="kabbalistic-detail-row">
          <div class="kabbalistic-detail-item">
            <span class="kabbalistic-detail-label">Sephirah</span>
            <span class="kabbalistic-detail-value">${letter.sephirah}</span>
          </div>
          <div class="kabbalistic-detail-item">
            <span class="kabbalistic-detail-label">Cuerpo</span>
            <span class="kabbalistic-detail-value">${letter.bodyPart || '—'}</span>
          </div>
        </div>

        ${letter.positive ? `
        <div class="trait-tier trait-positive">
          <h4><i class="fas fa-sun"></i> Positivo</h4>
          <p>${letter.positive}</p>
        </div>` : ''}

        ${letter.negative ? `
        <div class="trait-tier trait-negative">
          <h4><i class="fas fa-moon"></i> Negativo</h4>
          <p>${letter.negative}</p>
        </div>` : ''}

        ${letter.destructive ? `
        <div class="trait-tier trait-destructive">
          <h4><i class="fas fa-bolt"></i> Destructivo</h4>
          <p>${letter.destructive}</p>
        </div>` : ''}

        <div class="kabbalistic-attributes">
          <strong>Atributos:</strong> ${letter.attributes}
        </div>

        <div class="kabbalistic-concepts">
          <strong>Conceptos:</strong> ${letter.concepts}
        </div>

        ${letter.meaning ? `<div class="kabbalistic-master-meaning"><i class="fas fa-crown"></i> ${letter.meaning}</div>` : ''}
      </article>`;
    });
    html += '</div>';

    this.els.kabbalisticContainer.innerHTML = html;
  },

  _colorHex(colorName) {
    const map = {
      'Blanco': '#ffffff', 'Amarillo': '#ffd54f', 'Rojo': '#e53935',
      'Naranja': '#fb8c00', 'Verde': '#66bb6a', 'Azul': '#42a5f5',
      'Índigo': '#5c6bc0', 'Violeta': '#ab47bc',
    };
    return map[colorName] || '#a0a0c0';
  },

  /* =============================================================
     Astrological Profile
     ============================================================= */

  displayAstrological(birthdate) {
    const idx = NumerologyEngine.getZodiacSignIndex(birthdate);
    const sign = NumerologyData.KABBALAH.zodiac[idx];
    if (!sign) {
      this.els.astrologicalContainer.innerHTML = '<p class="kabbalistic-placeholder">No se pudo determinar el signo.</p>';
      return;
    }

    this.els.astrologicalContainer.innerHTML = `
      <div class="astrology-card">
        <div class="astrology-header">
          <div class="astrology-sign-icon">
            <span class="astrology-hebrew-letter">${sign.signLetter}</span>
            <span class="astrology-planet-letter">${sign.planetLetter}</span>
          </div>
          <div class="astrology-title-group">
            <h3 class="astrology-sign-name">${sign.name}</h3>
            <span class="astrology-hebrew-month">Mes de ${sign.hebrewMonth}</span>
            <span class="astrology-planet"><i class="fas fa-globe"></i> ${sign.planet}</span>
          </div>
          <div class="astrology-letters-info">
            <span><strong>Letra del signo:</strong> ${sign.signLetter} (${sign.signLetterName})</span>
            <span><strong>Letra del planeta:</strong> ${sign.planetLetter} (${sign.planetLetterName})</span>
          </div>
        </div>

        <div class="astrology-body">
          <div class="astrology-traits astrology-traits-positive">
            <h4><i class="fas fa-sun"></i> Características Positivas</h4>
            <p>${sign.positive}</p>
          </div>

          <div class="astrology-traits astrology-traits-negative">
            <h4><i class="fas fa-moon"></i> Características Negativas</h4>
            <p>${sign.negative}</p>
          </div>

          <div class="astrology-tikkun">
            <h4><i class="fas fa-sparkles"></i> Tikkun (Corrección)</h4>
            <p>${sign.tikkun}</p>
          </div>
        </div>
      </div>
    `;
  },

  renderSephirothTable() {
    const tbody = this.els.sephirothTable;
    if (!tbody) return;
    tbody.innerHTML = NumerologyData.KABBALAH.sephiroth.map(s => `
      <tr>
        <td class="sephiroth-n">${s.n}</td>
        <td class="sephiroth-name">${s.name}</td>
        <td class="sephiroth-meaning">${s.meaning}</td>
        <td class="sephiroth-attr">${s.attr}</td>
        <td class="sephiroth-body">${s.body}</td>
      </tr>
    `).join('');
  },

  renderPlanetaryGrid() {
    const grid = this.els.planetaryGrid;
    if (!grid) return;
    grid.innerHTML = NumerologyData.KABBALAH.planetaryColors.map(p => {
      const colorHex = this._colorHex(p.color);
      return `<div class="planetary-card">
        <div class="planetary-card-planet">${p.planet}</div>
        <div class="planetary-card-note">${p.note}</div>
        <div class="planetary-card-color" style="background:${colorHex}; color:${p.color === 'Blanco' || p.color === 'Amarillo' ? '#222' : '#fff'}">${p.color}</div>
        <div class="planetary-card-vowel">${p.vowel}</div>
      </div>`;
    }).join('');
  },
};


// ============================================================
//  4. App Controller — Orchestration & entry point
// ============================================================

const AppController = {

  handleCalculate() {
    const fullName = NumerologyUI.els.fullname.value.trim();
    const birthdate = NumerologyUI.els.birthdate.value;

    if (!fullName || !birthdate) {
      NumerologyUI.showToast('Por favor, completa todos los campos.');
      return;
    }

    const parts = fullName.split(/\s+/).filter(Boolean);
    if (parts.length < 2) {
      NumerologyUI.showToast('Por favor, ingresa tu nombre completo (al menos nombre y apellido).');
      return;
    }

    const results = NumerologyEngine.calculateAll(fullName, birthdate);

    NumerologyUI.displayResults(results.destiny, results.soul, results.personality, results.mission);
    NumerologyUI.displayCalculations(results.name, birthdate, results);
    NumerologyUI.displayKabbalistic(results.destiny, results.soul, results.personality, results.mission);
    NumerologyUI.displayAstrological(birthdate);
  },
};


// ============================================================
//  Bootstrap
// ============================================================

document.addEventListener('DOMContentLoaded', () => NumerologyUI.init());
