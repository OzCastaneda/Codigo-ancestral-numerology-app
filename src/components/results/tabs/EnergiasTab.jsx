import { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Compass, Moon, Target, Shield, BookOpen, Calendar, Loader2 } from 'lucide-react';
import { getKabbalisticSign, getTikunSign } from '../../../data/astrologiaKabalisticaData';

const LAZY_TABS = {
  resumen: lazy(() => import('./astrology/ResumenAstrologico')),
  tikun: lazy(() => import('./astrology/TuTikunSection')),
  'vida-anterior': lazy(() => import('./astrology/VidaAnteriorSection')),
  'tarea-espiritual': lazy(() => import('./astrology/TareaEspiritualSection')),
  desafios: lazy(() => import('./astrology/DesafiosSolucionesSection')),
  letras: lazy(() => import('./astrology/LetrasHebreasSection')),
  periodos: lazy(() => import('./astrology/PeriodosAnoSection')),
};

const TABS = [
  { id: 'resumen', label: 'Resumen Astrológico', icon: LayoutDashboard },
  { id: 'tikun', label: 'Tu Tikun', icon: Compass },
  { id: 'vida-anterior', label: 'Vida Anterior', icon: Moon },
  { id: 'tarea-espiritual', label: 'Tarea Espiritual', icon: Target },
  { id: 'desafios', label: 'Desafíos y Soluciones', icon: Shield },
  { id: 'letras', label: 'Letras Hebreas', icon: BookOpen },
  { id: 'periodos', label: 'Períodos del Año', icon: Calendar },
];

function SectionFallback() {
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      padding: '60px 0', gap: 12, color: 'var(--color-text-muted)',
    }}>
      <Loader2 size={22} className="spin" />
      <span>Cargando sección...</span>
    </div>
  );
}

export default function EnergiasTab({ profile, birthdate }) {
  const userSign = getKabbalisticSign(birthdate);
  const tikunSign = getTikunSign(birthdate);
  const [activeTab, setActiveTab] = useState('resumen');

  const ActiveComponent = LAZY_TABS[activeTab];

  return (
    <div className="astro-layout">
      {/* Vertical Tab Navigation */}
      <nav className="astro-nav">
        <div className="astro-nav-header">
          <h3 className="astro-nav-title">Astrología Cabalística</h3>
          <p className="astro-nav-subtitle">Rav Philip S. Berg</p>
        </div>
        <div className="astro-nav-list">
          {TABS.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                className={`astro-nav-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <TabIcon size={16} />
                <span>{tab.label}</span>
                {isActive && (
                  <motion.div className="astro-nav-indicator" layoutId="astro-indicator" />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile dropdown selector */}
      <div className="astro-mobile-select">
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="astro-mobile-select-input"
        >
          {TABS.map((tab) => (
            <option key={tab.id} value={tab.id}>{tab.label}</option>
          ))}
        </select>
      </div>

      {/* Content Area */}
      <div className="astro-content">
        {tikunSign ? (
          <Suspense fallback={<SectionFallback />}>
            {ActiveComponent && (
              <ActiveComponent
                key={activeTab}
                userSign={userSign}
                tikunSign={tikunSign}
                birthdate={birthdate}
              />
            )}
          </Suspense>
        ) : (
          <div className="astro-empty">
            <p>No se pudo determinar tu Tikun. Verifica tu fecha de nacimiento.</p>
          </div>
        )}
      </div>
    </div>
  );
}
