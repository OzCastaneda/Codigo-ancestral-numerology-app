import { motion } from 'framer-motion';
import { Target, Heart, CheckCircle, BookOpen } from 'lucide-react';
import { TIKUN_SPIRITUAL_TASKS } from '../../../../data/tikunCompleteData';
import { ZODIAC_COLORS } from '../../../../data/astrologiaKabalisticaData';

export default function TareaEspiritualSection({ tikunSign }) {
  if (!tikunSign) return null;

  const task = TIKUN_SPIRITUAL_TASKS[tikunSign.signo];
  if (!task) return null;

  const color = ZODIAC_COLORS[tikunSign.signo];

  return (
    <div className="astro-section">
      <div className="astro-header">
        <div className="astro-header-icon" style={{ background: 'rgba(245,158,11,0.15)', color: '#F59E0B' }}>
          <Target size={24} />
        </div>
        <div>
          <h2 className="astro-header-title">
            Tu Tarea Espiritual en <span style={{ color }}>{tikunSign.signo}</span>
          </h2>
          <p className="astro-header-meta">
            El camino de transformación que tu alma debe recorrer
          </p>
        </div>
      </div>

      <div className="astro-block astro-block-gold" style={{ borderLeftColor: '#F59E0B' }}>
        <h4 className="astro-block-title" style={{ color: '#FBBF24' }}>
          <Target size={16} /> Objetivo General
        </h4>
        <p className="astro-block-text">{task.goal}</p>
      </div>

      <div className="astro-steps">
        <h4 className="astro-block-title">
          <CheckCircle size={16} /> Pasos de Transformación
        </h4>
        <ol className="astro-steps-list">
          {task.steps.map((step, i) => (
            <motion.li
              key={i}
              className="astro-step-item"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <span className="astro-step-number" style={{ background: `${color}20`, color }}>{i + 1}</span>
              <span className="astro-step-text">{step}</span>
            </motion.li>
          ))}
        </ol>
      </div>

      <div className="astro-block" style={{ borderLeftColor: `${color}80` }}>
        <h4 className="astro-block-title">
          <Heart size={16} /> Virtudes a Desarrollar
        </h4>
        <div className="astro-virtues">
          {task.virtues.map((v, i) => (
            <span key={i} className="astro-virtue-tag" style={{ background: `${color}12`, color, borderColor: `${color}30` }}>
              {v}
            </span>
          ))}
        </div>
      </div>

      <div className="astro-block" style={{ borderLeftColor: '#8B5CF6' }}>
        <h4 className="astro-block-title">
          <BookOpen size={16} /> Lecciones Clave del Camino
        </h4>
        <p className="astro-block-text">
          El universo te enseñará a través de experiencias que reflejan exactamente lo que necesitas
          corregir. Cada desafío es un maestro disfrazado. Tu crecimiento espiritual se medirá no por
          lo que acumules, sino por lo que estés dispuesto a soltar.
        </p>
      </div>
    </div>
  );
}
