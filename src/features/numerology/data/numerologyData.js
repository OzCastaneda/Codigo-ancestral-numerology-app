const MAP = Object.freeze({
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

const VOWELS = Object.freeze(new Set(['A', 'E', 'I', 'O', 'U']));

const CONSONANTS = Object.freeze(
  new Set(Object.keys(MAP).filter(ch => !VOWELS.has(ch)))
);

const MASTER_NUMBERS = Object.freeze(new Set([11, 22, 33, 44]));

const KABBALAH = Object.freeze({
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

  planetaryColors: Object.freeze([
    Object.freeze({ planet: 'Marte', note: 'Do (C)', color: 'Rojo', vowel: 'Omicron (O)' }),
    Object.freeze({ planet: 'Sol', note: 'Re (D)', color: 'Naranja', vowel: 'Iota (I)' }),
    Object.freeze({ planet: 'Mercurio', note: 'Mi (E)', color: 'Amarillo', vowel: 'Epsilon (E)' }),
    Object.freeze({ planet: 'Saturno', note: 'Fa (F)', color: 'Verde', vowel: 'Omega (O)' }),
    Object.freeze({ planet: 'Júpiter', note: 'Sol (G)', color: 'Azul', vowel: 'Upsilon (Y)' }),
    Object.freeze({ planet: 'Venus', note: 'La (A)', color: 'Índigo', vowel: 'Eta (H)' }),
    Object.freeze({ planet: 'Luna', note: 'Si (B)', color: 'Violeta', vowel: 'Alpha (A)' }),
  ]),

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
});

function getLetter(n) {
  const { letters, masterNumbers } = KABBALAH;
  return MASTER_NUMBERS.has(n) ? masterNumbers[n] : letters[n] || null;
}

function getSephirah(n) {
  return KABBALAH.sephiroth.find(s => s.n === n) || null;
}

export { MAP, VOWELS, CONSONANTS, MASTER_NUMBERS, KABBALAH, getLetter, getSephirah };
