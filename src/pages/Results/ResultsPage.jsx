import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Loader2, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useFullName, useBirthdate, useSex, useResults, useCalculate } from '../../store/useNumerologyStore';
import ResultsTabs from '../../components/results/ResultsTabs';
import ErrorBoundary from '../../components/layout/ErrorBoundary';
import { computeFullProfile } from '../../features/numerology/services/numerologyService';
import { getKabbalisticSign, ZODIAC_COLORS } from '../../data/astrologiaKabalisticaData';

function SidebarCard({ label, value, subtitle, accent }) {
  return (
    <div className="sidebar-card">
      <span className="sidebar-card-label">{label}</span>
      <span className={`sidebar-card-value ${accent ? `sidebar-accent-${accent}` : ''}`}>{value}</span>
      {subtitle && <span className="sidebar-card-subtitle">{subtitle}</span>}
    </div>
  );
}

function MiniNumberCard({ number, label, color }) {
  return (
    <div className="mini-number-card">
      <span className="mini-number-value" style={{ color: color || 'var(--color-primary-light)' }}>{number}</span>
      <span className="mini-number-label">{label}</span>
    </div>
  );
}

function SidebarHebrew({ sign }) {
  if (!sign) return null;

  return (
    <div className="sidebar-card sidebar-hebrew">
      <div className="sidebar-hebrew-header">
        <span className="sidebar-hebrew-letter">{sign.hebreo}</span>
        <div className="sidebar-hebrew-info">
          <strong className="sidebar-hebrew-sign">{sign.signo}</strong>
          <span className="sidebar-hebrew-meta">{sign.mesHebreo} · {sign.planeta}</span>
        </div>
      </div>
      <p className="sidebar-hebrew-desc">{sign.cualidad}</p>
    </div>
  );
}

function CycleCard({ birthdate }) {
  if (!birthdate) return null;

  const birthYear = new Date(birthdate).getFullYear();
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  const personalYear = ((birthYear + currentYear) % 9) || 9;

  const cycles = [
    { label: 'Edad', value: `${age} años` },
    { label: 'Año Personal', value: personalYear },
  ];

  return (
    <div className="sidebar-card sidebar-cycle">
      <span className="sidebar-card-label" style={{ marginBottom: 8 }}>Ciclo Actual</span>
      {cycles.map((c, i) => (
        <div key={i} className="sidebar-cycle-row">
          <span className="sidebar-cycle-label">{c.label}</span>
          <span className="sidebar-cycle-value">{c.value}</span>
        </div>
      ))}
    </div>
  );
}

export default function ResultsPage() {
  const navigate = useNavigate();
  const fullName = useFullName();
  const birthdate = useBirthdate();
  const sex = useSex();
  const results = useResults();
  const calculate = useCalculate();

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
      return computeFullProfile(fullName, birthdate, sex);
    } catch {
      return null;
    }
  }, [fullName, birthdate, sex]);

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

  const { results: nums } = profile;

  return (
    <div className="profile-layout">
      {/* ---- Left Sidebar ---- */}
      <aside className="profile-sidebar profile-sidebar-left">
        <div className="sidebar-sticky">
          {/* User identity */}
          <div className="sidebar-header-card">
            <div className="sidebar-avatar">
              <User size={22} />
            </div>
            <div className="sidebar-user-info">
              <h3 className="sidebar-user-name">{nums.name}</h3>
              <span className="sidebar-user-gender" style={{ color: sex === 'femenino' ? '#EC4899' : '#60A5FA' }}>
                {sex === 'femenino' ? 'Femenino' : 'Masculino'}
              </span>
              {kabSign && (
                <span className="sidebar-user-sign">
                  <Star size={10} style={{ color: signColor }} />
                  <span style={{ color: signColor }}>{kabSign.signo}</span>
                </span>
              )}
            </div>
          </div>

          {/* Key numbers */}
          <div className="sidebar-section">
            <h4 className="sidebar-section-title">Números Clave</h4>
            <div className="sidebar-numbers-grid">
              <MiniNumberCard number={nums.destiny} label="Destino" color="var(--color-primary-light)" />
              <MiniNumberCard number={nums.soul} label="Alma" color="var(--color-accent)" />
              <MiniNumberCard number={nums.personality} label="Personalidad" color="var(--color-secondary-light)" />
              <MiniNumberCard number={nums.mission} label="Misión" color="var(--color-crimson-light)" />
            </div>
          </div>

          {/* Hebrew sign */}
          <SidebarHebrew sign={kabSign} />

          {/* Cycle */}
          <CycleCard birthdate={birthdate} />
        </div>
      </aside>

      {/* ---- Main Content ---- */}
      <main className="profile-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <ErrorBoundary>
            <ResultsTabs
              profile={profile}
              fullName={fullName}
              birthdate={birthdate}
            />
          </ErrorBoundary>
        </motion.div>
      </main>

      {/* ---- Right Sidebar ---- */}
      <aside className="profile-sidebar profile-sidebar-right">
        <div className="sidebar-sticky">
          <SidebarCard label="Número de Expresión" value={nums.destiny} subtitle="Tu propósito de vida" />
          <SidebarCard label="Camino de Vida" value={nums.path} subtitle="Lecciones a aprender" accent="gold" />
          <SidebarCard label="Número del Alma" value={nums.soul} subtitle="Deseos internos" accent="fire" />
          <SidebarCard label="Número de Personalidad" value={nums.personality} subtitle="Cómo te perciben" accent="cyan" />

          <button className="btn-secondary sidebar-back-btn" type="button" onClick={() => navigate('/')}>
            <ArrowLeft size={16} /> Nueva Consulta
          </button>
        </div>
      </aside>
    </div>
  );
}
