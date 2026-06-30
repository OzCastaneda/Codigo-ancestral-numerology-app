import { useState, useCallback, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, BookOpen, BarChart3, TreePine, Globe, FileText, Loader2, Heart, Circle, Calendar } from 'lucide-react';
import ErrorBoundary from '../layout/ErrorBoundary';

const ResumenTab = lazy(() => import('./tabs/ResumenTab'));
const InterpretacionesTab = lazy(() => import('./tabs/InterpretacionesTab'));
const GraficasTab = lazy(() => import('./tabs/GraficasTab'));
const ArbolTab = lazy(() => import('./tabs/ArbolTab'));
const EnergiasTab = lazy(() => import('./tabs/EnergiasTab'));
const PDFTab = lazy(() => import('./tabs/PDFTab'));
const HerenciasTab = lazy(() => import('./tabs/HerenciasTab'));
const EsquemaTab = lazy(() => import('./tabs/EsquemaTab'));
const TransitosTab = lazy(() => import('./tabs/TransitosTab'));

const TABS = [
  { id: 'resumen', label: 'Resumen', icon: LayoutDashboard },
  { id: 'interpretaciones', label: 'Interpretaciones', icon: BookOpen },
  { id: 'graficas', label: 'Gráficas', icon: BarChart3 },
  { id: 'arbol', label: 'Árbol Cabalístico', icon: TreePine },
  { id: 'energias', label: 'Astrología Cabalística', icon: Globe },
  { id: 'transitos', label: 'Ciclos', icon: Calendar },
  { id: 'esquema', label: 'Esquema', icon: Circle },
  { id: 'herencias', label: 'Herencias', icon: Heart },
  { id: 'pdf', label: 'PDF', icon: FileText },
];

const TAB_COMPONENTS = {
  resumen: ResumenTab,
  interpretaciones: InterpretacionesTab,
  graficas: GraficasTab,
  arbol: ArbolTab,
  energias: EnergiasTab,
  transitos: TransitosTab,
  esquema: EsquemaTab,
  herencias: HerenciasTab,
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
  const sex = profile?.sex;
  const [activeTab, setActiveTab] = useState('resumen');

  const handleTabChange = useCallback((id) => {
    setActiveTab(id);
  }, []);

  const ActiveComponent = TAB_COMPONENTS[activeTab];

  return (
    <div className="results-tabs">
      <nav className="results-tabs-nav" role="tablist">
        <div className="results-tabs-list flex-nowrap overflow-x-auto gap-1 px-2 py-2 md:gap-2 md:px-0 md:py-0 md:flex-wrap md:overflow-visible">
          {TABS.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                className={`results-tab-btn flex-shrink-0 min-w-[44px] min-h-[44px] md:min-w-0 md:min-h-0 ${isActive ? 'active' : ''}`}
                role="tab"
                aria-selected={isActive}
                onClick={() => handleTabChange(tab.id)}
              >
                <TabIcon size={18} />
                <span className="hidden sm:inline">{tab.label}</span>
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
            <ErrorBoundary key={activeTab}>
              <Suspense fallback={<TabFallback />}>
                <ActiveComponent
                  profile={profile}
                  sex={sex}
                  fullName={fullName}
                  birthdate={birthdate}
                />
              </Suspense>
            </ErrorBoundary>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
