import { motion } from 'framer-motion';
import { Star, Sun, Moon, ArrowRight } from 'lucide-react';
import { TIKUN_PREVIOUS_LIFE } from '../../../../data/tikunCompleteData';
import { ZODIAC_COLORS } from '../../../../data/astrologiaKabalisticaData';

export default function VidaAnteriorSection({ userSign }) {
  if (!userSign) return null;

  const prevLife = TIKUN_PREVIOUS_LIFE[userSign.signo];
  if (!prevLife) return null;

  const color = ZODIAC_COLORS[userSign.signo];
  const prevColor = ZODIAC_COLORS[prevLife.sign] || '#3B82F6';

  return (
    <div className="astro-section">
      <div className="astro-header">
        <div className="astro-header-icon" style={{ background: `${prevColor}18`, color: prevColor }}>
          <Moon size={24} />
        </div>
        <div>
          <h2 className="astro-header-title">
            Tu Vida Anterior: <span style={{ color: prevColor }}>{prevLife.sign}</span>
          </h2>
          <p className="astro-header-meta">
            Determinada por tu signo zodiacal (opuesto) · El origen de tu alma
          </p>
        </div>
      </div>

      <div className="astro-life-transition">
        <div className="astro-life-sign from-sign" style={{ borderColor: prevColor }}>
          <span className="astro-life-label">Vida Anterior</span>
          <span className="astro-life-name" style={{ color: prevColor }}>{prevLife.sign}</span>
          <Moon size={18} />
        </div>
        <div className="astro-life-arrow">
          <ArrowRight size={20} />
        </div>
        <div className="astro-life-sign to-sign" style={{ borderColor: color }}>
          <span className="astro-life-label">Tu Signo Zodiacal</span>
          <span className="astro-life-name" style={{ color }}>{userSign.signo}</span>
          <Sun size={18} />
        </div>
      </div>

      <div className="astro-block" style={{ borderLeftColor: prevColor }}>
        <h4 className="astro-block-title">
          <Star size={16} /> ¿Quién eras?
        </h4>
        <p className="astro-block-text">{prevLife.description}</p>
      </div>

      <div className="astro-split">
        <div className="astro-block astro-block-positive" style={{ borderLeftColor: '#10B981' }}>
          <h4 className="astro-block-title" style={{ color: '#34D399' }}>
            <Sun size={16} /> Fortalezas Heredadas
          </h4>
          <ul className="astro-list">
            {prevLife.strengths.map((s, i) => (
              <li key={i} className="astro-list-item astro-strength">{s}</li>
            ))}
          </ul>
        </div>

        <div className="astro-block astro-block-warning" style={{ borderLeftColor: '#F59E0B' }}>
          <h4 className="astro-block-title" style={{ color: '#FBBF24' }}>
            <Moon size={16} /> Patrones a Superar
          </h4>
          <ul className="astro-list">
            {prevLife.patterns.map((p, i) => (
              <li key={i} className="astro-list-item astro-challenge">{p}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="astro-block" style={{ borderLeftColor: '#F59E0B' }}>
        <h4 className="astro-block-title" style={{ color: '#FBBF24' }}>
          <ArrowRight size={16} /> Tu Transición
        </h4>
        <p className="astro-block-text">{prevLife.transition}</p>
      </div>
    </div>
  );
}
