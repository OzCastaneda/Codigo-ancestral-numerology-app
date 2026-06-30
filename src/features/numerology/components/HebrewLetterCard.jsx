import { memo } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Sun, Moon, Star } from 'lucide-react';

const GRADIENTS = {
  crimson: 'linear-gradient(135deg, #DC143C, #8B008B)',
  purple: 'linear-gradient(135deg, #8B008B, #DC143C)',
  amber: 'linear-gradient(135deg, #FCD34D, #DC143C)',
  dark: 'linear-gradient(135deg, #0F0F0F, #1a1a2e)',
};

function HebrewLetterCard({ letter, variant = 'compact', colorClass = 'crimson' }) {
  if (!letter) return null;

  const gradient = GRADIENTS[colorClass] || GRADIENTS.crimson;

  return (
    <motion.div
      className={`hebrew-letter-card hebrew-letter-${variant}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="hlc-glow" style={{ background: gradient }} />

      <div className="hlc-header">
        <div className="hlc-character-wrapper">
          <span className="hlc-character" style={{ color: 'var(--color-amber-anime)' }}>
            {letter.hebrew_character}
          </span>
          {variant === 'full' && (
            <span className="hlc-number-badge" style={{ background: gradient }}>
              {letter.number}
            </span>
          )}
        </div>

        <div className="hlc-info">
          <h3 className="hlc-name">{letter.hebrew_name}</h3>
          <span className="hlc-latin">{letter.latin_equivalent}</span>
          {variant === 'compact' && (
            <span className="hlc-number-tag" style={{ background: gradient }}>
              Nº {letter.number}
            </span>
          )}
        </div>
      </div>

      <p className="hlc-significance">{letter.significance}</p>

      <div className="hlc-aspects">
        <div className="hlc-aspect hlc-light">
          <Sun size={14} className="hlc-aspect-icon" />
          <div>
            <span className="hlc-aspect-label">Luz</span>
            <span className="hlc-aspect-text">{letter.light_aspect}</span>
          </div>
        </div>
        <div className="hlc-aspect hlc-shadow">
          <Moon size={14} className="hlc-aspect-icon" />
          <div>
            <span className="hlc-aspect-label">Sombra</span>
            <span className="hlc-aspect-text">{letter.shadow_aspect}</span>
          </div>
        </div>
      </div>

      {variant === 'full' && (
        <div className="hlc-connections">
          <div className="hlc-connection">
            <Sparkles size={14} className="hlc-conn-icon" />
            <span className="hlc-conn-label">Tarot:</span>
            <span className="hlc-conn-value">{letter.tarot_equivalent}</span>
          </div>
          <div className="hlc-connection">
            <Star size={14} className="hlc-conn-icon" />
            <span className="hlc-conn-label">Sephirah:</span>
            <span className="hlc-conn-value">{letter.sephirah_connection}</span>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default memo(HebrewLetterCard);
