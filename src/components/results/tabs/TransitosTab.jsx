import { motion } from 'framer-motion';
import { Calendar, RefreshCw, Circle, ArrowRight, Sparkles, Sun, Moon, Star } from 'lucide-react';
import { calculatePersonalYear, calculateNineYearCycle, getFullCycle } from '../../../features/numerology/utils/transitCalculations';

const PERSONAL_ENERGIES = {
  1: { emoji: '🌱', color: '#8B5CF6', gradient: 'linear-gradient(135deg, #8B5CF6, #6D28D9)' },
  2: { emoji: '🤝', color: '#06B6D4', gradient: 'linear-gradient(135deg, #06B6D4, #0891B2)' },
  3: { emoji: '🎨', color: '#F59E0B', gradient: 'linear-gradient(135deg, #F59E0B, #D97706)' },
  4: { emoji: '🏗️', color: '#10B981', gradient: 'linear-gradient(135deg, #10B981, #059669)' },
  5: { emoji: '🦋', color: '#F97316', gradient: 'linear-gradient(135deg, #F97316, #EA580C)' },
  6: { emoji: '💖', color: '#EC4899', gradient: 'linear-gradient(135deg, #EC4899, #BE185D)' },
  7: { emoji: '🔮', color: '#6366F1', gradient: 'linear-gradient(135deg, #6366F1, #4F46E5)' },
  8: { emoji: '👑', color: '#FCD34D', gradient: 'linear-gradient(135deg, #FCD34D, #F59E0B)' },
  9: { emoji: '♾️', color: '#DC143C', gradient: 'linear-gradient(135deg, #DC143C, #8B008B)' },
};

function PersonalYearSection({ personalYear, cycleInfo, birthDate }) {
  const energy = PERSONAL_ENERGIES[personalYear] || PERSONAL_ENERGIES[1];

  return (
    <motion.section
      className="tc-section"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="tc-section-header">
        <Calendar size={20} style={{ color: 'var(--color-amber-anime)' }} />
        <h3 className="tc-section-title">Año Personal {new Date().getFullYear()}</h3>
      </div>

      <div className="tc-year-banner" style={{ background: energy.gradient }}>
        <div className="tc-year-number">{personalYear}</div>
        <div className="tc-year-info">
          <span className="tc-year-label">Tu año personal</span>
          <span className="tc-year-title">{cycleInfo?.title || 'Calculando...'}</span>
        </div>
        <div className="tc-year-emoji">{energy.emoji}</div>
      </div>

      {cycleInfo && (
        <div className="tc-year-details">
          <p className="tc-year-meaning">{cycleInfo.meaning}</p>

          <div className="tc-energy-row">
            <Sun size={15} style={{ color: 'var(--color-amber-anime)' }} />
            <span className="tc-energy-label">Energía:</span>
            <span className="tc-energy-text">{cycleInfo.energy}</span>
          </div>

          <div className="tc-advice-box">
            <Star size={16} style={{ color: 'var(--color-amber-anime)', flexShrink: 0, marginTop: 2 }} />
            <span>{cycleInfo.advice}</span>
          </div>
        </div>
      )}
    </motion.section>
  );
}

function CycleTimeline({ cycleNumber }) {
  const fullCycle = getFullCycle();

  return (
    <motion.section
      className="tc-section"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <div className="tc-section-header">
        <RefreshCw size={20} style={{ color: 'var(--color-amber-anime)' }} />
        <h3 className="tc-section-title">Ciclo de 9 Años</h3>
      </div>

      <div className="tc-cycle-timeline">
        <div className="tc-cycle-track">
          {fullCycle.map((year, i) => {
            const isCurrent = year.number === cycleNumber;
            const isPast = year.number < cycleNumber;
            const energy = PERSONAL_ENERGIES[year.number];

            return (
              <div key={year.number} className="tc-cycle-node-wrapper">
                <motion.div
                  className={`tc-cycle-node ${isCurrent ? 'current' : ''} ${isPast ? 'past' : ''}`}
                  style={{
                    borderColor: isCurrent ? energy.color : isPast ? `${energy.color}40` : 'rgba(255,255,255,0.1)',
                    background: isCurrent ? energy.gradient : isPast ? `${energy.color}15` : 'rgba(255,255,255,0.02)',
                    boxShadow: isCurrent ? `0 0 20px ${energy.color}30` : 'none',
                  }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                  whileHover={{ scale: 1.15 }}
                >
                  <span className="tc-cycle-number">{year.number}</span>
                </motion.div>

                {isCurrent && (
                  <motion.div
                    className="tc-cycle-label"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <span className="tc-cycle-current-label">Actual</span>
                    <span className="tc-cycle-year-title">{year.title}</span>
                  </motion.div>
                )}

                {i < 8 && (
                  <div
                    className="tc-cycle-connector"
                    style={{ background: i < cycleNumber - 1 ? energy?.color : 'rgba(255,255,255,0.06)' }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

function CycleDetails({ cycleNumber }) {
  const fullCycle = getFullCycle();

  return (
    <motion.section
      className="tc-section"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      <div className="tc-section-header">
        <Circle size={20} style={{ color: 'var(--color-amber-anime)' }} />
        <h3 className="tc-section-title">Etapas del Ciclo</h3>
      </div>

      <div className="tc-stages">
        {fullCycle.map((year, i) => {
          const isCurrent = year.number === cycleNumber;
          const energy = PERSONAL_ENERGIES[year.number];
          return (
            <motion.div
              key={year.number}
              className={`tc-stage-card ${isCurrent ? 'current' : ''}`}
              style={{
                borderColor: isCurrent ? energy.color : 'rgba(255,255,255,0.05)',
                background: isCurrent ? `${energy.color}06` : 'rgba(255,255,255,0.015)',
              }}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.45 + i * 0.07 }}
            >
              <div className="tc-stage-left">
                <div
                  className="tc-stage-number"
                  style={{
                    background: energy.gradient,
                    boxShadow: isCurrent ? `0 0 16px ${energy.color}30` : 'none',
                  }}
                >
                  {year.number}
                </div>
              </div>
              <div className="tc-stage-body">
                <h4 className="tc-stage-title">{year.title}</h4>
                <p className="tc-stage-meaning">{year.meaning}</p>
              </div>
              {isCurrent && (
                <div className="tc-stage-badge" style={{ background: energy.gradient }}>Actual</div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

export default function TransitosTab({ profile, birthdate }) {
  const results = profile?.results;

  if (!results || !birthdate) return null;

  const parsedBirth = typeof birthdate === 'string' ? birthdate : null;
  if (!parsedBirth) return null;

  const cycleInfo = calculateNineYearCycle(parsedBirth);
  const personalYear = cycleInfo?.cycleNumber || 1;

  return (
    <div className="tab-section">
      <div className="tab-section-header">
        <h2 className="tab-section-title">Tránsitos & Ciclos de Vida</h2>
        <p className="tab-section-desc">
          Tu año personal y el ciclo de 9 años que marca las etapas de tu evolución.
        </p>
      </div>

      <div className="tc-container">
        <PersonalYearSection
          personalYear={personalYear}
          cycleInfo={cycleInfo}
          birthDate={parsedBirth}
        />
        <CycleTimeline cycleNumber={personalYear} />
        <CycleDetails cycleNumber={personalYear} />
      </div>
    </div>
  );
}
