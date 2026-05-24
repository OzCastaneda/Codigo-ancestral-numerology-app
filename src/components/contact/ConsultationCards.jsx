import { motion } from 'framer-motion';
import { Compass, Heart, Sparkles, Globe, Star } from 'lucide-react';

const SERVICES = [
  {
    icon: Compass,
    title: 'Numerología Cabalística',
    desc: 'Análisis profundo de tu nombre según las 22 letras hebreas, el Sepher Yetzirah y el Árbol de la Vida.',
    color: '#8B5CF6',
  },
  {
    icon: Heart,
    title: 'Compatibilidad de Pareja',
    desc: 'Descubre la vibración energética entre dos personas y cómo armonizar sus caminos.',
    color: '#EC4899',
  },
  {
    icon: Sparkles,
    title: 'Lectura Kármica',
    desc: 'Identifica patrones del pasado, lecciones pendientes y el propósito de tu alma en esta vida.',
    color: '#F59E0B',
  },
  {
    icon: Globe,
    title: 'Propósito de Vida',
    desc: 'Revela tu misión esencial y el camino que tu alma eligió para evolucionar en esta encarnación.',
    color: '#06B6D4',
  },
  {
    icon: Star,
    title: 'Consulta Espiritual Completa',
    desc: 'Una sesión integral que combina numerología, astrología cabalística y guía espiritual personalizada.',
    color: '#10B981',
  },
];

export default function ConsultationCards() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {SERVICES.map((service, i) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.1 + i * 0.05 }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 14,
              padding: '14px 18px',
              background: `linear-gradient(135deg, ${service.color}06, transparent)`,
              border: `1px solid ${service.color}12`,
              borderRadius: 12,
              cursor: 'default',
              transition: 'border-color 0.3s ease, background 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${service.color}30`;
              e.currentTarget.style.background = `linear-gradient(135deg, ${service.color}0c, ${service.color}04)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${service.color}12`;
              e.currentTarget.style.background = `linear-gradient(135deg, ${service.color}06, transparent)`;
            }}
          >
            <div style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: `${service.color}15`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Icon size={17} style={{ color: service.color }} />
            </div>
            <div style={{ minWidth: 0 }}>
              <p style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.88rem', margin: 0 }}>
                {service.title}
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', margin: '3px 0 0', lineHeight: 1.5 }}>
                {service.desc}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
