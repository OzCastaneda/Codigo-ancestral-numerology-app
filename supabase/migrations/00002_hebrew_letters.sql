-- Create hebrew_letters table
CREATE TABLE IF NOT EXISTS public.hebrew_letters (
    number integer PRIMARY KEY,
    hebrew_name text NOT NULL,
    hebrew_character text NOT NULL,
    latin_equivalent text,
    significance text,
    light_aspect text,
    shadow_aspect text,
    tarot_equivalent text,
    sephirah_connection text,
    created_at timestamp with time zone DEFAULT now()
);

ALTER TABLE public.hebrew_letters ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
    CREATE POLICY "Anyone can read hebrew_letters"
        ON public.hebrew_letters
        FOR SELECT
        TO anon, authenticated
        USING (true);
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

-- Seed data for numbers 1-9
INSERT INTO public.hebrew_letters (number, hebrew_name, hebrew_character, latin_equivalent, significance, light_aspect, shadow_aspect, tarot_equivalent, sephirah_connection)
VALUES
    (1, 'Alef', 'א', 'A',
     'El aliento de Dios. Principio vital de todo, aliento necesario para pronunciar las otras 21 letras. Representa la unidad y la chispa divina que inicia toda creación.',
     'Activo, ambicioso, con confianza en sí mismo y capacidad de liderazgo. Es el inventor, el innovador y el pensador original. Canaliza la voluntad divina hacia la manifestación.',
     'Puede volverse agresivo, egoísta, terco o sumamente consciente de sí mismo hasta el punto de la timidez. En su sombra más densa se manifiesta como tirano o fanático.',
     'El Mago',
     'Kether — La Corona: Voluntad Divina, el principio de unidad y el primer impulso creador.'),
    (2, 'Beith', 'ב', 'B',
     'El lugar de nacimiento de la creación. La cavidad bucal donde nacen las palabras. Simboliza la dualidad fundamental del universo y el principio femenino receptivo.',
     'Cooperativo, amable, modesto y diplomático. Posee un tacto natural para mantener la paz y es un excelente compañero. Sabiduría que nace de la receptividad.',
     'Indeciso por ver ambos lados de un asunto, inseguro, tímido y excesivamente emocional. Puede caer en la manipulación o el engaño para evitar conflictos.',
     'La Sacerdotisa',
     'Chochmah — Sabiduría: El principio masculino-femenino, la sabiduría primordial que da forma a la creación.'),
    (3, 'Guimel', 'ג', 'G',
     'La fluidez del habla y la comunicación. Como el camello almacena agua, la garganta es el resonador del sonido. Representa la expresión creativa y la conexión entre lo divino y lo humano.',
     'Alegre, entusiasta, con un gran sentido del humor y talento para las artes (escritura, canto, oratoria). Producto de la unión, la creatividad en movimiento.',
     'Aburrido, vanidoso, impaciente con las responsabilidades y propenso a dispersar sus energías. Puede caer en chismes, codicia o hipocresía.',
     'La Emperatriz',
     'Binah — Entendimiento: La matriz que recibe la sabiduría y da forma al entendimiento.'),
    (4, 'Dálet', 'ד', 'D',
     'El acceso a la manifestación física. El útero es la puerta del nacimiento. Representa la puerta dimensional entre lo espiritual y lo material, el orden y la estructura.',
     'Disciplinado, honesto, organizado, paciente y patriótico. Es el trabajador incansable que busca una base firme. Constructor de realidades sólidas.',
     'Argumentativo, seco, sin sentido del humor, estrecho de miras y adicto al trabajo. Puede volverse violento o cruel cuando se siente inseguro.',
     'El Emperador',
     'Chesed — Misericordia: El amor expansivo que construye y sostiene la creación.'),
    (5, 'He', 'ה', 'H',
     'El aliento de vida. Potencia femenina en el nombre divino IHVH. Representa la ventana a través de la cual el espíritu se conecta con el mundo, la vitalidad y la procreación.',
     'Adaptable, aventurero, valiente, encantador y versátil. Es el "súper vendedor" con gran curiosidad mental. Libertad y expansión consciente.',
     'Impaciente, irresponsable, inquieto y propenso a postergar. Disipación a través de los sentidos, excesos y falta de compromiso.',
     'El Hierofante',
     'Geburah — Severidad: El juicio que discierne y purifica, el poder de la crítica constructiva.'),
    (6, 'Vav', 'ו', 'V, O, U',
     'El eslabón que une lo humano con lo divino. El clavo que sostiene la creación. Representa la conexión, el vínculo, la responsabilidad de unir el cielo con la tierra.',
     'Artístico, humanitario, protector y comprensivo. Posee talento musical y es un consejero nato. Responsabilidad amorosa y servicio consciente.',
     'Entrometido, presumido, propenso a discutir y con necesidad constante de aprobación. Puede caer en tiranía doméstica o martirio.',
     'Los Enamorados',
     'Tiphereth — Belleza: La armonía que integra todas las fuerzas, el corazón del Árbol de la Vida.'),
    (7, 'Zain', 'ז', 'Z',
     'El dominio de la lengua. Las flechas son las palabras. Representa la espada del discernimiento, el poder de la palabra para crear o destruir.',
     'Analítico, dignificado, intuitivo y sabio. Prefiere la calidad a la cantidad y busca la perfección. Victoria a través de la iluminación espiritual.',
     'Distante, frío, melancólico, escéptico y extremadamente reservado. Puede volverse engañoso, infiel o sarcástico en su sombra.',
     'El Carro',
     'Netzach — Victoria: La perseverancia que vence obstáculos, la fuerza que emerge del silencio interior.'),
    (8, 'Chet', 'ח', 'CH',
     'El cultivo de la propia conciencia. Las limitaciones autoimpuestas. Representa el campo cerrado donde el alma trabaja en su evolución, la cosecha de los actos.',
     'Ambicioso, eficiente, con gran capacidad ejecutiva y juicio sólido. Posee resistencia física y rítmica. Cosecha abundante de sus esfuerzos.',
     'Materialista, impaciente, desconsiderado con el dinero y represor de sentimientos. Puede volverse abusivo, cruel o vengativo.',
     'La Fuerza',
     'Hod — Gloria: El esplendor del intelecto, la maestría sobre las fuerzas inferiores.'),
    (9, 'Tet', 'ט', 'T',
     'Sabiduría ganada. La serpiente enroscada representa la fuerza Kundalini. La energía primordial que asciende desde la base de la columna hacia la iluminación.',
     'Compasivo, generoso, idealista y con gran talento dramático o artístico. Ama a la humanidad. Protección a través de la sabiduría espiritual.',
     'Sin rumbo, cargado emocionalmente, frustrado y demasiado sensible. Puede volverse amargo, inmoral o posesivo en su aspecto sombrío.',
     'El Ermitaño',
     'Jesod — Fundamento: El receptáculo de todas las fuerzas, la conexión entre el mundo espiritual y el físico.')
ON CONFLICT (number) DO UPDATE SET
    hebrew_name = EXCLUDED.hebrew_name,
    hebrew_character = EXCLUDED.hebrew_character,
    latin_equivalent = EXCLUDED.latin_equivalent,
    significance = EXCLUDED.significance,
    light_aspect = EXCLUDED.light_aspect,
    shadow_aspect = EXCLUDED.shadow_aspect,
    tarot_equivalent = EXCLUDED.tarot_equivalent,
    sephirah_connection = EXCLUDED.sephirah_connection;

CREATE INDEX IF NOT EXISTS idx_hebrew_letters_number ON public.hebrew_letters (number);
