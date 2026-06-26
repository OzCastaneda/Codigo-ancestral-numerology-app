import { parseDateISO } from '../lib/dateUtils';

const ASTROLOGIA_KABALISTICA = Object.freeze([
  Object.freeze({
    id: 0,
    signo: 'Aries',
    mesHebreo: 'Nissan',
    letraSigno: { hebrea: 'ה', nombre: 'He', significado: 'El deseo de recibir, la ventana hacia la Luz' },
    letraPlaneta: { hebrea: 'ד', nombre: 'Dalet', significado: 'Pobreza, puerta, el acceso a la manifestación' },
    planeta: 'Marte',
    elemento: 'Fuego',
    parteCuerpo: 'Cabeza',
    conceptoClave: 'Rebelde con causa, la semilla del crecimiento espiritual',
    pruebasCamino: [
      'Dominar la impulsividad que nace del deseo de recibir solo para sí mismo. La energía marcial de Marte empuja al Aries a confrontar todo, incluso aquello que no debería ser confrontado.',
      'Aprender que el verdadero valor no está en la lucha externa sino en la batalla interna contra el propio ego. El guerrero debe saber cuándo luchar y cuándo retirarse.',
      'Transformar el deseo de libertad personal ("puedo hacer lo que quiera") en la verdadera libertad que nace de dominar el impulso egoísta momentáneo.',
    ],
    sintesisMision: 'Los nacidos en Aries traen consigo la semilla del cambio y la capacidad de iniciar ciclos. Su alma viene a encender chispas de Luz donde hay oscuridad. La misión es doble: primero, descubrir su propia identidad sin depender de la aprobación externa; segundo, poner su espíritu pionero al servicio de una causa que trascienda su propio beneficio. Son rebeldes llamados a convertirse en rebeldes con causa.',
    tikunGeneral: 'Un Tikun en Aries te dice que anteriormente tenías el comportamiento de Libra (nodo sur). Es decir, estabas a menudo en el papel de árbitro, pero fuiste incapaz de decidir conflictos porque te negaste a tomar decisiones. Tomar un lado fue difícil para ti porque implicaba posiblemente lastimar a alguien. Debido a esto, en vez de tomar una decisión clara, trataste de unir lo que era incompatible y sufriste las consecuencias de tu indecisión. Como Libriano, aprendiste a ceder para evitar confrontaciones. Eras excesivamente dependiente de la opinión de los otros y eso te hizo a menudo comportarte de forma agresiva después de tu acto inicial de sumisión — un clásico comportamiento pasivo-agresivo. Un Tikun en Aries te indica una corrección en la que primero debes descubrir tu identidad, tus necesidades y tus deseos individuales. Debes buscar la independencia y mejorar tu autoestima. Esto te ayudará a descubrir tu propia naturaleza espiritual y serás más proactivo en todas las áreas de tu vida. A lo largo de ese camino de corrección, dejarás de evitar conflictos y encararás cada situación a medida que se presente, sin necesidad de la aprobación de los demás. A medida que pasas cada prueba, conseguirás conocimiento y confianza, y vendrás a conocer tu propia personalidad y fortaleza. Combinar el altruismo de Libra con la capacidad de Aries para "luchar una buena pelea" traerá una elevación completa a tu alma.',

    nisyotPrincipales: [
      'Controlar la ira reactiva — Marte otorga un temperamento fogoso que debe ser canalizado hacia la acción constructiva.',
      'Superar la obstinación infantil — la semilla de Aries contiene un potencial inmenso pero también la rigidez de una planta joven.',
      'Desarrollar la escucha antes del juicio — el impulso natural es actuar primero y pensar después.',
      'Aceptar la autoridad sin sentirla como una amenaza a la libertad personal.',
    ],
    recomendacionesCamino: [
      'Meditar en las letras hebreas Hei y Dalet antes de actuar impulsivamente. Ellas te recuerdan reducir el deseo de recibir solo para ti mismo.',
      'Busca una causa justa que te apasione y pon tu energía marcial a su servicio. El mejor guerrero es aquel que protege a otros.',
      'Practica contar hasta diez antes de responder. El silencio estratégico es la mayor fortaleza de un líder.',
      'Rodéate de personas que te confronten con respeto, no de aduladores que alimenten tu ego.',
    ],
    practicasTikun: [
      'Escribe un diario de batallas ganadas: cada día registra un momento en que resististe el impulso de reaccionar y elegiste responder con conciencia.',
      'Realiza actos de servicio anónimos semanalmente. Esto entrena tu corazón a luchar sin necesidad de reconocimiento.',
      'Práctica de respiración consciente (3 minutos) antes de cada decisión importante. La respiración conecta el fuego de Marte con la calma de la reflexión.',
      'Ayuno de confrontación un día a la semana: evita deliberadamente cualquier discusión o conflicto, observando la incomodidad sin actuar.',
    ],
    fechasCiclos: [
      'Nissan (marzo-abril): mes de los milagros. La palabra Nissan contiene "Ness" (milagro). Durante este mes la energía milagrosa del universo está disponible para ayudarte a superar el deseo de recibir solo para ti.',
      'Primeros 10 días de Nissan: período altamente positivo para iniciar proyectos y tomar acción decisiva.',
      'Equinoccio de primavera: momento de renovación y siembra espiritual. Ideal para establecer intenciones anuales.',
      'Pésaj: celebración de la libertad espiritual. Conexión con el éxodo del egoísmo hacia la conciencia compartida.',
    ],
  }),
  Object.freeze({
    id: 1,
    signo: 'Tauro',
    mesHebreo: 'Iyar',
    letraSigno: { hebrea: 'ו', nombre: 'Vav', significado: 'Clavo, gancho, el eslabón que une lo humano con lo divino' },
    letraPlaneta: { hebrea: 'פ', nombre: 'Pei', significado: 'Boca, la comunicación, la expresión de la Luz' },
    planeta: 'Venus',
    elemento: 'Tierra',
    parteCuerpo: 'Cuello / Garganta',
    conceptoClave: 'El toro en la burbuja, la luz que ciega por exceso',
    pruebasCamino: [
      'Salir de la burbuja de comodidad donde todo parece estar bien. La Luz de Venus es tan brillante que Tauro puede creer que no hay problemas en el mundo, cuando en realidad debe involucrarse con las imperfecciones de la vida.',
      'Superar la complacencia y el autoaislamiento. La misma Luz que calienta su espalda puede servir para esconderse del mundo en lugar de comprometerse con él.',
      'Transformar el optimismo pasivo ("todo va a estar bien") en acción proactiva que realmente traiga la Luz al mundo.',
    ],
    sintesisMision: 'El alma de Tauro viene bañada por la Luz de Venus/Noga, que significa "luz brillante". Su misión es ser un canal de optimismo y estabilidad en el mundo, pero no desde la pasividad, sino desde el compromiso activo. Tauro debe aprender que la verdadera Luz no es solo para disfrutarla personalmente, sino para compartirla iluminando el camino de otros. Debe convertirse en el eslabón (Vav) que une el mundo espiritual con el físico.',
    tikunGeneral: 'Esta es una de las correcciones más difíciles de hacer. Quien tiene su Tikun en Tauro fue Escorpio en una encarnación anterior. Escorpio es el signo de la autodestrucción. En esta vida es probable que siga siendo el obstáculo de una naturaleza autodestructiva a ser superada. En algún momento en esta vida o en una vida pasada probablemente fuiste víctima de una injusticia deliberada. Puedes haber sido robado o echado de tu casa. Como resultado, llevas un sentimiento de enojo y desconfianza. Puedes hacer esfuerzos extraordinarios para asegurar tus posesiones cuando sientes, verdaderamente o no, que alguien está a punto de quitártelas. Prefieres destruir tus propias pertenencias antes de verlas caer en manos de otras personas. Esto puede aplicarse a las posesiones materiales o relaciones. El miedo a repetir tu vida pasada puede dificultar tu crecimiento en esta vida. A pesar de esta tendencia autodestructiva, tu comportamiento social es amigable y espontáneo. Aunque sigues siendo un rebelde de corazón, en esta vida te sientes avergonzado por tu propia ansiedad. Tus poderes psíquicos no se usaron siempre de manera positiva, pero esta vez estos dones serán útiles para lograr altos niveles de conciencia, siempre y cuando sean utilizados en el servicio de los demás y se centren en objetivos más constructivos. El Tikun en Tauro también revela un individuo cuya actitud hacia el sexo es relativamente desequilibrada, con un gran apetito sexual que causó conmociones en tu vida, cuyos rastros aún pueden encontrarse en tu vida actual. Para evitar volver a la situación experimentada como Escorpio, tienes que superar temores, desconfianza e ira. Para lograr esto, tu Tikun te da como dirección los aspectos positivos de la luz de Tauro: disfrutar de la belleza y los placeres de esta vida para expulsar el temor, la desconfianza y la ira. Este nuevo enfoque te permitirá expresarte sin la ansiedad inducida por el temor a perder tus posesiones. La luz de Tauro es una bendición que te dará apertura a las maravillas de este mundo. Si quieres tener éxito en romper esta envoltura de Escorpio, puedes transformar tu necesidad de gratificación inmediata en un verdadero don para la generosidad. Esto te permite transformar tu beligerancia reactiva en una serenidad proactiva. Disfrutando la vida puedes renovarla y aprovecharla, y tus antiguos temores serán calmados por la paz recién encontrada.',

    nisyotPrincipales: [
      'Superar la tendencia al aislamiento y la autocomplacencia — la comodidad material puede convertirse en una prisión dorada.',
      'Sanar la desconfianza profunda hacia los demás heredada de vidas pasadas.',
      'Aprender a compartir sin miedo a la pérdida, transformando la posesividad en generosidad.',
      'Desarrollar la iniciativa que la Luz de Venus tiende a adormecer.',
    ],
    recomendacionesCamino: [
      'Sal de tu zona de confort deliberadamente cada semana — visita un lugar nuevo, conoce personas fuera de tu círculo habitual.',
      'Utiliza la fuerza del juicio (presente en Iyar) para discernir activamente entre el bien y el mal, no para ignorar el conflicto.',
      'Practica el desapego material dando algo que valoras a alguien que lo necesite más.',
      'Medita en las letras Vav y Pei para conectar la unión espiritual con la expresión comunicativa.',
    ],
    practicasTikun: [
      'Diario de gratitud activa: cada día escribe no solo por qué estás agradecido, sino qué acción tomaste para compartir esa bendición.',
      'Ejercicio de desprendimiento semanal: regala algo que te pertenece (tiempo, dinero, un objeto querido) sin esperar nada a cambio.',
      'Práctica matutina de intención: antes de comenzar el día, pregúntate "¿Qué voy a construir hoy que sirva a otros?"',
      'Ritual de Luna Llena mensual: escribe tus miedos y quema el papel, liberando la desconfianza.',
    ],
    fechasCiclos: [
      'Iyar (abril-mayo): mes de la Luz. La energía del juicio (discernimiento) está disponible para revelar lo que era desconocido.',
      '15 de Iyar: luna llena, punto de inflexión donde la energía se vuelve negativa. Ideal para introspección.',
      'Venus retrógrado (periódicamente): momento de reevaluar relaciones y posesiones. Tauro debe usarlo para soltar apegos.',
      'Primavera avanzada: época de florecimiento. Tauro debe aprovechar para plantar semillas de cambios significativos.',
    ],
  }),
  Object.freeze({
    id: 2,
    signo: 'Géminis',
    mesHebreo: 'Sivan',
    letraSigno: { hebrea: 'ז', nombre: 'Záin', significado: 'Arma, espada, la capacidad de cortar y discernir' },
    letraPlaneta: { hebrea: 'ר', nombre: 'Resh', significado: 'Cabeza, la mente, el principio de individualidad' },
    planeta: 'Mercurio',
    elemento: 'Aire',
    parteCuerpo: 'Hombros / Brazos / Pulmones',
    conceptoClave: 'En busca de lo que ya está allí, la unificación de los mundos',
    pruebasCamino: [
      'Superar la superficialidad y la fugacidad. La velocidad de Mercurio permite a Géminis procesar información a gran velocidad, pero esto puede llevar a una falta de profundidad en las relaciones y en el conocimiento.',
      'Dominar la tendencia a la dispersión y la inconstancia. El cambio constante de dirección impide la cosecha de frutos duraderos.',
      'Aprender a comprometerse emocionalmente sin huir ante la primera incomodidad. El corazón es el mayor desafío de Géminis.',
    ],
    sintesisMision: 'Géminis viene a este mundo como mensajero de la Luz, conectando ideas, personas y dimensiones. Su misión es utilizar su extraordinaria capacidad comunicativa para transmitir sabiduría espiritual, no solo información superficial. Siendo el signo más cercano al Sol (Mercurio es el planeta más próximo), los Géminis tienen una afinidad natural con la fuente de la Luz. Su tarea es convertirse en verdaderos canales de transmisión espiritual, uniendo el mundo de arriba con el de abajo.',
    tikunGeneral: 'Si tienes tu Tikun en Géminis, tenías previamente las características de Sagitario (nodo sur). Esto significa que actuaste como un niño malcriado y desorganizado, recibiendo la comida en la boca, guiado principalmente por deseos egoístas. Como Sagitario, poco importaba la gente alrededor tuyo o lo que pensaban. Casado, te comportaste como si estuvieras solo. La satisfacción de tus propias necesidades inmediatas dominaba toda tu vida. Tu sed de conocimiento y estudio te llevó a descubrir nuevos horizontes, pero al final quedaste preso de tus propios deseos. Has vivido una vida activa y lo hiciste todo bien, pero no has podido comprometerte a cualquier causa que no estuviese directamente relacionada con tus propios intereses inmediatos. Servir a los demás, tener en cuenta sus necesidades, te parecía una fuerte restricción. Tenías hambre de libertad; ignorando las represiones sociales, buscaste ansiosamente la justicia, pero solo para ti. No cooperabas con tus semejantes ni les dabas mucho crédito. Sin embargo, compartir no es reprimir; más que eso, amplía tu libertad. Abierto a las necesidades de los demás en esta vida, superarás la auto-absorción que atrapó tu transformación espiritual. Comunicándote abiertamente, puedes sentir la plenitud más profunda que podrías encontrar en los placeres inmediatos limitados con que estabas satisfecho en tu vida pasada y recibir el beneficio que la Luz quiere compartir con todos nosotros. Para hacer esto, necesitas aprender a manejarte con humildad y ser más respetuoso con los que te rodean. Sigue este camino conducente a una transformación de tus habilidades. Tu curiosidad te dará acceso al mundo que te rodea, pero esta vez a través del intercambio de conocimiento. Al hacer esto, encontrarás un significado nuevo y más profundo en el trabajo de tu vida y en tus relaciones más íntimas. Entenderás que la libertad verdadera y duradera se forja de tus conexiones con los demás y un intercambio de ideas que llevan a una verdadera metamorfosis, pasando del salvaje a civilizado.',

    nisyotPrincipales: [
      'Vencer la tendencia a la superficialidad intelectual — las ideas son hermosas, pero solo la acción las transforma en sabiduría.',
      'Mantener el compromiso cuando la relación o proyecto pierde su novedad inicial.',
      'Dominar la lengua: la palabra en Géminis puede ser espada que hiere o puente que une.',
      'Aceptar que no todas las preguntas tienen respuesta inmediata, permitiendo el misterio y la profundidad.',
    ],
    recomendacionesCamino: [
      'Profundiza en un solo tema cada mes en lugar de aprender diez temas superficialmente. La calidad reemplaza a la cantidad.',
      'Antes de hablar, pregúntate: ¿Esto que voy a decir es verdad? ¿Es necesario? ¿Es bondadoso?',
      'Cultiva una relación duradera (amistad, pareja, proyecto) superando las crisis, sin abandonar al primer desafío.',
      'Medita en las letras Záin y Resh: la espada del discernimiento al servicio de la mente iluminada.',
    ],
    practicasTikun: [
      'Práctica de "una cosa a la vez": elige una actividad diaria y hazla con completa atención, sin multitarea.',
      'Registro semanal de compromisos cumplidos: escribe tres promesas (grandes o pequeñas) que mantuviste esta semana.',
      'Meditación de silencio (10 minutos diarios): entrena la mente veloz a aquietarse y escuchar.',
      'Servicio de escucha activa: una hora a la semana dedicada a escuchar realmente a alguien sin interrumpir ni aconsejar.',
    ],
    fechasCiclos: [
      'Sivan (mayo-junio): mes de la unificación. La energía espiritual permite integrar los mundos físico y espiritual.',
      'Shavuot: recepción de la Torá, momento de máxima conexión entre el cielo y la tierra. Ideal para compromisos espirituales.',
      'Mercurio retrógrado: período de revisión y reflexión. Géminis debe usarlo para reevaluar compromisos.',
      'Solsticio de verano: punto de máxima Luz. Géminis puede aprovechar la energía para clarificar su dirección espiritual.',
    ],
  }),
  Object.freeze({
    id: 3,
    signo: 'Cáncer',
    mesHebreo: 'Tammuz',
    letraSigno: { hebrea: 'ח', nombre: 'Chet', significado: 'Campo, cerca, el recinto de la vida' },
    letraPlaneta: { hebrea: 'ת', nombre: 'Tav', significado: 'Signo de la cruz, final, límite' },
    planeta: 'Luna',
    elemento: 'Agua',
    parteCuerpo: 'Estómago / Sistema digestivo',
    conceptoClave: 'Luna siempre mutable, el antídoto antes de la enfermedad',
    pruebasCamino: [
      'Enfrentar la inseguridad fundamental que nace de la influencia cambiante de la Luna. La luna muestra cada noche una cara diferente y Cáncer hereda esta variabilidad que genera ansiedad.',
      'Salir del caparazón de posesiones materiales y máscaras de indiferencia. El cangrejo se protege, pero esa protección puede convertirse en prisión.',
      'Superar el miedo paralizante al futuro y al juicio de los demás. La duda constante impide la acción que trae la Luz.',
    ],
    sintesisMision: 'El alma de Cáncer viene a sanar — no solo a otros sino también a sí misma. Siendo el único signo gobernado exclusivamente por la Luna, Cáncer canaliza la energía femenina del universo y está conectado con Malkut, el mundo de la manifestación física. Su misión es aprender que las riquezas que realmente satisfacen no son materiales, y que la seguridad verdadera no está en las posesiones sino en la conexión con la Luz eterna. Está llamado a trascender Malkut para alcanzar los mundos superiores.',
    tikunGeneral: 'La persona que tiene el Tikun en Cáncer lleva una gran cantidad de orgullo de su encarnación anterior como Capricornio (nodo sur). Como Capricornio, estabas totalmente obsesionado con la victoria profesional, el honor y la respetabilidad. Sostener tu propia reputación fue la motivación principal de tu vida. Asumiste tareas imposibles con el único propósito de ganar la admiración de los otros. Fuiste juez y jurado y, como consecuencia, condenaste los errores cometidos por otros. Aunque te veías como un guardián del orden moral, olvidaste el atributo más importante de la moral: la piedad. Como resultado, no hiciste muchas amistades y a menudo eras considerado una persona oportunista y desvergonzada que, impulsada a conquistar, se impuso una sobrecarga de responsabilidades que le impidió pensar en los otros. Consumido por las misiones sociales, eras, por extraño que parezca, desinteresado por los demás. Viviste aislado de los verdaderos placeres de la vida — hogar, familia, amistad — y tuviste una existencia solitaria en tu propio universo secreto. De esa encarnación anterior conservas seriedad y disciplina para ejecutar cualquier meta. Pero el Tikun en Cáncer sugiere que ahora debes abandonar la ilusión de que las victorias profesionales, la importancia social y tu propia reputación son las claves de la felicidad. Tu corrección en Cáncer apunta hacia una nueva meta: la verdadera felicidad puede encontrarse en la creación de un hogar verdaderamente cálido y cariñoso. De esta manera descubrirás un mundo lleno de asombro, sencillez y espontaneidad. Aprenderás cómo tener flexibilidad y generosidad en las relaciones y ser un padre o una madre. La renuncia más difícil será el abandono de las ideas bien establecidas de éxito y fracaso. Tu éxito se encontrará en los ojos amorosos de tu familia y en tu dedicación a este amor.',

    nisyotPrincipales: [
      'Superar la ansiedad paralizante y la tendencia a la depresión — la luna cambiante genera montañas rusas emocionales.',
      'No refugiarse en el pasado como escape del presente. El pasado es seguro, pero el crecimiento está en el futuro.',
      'Dejar de depender del reconocimiento externo para sentirse seguro.',
      'Usar la hipersensibilidad como don de empatía, no como fragilidad paralizante.',
    ],
    recomendacionesCamino: [
      'Desarrolla una visión a largo plazo que trascienda los altibajos emocionales del día a día. La Luz eterna no cambia aunque la luna sí lo haga.',
      'Invierte en relaciones verdaderas, no en posesiones materiales. La seguridad real está en el amor, no en las cuentas bancarias.',
      'Practica la vulnerabilidad consciente: exponerte al riesgo de ser herido es el único camino para conectar genuinamente.',
      'Medita en las letras Chet y Tav: el campo de la vida se expande cuando superas los límites autoimpuestos.',
    ],
    practicasTikun: [
      'Ritual de Luna Nueva mensual: establece intenciones de conexión familiar y afectiva para el ciclo entrante.',
      'Ejercicio de "salir del caparazón": cada semana haz algo que te asuste socialmente (iniciar una conversación, expresar un sentimiento).',
      'Diario de mareas emocionales: registra tus cambios de ánimo identificando patrones, para comprenderlos sin ser dominado por ellos.',
      'Práctica de desapego material mensual: dona algo que te dé seguridad falsa para recordar que la verdadera seguridad está en la Luz.',
    ],
    fechasCiclos: [
      'Tammuz (junio-julio): uno de los tres meses negativos (de juicio directo). La energía del antídoto está disponible antes de que surja la enfermedad.',
      'Luna Nueva y Luna Llena de Tammuz: momentos de máxima influencia lunar para Cáncer, ideales para sanación emocional.',
      'Solsticio: punto de introspección. Ideal para trabajos de sanación interior.',
      'Período entre el 17 de Tammuz y 9 de Av: conocido como "entre las estrecheces", tiempo de mayor desafío y mayor potencial de corrección.',
    ],
  }),
  Object.freeze({
    id: 4,
    signo: 'Leo',
    mesHebreo: 'Av',
    letraSigno: { hebrea: 'ט', nombre: 'Tet', significado: 'Serpiente, la sabiduría enroscada, la fuerza Kundalini' },
    letraPlaneta: { hebrea: 'כ', nombre: 'Kaf', significado: 'Palma de la mano, la corona, el poder de recibir y bendecir' },
    planeta: 'Sol',
    elemento: 'Fuego',
    parteCuerpo: 'Corazón / Sistema cardiovascular',
    conceptoClave: 'Rompiendo el orgullo de los leones, la realeza al servicio',
    pruebasCamino: [
      'Dominar el orgullo que nace de recibir la energía directamente del Sol. Los Leones no creen que necesitan ayuda, y esta autosuficiencia es su mayor ilusión.',
      'Aprender que sus dones no son propios — la Luz es la fuente, ellos son solo canales. El éxito no justifica la vanidad porque nada es realmente "suyo".',
      'Superar la necesidad de ser el centro de atención y transformar el liderazgo natural en servicio altruista y anónimo.',
    ],
    sintesisMision: 'El alma de Leo recibe la energía directamente del Sol — la fuente de Luz física y espiritual. Como el corazón que bombea sangre al cuerpo, Leo está destinado a distribuir la Luz a todos los que le rodean. Su misión es ser un líder que guía hacia la iluminación, no un rey que exige vasallaje. Debe aprender que la verdadera realeza se demuestra en la generosidad anónima, no en los halagos recibidos. Su poder es prestado; su gloria es reflejada.',
    tikunGeneral: 'La persona que tiene su Tikun en Leo carga por eso una vida anterior como Acuario (nodo sur). Es un individuo que se separa. En tu encarnación anterior eras considerado importante y único, y trajiste una enorme fuerza interior, creatividad y una feroz ambición a esta vida. Nunca fuiste, sin embargo, un modelo de disciplina, e incluso perseguiste a toda costa la originalidad. Eras un transgresor de las reglas. Debido a esto, podías tener dificultad para hacer que otros te tomaran en serio. Aunque te mantenías apartado, obtenías fuerza cuando confrontado con dudas las superabas. Las relaciones significaban todo para ti, pero siempre tuviste miedo de estar solo. Llegaste a tolerar abusos para mantener la intimidad, y siempre tenías la sensación de no recibir de vuelta lo que habías dado. Te dejabas dominar por las relaciones. Debido a esto, nunca te desarrollaste espiritualmente hasta alcanzar tu potencial. En tu encarnación anterior tuviste la oportunidad de pasar de la pobreza extrema a la mayor riqueza, y estas oportunidades se presentarán nuevamente en tu encarnación actual si aprendes a explorar tu fuerza interior. Quedaste severamente marcado por tu falta de disciplina que, en las encarnaciones anteriores, te impidió centrarte en objetivos reales. En tu vida como Acuario ya tenías un agudo sentido de la justicia y la igualdad. Tu energía era usada ocasionalmente en defensa de causas nobles, pero preferías tratar con masas de personas que con seres humanos individuales. Te veías a ti mismo en el futuro en lugar de en el presente. El Tikun en Leo te dirige a abandonar el deseo de originalidad superficial en favor del desarrollo de tu capacidad para servir a la humanidad. Debes seguir este camino por ti mismo, no para los ojos de los demás. Tu ambición te ayudará a encontrar una causa digna y verdadera a través de la cual compartir tus dones con la humanidad. Tu Tikun sugiere que se te dará la oportunidad de liderar siempre que lo hagas por un motivo altruista. A lo largo de este camino, puedes utilizar tu fuerza interior, creatividad y originalidad para revelar nuevas oportunidades en el mundo a tu alrededor.',

    nisyotPrincipales: [
      'Vencer el orgullo y la arrogancia — la caída de Leo es siempre causada por su propia vanidad.',
      'Aprender a escuchar realmente a otros, no solo esperar tu turno para hablar.',
      'Aceptar consejos y ayuda sin sentir que ello disminuye tu autoridad.',
      'Desarrollar la humildad de servir sin necesidad de reconocimiento público.',
    ],
    recomendacionesCamino: [
      'Busca la ayuda de otros deliberadamente, especialmente de aquellos con quienes sientes competencia. La humildad es la corona del verdadero rey.',
      'Realiza al menos un acto de bondad anónimo cada semana. Nadie debe saber que fuiste tú.',
      'Antes de actuar, pregúntate: ¿Hago esto para servir o para ser visto?',
      'Medita en las letras Tet y Kaf: la sabiduría de la serpiente se despliega cuando la palma se abre para dar, no para recibir.',
    ],
    practicasTikun: [
      'Ejercicio de "silencio en reuniones": en cada conversación grupal, espera a que al menos tres personas hablen antes de ofrecer tu opinión.',
      'Registro de servicio anónimo: lleva cuenta secreta de tus actos de generosidad sin nombre.',
      'Práctica de "el alumno": semanalmente, aprende algo de alguien a quien normalmente considerarías inferior.',
      'Meditación al amanecer (Hora del Sol): conéctate con la fuente de la Luz y recuerda que eres un canal, no el origen.',
    ],
    fechasCiclos: [
      'Av (julio-agosto): mes de máxima energía solar. Considerado negativo por el potencial de quemar si no se canaliza correctamente.',
      "9 de Av (Tishá B'Av): el día más negativo del calendario hebreo, pero también el de mayor potencial de corrección. Leo debe practicar la máxima humildad.",
      'Máximo solar: período alrededor del equinoccio donde el Sol está en su máximo esplendor. Ideal para Leo de canalizar energía hacia el servicio.',
      'Período entre Tammuz y Av: "las tres semanas" de duelo por la destrucción del Templo. Leo debe usar este tiempo para revisar su orgullo.',
    ],
  }),
  Object.freeze({
    id: 5,
    signo: 'Virgo',
    mesHebreo: 'Elul',
    letraSigno: { hebrea: 'י', nombre: 'Iud', significado: 'Mano, el poder de hacer, el nivel de conciencia más elevado' },
    letraPlaneta: { hebrea: 'ר', nombre: 'Resh', significado: 'Cabeza, individualidad, la mente que organiza' },
    planeta: 'Mercurio',
    elemento: 'Tierra',
    parteCuerpo: 'Sistema digestivo / Intestinos',
    conceptoClave: 'Orgullo de mujer, el mes del arrepentimiento',
    pruebasCamino: [
      'Superar el perfeccionismo que fragmenta la realidad y pierde de vista el panorama completo. Virgo ve un grano de arena pero olvida que existe la playa entera.',
      'Dominar la tendencia a la crítica corrosiva. Los errores ajenos insultan su sentido del orden, pero la crítica sin amor no corrige, destruye.',
      'Aceptar que la realidad espiritual no puede ser diseccionada por la lógica humana. Hay misterios que el intelecto no puede descifrar.',
    ],
    sintesisMision: 'El alma de Virgo viene a ordenar el mundo material, pero su verdadera misión es trascenderlo. Es llamado a ser el sumo sacerdote de la pureza, pero debe entender que la pureza verdadera no está en el orden externo sino en la intención del corazón. La letra Iud representa el nivel más elevado de conciencia, y sin embargo Virgo se queda atrapado en los detalles. Su misión es elevar su visión del "cómo" al "por qué", del detalle al propósito divino.',
    tikunGeneral: 'Como Piscis en tu vida pasada (nodo sur), eras consumido por tus sueños y fantasías y pagaste caro por tus inclinaciones melodramáticas. Alimentado por historias trágicas, has tenido una completa falta de discernimiento entre lo cierto y lo errado, entre el bien y el mal. Ante numerosos obstáculos, simplemente dejabas que las cosas pasaran. Cuando ellas no se hacían, sucumbías a la autocompasión. En tu vida anterior eras fuertemente dependiente de los otros. Pero tu sensibilidad al dolor te inhibía de aliviar aquel dolor. Esa misma debilidad emocional puede haberte llevado a buscar refugio en las drogas, el alcohol u otros comportamientos de evasión. Tu intuición te permitía actuar para los demás con la intención de ayudar, pero nunca fuiste totalmente libre de algún tipo de interés propio. Tenías talento en las artes y podrías haber sido un pintor o un músico famoso. Muchas de tus buenas acciones fueron un pretexto para recibir gratitud. Para realizar tu corrección, debes adquirir una visión del mundo más realista y menos sensible. Debes usar más la razón y menos la emoción al tomar decisiones. La autodisciplina y determinación te ayudarán a mantener los pies en la tierra y alejarte de las relaciones excesivamente dependientes. Sobre todo, debes parar de dejar que las cosas pasen, asumiendo la responsabilidad por ti mismo. Debes aprender a expresar tus ideas para tu propio beneficio y para los demás. Esencialmente, debes dejar ese sentimentalismo blando y dejar a un lado las quejas. Esta vida es una oportunidad para saldar cuentas, perdonar y seguir adelante. La reflexión será tu nueva herramienta para lidiar con los problemas, pero la acción te pondrá en el camino hacia tu corrección. Si obtienes éxito en el establecimiento de valores concretos, dejando de lado las emociones y conquistando la independencia de quienes te rodean, conocerás el amor y la paz interior. Se ha comprobado que preservar las relaciones a toda costa y siempre llegar a un compromiso no es la solución. Tu nuevo lema debe ser: ¡Aquí y ahora!',

    nisyotPrincipales: [
      'Dejar de juzgar a otros antes de juzgarte a ti mismo. El ojo crítico debe mirarse primero al espejo.',
      'Aceptar que no todo en la vida puede ser ordenado y categorizado. El caos también tiene un lugar en la creación.',
      'Desarrollar la flexibilidad mental para adaptarse cuando los planes perfectos se desvían.',
      'Ver más allá de lo físico y abrirse a la dimensión espiritual que no puede ser medida ni cuantificada.',
    ],
    recomendacionesCamino: [
      'Antes de criticar, pregúntate: ¿Conozco toda la historia? ¿He visto el panorama completo?',
      'Practica el arte de la imperfección consciente: permite que algo quede "desordenado" sin intervenir.',
      'Cultiva la espiritualidad práctica: medita no para escapar del mundo sino para verlo con mayor claridad.',
      'Medita en las letras Iud y Resh: eleva la mente de la pobreza de la crítica al nivel elevado de la compasión.',
    ],
    practicasTikun: [
      'Diario de crítica diferida: cada vez que sientas el impulso de criticar, escríbelo y espera 24 horas antes de expresarlo.',
      'Práctica de "orden interno": en lugar de ordenar tu espacio externo, dedica tiempo a ordenar tus pensamientos y emociones.',
      'Ejercicio de confianza en el misterio: semanalmente, haz algo sin planificar ni controlar el resultado.',
      'Estudio de sabiduría espiritual diario (15 minutos): entrena la mente lógica a abrirse a conceptos que trascienden la razón.',
    ],
    fechasCiclos: [
      'Elul (agosto-septiembre): mes del arrepentimiento y la introspección. El último mes antes del Año Nuevo judío.',
      'Todo Elul: se toca el shofar diariamente para despertar el alma. Virgo debe usar este mes para hacer una limpieza espiritual profunda.',
      'Selijot: oraciones de perdón que comienzan al final de Elul. Período ideal para que Virgo practique el perdón hacia sí mismo y hacia otros.',
      'Equinoccio de otoño: cierre de ciclos. Virgo debe completar asuntos pendientes antes del nuevo año espiritual.',
    ],
  }),
  Object.freeze({
    id: 6,
    signo: 'Libra',
    mesHebreo: 'Tishrei',
    letraSigno: { hebrea: 'ל', nombre: 'Lamed', significado: 'Aguijón de buey, el brazo extendido hacia arriba' },
    letraPlaneta: { hebrea: 'פ', nombre: 'Pei', significado: 'Boca, la expresión de la Luz, la comunicación divina' },
    planeta: 'Venus',
    elemento: 'Aire',
    parteCuerpo: 'Riñones / Región lumbar',
    conceptoClave: 'Ninguna de las respuestas anteriores, la balanza en movimiento',
    pruebasCamino: [
      'Superar la parálisis por análisis. La balanza de Libra busca tanto el equilibrio que se niega a inclinarse hacia un lado, impidiendo la acción.',
      'Dominar el miedo a equivocarse que impide tomar decisiones. Libra teme que una mala elección rompa su preciada armonía.',
      'Aceptar que no hay decisiones perfectas ni respuestas absolutas. La Luz se revela a través de la acción, no de la deliberación infinita.',
    ],
    sintesisMision: 'El alma de Libra viene a buscar la justicia y la armonía, pero descubre que el verdadero equilibrio no es estático: se encuentra en el movimiento constante entre dar y recibir. La letra Lamed es la única del alfabeto hebreo que se extiende por encima de la línea de escritura, indicando que la energía de Libra proviene del mundo superior. Su misión es traer esa energía celestial a la tierra a través de relaciones justas, decisiones valientes y amor incondicional.',
    tikunGeneral: 'En tu encarnación anterior como Aries (nodo sur) fue sorprendente tu confianza, así como tu gran opinión sobre ti mismo. Esto te condujo a muchas decepciones. Preocupado por ti realmente, estabas perdiendo tu energía y estabas en un estado casi constante de agitación. Durante el trabajo, nunca construiste algo sólido. Reaccionaste de manera exagerada a los fracasos, tomaste actitudes agresivas y con frecuencia luchaste contra los problemas haciendo uso de una visión muy limitada. Esto produjo un profundo sentimiento de frustración que, en tu vida actual, provocó una hostilidad que a menudo confunde a la gente cercana a ti. Un Tikun en Libra te empuja en la dirección del sacrificio en su sentido más noble. Para deshacerte de la frustración, necesitas caminar un sendero de devoción a una causa más allá de ti mismo. En el pasado, tu ego te colocó dentro de un limitado círculo de amigos, que ha restringido tus oportunidades para compartir. Ser parte de un equipo te ayudará a recuperar tu equilibrio. Como parte de un equipo, tienes que tener en cuenta lo que otros dicen y ser abierto a la posibilidad de que sus puntos puedan tener mérito. Esto ablandará tu personalidad y te convertirás en más capaz de dominar tu ira. A medida que comprendas que el éxito del grupo es más importante que el tuyo propio, conocerás la verdadera felicidad. El Tikun en Libra es una de las correcciones más difíciles porque requiere la anulación de tu orgullo en esta vida para corregir los errores de una vida anterior. Tu comportamiento antisocial anterior ejerció presión en tus relaciones, haciéndote pasar por trastornos emocionales. Nunca conociste las relaciones duraderas. Para ello, tu matrimonio proporcionará la mejor oportunidad para entender la verdadera participación y adquirir fuerza interior para amar a alguien desinteresadamente. Convirtiéndote en la fuerza impulsora detrás de tu pareja, serás capaz de dejar de lado tu idea limitada de "yo" y empezar a mover el mundo como "nosotros". Al mismo tiempo, llegarás a comprender que la meta es menos importante que el proceso de lograrla, y esta nueva perspectiva revelará nuevos horizontes.',

    nisyotPrincipales: [
      'Tomar decisiones sin garantía de que sean las correctas. La acción imperfecta es superior a la deliberación perfecta.',
      'Comprometerse totalmente en las relaciones, sin reservas mentales que protejan el ego.',
      'Aceptar que el conflicto es parte del crecimiento y no siempre debe ser evitado.',
      'Desarrollar un sentido claro de identidad que no dependa de la aprobación o espejo de otros.',
    ],
    recomendacionesCamino: [
      'Establece un plazo máximo para cada decisión. Cuando el tiempo se acabe, actúa aunque no tengas certeza.',
      'Practica el compromiso total en tus relaciones. Entrégate sin reservas ni preguntas.',
      'Recuerda que el agua es buena — el salto a la acción es necesario para revelar la Luz.',
      'Medita en las letras Lamed y Pei: el brazo extendido hacia lo alto se conecta con la boca que expresa la verdad divina.',
    ],
    practicasTikun: [
      'Ejercicio de decisión rápida: cada día toma al menos una decisión en menos de 60 segundos, sin dar marcha atrás.',
      'Práctica de "sí incondicional": durante una semana, di que sí a todo lo que no sea peligroso o inmoral, solo para experimentar el compromiso.',
      'Diario de acción sobre intención: registra las decisiones que tomaste hoy versus las que postergaste.',
      'Servicio en equipo: únete a un grupo donde tu opinión no sea la única ni la más importante.',
    ],
    fechasCiclos: [
      'Tishrei (septiembre-octubre): el primer mes del año hebreo. Nuevos comienzos, reflexión y examen de conciencia.',
      'Rosh Hashaná: Año Nuevo judío. Libra debe usarlo para reevaluar sus prioridades y establecer intenciones.',
      'Yom Kipur: Día de la Expiación. El día más sagrado del año. Libra debe usarlo para perdonarse y avanzar.',
      'Sucot: Fiesta de las Cabañas. Celebración de la confianza en la Luz. Libra debe practicar la fe sin seguridad material.',
    ],
  }),
  Object.freeze({
    id: 7,
    signo: 'Escorpio',
    mesHebreo: 'Mar-Cheshván',
    letraSigno: { hebrea: 'נ', nombre: 'Nun', significado: 'Pez, la vida en movimiento, la fecundidad' },
    letraPlaneta: { hebrea: 'ד', nombre: 'Dalet', significado: 'Puerta, pobreza, el acceso al cambio' },
    planeta: 'Marte',
    elemento: 'Agua',
    parteCuerpo: 'Órganos sexuales / Sistema reproductor',
    conceptoClave: 'Una cola amarga, el juicio redentor',
    pruebasCamino: [
      'Dominar las emociones extremas que pasan del amor ciego al odio cruel en un instante. Escorpio es arrastrado por sus pasiones.',
      'Transformar el deseo de control en confianza en la Luz. Su necesidad de tener el control es, paradójicamente, lo que lo domina a él.',
      'Sanar los celos y la venganza que queman su alma. Escorpio nunca olvida un insulto, y ese veneno lo consume a él primero.',
    ],
    sintesisMision: 'El alma de Escorpio es la paradoja viviente: agua y fuego combinados. La letra Nun representa la vida en movimiento, pero Escorpio se estanca en su necesidad de control. Su misión es aprender a frenar el fuego con agua — transformar la impulsividad ardiente en compasión fluida. Dotado de una fuerza de voluntad extraordinaria y una intuición hipnótica, Escorpio está llamado a ser un sanador y un transformador, no un destructor.',
    tikunGeneral: 'En tu vida pasada eras Tauro (nodo sur). Firmemente sujeto a una determinada manera de ver el mundo, eras terco, lento y extremadamente reacio al cambio. Susceptible a los placeres del cuerpo, eras un hedonista consumado. Apasionado por la belleza y la naturaleza, extremadamente posesivo, perseguías posesiones materiales en lugar de las espirituales. Con miedo a la pérdida de tu comodidad, te abstuviste de tener experiencias significativas. Tu vida era monótona y vacía. Confinado en tu obstinación, no podías escuchar a otros y no aprendiste nada de ellos. Pero esta vez tienes todo lo necesario para lograr una transformación genuina. Tú ahora tienes la necesidad de abandonar las estrictas reglas que marcaron tu vida anterior y permitir que la espontaneidad entre en escena, disfrutando de la libertad de acción. De esta forma, estarás al tanto de las ilusiones que sobrecargan y abruman tu espíritu, confiando en la Luz para tu protección. Así probarás ser digno de respeto y amor. Esto puede resultar algo difícil. Puede causar algunas dolorosas pérdidas materiales. Inicialmente tu confort, tu sentido de seguridad, pueden sentirse amenazados. Si quieres lograr tu corrección, sin embargo, tendrás que pagar el precio. Con el tiempo te convertirás en más independiente en tus acciones. Tus relaciones aumentarán a medida que seas más capaz de sentir empatía, desde el momento en que empieces a considerar a los otros de forma diferente, no por su valor material sino por su valor como seres humanos. Puedes hasta descubrir una aptitud para la psicología — tu forma de abrirte a este mundo. A lo largo de ese camino, puedes experimentar una hermosa metamorfosis kármica. Renunciando a tus temores de pérdida, puedes aumentar tu capacidad de recibir, tanto espiritual como materialmente.',

    nisyotPrincipales: [
      'Controlar la lengua viperina que ve las debilidades ajenas y las expone sin piedad.',
      'Renunciar a la venganza y al ajuste de cuentas. Lo que das, recibes — y el boomerang siempre vuelve.',
      'Transformar los celos en admiración y la posesividad en generosidad.',
      'Aprender a perdonar genuinamente, no solo como estrategia sino como verdadera liberación del rencor.',
    ],
    recomendacionesCamino: [
      'Cuando sientas un arrebato de ira, pasión u odio, haz una pausa y cuenta hasta 30 antes de actuar o hablar.',
      'Pregúntate siempre: ¿Estoy buscando controlar esta situación o confiar en la Luz?',
      'Practica la vulnerabilidad: revela algo de ti mismo sin temor a que sea usado en tu contra.',
      'Medita en las letras Nun y Dalet: la vida en movimiento atraviesa la puerta de la transformación.',
    ],
    practicasTikun: [
      'Ritual de "soltar el aguijón": cada noche, escribe una ofensa real o imaginaria y entiérrala simbólicamente (quema, entierra, rompe el papel).',
      'Ejercicio de confianza semanal: delega el control de algo importante a otra persona sin supervisar.',
      'Práctica de "no drama": durante un día completo, responde a cualquier provocación con calma absoluta.',
      'Servicio anónimo de sanación: canaliza tu energía intuitiva para ayudar a otros sin buscar reconocimiento.',
    ],
    fechasCiclos: [
      'Mar-Cheshván (octubre-noviembre): el octavo mes, gobernado por Marte. Mes de juicio, de confrontación con la propia sombra.',
      'Marte directo/retrógrado: momentos clave para que Escorpio use la energía marcial constructivamente.',
      'Luna Nueva en Escorpio: momento de máxima introspección y transformación. Ideal para rituales de soltar y renacer.',
      'Período posterior a Yom Kipur: tiempo de reconstrucción espiritual. Escorpio debe canalizar su intensidad hacia la edificación.',
    ],
  }),
  Object.freeze({
    id: 8,
    signo: 'Sagitario',
    mesHebreo: 'Kislev',
    letraSigno: { hebrea: 'ס', nombre: 'Samech', significado: 'Apoyo, asistencia, el aliento que sostiene' },
    letraPlaneta: { hebrea: 'ג', nombre: 'Guimel', significado: 'Camello, la recompensa, el compartir' },
    planeta: 'Júpiter',
    elemento: 'Fuego',
    parteCuerpo: 'Caderas / Muslos',
    conceptoClave: 'Como un arcoíris, la promesa después del diluvio',
    pruebasCamino: [
      'Canalizar el fuego interior que impulsa a Sagitario a buscar desafíos constantes. Ese mismo fuego que lo hace audaz puede volverlo irresponsable si no se equilibra con juicio.',
      'Aprender que la gratificación instantánea no es la meta. Buscar siempre la próxima aventura impide disfrutar el presente.',
      'Madurar el espíritu aventurero para que no sea huida de compromisos sino búsqueda de verdad.',
    ],
    sintesisMision: 'El alma de Sagitario es como el arcoíris (Keshet en hebreo) — el puente de luz que aparece después de la tormenta. Su misión es ser testigo viviente de que los milagros existen y que la Luz siempre prevalece. Júpiter le otorga abundancia, pero debe aprender que la verdadera abundancia es espiritual, no solo material. Su optimismo natural debe ser el combustible para ayudar a otros a ver la Luz, no una excusa para la complacencia.',
    tikunGeneral: 'Si tu Tikun está en Sagitario, conservas la dualidad característica de tu encarnación anterior como Géminis (nodo sur). Habiendo considerado siempre tu vida desde dos puntos de vista opuestos, vivías en una profunda incertidumbre. Tomar decisiones era tu mayor obstáculo. No podías establecer un curso de acción definido y mantenerlo. Uno de tus problemas en vidas pasadas y al principio de esta vida es una falta de concentración, que te hace parecer superficial. Tu inestabilidad atropelló tus esfuerzos por lograr una posición profesional y perjudicó tu evolución espiritual y física. Para ser aceptado en un grupo, aceptabas "bailar cualquier melodía". Debido a tu tendencia camaleónica, eras con frecuencia llamado hipócrita. Tu Tikun en Sagitario presenta el reto de definir tus metas y realizarlas. Tus responsabilidades y obligaciones son oportunidades para consolidar tus propias opiniones. Puedes darle la espalda a tu pasado superficial y finalmente hacer frente a la realidad. Puedes hacer esta transformación a través de la fidelidad. De hecho, serás tan ansioso por la justicia que la integridad, la sinceridad y la negativa a ceder serán temas centrales en tu evolución. Puedes encontrar tu propia identidad — la autenticidad estará en el centro de tu compromiso — y descubrirás tu verdadera misión en la tierra: compartir tu sabiduría y revelar la verdad.',

    nisyotPrincipales: [
      'Desarrollar la perseverancia que falta cuando la aventura inicial pierde su novedad.',
      'Aprender a ser sensible a las necesidades de los demás sin que eso límite tu libertad.',
      'Canalizar el entusiasmo hacia proyectos sostenibles, no hacia impulsos pasajeros.',
      'Aceptar la responsabilidad sin sentir que es una jaula para tu espíritu libre.',
    ],
    recomendacionesCamino: [
      'Elige un proyecto o relación y comprométete a mantenerlo por al menos un año completo, pasando por todas las etapas.',
      'Antes de emprender una nueva aventura, pregúntate: ¿Esto sirve a mi crecimiento espiritual o es solo una distracción emocionante?',
      'Practica la gratitud por lo que ya tienes en lugar de buscar siempre lo siguiente.',
      'Medita en las letras Samech y Guimel: el apoyo divino te sostiene cuando dejas de correr y permites que la Luz te alcance.',
    ],
    practicasTikun: [
      'Ejercicio de "una meta por trimestre": elige un objetivo y trabaja en él diariamente sin desviarte hacia otros intereses.',
      'Práctica de presencia: durante las comidas o conversaciones, resiste el impulso de planificar el próximo momento. Estate aquí ahora.',
      'Diario de compromisos cumplidos: registra tres promesas que mantuviste cada semana.',
      'Servicio constante: elige una causa y apóyala regularmente, no solo cuando te apetezca.',
    ],
    fechasCiclos: [
      'Kislev (noviembre-diciembre): mes de los milagros. La palabra milagro (Ness) significa "escapar" del deseo de recibir solo para sí mismo.',
      'Janucá: la fiesta de las luces que comienza en Kislev. Milagro del aceite que ardió ocho días. Sagitario debe conectar con la fe en lo imposible.',
      'Luna Llena en Sagitario: momento de máxima expansión. Ideal para establecer metas espirituales audaces.',
      'Pre-solsticio de invierno: período de oscuridad creciente. Sagitario debe ser la luz que anima a otros.',
    ],
  }),
  Object.freeze({
    id: 9,
    signo: 'Capricornio',
    mesHebreo: 'Tevet',
    letraSigno: { hebrea: 'ע', nombre: 'Áin', significado: 'Ojo, la fuente, la percepción espiritual' },
    letraPlaneta: { hebrea: 'ב', nombre: 'Bet', significado: 'Casa, boca, el lugar donde la creación nace' },
    planeta: 'Saturno',
    elemento: 'Tierra',
    parteCuerpo: 'Rodillas / Sistema óseo',
    conceptoClave: 'Viviendo en un mundo material, el guardián del umbral espiritual',
    pruebasCamino: [
      'Trascender el materialismo que atrapa el alma en las ilusiones del mundo físico. Capricornio, siendo el signo más materialista, tiene el mayor potencial de espiritualidad.',
      'Aprender que nada de lo que posee merece realmente suyo. La Luz es la fuente de todo logro, no el esfuerzo individual.',
      'Superar la frialdad emocional y la dificultad para dar y recibir amor. Saturno deja a Capricornio sintiéndose solo y distante.',
    ],
    sintesisMision: 'Capricornio representa la cima del cielo, el punto más alto del firmamento. Desde esta altura privilegiada, puede ver tanto el mundo material como el espiritual. Su misión es entender que el trabajo es una oportunidad para revelar el bien, no un medio doloroso para obtener recompensa material. Debe aprender que compartir no es perder, sino expandir la capacidad de recibir. Las letras Bet y Áin lo conectan directamente con los 72 canales de energía a través de los cuales la Luz desciende al mundo.',
    tikunGeneral: 'Las dudas heredadas de una vida anterior sobrecargan a la persona cuyo Tikun está en Capricornio. Habiendo cargado con la influencia de Cáncer (nodo sur), te enfrentas a una constante ansiedad. Toda tu vida buscarás seguridad, hasta el nivel en el cual idealizabas la vida. De esta manera, podrías esconder tus problemas o aceptar con entusiasmo la dirección de otras personas, rechazando cualquier tipo de responsabilidad. En consecuencia, eres un cúmulo de inconformismo. Nunca puedes ser tan realmente abierto a las posibilidades del mundo exterior. Viviste como un ermitaño, enterrado en tu propio mundo, confiando en el materialismo para sentirte a salvo. Evitaste cualquier conexión verdadera con personas o ideas. Debido a tu falta de confianza en ti mismo, cortaste tus experiencias y te obligaste a permanecer muy cerca de tu familia, de manera poco saludable, especialmente de tus padres. Debido a esto, injustamente los haces los chivos expiatorios para todas tus debilidades. Quedaste marcado por la imagen de tu padre y tuviste que empezar esta vida con esa dificultad. En el pasado te negaste a crecer, asumiendo una conducta infantil, nunca arriesgando. Para conquistar la seguridad organizaste tu vida según las reglas y las leyes de la sociedad, que pudieron haber hecho de ti un patriota, o por lo menos un político. Una corrección en Capricornio te enseñará la madurez. Tienes que cortar el cordón umbilical con tu familia. Tendrás que aceptar tus responsabilidades y también buscar nuevas responsabilidades para disipar tus ansiedades. De esta manera podrás disfrutar de los placeres de asumir riesgos. Te divertirás en entregarte a algo sin premeditación. Encuentra una causa digna e identifícate con ella; de esta manera te basarás en tu fuerza interior para enfrentar los obstáculos. Ganarás el autocontrol y la preparación para cumplir con tu misión espiritual en la vida.',

    nisyotPrincipales: [
      'Abrir el corazón para dar y recibir amor sin condiciones. La coraza de Saturno debe ser permeable.',
      'Compartir los frutos del trabajo sin temor a la escasez. Dar es la prueba de que confías en la Luz.',
      'Ver más allá del valor material de las personas y las cosas.',
      'Desarrollar calidez humana y caridad sin esperar nada a cambio.',
    ],
    recomendacionesCamino: [
      'Pregúntate antes de cada logro: ¿Esto sirve a mi ego o a la Luz? ¿Construyo para mí o para un propósito mayor?',
      'Comparte al menos el 10% de tus ingresos con causas que ayuden a otros. La generosidad rompe la ilusión de la escasez.',
      'Permítete sentir sin juzgarte. La vulnerabilidad no es debilidad, es la puerta a la verdadera fortaleza.',
      'Medita en las letras Bet y Áin: la casa del ser se abre cuando el ojo espiritual ve la realidad más allá del materialismo.',
    ],
    practicasTikun: [
      'Ejercicio de desapego material semanal: usa algo de valor y préstalo o compártelo voluntariamente.',
      'Práctica de calidez consciente: cada día expresa un sentimiento genuino a alguien sin usar palabras técnicas o racionales.',
      'Diario de abundancia compartida: registra todo lo que diste y cómo te sentiste al hacerlo.',
      'Servicio de mentoría: comparte tu sabiduría y experiencia con alguien más joven o menos experimentado sin cobrar ni esperar reconocimiento.',
    ],
    fechasCiclos: [
      'Tevet (diciembre-enero): mes de máximo materialismo y máxima oportunidad espiritual. Saturno rige desde la distancia.',
      'Ayuno de 10 de Tevet: día de duelo por el sitio a Jerusalén. Capricornio debe usarlo para revisar su apego a lo material.',
      'Solsticio de invierno: la noche más larga del año. Capricornio debe buscar la Luz interior cuando el mundo exterior está más oscuro.',
      'Fin del año gregoriano: período de balances. Capricornio debe evaluar no solo sus logros materiales sino su crecimiento espiritual.',
    ],
  }),
  Object.freeze({
    id: 10,
    signo: 'Acuario',
    mesHebreo: 'Shvat',
    letraSigno: { hebrea: 'צ', nombre: 'Tzadi', significado: 'Justo, el equilibrio entre la misericordia y el juicio' },
    letraPlaneta: { hebrea: 'ב', nombre: 'Bet', significado: 'Casa, la centralidad de toda bendición' },
    planeta: 'Saturno',
    elemento: 'Aire',
    parteCuerpo: 'Tobillos / Sistema circulatorio',
    conceptoClave: 'Debajo del agua, el mes de la redención',
    pruebasCamino: [
      'Aprender que la revolución sin amor es solo ruido. Acuario busca derribar estructuras, pero debe construir sobre la base del amor individual.',
      'Conectar con la humanidad a nivel personal, no solo masivo. Es más fácil luchar por causas globales que estar presente para un amigo que sufre.',
      'Superar el orgullo intelectual que lo convence de que sus ideas son superiores y los demás deben seguirlas.',
    ],
    sintesisMision: 'El alma de Acuario es el agua que purifica, el canal de la misericordia divina. Su letra Tzadi significa "justo", indicando el equilibrio que debe buscar. Como el cántaro que vierte agua sin hacer cuentas, Acuario está llamado a compartir la Luz abundantemente. En la era de Acuario (que comenzó hace ~400 años), su energía de unificación y redención es especialmente necesaria. Su misión es derribar los muros que separan a la humanidad, comenzando por los muros de su propio ego.',
    tikunGeneral: 'Eres un verdadero monarca, regresando al plano físico para corregir el orgullo de tu encarnación anterior como Leo (nodo sur). En tu última encarnación dominabas a tus subordinados. Has vivido como el centro de las atracciones. Adorabas el exhibicionismo y el lujo y no te era fácil vivir sin eso. Además, vencer tu orgullo no era algo fácil de hacer, ya que el orgullo fue reforzado en tus reencarnaciones anteriores. El Tikun en Acuario te hará tener dificultades en el matrimonio, es decir, aceptar un socio, un igual, para compartirlo todo. Este es el ejercicio preliminar para superar tu orgullo. Al comienzo de la encarnación actual sigues buscando la admiración a la que estabas acostumbrado. Explorabas tu poder arrogante para controlar a los demás. Considerarte el centro del universo era tu forma de expresar una necesidad de amor y gratitud. Había que luchar para discernir la realidad. Después de haber vivido en un mundo artificial, tuviste grandes problemas para encontrar un camino espiritual. Como alguien acostumbrado a dar órdenes a sus subordinados, descender del pedestal no es algo que viene fácilmente. El Tikun en Acuario causará algunos obstáculos en tus relaciones. En la boda, por ejemplo, debes ir despacio, pero siempre dejando tu preocupación con tus propios deseos egoístas. Tendrás que cambiar tu sacrosanta independencia por un nuevo concepto de vida: la interdependencia. En este mundo no se trata de "tú contra todos los otros"; en realidad todos somos iguales en el mismo nivel. Si renuncias un poco a los honores y al glamour, lograrás crear una enorme restricción y tomar el control de la dualidad de tu corrección — tu vida personal es tu misión humanitaria. El Tikun en Acuario es la verdad del verdadero misionero. Puedes alcanzar la conciencia de una realidad cósmica y te sentirás responsable de la humanidad en su conjunto. Conocerás la verdadera amistad y tal vez hasta la fraternidad universal. Al haber heredado un poder leonino, tienes la fuerza necesaria para realizar esta tarea. Úsala para el beneficio de todos. Puedes vivir una aventura excepcional y única en la historia de la humanidad si consigues hacer la restricción más difícil — silenciar tu ego y practicar la humildad y la modestia, mientras vivas en simplicidad.',

    nisyotPrincipales: [
      'Equilibrar el idealismo global con el amor concreto por el individuo que tienes enfrente.',
      'Derribar el muro más difícil: el de tu propio orgullo intelectual.',
      'Aceptar que no todas tus ideas son correctas ni deben ser implementadas.',
      'Desarrollar la paciencia para trabajar dentro de sistemas establecidos mientras trabajas para mejorarlos.',
    ],
    recomendacionesCamino: [
      'Dedica tanto tiempo a una sola persona necesitada como a tu causa humanitaria favorita.',
      'Permite que otros lideren, incluso cuando estés seguro de que tu visión es mejor.',
      'Practica la interdependencia consciente: pide ayuda, delega, confía.',
      'Medita en las letras Tzadi y Bet: la justicia verdadera nace en el hogar del corazón, no en las calles de la revolución.',
    ],
    practicasTikun: [
      'Ejercicio de "una persona a la vez": cada semana, elige a una persona y ofrécele tu atención completa y apoyo incondicional.',
      'Práctica de humildad intelectual: una vez al día, di "no sé" o "me equivoqué" deliberadamente.',
      'Diario de ideas implementadas vs. ideas soñadas: registra qué ideas realmente llevaste a la acción con impacto tangible.',
      'Servicio local, no solo global: participa en una organización comunitaria de tu vecindario.',
    ],
    fechasCiclos: [
      'Shvat (enero-febrero): mes de la redención. Acuario representa la era de la iluminación y el despertar espiritual.',
      '15 de Shvat (Tu Bishvat): Año Nuevo de los Árboles. Celebrado como el despertar de la naturaleza. Acuario debe conectarse con el crecimiento desde las raíces.',
      'Saturno en Acuario (cada ~29 años): momento de gran transformación colectiva. Acuario debe evaluar su contribución a la humanidad.',
      'Era de Acuario: período de 2.160 años de conciencia global. Acuario está en su elemento y debe liderar desde la humildad.',
    ],
  }),
  Object.freeze({
    id: 11,
    signo: 'Piscis',
    mesHebreo: 'Adar',
    letraSigno: { hebrea: 'ק', nombre: 'Kuf', significado: 'Mono, agente doble, conexión con los mundos inferiores y superiores' },
    letraPlaneta: { hebrea: 'ג', nombre: 'Guimel', significado: 'Camello, recompensa, compartir' },
    planeta: 'Júpiter',
    elemento: 'Agua',
    parteCuerpo: 'Pies / Sistema linfático',
    conceptoClave: 'Nacido para compartir, la columna vertebral del Zodíaco',
    pruebasCamino: [
      'Convertir la compasión pasiva en acción transformadora. Piscis siente el dolor del mundo, pero debe aprender a actuar para aliviarlo, no solo absorberlo.',
      'Superar la complacencia espiritual. Saber que "todo es una ilusión" no debe llevar a la inacción, sino a una acción libre del apego al resultado.',
      'Desarrollar el deseo de recibir para tener algo que compartir. Demasiada humildad priva a Piscis de la energía que necesita para ayudar a otros.',
    ],
    sintesisMision: 'Piscis es el compendio de todos los signos que le preceden, la suma total de la experiencia zodiacal. Su alma viene con la máxima sabiduría y también la máxima responsabilidad — es responsable por todos los demás signos. La letra Kuf es un agente doble que parece alimentar la negatividad pero en realidad sirve a la Luz. Los piscianos están conectados a ambos mundos (físico y espiritual) y pueden viajar entre ellos. Su misión es revelar lo que está oculto, no solo saberlo.',
    tikunGeneral: 'El Tikun en Piscis trata principalmente con la percepción consciente de otra dimensión. Tu vida anterior como Virgo (nodo sur) te dejó con una incapacidad para desligarte de la lógica; piensas y vives en un mundo lógico. Aunque esta vida te mostró otros puntos de vista, en tus otras encarnaciones no eras capaz de ver el bosque por causa de los árboles. Estabas absorto en racionalizaciones intrincadas, que aunque al principio las corregías, no te satisfacían finalmente porque viste solo un lado de la figura (el lado físico). Tu preocupación con los detalles te convirtió en una persona irascible y difícil. Habiendo caído en una organización excesiva, has perdido cualquier rastro de espontaneidad. Este comportamiento de Virgo también causó dificultades y desacuerdos en tu vida sexual. Debido a tu renuencia a participar emocionalmente, por temor a no poder controlar la relación, te prohibiste tener arrebatos emocionales de cualquier tipo. Muy rígido en tu manera de pensar, eras incapaz de escuchar y aprender de los demás. Por exigir la perfección actual en tu vida, convertiste la tarea más difícil de lo que pudo haber sido. Mirada muy alto y perdiste tu autoconfianza. Para entender y dominar tu propia vida, todo fue calibrado y etiquetado según reglas terminantes. Sin embargo, la existencia no se ajusta a Descartes. Teniendo fragmentado tu vida anterior, ahora estás atorado con el problema de cómo juntar de nuevo las piezas en esta vida. El Tikun en Piscis sugiere que debes entender primero que no puedes percibir la esencia de la verdad a través de tus sentidos, sino que una realidad espiritual es la fuente de todo lo que es físico. Deja de analizar el efecto y verás la causa. Deja de lado tu exigencia de que una explicación lógica te dará la habilidad de borrar las dudas que te trajeron perturbación por tanto tiempo. Por ese camino conseguirás una visión del mundo que va más allá de los sentidos y te abrirá las puertas a un nivel de conciencia más espiritual. Aquí podrás experimentar emociones que te ayudarán a cambiar tu percepción de los demás; por juzgarlos menos a ellos, ellos te ofrecerán más. Esto encenderá en ti un amor por tus semejantes y reforzará tu compasión. De esta manera aprenderás cómo actuar en los dos niveles. Puedes vivir en el presente y mirando hacia el futuro. Actuar en el momento para servir en una misión universal en la que tendrás fe y la llave para alcanzar un verdadero renacimiento y lograr una conciencia universal.',

    nisyotPrincipales: [
      'Actuar desde la compasión, no solo sentirla. El dolor del mundo es para ser sanado, no solo sentido.',
      'No permitir que la empatía excesiva oculte la verdad necesaria que alguien debe escuchar.',
      'Desarrollar un deseo sano de recibir para tener algo que compartir.',
      'Mantener los pies en la tierra mientras la cabeza está en las estrellas.',
    ],
    recomendacionesCamino: [
      'Elige cada día una acción concreta para ayudar a alguien. No dejes que la compasión se quede solo en sentimiento.',
      'Recuerda que eres un puente entre los mundos. Para ser efectivo, debes tener un pie en cada uno.',
      'Permítete desear cosas buenas — no para acumular, sino para tener más Luz que compartir.',
      'Medita en las letras Kuf y Guimel: el agente de la Luz usa el compartir para transformar la realidad.',
    ],
    practicasTikun: [
      'Ejercicio de acción compasiva diaria: cada día realiza al menos una acción tangible para aliviar el sufrimiento de alguien.',
      'Práctica de "verdad con amor": semanalmente, di algo honesto aunque incómodo, pero siempre desde el amor y no desde la crítica.',
      'Diario de recepción consciente: registra qué recibiste hoy (tiempo, recursos, amor) y cómo lo usaste para compartir.',
      'Servicio de conexión: actúa como puente entre alguien que necesita ayuda y alguien que puede darla.',
    ],
    fechasCiclos: [
      'Adar (febrero-marzo): el mes de la alegría. "Cuando entra Adar, aumenta la alegría." Es el mes más feliz del calendario hebreo.',
      'Purim: celebración del milagro de Ester. La letra Kuf aparece como la salvación que viene disfrazada de coincidencia. Piscis debe ver la mano de la Luz en los eventos aparentemente aleatorios.',
      'Júpiter directo: Piscis recibe toda la abundancia y protección de Júpiter. Ideal para expansión espiritual.',
      'Final del año hebreo: Piscis cierra el ciclo y prepara el renacimiento de Aries. Momento de completar correcciones pendientes.',
    ],
  }),
]);

