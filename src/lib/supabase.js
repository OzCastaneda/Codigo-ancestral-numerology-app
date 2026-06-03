import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || supabaseUrl === 'TU_SUPABASE_URL') {
  console.warn(
    'Supabase URL no configurada. Las funciones de autenticación no estarán disponibles. ' +
    'Crea un archivo .env con VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY'
  );
}

if (!supabaseAnonKey || supabaseAnonKey === 'TU_SUPABASE_ANON_KEY') {
  console.warn(
    'Supabase Anon Key no configurada. Las funciones de autenticación no estarán disponibles. ' +
    'Crea un archivo .env con VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY'
  );
}

const isConfigured = supabaseUrl && supabaseUrl !== 'TU_SUPABASE_URL' &&
  supabaseAnonKey && supabaseAnonKey !== 'TU_SUPABASE_ANON_KEY';

export const supabase = isConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
