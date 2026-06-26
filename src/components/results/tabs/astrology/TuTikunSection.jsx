import { motion } from 'framer-motion';
import { Compass, Shield, BookOpen } from 'lucide-react';
import { ZODIAC_COLORS } from '../../../../data/astrologiaKabalisticaData';

export default function TuTikunSection({ tikunSign, userSign }) {
  if (!tikunSign) return null;

  const color = ZODIAC_COLORS[tikunSign.signo];

  return (
    <div className="astro-section">
      <div className="astro-header">
        <div className="astro-header-icon" style={{ background: `${color}18`, color }}>
          <Compass size={24} />
        </div>
        <div>
          <h2 className="astro-header-title">
            Tu Tikun en <span style={{ color }}>{tikunSign.signo}</span>
          </h2>
          <p className="astro-header-meta">
            Mes de {tikunSign.mesHebreo} · {tikunSign.planeta} · {tikunSign.elemento}
          </p>
        </div>
      </div>

      <div className="astro-block" style={{ borderLeftColor: color }}>
        <h4 className="astro-block-title">
          <Compass size={16} /> ¿Qué es tu Tikun?
        </h4>
        <p className="astro-block-text">
          El <strong>Tikun</strong> (corrección en hebreo), determinado por tu Nodo Lunar,
          revela el trabajo espiritual que tu alma eligió antes de nacer. Tu punto de corrección
          está en <strong>{tikunSign.signo}</strong>, lo que significa que esta vida tu tarea principal
          es {tikunSign.conceptoClave.toLowerCase()}.
        </p>
      </div>

      <div className="astro-block" style={{ borderLeftColor: color }}>
        <h4 className="astro-block-title">
          <Shield size={16} /> Reto Espiritual Principal
        </h4>
        <p className="astro-block-text">{tikunSign.tikunGeneral}</p>
      </div>

      <div className="astro-block" style={{ borderLeftColor: color }}>
        <h4 className="astro-block-title">
          <BookOpen size={16} /> Síntesis: La Misión del Alma
        </h4>
        <p className="astro-block-text">{tikunSign.sintesisMision}</p>
      </div>
    </div>
  );
}
