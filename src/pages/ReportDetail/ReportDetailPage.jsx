import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Calendar, Hash, User } from 'lucide-react';
import { getReportById } from '../../services/reportService';

export default function ReportDetailPage() {
  // useParams() obtiene los parámetros dinámicos de la URL definidos en la ruta.
  // El objeto retornado contiene una clave por cada segmento dinámico.
  // En este caso, la ruta es "/report/:id", por lo que useParams()
  // retorna { id: "<valor real>" } con el id extraído de la URL.
  const { id } = useParams();
  const [report, setReport] = useState(null);

  async function loadReport() {
    try {
      const data = await getReportById(id);
      setReport(data);
    } catch (error) {
      console.error('Error loading report:', error);
    }
  }

  useEffect(() => {
    if (id) {
      loadReport();
    }
  }, [id]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="content px-4 sm:px-6 md:px-8"
      style={{ paddingTop: '40px', paddingBottom: '40px' }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <FileText size={20} />
              <h2 className="text-base sm:text-lg">Reporte Numerológico</h2>
            </div>
            {!report ? (
              <p className="dashboard-card-empty text-sm sm:text-base">
                Cargando reporte...
              </p>
            ) : (
              <div className="dash-reports-list">
                <div className="dash-report-item">
                  <p style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <User size={16} style={{ opacity: 0.5, flexShrink: 0 }} />
                    <strong>{report.full_name}</strong>
                  </p>
                  <p style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                    <Calendar size={16} style={{ opacity: 0.5, flexShrink: 0 }} />
                    <span>Fecha de nacimiento: {report.birth_date}</span>
                  </p>
                  <p>Destino: {report.destiny_number}</p>
                  <p>Alma: {report.soul_number}</p>
                  <p>Personalidad: {report.personality_number}</p>
                  <p>Kármico: {report.karmic_number}</p>
                </div>
                <div className="dash-report-item" style={{ marginTop: 12 }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Hash size={16} style={{ opacity: 0.5, flexShrink: 0 }} />
                    <span className="text-sm sm:text-base" style={{ fontFamily: 'monospace', wordBreak: 'break-all' }}>
                      {id}
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