export function getKabbalisticSign(birthdateOrIndex) {
  if (typeof birthdateOrIndex === 'number') {
    return ASTROLOGIA_KABALISTICA[birthdateOrIndex] || null;
  }
  const parsed = parseDateISO(birthdateOrIndex);
  if (!parsed) return null;
  const md = parsed.month * 100 + parsed.day;
  let idx;
  if (md >= 1222 || md <= 119) idx = 9;
  else if (md >= 120 && md <= 218) idx = 10;
  else if (md >= 219 && md <= 320) idx = 11;
  else if (md >= 321 && md <= 419) idx = 0;
  else if (md >= 420 && md <= 520) idx = 1;
  else if (md >= 521 && md <= 620) idx = 2;
  else if (md >= 621 && md <= 722) idx = 3;
  else if (md >= 723 && md <= 822) idx = 4;
  else if (md >= 823 && md <= 922) idx = 5;
  else if (md >= 923 && md <= 1022) idx = 6;
  else if (md >= 1023 && md <= 1121) idx = 7;
  else idx = 8;
  return ASTROLOGIA_KABALISTICA[idx];
}

const MONTH_NAMES = Object.freeze({
  enero: 1, febrero: 2, marzo: 3, abril: 4, mayo: 5, junio: 6,
  julio: 7, agosto: 8,   setiembre: 9, octubre: 10, noviembre: 11, diciembre: 12,
});

