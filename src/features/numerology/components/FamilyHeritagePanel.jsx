import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Gift, Unlock, Target, Users, Globe, Star, Sparkles } from 'lucide-react';
import { computeFamilyHeritage } from '../services/familyHeritageService';

const MISSION_ITEMS = [
  { key: 'personal_mission', label: 'Misión Personal', icon: Target, color: '#3B82F6', desc: 'Tu evolución individual y sanación interior' },
  { key: 'family_mission', label: 'Misión Familiar', icon: Users, color: '#8B5CF6', desc: 'Tu rol en el árbol genealógico' },
  { key: 'social_mission', label: 'Misión Social', icon: Globe, color: '#06B6D4', desc: 'Tu contribución a la comunidad' },
  { key: 'fundamental_mission', label: 'Misión Fundamental', icon: Star, color: '#F59E0B', desc: 'Tu propósito esencial de vida' },
];

function SectionHeader({ icon: Icon, title, color, subtitle }) {
  return (
    <div className="fh-section-header" style={{ borderLeftColor: color }}>
      <div className="fh-section-icon" style={{ background: `${color}15`, color }}>
        <Icon size={20} />
      </div>
      <div>
        <h3 className="fh-section-title">{title}</h3>
        {subtitle && <p className="fh-section-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}

function CoreNucleus({ data }) {
  return (
    <motion.section
      className="fh-section fh-nucleus"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <SectionHeader icon={Heart} title="Núcleo Central Familiar" color="#8B5CF6" subtitle="La matriz emocional de tu sistema familiar" />
      <p className="fh-text">{data.core_family_nucleus}</p>
    </motion.section>
  );
}

function PsychologicalPattern({ data }) {
  return (
    <motion.section
      className="fh-section fh-pattern"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.1 }}
    >
      <SectionHeader icon={Brain} title="Patrón Psicológico Primario" color="#DC143C" subtitle="El rol inconsciente que heredaste y repites" />
      <div className="fh-pattern-badge">{data.primary_psychological_pattern}</div>
      <p className="fh-text fh-text-muted">
        Este patrón opera desde lo inconsciente, moldeando tus relaciones, decisiones y forma de vincularte. Reconocerlo es el primer paso para trascenderlo.
      </p>
    </motion.section>
  );
}

function MajorGifts({ gifts }) {
  return (
    <motion.section
      className="fh-section fh-gifts"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.2 }}
    >
      <SectionHeader icon={Gift} title="Dones Mayores" color="#FCD34D" subtitle="Talentos heredados que están listos para desplegarse" />
      <div className="fh-gifts-grid">
        {gifts.map((gift, i) => (
          <motion.div
            key={i}
            className="fh-gift-card"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.25 + i * 0.08 }}
          >
            <Sparkles size={16} className="fh-gift-icon" />
            <span>{gift}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function LiberationChallenge({ data }) {
  return (
    <motion.section
      className="fh-section fh-liberation"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.3 }}
    >
      <SectionHeader icon={Unlock} title="Desafío de Liberación" color="#F97316" subtitle="El nudo kármico que disolver cambia todo" />
      <p className="fh-text">{data.liberation_challenge}</p>
    </motion.section>
  );
}

function Missions({ data }) {
  return (
    <motion.section
      className="fh-section fh-missions"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.4 }}
    >
      <SectionHeader icon={Target} title="Las 4 Misiones" color="#3B82F6" subtitle="Los 4 niveles de propósito que dan dirección a tu vida" />
      <div className="fh-missions-grid">
        {MISSION_ITEMS.map(({ key, label, icon: Icon, color, desc }, i) => (
          <motion.div
            key={key}
            className="fh-mission-card"
            style={{ borderColor: `${color}25` }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.45 + i * 0.08 }}
          >
            <div className="fh-mission-header">
              <div className="fh-mission-icon" style={{ background: `${color}12`, color }}>
                <Icon size={18} />
              </div>
              <div>
                <h4 className="fh-mission-title" style={{ color }}>{label}</h4>
                <span className="fh-mission-desc">{desc}</span>
              </div>
            </div>
            <p className="fh-text">{data[key]}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default function FamilyHeritagePanel({ results }) {
  const heritage = useMemo(() => computeFamilyHeritage(results), [results]);

  if (!heritage) return null;

  return (
    <div className="tab-section">
      <div className="tab-section-header">
        <h2 className="tab-section-title">Herencias & Misiones</h2>
        <p className="tab-section-desc">
          Los patrones familiares, dones heredados y las 4 misiones que dan forma a tu propósito.
        </p>
      </div>

      <div className="fh-container">
        <CoreNucleus data={heritage} />
        <PsychologicalPattern data={heritage} />
        <MajorGifts gifts={heritage.major_gifts || []} />
        <LiberationChallenge data={heritage} />
        <Missions data={heritage} />
      </div>
    </div>
  );
}
