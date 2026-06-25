import { createClient } from '@supabase/supabase-js';

let supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
let supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const IS_DEV = import.meta.env.DEV;

function checkVars() {
  const issues = [];
  if (!supabaseUrl || supabaseUrl === 'TU_SUPABASE_URL') issues.push('VITE_SUPABASE_URL');
  if (!supabaseAnonKey || supabaseAnonKey === 'TU_SUPABASE_ANON_KEY') issues.push('VITE_SUPABASE_ANON_KEY');
  return issues;
}

function warnVars() {
  const missing = checkVars();
  if (missing.length === 0) return;
  const msg =
    'Supabase no está completamente configurado. Variables faltantes: ' + missing.join(', ') + '. ' +
    'Las funciones de autenticación, guardado de reportes y subida de PDF no estarán disponibles. ' +
    'Crea un archivo .env con ' + missing.join(' y ') + '. La descarga de PDF funcionará igualmente sin conexión a Supabase.';
  if (IS_DEV) console.warn(msg);
}

warnVars();

const isConfigured = checkVars().length === 0;

export const supabase = isConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export function ensureClient() {
  if (!supabase) {
    const missing = checkVars();
    throw new Error(
      'Supabase no está configurado. Variables faltantes: ' + (missing.length ? missing.join(', ') : 'desconocidas') + '. ' +
      'Verifica la configuración en Vercel (Settings > Environment Variables) y haz un nuevo deploy. ' +
      'La descarga local del PDF funciona sin conexión a Supabase.'
    );
  }
  return supabase;
}
