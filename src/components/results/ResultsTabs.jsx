import { useState, useCallback, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, BookOpen, BarChart3, TreePine, Zap, FileText, Loader2 } from 'lucide-react';

const ResumenTab = lazy(() => import('./tabs/ResumenTab'));
const InterpretacionesTab = lazy(() => import('./tabs/InterpretacionesTab'));
const GraficasTab = lazy(() => import('./tabs/GraficasTab'));
const ArbolTab = lazy(() => import('./tabs/ArbolTab'));
const EnergiasTab = lazy(() => import('./tabs/EnergiasTab'));
const PDFTab = lazy(() => import('./tabs/PDFTab'));

const TABS = [
  { id: 'resumen', label: 'Resumen', icon: LayoutDashboard },
  { id: 'interpretaciones', label: 'Interpretaciones', icon: BookOpen },
  { id: 'graficas', label: 'Gráficas', icon: BarChart3 },
  { id: 'arbol', label: 'Árbol Cabalístico', icon: TreePine },
  { id: 'energias', label: 'Energías', icon: Zap },
  { id: 'pdf', label: 'PDF', icon: FileText },
];

const TAB_COMPONENTS = {
  resumen: ResumenTab,
  interpretaciones: InterpretacionesTab,
  graficas: GraficasTab,
  arbol: ArbolTab,
  energias: EnergiasTab,
  pdf: PDFTab,
};

function TabFallback() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '80px 0',
      gap: 12,
      color: 'var(--color-text-muted)',
    }}>
      <Loader2 size={24} className="spin" />
      <span>Cargando sección...</span>
    </div>
  );
}

export default function ResultsTabs({ profile, fullName, birthdate }) {
  const [activeTab, setActiveTab] = useState('resumen');

  const handleTabChange = useCallback((id) => {
    setActiveTab(id);
  }, []);

  const ActiveComponent = TAB_COMPONENTS[activeTab];

  return (
    <div className="results-tabs">
      <nav className="results-tabs-nav" role="tablist">
        <div className="results-tabs-list">
          {TABS.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                className={`results-tab-btn ${isActive ? 'active' : ''}`}
                role="tab"
                aria-selected={isActive}
                onClick={() => handleTabChange(tab.id)}
              >
                <TabIcon size={16} />
                <span>{tab.label}</span>
                {isActive && (
                  <motion.div
                    className="results-tab-glow"
                    layoutId="tab-glow"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      <div className="results-tab-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <Suspense fallback={<TabFallback />}>
              <ActiveComponent
                profile={profile}
                fullName={fullName}
                birthdate={birthdate}
              />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
