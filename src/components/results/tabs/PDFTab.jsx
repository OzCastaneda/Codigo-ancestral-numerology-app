import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Loader2, CheckCircle, Eye, Sparkles, FileDown, AlertCircle } from 'lucide-react';
import { pdf } from '@react-pdf/renderer';
import NumerologyReport from '../../../pdf/NumerologyReport';
import { getReportFileName } from '../../../pdf/utils/helpers';
import { ensureClient } from '../../../lib/supabase';
import { uploadPDF } from '../../../services/storageService';
import { updateReportPDF } from '../../../services/reportService';
import useNumerologyStore from '../../../store/useNumerologyStore';

export default function PDFTab({ profile, fullName, birthdate }) {
  console.log('COMPONENT MOUNTED');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleDownload = async () => {
    console.log('DOWNLOAD FLOW STARTED');
    if (loading) return;
    setLoading(true);
    setSuccess(false);
    setError(null);
    try {
      console.log('Starting PDF generation');
      const blob = await pdf(
        <NumerologyReport profile={profile} fullName={fullName} birthdate={birthdate} />
      ).toBlob();
      console.log('PDF Blob created');
      console.log('Blob size:', blob.size);

      const client = ensureClient();
      const { data: { session } } = await client.auth.getSession();
      console.log('Current session:', session);
      console.log('Current user:', session?.user);

      console.log('Uploading PDF to Supabase...');
      console.log('Filename:', getReportFileName(fullName));
      try {
        const uploadResult = await uploadPDF(blob, getReportFileName(fullName));
        console.log('Upload result:', uploadResult);

        const reportId = useNumerologyStore.getState().reportId;
        if (reportId && uploadResult?.publicUrl) {
          await updateReportPDF(reportId, uploadResult.publicUrl);
          console.log('PDF URL saved to database');
        }
      } catch (uploadErr) {
        console.error('PDF upload error:', uploadErr);
      }

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = getReportFileName(fullName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error('PDF generation error:', err);
      setError('No se pudo generar el PDF. Por favor, intenta de nuevo más tarde.');
      setTimeout(() => setError(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  if (!profile) return null;

  return (
    <div className="tab-section">
      <div className="tab-section-header">
        <h2 className="tab-section-title">Reporte PDF</h2>
        <p className="tab-section-desc">
          Descarga un reporte completo de tu perfil numerológico en formato PDF
        </p>
      </div>

      <div className="pdf-section-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 24,
        marginTop: 8,
      }}>
        {error && (
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              gridColumn: '1 / -1',
              borderLeft: '4px solid #EF4444',
              background: 'rgba(239,68,68,0.08)',
            }}
          >
            <div className="card-body" style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '16px' }}>
              <AlertCircle size={20} style={{ color: '#EF4444', flexShrink: 0, marginTop: 2 }} />
              <div>
                <h4 style={{ color: '#EF4444', marginBottom: 4, fontWeight: 600 }}>Error al generar PDF</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', margin: 0 }}>
                  {error}
                </p>
              </div>
            </div>
          </motion.div>
        )}
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="card-body" style={{ textAlign: 'center', padding: '40px 28px' }}>
            <div style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: 'rgba(139,92,246,0.12)',
              border: '2px solid rgba(139,92,246,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              <FileText size={32} style={{ color: 'var(--color-primary-light)' }} />
            </div>

            <h3 style={{
              color: 'var(--color-text-primary)',
              fontSize: '1.1rem',
              fontWeight: 700,
              marginBottom: 8,
            }}>
              Reporte Numerológico
            </h3>

            <p style={{
              color: 'var(--color-text-muted)',
              fontSize: '0.85rem',
              lineHeight: 1.6,
              marginBottom: 20,
              maxWidth: 300,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
              Este reporte incluye todos tus números, interpretaciones detalladas, correspondencias cabalísticas y perfil astrológico en un documento profesional.
            </p>

            <div style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
              <motion.button
                className="btn-premium"
                onClick={handleDownload}
                disabled={loading}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? 'wait' : 'pointer',
                  minWidth: 200,
                }}
              >
                {loading ? (
                  <><Loader2 size={18} className="spin" style={{ marginRight: 8 }} /> Generando...</>
                ) : success ? (
                  <><CheckCircle size={18} style={{ marginRight: 8 }} /> ¡Descargado!</>
                ) : (
                  <><Download size={18} style={{ marginRight: 8 }} /> Descargar PDF</>
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="card-body" style={{ padding: '28px' }}>
            <h3 className="section-title" style={{ marginBottom: 16 }}>
              <Eye size={18} className="icon" />
              Contenido del Reporte
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: Sparkles, text: 'Portada con diseño premium', color: 'var(--color-primary-light)' },
                { icon: FileDown, text: 'Números principales: Destino, Alma, Personalidad y Misión', color: 'var(--color-accent)' },
                { icon: FileDown, text: 'Interpretaciones espirituales detalladas', color: '#34D399' },
                { icon: FileDown, text: 'Correspondencias cabalísticas por letra hebrea', color: '#FBBF24' },
                { icon: FileDown, text: 'Perfil astrológico cabalístico', color: '#F87171' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '8px 0',
                    borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  }}>
                    <Icon size={14} style={{ color: item.color, flexShrink: 0 }} />
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <div style={{
              marginTop: 20,
              padding: '10px 14px',
              background: 'rgba(16,185,129,0.06)',
              borderRadius: 8,
              border: '1px solid rgba(16,185,129,0.12)',
            }}>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', margin: 0, lineHeight: 1.5 }}>
                <strong style={{ color: '#34D399' }}>Formato:</strong> PDF profesional, listo para imprimir o compartir. El nombre del archivo incluirá tu nombre.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
