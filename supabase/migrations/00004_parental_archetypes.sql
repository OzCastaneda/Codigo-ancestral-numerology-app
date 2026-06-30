-- Create parental_archetypes table
CREATE TABLE IF NOT EXISTS public.parental_archetypes (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    number integer NOT NULL,
    archetype_type text NOT NULL CHECK (archetype_type IN ('PADRE', 'MADRE')),
    name text NOT NULL,
    characteristics text NOT NULL,
    psychological_influence text NOT NULL,
    shadow_aspect text NOT NULL,
    integration_path text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    UNIQUE(number, archetype_type)
);

ALTER TABLE public.parental_archetypes ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
    CREATE POLICY "Anyone can read parental_archetypes"
        ON public.parental_archetypes
        FOR SELECT
        TO anon, authenticated
        USING (true);
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

-- Seed data
INSERT INTO public.parental_archetypes (number, archetype_type, name, characteristics, psychological_influence, shadow_aspect, integration_path)
VALUES
    (1, 'PADRE', 'El Padre Autoridad',
     'Líder nato, independiente, pionero, ambicioso. Marca el camino con determinación y espera que los demás sigan su ejemplo. Valora la autonomía y la capacidad de iniciativa.',
     'Influye en la autoestima y la confianza para tomar decisiones. Un padre 1 bien integrado enseña a ser valiente y a confiar en uno mismo. Cuando es disfuncional, genera inseguridad o rebeldía.',
     'Autoritarismo extremo, egoísmo, incapacidad para escuchar. Puede ser dominante, competitivo en exceso o ausente emocionalmente por estar enfocado en sus metas.',
     'Aprender a liderar desde el servicio, no desde la imposición. Integrar la humildad y la escucha activa. Reconocer que el verdadero poder está en inspirar, no en dominar.'),
    (1, 'MADRE', 'La Madre Independiente',
     'Mujer pionera, creativa, con fuerte identidad propia. Independiente y segura de sí misma. Fomenta la originalidad y la autoexpresión en sus hijos.',
     'Moldea la capacidad de valerse por sí mismo y la confianza en el propio criterio. Una madre 1 integrada cría hijos seguros y emprendedores. Disfuncionalmente, puede sofocar con su fuerte personalidad.',
     'Egocentrismo, necesidad de ser el centro de atención, competitividad con sus hijos. Puede imponer sus expectativas o ser emocionalmente distante.',
     'Equilibrar la independencia con la conexión emocional. Permitir que los hijos tengan su propio espacio sin sentirse amenazada. Practicar la vulnerabilidad.'),
    (8, 'PADRE', 'El Padre Ejecutivo',
     'Ambicioso, eficiente, con gran capacidad ejecutiva. Proveedor material, orientado al logro y al reconocimiento social. Valora el esfuerzo y la disciplina.',
     'Influye en la relación con el dinero, el poder y el éxito. Un padre 8 integrado enseña a manejar los recursos con sabiduría. Disfuncionalmente, genera presión por alcanzar estándares imposibles.',
     'Materialismo extremo, frialdad emocional, exigencia implacable. Puede priorizar el éxito sobre los vínculos afectivos, generando hijos que se sienten amados solo cuando logran.',
     'Sanar la creencia de que el valor propio depende del éxito material. Aprender a expresar afecto más allá de lo material. Integrar la abundancia con la generosidad.'),
    (8, 'MADRE', 'La Madre Exitosa',
     'Mujer de gran capacidad organizativa, ambiciosa y eficiente. Busca la excelencia en todo lo que hace. Administradora nata del hogar y los recursos.',
     'Marca la relación con la abundancia, la autoexigencia y la capacidad de gestionar la vida práctica. Una madre 8 integrada cría hijos organizados y seguros financieramente.',
     'Exigencia excesiva, crítica constante, frialdad. Puede transmitir la creencia de que nunca es suficiente o que el amor se condiciona al logro.',
     'Aprender a valorar el ser sobre el hacer. Relajar los estándares de perfección. Mostrar vulnerabilidad y afecto incondicional más allá de los logros.'),
    (3, 'PADRE', 'El Padre Creativo',
     'Comunicador, optimista, talentoso, con gran sentido del humor. Inspira a través de la expresión artística y la alegría de vivir. Social y carismático.',
     'Influye en la capacidad de expresión, la creatividad y la alegría. Un padre 3 integrado fomenta la autoexpresión y el optimismo. Disfuncionalmente, puede ser superficial o disperso.',
     'Irresponsabilidad, vanidad, dispersión. Puede ser emocionalmente inmaduro, incapaz de comprometerse profundamente o usar el encanto para evadir responsabilidades.',
     'Canalizar la creatividad con disciplina. Profundizar en las relaciones más allá de la superficie. Asumir responsabilidad afectiva sin perder la alegría.'),
    (3, 'MADRE', 'La Madre Artista',
     'Mujer creativa, expresiva, sociable y alegre. Llena el hogar de arte, música y celebración. Fomenta la comunicación abierta y el optimismo.',
     'Moldea la capacidad de expresar emociones y la creatividad. Una madre 3 integrada cría hijos comunicativos y seguros socialmente. Disfuncionalmente, puede ser emocionalmente impredecible.',
     'Vanidad, necesidad de aprobación externa, competencia con los hijos. Puede ser excesivamente dramática o usar la manipulación emocional a través del encanto.',
     'Desarrollar profundidad emocional más allá de la superficie alegre. Validar las emociones de los hijos sin competir con ellos. Buscar aprobación interna.'),
    (6, 'PADRE', 'El Padre Protector',
     'Responsable, protector, artístico, con fuerte sentido del deber. Valora la familia, la armonía y el servicio a los demás. Consejero nato.',
     'Influye en la capacidad de compromiso, la responsabilidad afectiva y el sentido de pertenencia. Un padre 6 integrado cría hijos seguros y amorosos. Disfuncionalmente, genera codependencia.',
     'Sobreprotector, entrometido, mártir. Puede generar culpa en los hijos al sacrificarse constantemente. Dificultad para soltar el control y permitir la independencia.',
     'Aprender a cuidar sin anular. Distinguir entre protección amorosa y control ansioso. Permitir que los hijos cometan sus propios errores.'),
    (6, 'MADRE', 'La Madre Abnegada',
     'Mujer profundamente amorosa, protectora, dedicada al hogar y la familia. Su identidad gira en torno al cuidado de los demás. Consejera y mediadora natural.',
     'Marca la relación con el amor, el servicio y la pertenencia. Una madre 6 integrada cría hijos con fuerte sentido de familia. Disfuncionalmente, genera dependencia emocional y culpa.',
     'Martirio, sobreprotección, sacrificio extremo. Puede vivir a través de sus hijos, generando dificultad para separarse. Tiende a dar desde el vacío, esperando retorno.',
     'Sanar la autoestima para dar desde el plenitud, no desde la carencia. Aprender a recibir. Permitir que los hijos se independicen sin sentirse abandonada.')
ON CONFLICT (number, archetype_type) DO UPDATE SET
    name = EXCLUDED.name,
    characteristics = EXCLUDED.characteristics,
    psychological_influence = EXCLUDED.psychological_influence,
    shadow_aspect = EXCLUDED.shadow_aspect,
    integration_path = EXCLUDED.integration_path;

CREATE INDEX IF NOT EXISTS idx_parental_archetypes_number ON public.parental_archetypes (number);
