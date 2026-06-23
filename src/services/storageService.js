import { ensureClient } from '../lib/supabase';

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
