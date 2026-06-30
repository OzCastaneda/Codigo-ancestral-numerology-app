import { motion } from 'framer-motion';
import { User, Brain, Moon, Compass, Shield } from 'lucide-react';

const ARCHETYPE_STYLES = {
  PADRE: {
    accent: '#3B82F6',
    accentLight: '#60A5FA',
    bg: 'rgba(59, 130, 246, 0.04)',
    border: 'rgba(59, 130, 246, 0.12)',
    borderHover: 'rgba(59, 130, 246, 0.25)',
    gradient: 'linear-gradient(135deg, #3B82F6, #1E40AF)',
    iconBg: 'rgba(59, 130, 246, 0.1)',
  },
  MADRE: {
    accent: '#EC4899',
    accentLight: '#F472B6',
    bg: 'rgba(236, 72, 153, 0.04)',
    border: 'rgba(236, 72, 153, 0.12)',
    borderHover: 'rgba(236, 72, 153, 0.25)',
    gradient: 'linear-gradient(135deg, #EC4899, #BE185D)',
    iconBg: 'rgba(236, 72, 153, 0.1)',
  },
};

function ArchetypeField({ label, text, color }) {
  if (!text) return null;
  return (
    <div className="pa-field">
      <span className="pa-field-label" style={{ color }}>{label}</span>
      <p className="pa-field-text">{text}</p>
    </div>
  );
}

export default function ParentalArchetypeCard({ archetype, index = 0 }) {
  if (!archetype) return null;

  const type = archetype.archetype_type;
  const styles = ARCHETYPE_STYLES[type] || ARCHETYPE_STYLES.PADRE;

  return (
    <motion.div
      className="pa-card"
      style={{
        borderColor: styles.border,
        background: styles.bg,
      }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.1 }}
    >
      <div className="pa-card-top" style={{ borderBottomColor: styles.border }}>
        <div className="pa-type-badge" style={{ background: styles.iconBg, color: styles.accent }}>
          {type === 'PADRE' ? <Shield size={16} /> : <User size={16} />}
          <span>{type === 'PADRE' ? 'Padre' : 'Madre'}</span>
        </div>
        <h3 className="pa-name" style={{ color: styles.accentLight }}>{archetype.name}</h3>
      </div>

      <div className="pa-body">
        <ArchetypeField
          label="Características"
          text={archetype.characteristics}
          color={styles.accent}
        />

        <div className="pa-field">
          <span className="pa-field-label" style={{ color: styles.accent }}>
            <Brain size={14} style={{ marginRight: 4, verticalAlign: 'middle' }} />
            Influencia Psicológica
          </span>
          <p className="pa-field-text">{archetype.psychological_influence}</p>
        </div>

        <div className="pa-field pa-shadow">
          <span className="pa-field-label" style={{ color: '#F87171' }}>
            <Moon size={14} style={{ marginRight: 4, verticalAlign: 'middle' }} />
            Sombra
          </span>
          <p className="pa-field-text">{archetype.shadow_aspect}</p>
        </div>

        <div className="pa-field pa-integration">
          <span className="pa-field-label" style={{ color: '#FCD34D' }}>
            <Compass size={14} style={{ marginRight: 4, verticalAlign: 'middle' }} />
            Camino de Integración
          </span>
          <p className="pa-field-text">{archetype.integration_path}</p>
        </div>
      </div>
    </motion.div>
  );
}
