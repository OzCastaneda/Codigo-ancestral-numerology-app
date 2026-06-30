import { ensureClient } from '../lib/supabase';

const uploadedPDFs = new Map();
const CACHE_DURATION = 60 * 60 * 1000;
const CLEANUP_INTERVAL = 30 * 60 * 1000;

async function hashBlob(blob) {
  const buf = await blob.arrayBuffer();
  const hashBuf = await crypto.subtle.digest('SHA-256', buf);
  const hashArr = Array.from(new Uint8Array(hashBuf));
  return hashArr.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export function clearPDFCache() {
  const now = Date.now();
  for (const [key, entry] of uploadedPDFs) {
    if (now - entry.timestamp > CACHE_DURATION) {
      uploadedPDFs.delete(key);
    }
  }
}

let cleanupTimer = null;

function startCleanup() {
  if (cleanupTimer) return;
  cleanupTimer = setInterval(clearPDFCache, CLEANUP_INTERVAL);
}

export async function uploadPDF(blob, fileName) {
  startCleanup();

  const hash = await hashBlob(blob);
  const cached = uploadedPDFs.get(hash);

  if (cached && (Date.now() - cached.timestamp) < CACHE_DURATION) {
    return { path: cached.path, publicUrl: cached.publicUrl, cached: true };
  }

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

  uploadedPDFs.set(hash, { path, publicUrl, timestamp: Date.now() });

  return { path, publicUrl };
}
