import { motion } from 'framer-motion';
import { BookOpen, Star, Sparkles } from 'lucide-react';
import { ZODIAC_COLORS } from '../../../../data/astrologiaKabalisticaData';

export default function LetrasHebreasSection({ tikunSign, userSign }) {
  if (!tikunSign || !userSign) return null;

  const color = ZODIAC_COLORS[tikunSign.signo];

  const letters = [
    {
      type: 'Letra del Mes de Nacimiento',
      hebrew: userSign.letraSigno.hebrea,
      name: userSign.letraSigno.nombre,
      meaning: userSign.letraSigno.significado,
      sign: userSign.signo,
      color: ZODIAC_COLORS[userSign.signo],
    },
    {
      type: 'Letra del Signo del Tikun',
      hebrew: tikunSign.letraSigno.hebrea,
      name: tikunSign.letraSigno.nombre,
      meaning: tikunSign.letraSigno.significado,
      sign: tikunSign.signo,
      color,
    },
  ];

  return (
    <div className="astro-section">
      <div className="astro-header">
        <div className="astro-header-icon" style={{ background: 'rgba(212,160,0,0.15)', color: '#FCD34D' }}>
          <BookOpen size={24} />
        </div>
        <div>
          <h2 className="astro-header-title">
            Las Letras Sagradas de tu Tikun
          </h2>
          <p className="astro-header-meta">
            El código genético espiritual según el Séfer Yetzirá
          </p>
        </div>
      </div>

      <div className="astro-letters-grid">
        {letters.map((letter, i) => (
          <motion.div
            key={i}
            className="astro-letter-card"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.1 }}
          >
            <div className="astro-letter-badge" style={{ background: `${letter.color}15`, color: letter.color }}>
              {letter.type}
            </div>
            <div className="astro-letter-character" style={{ color: letter.color }}>
              {letter.hebrew}
            </div>
            <div className="astro-letter-info">
              <h4 className="astro-letter-name">{letter.name}</h4>
              <p className="astro-letter-sign">
                <Star size={11} style={{ color: letter.color }} /> {letter.sign}
              </p>
              <p className="astro-letter-meaning">{letter.meaning}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="astro-block" style={{ borderLeftColor: '#FCD34D' }}>
        <h4 className="astro-block-title" style={{ color: '#FCD34D' }}>
          <Sparkles size={16} /> Cómo Trabajan Juntas
        </h4>
        <p className="astro-block-text">
          La combinación de estas dos letras forma tu <strong>código genético espiritual</strong>.
          La letra del mes de nacimiento representa tu conexión con el ciclo anual de la Luz, mientras
          que la letra del signo del Tikun revela la energía específica que necesitas canalizar para tu
          corrección. Juntas, crean un puente entre tu naturaleza original y tu potencial de transformación.
        </p>
      </div>

      <div className="astro-block" style={{ borderLeftColor: '#8B5CF6' }}>
        <h4 className="astro-block-title">Práctica con las Letras</h4>
        <p className="astro-block-text">
          Medita visualizando cada letra hebrea, permitiendo que su forma y sonido vibren en tu conciencia.
          La letra <strong>{letters[1].hebrew}</strong> ({letters[1].name}) de tu Tikun es especialmente
          poderosa — contémplala como un portal energético que activa los atributos de corrección.
          Repite su nombre en silencio como un mantra, sintiendo cómo su significado impregna tu ser.
        </p>
      </div>
    </div>
  );
}
