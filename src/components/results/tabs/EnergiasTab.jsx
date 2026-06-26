import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Compass, Moon, Target, Shield, BookOpen, Calendar } from 'lucide-react';
import { getKabbalisticSign, getTikunSign } from '../../../data/astrologiaKabalisticaData';
import ResumenAstrologico from './astrology/ResumenAstrologico';
import TuTikunSection from './astrology/TuTikunSection';
import VidaAnteriorSection from './astrology/VidaAnteriorSection';
import TareaEspiritualSection from './astrology/TareaEspiritualSection';
import DesafiosSolucionesSection from './astrology/DesafiosSolucionesSection';
import LetrasHebreasSection from './astrology/LetrasHebreasSection';
import PeriodosAnoSection from './astrology/PeriodosAnoSection';

const TABS = [
  { id: 'resumen', label: 'Resumen Astrológico', icon: LayoutDashboard },
  { id: 'tikun', label: 'Tu Tikun', icon: Compass },
  { id: 'vida-anterior', label: 'Vida Anterior', icon: Moon },
  { id: 'tarea-espiritual', label: 'Tarea Espiritual', icon: Target },
  { id: 'desafios', label: 'Desafíos y Soluciones', icon: Shield },
  { id: 'letras', label: 'Letras Hebreas', icon: BookOpen },
  { id: 'periodos', label: 'Períodos del Año', icon: Calendar },
];

export default function EnergiasTab({ profile, birthdate }) {
  const userSign = getKabbalisticSign(birthdate);
  const tikunSign = getTikunSign(birthdate);
  const [activeTab, setActiveTab] = useState('resumen');

  const renderSection = () => {
    switch (activeTab) {
      case 'resumen':
        return <ResumenAstrologico userSign={userSign} tikunSign={tikunSign} birthdate={birthdate} />;
      case 'tikun':
        return <TuTikunSection tikunSign={tikunSign} userSign={userSign} />;
      case 'vida-anterior':
        return <VidaAnteriorSection userSign={userSign} />;
      case 'tarea-espiritual':
        return <TareaEspiritualSection tikunSign={tikunSign} />;
      case 'desafios':
        return <DesafiosSolucionesSection tikunSign={tikunSign} />;
      case 'letras':
        return <LetrasHebreasSection tikunSign={tikunSign} userSign={userSign} />;
      case 'periodos':
        return <PeriodosAnoSection tikunSign={tikunSign} userSign={userSign} birthdate={birthdate} />;
      default:
        return null;
    }
  };

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
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {tikunSign ? renderSection() : (
              <div className="astro-empty">
                <p>No se pudo determinar tu Tikun. Verifica tu fecha de nacimiento.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
