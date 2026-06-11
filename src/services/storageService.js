import { supabase } from '../lib/supabase';

function ensureClient() {
  if (!supabase) {
    throw new Error(
      'Supabase no está configurado. Define VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en tu .env'
    );
  }
  return supabase;
}

/**
 * Sube un archivo PDF al bucket "reports" en Supabase Storage.
 *
 * La ruta de almacenamiento es: {timestamp}-{fileName} dentro del bucket "reports".
 * Esto evita colisiones entre archivos con el mismo nombre.
 *
 * Después de la subida obtiene la URL pública del archivo
 * mediante getPublicUrl() para que pueda ser descargada o
 * visualizada desde cualquier lugar.
 */
export async function uploadPDF(blob, fileName) {
  const client = ensureClient();
  const timestamp = Date.now();
  const path = `${timestamp}-${fileName}`;

  const { error: uploadError } = await client
    .storage
    .from('reports')
    .upload(path, blob, {
      contentType: 'application/pdf',
      cacheControl: '3600',
    });

  if (uploadError) {
    console.error('Error uploading PDF:', uploadError);
    throw uploadError;
  }

  const { data: { publicUrl } } = client
    .storage
    .from('reports')
    .getPublicUrl(path);

  return { path, publicUrl };
}
