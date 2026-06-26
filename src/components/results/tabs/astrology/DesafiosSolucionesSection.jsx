import { motion } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';
import { TIKUN_CHALLENGES_SOLUTIONS } from '../../../../data/tikunCompleteData';
import { ZODIAC_COLORS } from '../../../../data/astrologiaKabalisticaData';

export default function DesafiosSolucionesSection({ tikunSign }) {
  if (!tikunSign) return null;

  const challenges = TIKUN_CHALLENGES_SOLUTIONS[tikunSign.signo] || [];
  if (!challenges.length) return null;

  const color = ZODIAC_COLORS[tikunSign.signo];

  return (
    <div className="astro-section">
      <div className="astro-header">
        <div className="astro-header-icon" style={{ background: 'rgba(249,115,22,0.15)', color: '#F97316' }}>
          <Shield size={24} />
        </div>
        <div>
          <h2 className="astro-header-title">
            Desafíos y Soluciones para <span style={{ color }}>{tikunSign.signo}</span>
          </h2>
          <p className="astro-header-meta">
            El camino de corrección requiere enfrentar cada obstáculo con conciencia
          </p>
        </div>
      </div>

      <div className="astro-challenges-table">
        {challenges.map((item, i) => (
          <motion.div
            key={i}
            className="astro-challenge-row"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
          >
            <div className="astro-challenge-header">
              <AlertTriangle size={16} style={{ color: '#F87171', flexShrink: 0 }} />
              <span className="astro-challenge-title">{item.challenge}</span>
            </div>

            <div className="astro-challenge-details">
              <div className="astro-challenge-detail">
                <span className="astro-challenge-detail-label">Origen</span>
                <p className="astro-challenge-detail-text">{item.origin}</p>
              </div>

              <div className="astro-challenge-detail">
                <span className="astro-challenge-detail-label" style={{ color: '#34D399' }}>
                  <CheckCircle size={12} /> Solución
                </span>
                <p className="astro-challenge-detail-text">{item.solution}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="astro-block" style={{ borderLeftColor: '#F59E0B' }}>
        <h4 className="astro-block-title" style={{ color: '#FBBF24' }}>
          <Lightbulb size={16} /> Indicadores de Progreso
        </h4>
        <p className="astro-block-text">
          Sabrás que estás avanzando en tu Tikun cuando: (1) Las situaciones que antes te desencadenaban
          ya no tienen el mismo poder sobre ti; (2) Puedes observar tus patrones automáticos antes de
          reaccionar; (3) Sientes más compasión que juicio hacia quienes te desafían; (4) Tus relaciones
          se vuelven más auténticas y profundas; (5) Experimentas una paz interior que no depende de las
          circunstancias externas.
        </p>
      </div>
    </div>
  );
}
