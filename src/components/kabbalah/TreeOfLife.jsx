import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { TreePine } from 'lucide-react';
import { KABBALAH } from '../../features/numerology/data/numerologyData';
import { SEPHIROTH_COLORS } from '../charts/chartConfig';

const SEPHIROTH_LAYOUT = [
  { n: 1, x: 50, y: 4, label: 'Kether' },
  { n: 2, x: 30, y: 16, label: 'Chokmah' },
  { n: 3, x: 70, y: 16, label: 'Binah' },
  { n: 4, x: 50, y: 30, label: 'Chesed' },
  { n: 5, x: 30, y: 44, label: 'Geburah' },
  { n: 6, x: 70, y: 44, label: 'Tiphereth' },
  { n: 7, x: 50, y: 58, label: 'Netzach' },
  { n: 8, x: 30, y: 72, label: 'Hod' },
  { n: 9, x: 70, y: 72, label: 'Yesod' },
  { n: 10, x: 50, y: 86, label: 'Malkuth' },
];

const PATHS = [
  [1, 2], [1, 3], [2, 4], [3, 4], [2, 5],
  [3, 5], [4, 6], [5, 6], [6, 7], [6, 8],
  [7, 9], [8, 9], [7, 10], [8, 10], [9, 10],
  [4, 7], [5, 8], [2, 6], [3, 6],
];

function SephirahNode({ sephirah, layout, index }) {
  const color = SEPHIROTH_COLORS[index % SEPHIROTH_COLORS.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{
        position: 'absolute',
        left: `${layout.x}%`,
        top: `${layout.y}%`,
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 2,
      }}
    >
      <div style={{
        width: 42,
        height: 42,
        borderRadius: '50%',
        background: `${color}18`,
        border: `2px solid ${color}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontSize: '0.85rem',
        fontWeight: 800,
        color,
        boxShadow: `0 0 20px ${color}30`,
        backdropFilter: 'blur(4px)',
      }}>
        {sephirah.n}
      </div>
      <span style={{
        fontSize: '0.6rem',
        color: 'var(--color-text-muted)',
        marginTop: 4,
        fontWeight: 500,
        textAlign: 'center',
        lineHeight: 1.2,
        width: 60,
      }}>
        {layout.label}
      </span>
    </motion.div>
  );
}

export default function TreeOfLife() {
  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="card-body">
        <h3 className="section-title">
          <TreePine size={20} className="icon" />
          Árbol de la Vida
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginBottom: 16, marginTop: -8 }}>
          Los 10 Sephiroth y sus conexiones en el Árbol de la Vida
        </p>
        <div style={{
          position: 'relative',
          width: '100%',
          paddingBottom: '100%',
          background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.03) 0%, transparent 70%)',
          borderRadius: 16,
          overflow: 'hidden',
        }}>
          <svg
            viewBox="0 0 100 100"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              opacity: 0.25,
            }}
          >
            {PATHS.map(([from, to], i) => {
              const f = SEPHIROTH_LAYOUT.find(s => s.n === from);
              const t = SEPHIROTH_LAYOUT.find(s => s.n === to);
              if (!f || !t) return null;
              return (
                <line
                  key={i}
                  x1={f.x}
                  y1={f.y}
                  x2={t.x}
                  y2={t.y}
                  stroke="rgba(139, 92, 246, 0.3)"
                  strokeWidth={0.4}
                  strokeDasharray="1.5 1"
                />
              );
            })}
          </svg>
          {KABBALAH.sephiroth.map((s, i) => {
            const layout = SEPHIROTH_LAYOUT.find(l => l.n === s.n);
            if (!layout) return null;
            return <SephirahNode key={s.n} sephirah={s} layout={layout} index={i} />;
          })}
        </div>
      </div>
    </motion.div>
  );
}
