import { motion } from 'framer-motion';
import { Star, Sun, Compass, Sparkles } from 'lucide-react';
import { ZODIAC_COLORS } from '../../../../data/astrologiaKabalisticaData';
import { ZODIAC_OPPOSITES, TIKUN_CHALLENGES_SOLUTIONS } from '../../../../data/tikunCompleteData';
import { getTikunYearRange } from '../../../../data/astrologiaKabalisticaData';

function SummaryCard({ icon: Icon, title, content, accent }) {
  return (
    <motion.div
      className="astro-summary-card"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      style={{ borderTop: `3px solid ${accent}80` }}
    >
      <div className="summary-card-icon" style={{ background: `${accent}15`, color: accent }}>
        <Icon size={20} />
      </div>
      <div className="summary-card-content">
        <h4 className="summary-card-title">{title}</h4>
        <p className="summary-card-text">{content}</p>
      </div>
    </motion.div>
  );
}

export default function ResumenAstrologico({ userSign, tikunSign, birthdate }) {
  if (!userSign || !tikunSign) return null;

  const userColor = ZODIAC_COLORS[userSign.signo];
  const tikunColor = ZODIAC_COLORS[tikunSign.signo];
  const previousLife = ZODIAC_OPPOSITES[userSign?.signo];
  const challenges = TIKUN_CHALLENGES_SOLUTIONS[tikunSign?.signo] || [];
  const yearRange = getTikunYearRange(birthdate);

  return (
    <div className="astro-section">
      <h3 className="astro-section-title">Tu Perfil Astrológico Cabalístico</h3>
      <p className="astro-section-desc">
        Basado en las enseñanzas del <strong>Rav Philip S. Berg</strong> y su libro
        "Astrología Cabalística y el Significado de Nuestras Vidas"
      </p>

      <div className="astro-summary-grid">
        <SummaryCard
          icon={Sun}
          title="Signo Zodiacal (Mes de Nacimiento)"
          content={`${userSign.signo} · ${userSign.elemento} · Planeta: ${userSign.planeta} · Determina tu Vida Anterior`}
          accent={userColor}
        />

        <SummaryCard
          icon={Star}
          title="Vida Anterior (Opuesto del Zodiacal)"
          content={`Tu alma proviene de ${previousLife} · El signo opuesto a tu signo zodiacal revela patrones heredados que transformar`}
          accent="#3B82F6"
        />

        <SummaryCard
          icon={Compass}
          title="Tu Tikun (Según Año de Nacimiento)"
          content={`${tikunSign.signo} · ${yearRange ? `Válido de ${yearRange.start} a ${yearRange.end}` : `Tu punto de corrección espiritual`} · Nodo Lunar en ${tikunSign.signo}`}
          accent={tikunColor}
        />

        <SummaryCard
          icon={Sparkles}
          title="Tu Misión Espiritual"
          content={`${tikunSign.conceptoClave} · ${challenges.length} desafíos principales a transformar en esta vida`}
          accent="#F59E0B"
        />
      </div>
    </div>
  );
}
