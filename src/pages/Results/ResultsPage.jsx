import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import useNumerologyStore from '../../store/useNumerologyStore';
import ResultsTabs from '../../components/results/ResultsTabs';
import { computeFullProfile } from '../../features/numerology/services/numerologyService';

export default function ResultsPage() {
  const navigate = useNavigate();
  const { fullName, birthdate, results, calculate } = useNumerologyStore();

  useEffect(() => {
    if (!fullName || !birthdate) {
      navigate('/', { replace: true });
      return;
    }
    if (!results) {
      calculate();
    }
  }, []);

  const profile = useMemo(() => {
    if (!fullName || !birthdate) return null;
    try {
      return computeFullProfile(fullName, birthdate);
    } catch {
      return null;
    }
  }, [fullName, birthdate]);

  if (!profile) {
    return (
      <div className="loading-state">
        <Loader2 size={32} className="spin" style={{ color: 'var(--color-primary-light)', margin: '0 auto 16px' }} />
        <p>Cargando tu perfil numerológico...</p>
      </div>
    );
  }

  return (
    <div className="content-grid single">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="glass-card" style={{ marginBottom: 20 }}>
          <div className="card-header" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}>
            <h2 className="section-title" style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
              <User size={22} className="icon" />
              {profile.results.name}
            </h2>
            <button className="btn-secondary" type="button" onClick={() => navigate('/')} style={{ flexShrink: 0 }}>
              <ArrowLeft size={16} /> Nueva Consulta
            </button>
          </div>
        </div>

        <ResultsTabs
          profile={profile}
          fullName={fullName}
          birthdate={birthdate}
        />
      </motion.div>
    </div>
  );
}
