import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (import.meta.env.DEV) {
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
}

const isConfigured = supabaseUrl && supabaseUrl !== 'TU_SUPABASE_URL' &&
  supabaseAnonKey && supabaseAnonKey !== 'TU_SUPABASE_ANON_KEY';

export const supabase = isConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export function ensureClient() {
  if (!supabase) {
    throw new Error(
      'Supabase no está configurado. Las variables de entorno VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY ' +
      'no están definidas o contienen valores incorrectos. Verifica la configuración en Vercel.'
    );
  }
  return supabase;
}
