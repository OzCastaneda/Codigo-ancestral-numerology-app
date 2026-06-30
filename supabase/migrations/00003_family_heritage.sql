-- Create family_heritage table
CREATE TABLE IF NOT EXISTS public.family_heritage (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
    profile_id text NOT NULL,
    primary_psychological_pattern text NOT NULL,
    core_family_nucleus text NOT NULL,
    major_gifts text[] DEFAULT '{}',
    liberation_challenge text NOT NULL,
    personal_mission text NOT NULL,
    family_mission text NOT NULL,
    social_mission text NOT NULL,
    fundamental_mission text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

ALTER TABLE public.family_heritage ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
    CREATE POLICY "Users can view own family heritage"
        ON public.family_heritage
        FOR SELECT
        TO authenticated
        USING (auth.uid() = user_id);
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE POLICY "Users can insert own family heritage"
        ON public.family_heritage
        FOR INSERT
        TO authenticated
        WITH CHECK (auth.uid() = user_id);
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE POLICY "Users can update own family heritage"
        ON public.family_heritage
        FOR UPDATE
        TO authenticated
        USING (auth.uid() = user_id)
        WITH CHECK (auth.uid() = user_id);
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

CREATE INDEX IF NOT EXISTS idx_family_heritage_user_id ON public.family_heritage (user_id);
CREATE INDEX IF NOT EXISTS idx_family_heritage_profile_id ON public.family_heritage (profile_id);

-- Seed example data
INSERT INTO public.family_heritage (user_id, profile_id, primary_psychological_pattern, core_family_nucleus, major_gifts, liberation_challenge, personal_mission, family_mission, social_mission, fundamental_mission)
VALUES
    (NULL, 'example-1',
     'Patrón del Salvador / Rescatador',
     'Núcleo familiar marcado por la sobreprotección materna y la ausencia emocional del padre. Se repite un patrón de cuidar a otros para sentirse valioso.',
     ARRAY['Empatía profunda y sanación emocional', 'Capacidad de mediación en conflictos', 'Intuición espiritual desarrollada', 'Talento para la comunicación sanadora'],
     'Liberarse del mandato inconsciente de "salvar a todos" para poder salvarse a sí mismo. Romper con la creencia de que su valor depende de lo que da a otros.',
     'Sanar la herida de abandono propia para poder acompañar a otros desde la plenitud, no desde la carencia.',
     'Restaurar los vínculos familiares desde la comprensión transgeneracional, honrando a los ancestros sin cargar con sus deudas.',
     'Crear comunidades de apoyo donde el cuidado mutuo reemplace el sacrificio unilateral. Ser puente entre el dolor ajeno y la sanación colectiva.',
     'Encarnar el equilibrio entre el dar y el recibir. Recordar que su misión más alta es ser un canal de luz consciente, no un salvador agotado.')
ON CONFLICT (id) DO NOTHING;
