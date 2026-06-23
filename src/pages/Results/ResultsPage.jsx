import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Loader2, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import useNumerologyStore from '../../store/useNumerologyStore';
import ResultsTabs from '../../components/results/ResultsTabs';
import { computeFullProfile } from '../../features/numerology/services/numerologyService';
import { getKabbalisticSign, ZODIAC_COLORS } from '../../data/astrologiaKabalisticaData';

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

  const kabSign = getKabbalisticSign(birthdate);
  const signColor = kabSign ? ZODIAC_COLORS[kabSign.signo] : null;

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
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <User size={22} className="icon" />
              <div>
                <h2 className="section-title" style={{ margin: 0 }}>
                  {profile.results.name}
                </h2>
                {kabSign && (
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 5,
                    marginTop: 3,
                    fontSize: '0.78rem',
                    color: 'var(--color-text-muted)',
                    fontWeight: 500,
                  }}>
                    <Star size={12} style={{ color: signColor }} />
                    <span style={{ color: signColor, fontWeight: 600 }}>{kabSign.signo}</span>
                    <span>· Mes de {kabSign.mesHebreo} · {kabSign.planeta}</span>
                  </span>
                )}
              </div>
            </div>
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