const SIGN_NAME_TO_ID = Object.freeze({
  Aries: 0, Tauro: 1, Géminis: 2, Cáncer: 3, Leo: 4, Virgo: 5,
  Libra: 6, Escorpio: 7, Sagitario: 8, Capricornio: 9, Acuario: 10, Piscis: 11,
});

function parseDateStr(str) {
  const parts = str.trim().split(' ');
  const day = parseInt(parts[0], 10);
  const month = MONTH_NAMES[parts[1]?.toLowerCase()];
  const year = parseInt(parts[2], 10);
  return year * 10000 + month * 100 + day;
}

function parseLine(line) {
  line = line.trim().replace(/\s+/g, ' ');
  if (!line || line === '') return null;
  const signNames = Object.keys(SIGN_NAME_TO_ID).sort((a, b) => b.length - a.length);
  let foundSign = null;
  let signIdx = -1;
  for (const name of signNames) {
    const idx = line.lastIndexOf(name);
    if (idx !== -1) {
      foundSign = name;
      signIdx = SIGN_NAME_TO_ID[name];
      break;
    }
  }
  if (signIdx === -1) return null;
  const datePart = line.substring(0, line.indexOf(foundSign)).trim();
  const parts = datePart.split('al').map(s => s.trim()).filter(Boolean);
  if (parts.length === 1) {
    const d = parseDateStr(parts[0]);
    return { start: d, end: d, sign: signIdx };
  }
  if (parts.length >= 2) {
    const start = parseDateStr(parts[0]);
    const end = parseDateStr(parts[1]);
    return { start, end, sign: signIdx };
  }
  return null;
}

