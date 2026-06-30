import { motion } from 'framer-motion';
import { Sparkles, Heart, User, Activity, Sun, Moon, Zap, Shield, Feather, Star, Circle } from 'lucide-react';

const LAYERS = [
  {
    key: 'destiny',
    name: 'Núcleo Divino',
    desc: 'Esencia espiritual y propósito transcendente',
    color: '#FCD34D',
    colorDark: '#D4A000',
    bg: 'rgba(252, 211, 77, 0.04)',
    border: 'rgba(252, 211, 77, 0.12)',
    borderHover: 'rgba(252, 211, 77, 0.25)',
    icon: Star,
    elements: ['Unidad', 'Propósito', 'Trascendencia'],
    note: 'El núcleo inmutable de tu ser. Tu conexión directa con la fuente divina.',
  },
  {
    key: 'soul',
    name: 'Alma',
    desc: 'Motivaciones internas y deseos profundos',
    color: '#8B5CF6',
    colorDark: '#7C3AED',
    bg: 'rgba(139, 92, 246, 0.04)',
    border: 'rgba(139, 92, 246, 0.12)',
    borderHover: 'rgba(139, 92, 246, 0.25)',
    icon: Heart,
    elements: ['Deseos', 'Vocación', 'Impulso anímico'],
    note: 'La capa que impulsa tus decisiones desde lo más profundo de tu ser.',
  },
  {
    key: 'personality',
    name: 'Personalidad',
    desc: 'Expresión externa y máscara social',
    color: '#3B82F6',
    colorDark: '#2563EB',
    bg: 'rgba(59, 130, 246, 0.04)',
    border: 'rgba(59, 130, 246, 0.12)',
    borderHover: 'rgba(59, 130, 246, 0.25)',
    icon: User,
    elements: ['Carácter', 'Imagen', 'Interacción'],
    note: 'El filtro a través del cual el mundo te percibe. Tu carta de presentación al universo.',
  },
  {
    key: 'mission',
    name: 'Cuerpo Físico & Misión',
    desc: 'Manifestación material y propósito práctico',
    color: '#10B981',
    colorDark: '#059669',
    bg: 'rgba(16, 185, 129, 0.04)',
    border: 'rgba(16, 185, 129, 0.12)',
    borderHover: 'rgba(16, 185, 129, 0.25)',
    icon: Activity,
    elements: ['Acción', 'Servicio', 'Legado'],
    note: 'Tu vehículo en el mundo material. Lo que construyes y el impacto que generas.',
  },
];

function LayerCard({ layer, number, index }) {
  const Icon = layer.icon;

  return (
    <motion.div
      className="pes-layer"
      style={{
        borderColor: layer.border,
        background: layer.bg,
        '--layer-color': layer.color,
        '--layer-color-dark': layer.colorDark,
      }}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.12 }}
    >
      <div className="pes-layer-indicator" style={{ background: `linear-gradient(180deg, ${layer.color}, ${layer.colorDark})` }} />

      <div className="pes-layer-top">
        <div className="pes-layer-icon-wrap" style={{ background: `${layer.color}12`, color: layer.color }}>
          <Icon size={20} />
        </div>
        <div className="pes-layer-header">
          <h3 className="pes-layer-name" style={{ color: layer.color }}>{layer.name}</h3>
          <span className="pes-layer-desc">{layer.desc}</span>
        </div>
        <div className="pes-layer-number" style={{
          background: `${layer.color}15`,
          color: layer.color,
          boxShadow: `0 0 20px ${layer.color}15`,
        }}>
          {number}
        </div>
      </div>

      <div className="pes-layer-body">
        <p className="pes-layer-note">{layer.note}</p>

        <div className="pes-elements">
          {layer.elements.map((el, i) => (
            <span
              key={i}
              className="pes-element-tag"
              style={{
                borderColor: `${layer.color}20`,
                color: layer.color,
                background: `${layer.color}08`,
              }}
            >
              {el}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function PsychoEnergeticSchema({ profileNumbers }) {
  if (!profileNumbers) return null;

  return (
    <div className="pes-container">
      <div className="tab-section-header">
        <h2 className="tab-section-title">Esquema Psico-Energético</h2>
        <p className="tab-section-desc">
          Las 4 capas concéntricas de tu ser, desde el núcleo divino hasta tu manifestación física.
        </p>
      </div>

      <div className="pes-layers">
        {LAYERS.map((layer, i) => {
          const number = profileNumbers[layer.key];
          return <LayerCard key={layer.key} layer={layer} number={number} index={i} />;
        })}
      </div>

      <motion.div
        className="pes-integration-note"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <Sparkles size={18} className="pes-integration-icon" />
        <div>
          <strong>Integración:</strong> El equilibrio surge cuando las 4 capas se alinean conscientemente. El Núcleo Divino guía, el Alma impulsa, la Personalidad expresa y el Cuerpo Materializa. Cada número es una clave que revela cómo se relacionan estas capas en tu vida.
        </div>
      </motion.div>
    </div>
  );
}
