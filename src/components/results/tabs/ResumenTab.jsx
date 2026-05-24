import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Compass, Heart, User, Star, Zap, TrendingUp, Sparkles } from 'lucide-react';
import ResultsGrid from '../../../features/numerology/components/ResultsGrid';
import { getNumberColor } from '../../charts/chartConfig';

const CARD_ITEMS = [
  { key: 'destiny', label: 'Destino', icon: Compass },
  { key: 'soul', label: 'Alma', icon: Heart },
  { key: 'personality', label: 'Personalidad', icon: User },
  { key: 'mission', label: 'Misión', icon: Star },
];

function DominantEnergy({ results }) {
  const maxEntry = useMemo(() => {
    if (!results) return null;
    let maxKey = 'destiny';
    let maxVal = -1;
    CARD_ITEMS.forEach(({ key }) => {
      if ((results[key] || 0) > maxVal) {
        maxVal = results[key];
        maxKey = key;
      }
    });
    return { key: maxKey, value: maxVal };
  }, [results]);

  if (!results || !maxEntry) return null;

  const color = getNumberColor(maxEntry.value);
  const entry = CARD_ITEMS.find(c => c.key === maxEntry.key);

  return (
    <motion.div
      className="summary-energy-card"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      style={{
        background: `linear-gradient(135deg, ${color}12, ${color}06)`,
        border: `1px solid ${color}25`,
        borderRadius: 16,
        padding: '24px 28px',
        display: 'flex',
        alignItems: 'center',
        gap: 20,
      }}
    >
      <div style={{
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: `${color}20`,
        border: `2px solid ${color}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: `0 0 30px ${color}25`,
      }}>
        <Zap size={26} style={{ color }} />
      </div>
      <div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', fontWeight: 500, margin: 0, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Energía Dominante
        </p>
        <h3 style={{ color, fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, margin: '4px 0 2px' }}>
          {entry?.label} — {maxEntry?.value}
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', margin: 0 }}>
          Esta vibración guía tu camino espiritual en este ciclo
        </p>
      </div>
    </motion.div>
  );
}

function QuickInsights({ results }) {
  if (!results) return null;

  const hasMasterNumber = [11, 22, 33, 44].includes(results.destiny) ||
    [11, 22, 33, 44].includes(results.soul) ||
    [11, 22, 33, 44].includes(results.personality) ||
    [11, 22, 33, 44].includes(results.mission);

  const insights = [
    {
      icon: TrendingUp,
      title: 'Número de Destino',
      value: results.destiny,
      desc: 'Tu propósito y camino de vida',
    },
    {
      icon: Sparkles,
      title: 'Número Maestro',
      value: hasMasterNumber ? 'Presente' : 'No',
      desc: hasMasterNumber
        ? 'Tienes números maestros que elevan tu vibración espiritual'
        : 'Tu vibración se expresa a través de números base',
    },
    {
      icon: Compass,
      title: 'Equilibrio',
      value: results.destiny === results.mission ? 'Armónico' : 'Complementario',
      desc: results.destiny === results.mission
        ? 'Destino y Misión están alineados'
        : 'Destino y Misión se complementan y equilibran',
    },
  ];

  return (
    <div className="summary-insights">
      <h4 style={{ color: 'var(--color-text-primary)', fontSize: '0.95rem', fontWeight: 600, marginBottom: 12 }}>
        Insights Rápidos
      </h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {insights.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '12px 16px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: 10,
                border: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: 'rgba(139,92,246,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Icon size={16} style={{ color: 'var(--color-primary-light)' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ color: 'var(--color-text-primary)', fontSize: '0.85rem', fontWeight: 600, margin: 0 }}>
                  {item.title}
                </p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', margin: '2px 0 0' }}>
                  {item.value} — {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function ResumenTab({ profile }) {
  const results = profile?.results;
  const calcKey = results ? results.destiny + results.soul + results.personality + results.mission : null;

  if (!results) return null;

  return (
    <div className="tab-section">
      <div className="tab-section-header">
        <h2 className="tab-section-title">Resumen de tu Perfil</h2>
        <p className="tab-section-desc">
          Vista general de tus números fundamentales y las energías que guían tu camino
        </p>
      </div>

      <ResultsGrid results={results} calcKey={calcKey} />

      <div style={{ marginTop: 24 }}>
        <DominantEnergy results={results} />
      </div>

      <div style={{ marginTop: 24 }}>
        <QuickInsights results={results} />
      </div>
    </div>
  );
}
