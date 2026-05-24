import { useMemo } from 'react';
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  Radar, ResponsiveContainer, Tooltip,
} from 'recharts';
import { motion } from 'framer-motion';
import { Radar as RadarIcon } from 'lucide-react';
import { COLORS } from './chartConfig';

const CUSTOM_TOOLTIP = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const { name, value } = payload[0].payload;
  return (
    <div style={{
      background: 'rgba(11, 16, 32, 0.95)',
      border: '1px solid rgba(139, 92, 246, 0.3)',
      borderRadius: 8,
      padding: '10px 14px',
      backdropFilter: 'blur(12px)',
    }}>
      <p style={{ color: '#C4B5FD', fontSize: 12, fontWeight: 600, margin: 0 }}>{name}</p>
      <p style={{ color: '#F59E0B', fontSize: 16, fontWeight: 800, margin: '4px 0 0' }}>{value}</p>
    </div>
  );
};

export default function EnergyRadarChart({ results }) {
  const data = useMemo(() => {
    if (!results) return [];
    return [
      { dimension: 'Destino', value: results.destiny || 0, fullMark: 9 },
      { dimension: 'Alma', value: results.soul || 0, fullMark: 9 },
      { dimension: 'Personalidad', value: results.personality || 0, fullMark: 9 },
      { dimension: 'Misión', value: results.mission || 0, fullMark: 9 },
    ];
  }, [results]);

  if (!results) return null;

  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="card-body">
        <h3 className="section-title">
          <RadarIcon size={20} className="icon" />
          Perfil Energético
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginBottom: 16, marginTop: -8 }}>
          Distribución de tus números principales en el espectro energético
        </p>
        <ResponsiveContainer width="100%" height={280}>
          <RadarChart data={data} cx="50%" cy="50%" outerRadius="72%">
            <PolarGrid stroke="rgba(139, 92, 246, 0.12)" strokeWidth={1} />
            <PolarAngleAxis
              dataKey="dimension"
              tick={{ fill: '#94A3B8', fontSize: 11, fontFamily: 'Inter' }}
              stroke="rgba(255,255,255,0.05)"
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 9]}
              tick={{ fill: '#64748B', fontSize: 9 }}
              stroke="rgba(255,255,255,0.04)"
              tickCount={5}
            />
            <Tooltip content={<CUSTOM_TOOLTIP />} />
            <Radar
              name="Energía"
              dataKey="value"
              stroke={COLORS.primary}
              fill={COLORS.primary}
              fillOpacity={0.2}
              strokeWidth={2}
              animationDuration={1200}
              animationEasing="ease-out"
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
