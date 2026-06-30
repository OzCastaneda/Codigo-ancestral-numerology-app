import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, User, History, Sparkles, Eye, Trash2, AlertTriangle, X, Loader2, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { deleteReport } from '../../services/reportService';
import { useGetUserReports, useClearReportCache } from '../../store/useNumerologyStore';

function ConfirmModal({ open, title, message, onConfirm, onCancel, loading }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={onCancel}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
            padding: 20,
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'rgba(15, 20, 40, 0.96)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: 20,
              padding: 28,
              maxWidth: 420,
              width: '100%',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 20 }}>
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: 'rgba(239, 68, 68, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <AlertTriangle size={22} style={{ color: '#EF4444' }} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: '#F1F5F9', fontSize: '1.05rem', fontWeight: 700, margin: '0 0 6px' }}>
                  {title}
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  {message}
                </p>
              </div>
              <button
                onClick={onCancel}
                disabled={loading}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#64748B',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  padding: 4,
                  flexShrink: 0,
                  opacity: loading ? 0.4 : 1,
                }}
                aria-label="Cerrar"
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
              <button
                onClick={onCancel}
                disabled={loading}
                style={{
                  padding: '10px 20px',
                  borderRadius: 10,
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.04)',
                  color: '#94A3B8',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.5 : 1,
                }}
              >
                Cancelar
              </button>
              <button
                onClick={onConfirm}
                disabled={loading}
                style={{
                  padding: '10px 20px',
                  borderRadius: 10,
                  border: 'none',
                  background: loading ? 'rgba(239,68,68,0.3)' : '#EF4444',
                  color: '#fff',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading && <Loader2 size={16} className="spin" />}
                {loading ? 'Eliminando...' : 'Eliminar'}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);
  const [reports, setReports] = useState([]);
  const [totalReports, setTotalReports] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loadingReports, setLoadingReports] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const getUserReports = useGetUserReports();
  const clearReportCache = useClearReportCache();

  const loadReports = useCallback(async (page, forceRefresh) => {
    if (!user) return;
    setLoadingReports(true);
    try {
      if (forceRefresh) clearReportCache();
      const result = await getUserReports(user.id, page, 10);
      setReports(result.reports);
      setTotalReports(result.total);
      setCurrentPage(result.page);
      setHasMore(result.hasMore);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingReports(false);
    }
  }, [user, getUserReports, clearReportCache]);

  useEffect(() => {
    loadReports(1);
  }, [loadReports]);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await logout();
      navigate('/');
    } catch {
      setLoggingOut(false);
    }
  };

  const handleDeleteClick = (report) => {
    setDeleteTarget(report);
  };

  const handleDeleteConfirm = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await deleteReport(deleteTarget.id);
      setReports((prev) => prev.filter((r) => r.id !== deleteTarget.id));
      setDeleteTarget(null);
    } catch (error) {
      console.error('Error deleting report:', error);
    } finally {
      setDeleting(false);
    }
  };

  const handleDeleteCancel = () => {
    if (deleting) return;
    setDeleteTarget(null);
  };

  return (
    <>
      <ConfirmModal
        open={!!deleteTarget}
        title="Eliminar reporte"
        message="¿Estás seguro de eliminar este reporte? Esta acción no se puede deshacer."
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
        loading={deleting}
      />

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
                <button
                  onClick={() => loadReports(1, true)}
                  disabled={loadingReports}
                  style={{
                    marginLeft: 'auto',
                    background: 'none',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 8,
                    padding: '6px 12px',
                    color: '#94A3B8',
                    cursor: loadingReports ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: '0.8rem',
                    opacity: loadingReports ? 0.5 : 1,
                  }}
                  title="Actualizar reportes"
                >
                  {loadingReports ? <Loader2 size={14} className="spin" /> : <RefreshCw size={14} />}
                  {loadingReports ? 'Cargando...' : 'Actualizar'}
                </button>
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
                        <div className="dash-report-actions">
                          <button
                            onClick={() => navigate(`/report/${report.id}`)}
                            className="dash-report-btn"
                            title="Ver Reporte"
                          >
                            <Eye size={18} />
                            <span>Ver Reporte</span>
                          </button>
                          <button
                            onClick={() => handleDeleteClick(report)}
                            className="dash-report-delete-btn"
                            title="Eliminar Reporte"
                            disabled={deleting && deleteTarget?.id === report.id}
                          >
                            {deleting && deleteTarget?.id === report.id ? (
                              <Loader2 size={16} className="spin" />
                            ) : (
                              <Trash2 size={16} />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {totalReports > 10 && (
                <div className="dash-pagination">
                  <button
                    onClick={() => loadReports(currentPage - 1)}
                    disabled={currentPage === 1 || loadingReports}
                    className="dash-page-btn"
                  >
                    <ChevronLeft size={16} />
                    Anterior
                  </button>
                  <span className="dash-page-info">
                    Página {currentPage} de {Math.ceil(totalReports / 10)}
                  </span>
                  <button
                    onClick={() => loadReports(currentPage + 1)}
                    disabled={!hasMore || loadingReports}
                    className="dash-page-btn"
                  >
                    Siguiente
                    <ChevronRight size={16} />
                  </button>
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
    </>
  );
}
