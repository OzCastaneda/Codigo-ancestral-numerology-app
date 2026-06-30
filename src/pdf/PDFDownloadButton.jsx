import { useState, useCallback } from 'react';
import { pdf } from '@react-pdf/renderer';
import { FileText, Loader2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import NumerologyReport from './NumerologyReport';
import { getReportFileName } from './utils/helpers';
import { uploadPDF } from '../services/storageService';
import { ensureClient } from '../lib/supabase';

export default function PDFDownloadButton({ profile, fullName, birthdate, sex }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const fileName = getReportFileName(fullName);

  const handleDownload = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    setSuccess(false);

    try {
      console.log('Starting PDF generation');

      const blob = await pdf(
        <NumerologyReport
          profile={profile}
          fullName={fullName}
          birthdate={birthdate}
          sex={sex}
        />
      ).toBlob();

      console.log('PDF Blob created');
      console.log(blob);
      console.log('Blob size:', blob.size);

      console.log('Uploading PDF to Supabase...');
      console.log('Filename:', fileName);

      const client = ensureClient();
      const { data: { session } } = await client.auth.getSession();
      console.log('Current session:', session);
      console.log('Current user:', session?.user);

      try {
        const tempResult = await uploadPDF(blob, fileName);
        console.log('Upload result:', tempResult);
      } catch (uploadErr) {
        console.error('PDF upload error:', uploadErr);
      }

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error('PDF generation error:', err);
    } finally {
      setLoading(false);
    }
  }, [profile, fullName, birthdate, fileName, loading]);

  if (!profile) return null;

  return (
    <motion.button
      className="btn-secondary"
      type="button"
      onClick={handleDownload}
      disabled={loading}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: loading
          ? 'rgba(139, 92, 246, 0.15)'
          : success
            ? 'rgba(16, 185, 129, 0.15)'
            : 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(245, 158, 11, 0.1))',
        border: `1px solid ${
          success ? 'rgba(16, 185, 129, 0.3)' : 'rgba(139, 92, 246, 0.25)'
        }`,
        color: success
          ? 'var(--color-success)'
          : loading
            ? 'var(--color-text-muted)'
            : 'var(--color-primary-light)',
        cursor: loading ? 'wait' : 'pointer',
        minWidth: 200,
      }}
    >
      {loading ? (
        <><Loader2 size={16} className="spin" /> Generando PDF...</>
      ) : success ? (
        <><Sparkles size={16} /> ¡PDF Listo!</>
      ) : (
        <><FileText size={16} /> Descargar Reporte PDF</>
      )}
    </motion.button>
  );
}