const TIKUN_TABLE_RAW = Object.freeze([
  "01 enero 1900 al 20 enero 1901 Sagitario",
  "21 enero 1901 al 21 julio 1902 Escorpio",
  "22 julio 1902 al 15 enero 1904 Libra",
  "16 enero 1904 al 18 setiembre 1905 Virgo",
  "19 setiembre 1905 al 30 marzo 1907 Leo",
  "31 marzo 1907 al 27 setiembre 1908 Cáncer",
  "28 setiembre 1908 al 23 marzo 1910 Géminis",
  "24 marzo 1910 al 08 diciembre 1912 Tauro",
  "09 diciembre 1912 al 06 julio 1913 Aries",
  "07 julio 1913 al 03 diciembre 1915 Piscis",
  "04 diciembre 1915 al 31 mayo 1916 Acuario",
  "01 junio 1916 al 13 febrero 1918 Capricornio",
  "14 febrero 1918 al 15 agosto 1919 Sagitario",
  "16 agosto 1919 al 07 febrero 1921 Escorpio",
  "08 febrero 1921 al 22 agosto 1922 Libra",
  "23 agosto 1922 al 27 agosto 1922 Virgo",
  "28 agosto 1922 al 31 agosto 1922 Libra",
  "01 setiembre 1922 al 22 abril 1924 Virgo",
  "23 abril 1924 al 26 octubre 1925 Leo",
  "27 octubre 1925 al 16 abril 1927 Cáncer",
  "17 abril 1927 al 28 diciembre 1928 Géminis",
  "29 diciembre 1928 al 07 julio 1930 Tauro",
  "08 julio 1930 al 28 diciembre 1931 Aries",
  "29 diciembre 1931 al 24 junio 1933 Piscis",
  "25 junio 1933 al 08 marzo 1935 Acuario",
  "09 marzo 1935 al 14 setiembre 1936 Capricornio",
  "15 setiembre 1936 al 03 marzo 1938 Sagitario",
  "04 marzo 1938 al 11 setiembre 1939 Escorpio",
  "12 setiembre 1939 al 24 mayo 1941 Libra",
  "25 mayo 1941 al 21 noviembre 1942 Virgo",
  "22 noviembre 1942 al 11 mayo 1944 Leo",
  "12 mayo 1944 al 02 diciembre 1945 Cáncer",
  "03 diciembre 1945 al 02 agosto 1947 Géminis",
  "03 agosto 1947 al 25 enero 1949 Tauro",
  "26 enero 1949 al 26 julio 1950 Aries",
  "27 julio 1950 al 28 marzo 1952 Piscis",
  "29 marzo 1952 al 09 octubre 1953 Acuario",
  "10 octubre 1953 al 02 abril 1955 Capricornio",
  "03 abril 1955 al 04 octubre 1956 Sagitario",
  "05 octubre 1956 al 16 junio 1958 Escorpio",
  "17 junio 1958 al 15 diciembre 1959 Libra",
  "16 diciembre 1959 al 10 junio 1961 Virgo",
  "11 junio 1961 al 23 diciembre 1962 Leo",
  "24 diciembre 1962 al 25 agosto 1964 Cáncer",
  "26 agosto 1964 al 19 febrero 1966 Géminis",
  "20 febrero 1966 al 19 agosto 1967 Tauro",
  "20 agosto 1967 al 19 abril 1969 Aries",
  "20 abril 1969 al 02 noviembre 1970 Piscis",
  "03 noviembre 1970 al 27 abril 1972 Acuario",
  "28 abril 1972 al 27 octubre 1973 Capricornio",
  "28 octubre 1973 al 10 julio 1975 Sagitario",
  "11 julio 1975 al 07 enero 1977 Escorpio",
  "08 enero 1977 al 05 julio 1978 Libra",
  "06 julio 1978 al 05 enero 1980 Virgo",
  "06 enero 1980 al 07 enero 1980 Leo",
  "08 enero 1980 al 12 enero 1980 Virgo",
  "13 enero 1980 al 20 setiembre 1981 Leo",
  "21 setiembre 1981 Cáncer",
  "22 setiembre 1981 al 24 setiembre 1981 Leo",
  "25 setiembre 1981 al 16 marzo 1983 Cáncer",
  "17 marzo 1983 al 11 setiembre 1984 Géminis",
  "12 setiembre 1984 al 06 abril 1986 Tauro",
  "07 abril 1986 al 05 mayo 1986 Aries",
  "06 mayo 1986 al 08 mayo 1986 Tauro",
  "09 mayo 1986 al 02 diciembre 1987 Aries",
  "03 diciembre 1987 al 22 mayo 1989 Piscis",
  "23 mayo 1989 al 18 noviembre 1990 Acuario",
  "19 noviembre 1990 al 01 agosto 1992 Capricornio",
  "02 agosto 1992 al 01 febrero 1994 Sagitario",
  "02 febrero 1994 al 31 julio 1995 Escorpio",
  "01 agosto 1995 al 25 enero 1997 Libra",
  "26 enero 1997 al 20 octubre 1998 Virgo",
  "21 octubre 1998 al 09 abril 2000 Leo",
  "10 abril 2000 al 13 octubre 2001 Cáncer",
  "14 octubre 2001 al 13 abril 2003 Géminis",
  "14 abril 2003 al 26 diciembre 2004 Tauro",
  "27 diciembre 2004 al 22 junio 2006 Aries",
  "23 junio 2006 al 18 diciembre 2007 Piscis",
  "19 diciembre 2007 al 21 agosto 2009 Acuario",
  "22 agosto 2009 al 03 marzo 2011 Capricornio",
  "04 marzo 2011 al 30 agosto 2012 Sagitario",
  "31 agosto 2012 al 18 febrero 2014 Escorpio",
  "19 febrero 2014 al 12 noviembre 2015 Libra",
  "13 noviembre 2015 al 09 mayo 2017 Virgo",
  "10 mayo 2017 al 06 noviembre 2018 Leo",
  "07 noviembre 2018 al 05 mayo 2020 Cáncer",
  "06 mayo 2020 al 18 enero 2022 Géminis",
  "19 enero 2022 al 17 julio 2023 Tauro",
  "18 julio 2023 al 11 enero 2025 Aries",
  "12 enero 2025 al 27 julio 2026 Piscis",
  "28 julio 2026 al 26 marzo 2028 Acuario",
  "27 marzo 2028 al 23 setiembre 2029 Capricornio",
  "24 setiembre 2029 al 21 marzo 2031 Sagitario",
  "22 marzo 2031 al 02 diciembre 2032 Escorpio",
  "03 diciembre 2032 al 03 junio 2034 Libra",
  "04 junio 2034 al 30 noviembre 2035 Virgo",
  "01 diciembre 2035 al 29 mayo 2037 Leo",
  "30 mayo 2037 al 10 febrero 2039 Cáncer",
  "11 febrero 2039 al 11 agosto 2040 Géminis",
  "12 agosto 2040 al 04 febrero 2042 Tauro",
  "05 febrero 2042 al 18 agosto 2043 Aries",
  "19 agosto 2043 al 18 abril 2045 Piscis",
  "19 abril 2045 al 18 octubre 2046 Acuario",
  "19 octubre 2046 al 12 abril 2048 Capricornio",
  "13 abril 2048 al 14 diciembre 2049 Sagitario",
  "15 diciembre 2049 al 21 diciembre 2049 Escorpio",
  "22 diciembre 2049 al 23 diciembre 2049 Sagitario",
  "24 diciembre 2049 al 31 diciembre 2050 Escorpio",
]);

