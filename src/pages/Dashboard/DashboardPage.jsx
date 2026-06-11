import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, User, History, Sparkles, Eye } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { getUserReports } from '../../services/reportService';

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);
  const [reports, setReports] = useState([]);

  async function loadReports() {
    try {
      const data = await getUserReports(user.id);
      setReports(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (user) {
      loadReports();
    }
  }, [user]);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await logout();
      navigate('/');
    } catch {
      setLoggingOut(false);
    }
  };

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
          <div className="dashboard-header flex-col sm:flex-row gap-4 sm:gap-5">
            <div className="dashboard-avatar w-12 h-12 sm:w-14 sm:h-14">
              <User size={24} className="sm:size-8" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="dashboard-greeting text-lg sm:text-xl">
                Bienvenido, {user?.user_metadata?.full_name || 'Usuario'}
              </h1>
              <p className="dashboard-email text-sm sm:text-base">{user?.email}</p>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <History size={20} />
              <h2 className="text-base sm:text-lg">Historial Numerológico</h2>
            </div>
            {reports.length === 0 ? (
              <p className="dashboard-card-empty text-sm sm:text-base">
                Aún no tienes reportes guardados. Realiza tu primer cálculo para verlo aquí.
              </p>
            ) : (
              <div className="dash-reports-list">
                {reports.map((report) => (
                  <div key={report.id} className="dash-report-item">
                    <div className="dash-report-row">
                      <div className="dash-report-info">
                        <h3 className="dash-report-name text-lg sm:text-xl">
                          {report.full_name}
                        </h3>
                        <p className="text-sm sm:text-base">Destino: {report.destiny_number}</p>
                        <p className="text-sm sm:text-base">Alma: {report.soul_number}</p>
                        <p className="text-sm sm:text-base">Personalidad: {report.personality_number}</p>
                        <p className="text-sm sm:text-base">Kármico: {report.karmic_number}</p>
                        <p className="dash-report-date text-xs sm:text-sm">
                          {new Date(report.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <button
                        onClick={() => navigate(`/report/${report.id}`)}
                        className="dash-report-btn"
                        title="Ver Reporte"
                      >
                        <Eye size={18} />
                        <span>Ver Reporte</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <Sparkles size={20} />
              <h2 className="text-base sm:text-lg">Próximamente</h2>
            </div>
            <ul className="dashboard-features">
              <li className="text-sm sm:text-base">Compara tu evolución numerológica mes a mes</li>
              <li className="text-sm sm:text-base">Compatibilidad con otras personas</li>
              <li className="text-sm sm:text-base">Reportes en PDF guardados en la nube</li>
            </ul>
          </div>

          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="dashboard-logout-btn w-full text-base min-h-[48px] sm:min-h-[44px]"
          >
            {loggingOut ? (
              <span className="auth-spinner" />
            ) : (
              <LogOut size={18} />
            )}
            <span>{loggingOut ? 'Cerrando sesión...' : 'Cerrar Sesión'}</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
