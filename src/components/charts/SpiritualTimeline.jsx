import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { getNumberColor } from './chartConfig';
import { reduceToSingleDigit } from '../../features/numerology/engine/numerologyEngine';

const ITEMS = [
  { key: 'destiny', label: 'Destino', desc: 'Camino de vida' },
  { key: 'soul', label: 'Alma', desc: 'Motivación interna' },
  { key: 'personality', label: 'Personalidad', desc: 'Expresión externa' },
  { key: 'mission', label: 'Misión', desc: 'Propósito espiritual' },
];

function TimelineStep({ label, desc, value, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '14px 18px',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: 12,
        position: 'relative',
      }}
    >
      <div style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: `${color}20`,
        border: `2px solid ${color}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        fontFamily: 'var(--font-display)',
        fontSize: '1.1rem',
        fontWeight: 800,
        color,
      }}>
        {value}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ color: 'var(--color-text-primary)', fontSize: '0.95rem', fontWeight: 600, margin: 0 }}>
          {label}
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', margin: '2px 0 0' }}>
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function SpiritualTimeline({ results }) {
  const steps = useMemo(() => {
    if (!results) return [];
    return ITEMS.map(item => ({
      ...item,
      value: results[item.key] || 0,
      color: getNumberColor(results[item.key]),
    }));
  }, [results]);

  if (!results) return null;

  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="card-body">
        <h3 className="section-title">
          <Clock size={20} className="icon" />
          Línea Espiritual
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginBottom: 16, marginTop: -8 }}>
          Tus números fundamentales y su significado en el camino del alma
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {steps.map((step, i) => (
            <div key={step.key}>
              <TimelineStep {...step} index={i} />
              {i < steps.length - 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '2px 0' }}>
                  <ArrowRight size={14} style={{ color: 'var(--color-text-muted)', opacity: 0.3 }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