const TIKUN_TABLE = Object.freeze(TIKUN_TABLE_RAW.map(parseLine).filter(Boolean));

export function getTikunSign(birthdate) {
  const parsed = parseDateISO(birthdate);
  if (!parsed) return null;
  const dateNum = parsed.year * 10000 + parsed.month * 100 + parsed.day;
  for (const entry of TIKUN_TABLE) {
    if (dateNum >= entry.start && dateNum <= entry.end) {
      return ASTROLOGIA_KABALISTICA[entry.sign];
    }
  }
  return null;
}

function toDateStr(n) {
  const y = Math.floor(n / 10000);
  const m = Math.floor((n % 10000) / 100);
  const d = n % 100;
  return `${d.toString().padStart(2, '0')}/${m.toString().padStart(2, '0')}/${y}`;
}

export function getTikunYearRange(birthdate) {
  const parsed = parseDateISO(birthdate);
  if (!parsed) return null;
  const dateNum = parsed.year * 10000 + parsed.month * 100 + parsed.day;
  for (const entry of TIKUN_TABLE) {
    if (dateNum >= entry.start && dateNum <= entry.end) {
      return {
        start: toDateStr(entry.start),
        end: toDateStr(entry.end),
        sign: ASTROLOGIA_KABALISTICA[entry.sign],
      };
    }
  }
  return null;
}

export const ZODIAC_COLORS = Object.freeze({
  Aries: '#EF4444',
  Tauro: '#10B981',
  Géminis: '#F59E0B',
  Cáncer: '#C4B5FD',
  Leo: '#F97316',
  Virgo: '#22D3EE',
  Libra: '#EC4899',
  Escorpio: '#6366F1',
  Sagitario: '#3B82F6',
  Capricornio: '#14B8A6',
  Acuario: '#06B6D4',
  Piscis: '#8B5CF6',
});

export default ASTROLOGIA_KABALISTICA;
