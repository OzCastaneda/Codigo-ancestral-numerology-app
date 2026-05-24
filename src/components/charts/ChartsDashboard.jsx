import { BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import EnergyRadarChart from './EnergyRadarChart';
import NumberDonutChart from './NumberDonutChart';
import SpiritualTimeline from './SpiritualTimeline';
import TreeOfLife from '../kabbalah/TreeOfLife';

export default function ChartsDashboard({ results }) {
  if (!results) return null;

  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 }}
    >
      <div className="card-header">
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          <BarChart3 size={22} className="icon" />
          Dashboard Visual
        </h2>
      </div>
      <div className="card-body">
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: 20 }}>
          Visualización interactiva de tu perfil numerológico
        </p>

        <div className="charts-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 20,
        }}>
          <EnergyRadarChart results={results} />
          <NumberDonutChart results={results} />
          <SpiritualTimeline results={results} />
          <TreeOfLife />
        </div>
      </div>
    </motion.div>
  );
}
