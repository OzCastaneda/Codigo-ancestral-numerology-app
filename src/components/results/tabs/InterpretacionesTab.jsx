import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Heart, User, Star, Sun, Moon, Sparkles, ChevronDown } from 'lucide-react';
import { getInterpretations } from '../../../features/numerology/data/numerologyInterpretations';
import { getNumberColor } from '../../charts/chartConfig';

const CATEGORY_MAP = [
  { key: 'destiny', categoria: 'Destino', title: 'Número de Destino', icon: Compass, desc: 'Tu camino de vida y propósito existencial' },
  { key: 'soul', categoria: 'MotivacionAlma', title: 'Impulso del Alma', icon: Heart, desc: 'Tus deseos internos y motivaciones profundas' },
  { key: 'personality', categoria: 'PersonalidadExpresion', title: 'Personalidad / Expresión', icon: User, desc: 'Cómo te perciben los demás y tu imagen externa' },
  { key: 'mission', categoria: 'YoInternoKarmico', title: 'Yo Interno / Kármico', icon: Star, desc: 'Tu propósito esencial y aprendizaje kármico' },
];

function AccordionItem({ interpretation, title, icon: Icon, desc, num, defaultOpen }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = useCallback(() => setIsOpen(o => !o), []);

  const color = getNumberColor(num);

  if (!interpretation) return null;

  return (
    <motion.div
      className={`interpretation-accordion ${isOpen ? 'open' : ''}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: `1px solid ${isOpen ? `${color}25` : 'rgba(255,255,255,0.05)'}`,
        borderRadius: 12,
        overflow: 'hidden',
      }}
    >
      <button
        className="accordion-header"
        onClick={toggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          padding: '16px 20px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--color-text-primary)',
          fontFamily: 'inherit',
          fontSize: '1rem',
          textAlign: 'left',
        }}
      >
        <div style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          background: `${color}15`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <Icon size={17} style={{ color }} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontWeight: 600 }}>{title}</span>
            <span style={{
              background: `${color}20`,
              color,
              borderRadius: 6,
              padding: '2px 10px',
              fontSize: '0.8rem',
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
            }}>
              {num}
            </span>
          </div>
          <span style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', marginTop: 2, display: 'block' }}>
            {desc}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ color: 'var(--color-text-muted)' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 20px 20px' }}>
              <div className="interpretation-lists" style={{ marginTop: 8 }}>
                <p className="interpretation-meaning" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: 16 }}>
                  {interpretation.significado}
                </p>

                <div style={{ display: 'grid', gap: 10 }}>
                  <div className="interpretation-list-block interpretation-strengths" style={{
                    background: 'rgba(16,185,129,0.06)',
                    border: '1px solid rgba(16,185,129,0.12)',
                    borderRadius: 10,
                    padding: '14px 16px',
                  }}>
                    <h4 style={{ color: '#34D399', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                      <Sun size={14} /> Fortalezas
                    </h4>
                    <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: 1.7 }}>
                      {interpretation.fortalezas.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>

                  <div className="interpretation-list-block interpretation-weaknesses" style={{
                    background: 'rgba(239,68,68,0.06)',
                    border: '1px solid rgba(239,68,68,0.12)',
                    borderRadius: 10,
                    padding: '14px 16px',
                  }}>
                    <h4 style={{ color: '#F87171', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                      <Moon size={14} /> Debilidades
                    </h4>
                    <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: 1.7 }}>
                      {interpretation.debilidades.map((d, i) => <li key={i}>{d}</li>)}
                    </ul>
                  </div>

                  <div className="interpretation-list-block interpretation-karmic" style={{
                    background: 'rgba(245,158,11,0.06)',
                    border: '1px solid rgba(245,158,11,0.12)',
                    borderRadius: 10,
                    padding: '14px 16px',
                  }}>
                    <h4 style={{ color: '#FBBF24', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                      <Sparkles size={14} /> Aprendizajes Kármicos
                    </h4>
                    <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: 1.7 }}>
                      {interpretation.aprendizajesKarmicos.map((a, i) => <li key={i}>{a}</li>)}
                    </ul>
                  </div>
                </div>

                <div style={{
                  marginTop: 14,
                  padding: '10px 14px',
                  background: 'rgba(139,92,246,0.06)',
                  borderRadius: 8,
                  border: '1px solid rgba(139,92,246,0.1)',
                }}>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.82rem', margin: 0 }}>
                    <strong style={{ color: 'var(--color-primary-light)' }}>Energía Espiritual:</strong> {interpretation.energiaEspiritual}
                  </p>
                </div>

                {interpretation.compatibilidades?.length > 0 && (
                  <div style={{ marginTop: 10 }}>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                      <strong style={{ color: '#94A3B8' }}>Compatibilidades:</strong> {interpretation.compatibilidades.join(' · ')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function InterpretacionesTab({ profile }) {
  const results = profile?.results;

  if (!results) return null;

  return (
    <div className="tab-section">
      <div className="tab-section-header">
        <h2 className="tab-section-title">Interpretaciones</h2>
        <p className="tab-section-desc">
          Explora el significado profundo de cada número. Haz clic para expandir.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {CATEGORY_MAP.map(({ key, categoria, title, icon, desc }, i) => {
          const num = results[key];
          const interpretation = getInterpretations(num, categoria);
          return (
            <AccordionItem
              key={key}
              interpretation={interpretation}
              title={title}
              icon={icon}
              desc={desc}
              num={num}
              defaultOpen={i === 0}
            />
          );
        })}
      </div>
    </div>
  );
}
