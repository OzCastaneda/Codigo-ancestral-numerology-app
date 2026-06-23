-- Create numerology_reports table
CREATE TABLE IF NOT EXISTS public.numerology_reports (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name text NOT NULL,
    birth_date text,
    destiny_number integer,
    soul_number integer,
    personality_number integer,
    karmic_number integer,
    pdf_url text,
    report_data jsonb,
    created_at timestamp with time zone DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.numerology_reports ENABLE ROW LEVEL SECURITY;

-- Create policies idempotently using exception handling
DO $$ BEGIN
    CREATE POLICY "Users can view own reports"
        ON public.numerology_reports
        FOR SELECT
        TO authenticated
        USING (auth.uid() = user_id);
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE POLICY "Users can insert own reports"
        ON public.numerology_reports
        FOR INSERT
        TO authenticated
        WITH CHECK (auth.uid() = user_id);
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE POLICY "Users can update own reports"
        ON public.numerology_reports
        FOR UPDATE
        TO authenticated
        USING (auth.uid() = user_id)
        WITH CHECK (auth.uid() = user_id);
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE POLICY "Users can delete own reports"
        ON public.numerology_reports
        FOR DELETE
        TO authenticated
        USING (auth.uid() = user_id);
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_numerology_reports_user_id
    ON public.numerology_reports (user_id);

CREATE INDEX IF NOT EXISTS idx_numerology_reports_created_at
    ON public.numerology_reports (created_at DESC);
