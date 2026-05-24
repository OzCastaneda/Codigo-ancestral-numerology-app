import { useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';
import { PieChart as PieChartIcon } from 'lucide-react';
import { DONUT_COLORS, getNumberColor } from './chartConfig';

const CUSTOM_TOOLTIP = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const { name, value, color } = payload[0];
  return (
    <div style={{
      background: 'rgba(11, 16, 32, 0.95)',
      border: '1px solid rgba(139, 92, 246, 0.3)',
      borderRadius: 8,
      padding: '10px 14px',
    }}>
      <p style={{ color: '#C4B5FD', fontSize: 12, fontWeight: 600, margin: 0 }}>{name}</p>
      <p style={{ color: color || '#F59E0B', fontSize: 16, fontWeight: 800, margin: '4px 0 0' }}>{value}</p>
    </div>
  );
};

const ITEMS = [
  { key: 'destiny', label: 'Destino' },
  { key: 'soul', label: 'Alma' },
  { key: 'personality', label: 'Personalidad' },
  { key: 'mission', label: 'Misión' },
];

function MiniDonut({ label, value, color }) {
  const data = [
    { name: label, value: value || 0 },
    { name: 'Resto', value: 9 - (value || 0) },
  ];

  return (
    <div style={{ textAlign: 'center', width: 120 }}>
      <ResponsiveContainer width={120} height={100}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={28}
            outerRadius={42}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            animationDuration={1000}
          >
            <Cell fill={color} />
            <Cell fill="rgba(255,255,255,0.04)" />
          </Pie>
          <Tooltip content={<CUSTOM_TOOLTIP />} />
        </PieChart>
      </ResponsiveContainer>
      <p style={{ color: '#94A3B8', fontSize: '0.78rem', marginTop: 4, fontWeight: 500 }}>{label}</p>
      <p style={{
        color,
        fontSize: '1.4rem',
        fontWeight: 800,
        fontFamily: 'var(--font-display)',
        lineHeight: 1.2,
        marginTop: -32,
      }}>
        {value}
      </p>
    </div>
  );
}

export default function NumberDonutChart({ results }) {
  const items = useMemo(() => {
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
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="card-body">
        <h3 className="section-title">
          <PieChartIcon size={20} className="icon" />
          Tus Números
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginBottom: 12, marginTop: -8 }}>
          Cada número del 1 al 9 representa una vibración energética única
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
          justifyContent: 'center',
        }}>
          {items.map((item) => (
            <MiniDonut key={item.key} label={item.label} value={item.value} color={item.color} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
