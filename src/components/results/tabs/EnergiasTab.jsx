import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Sun, Compass, Shield, Sparkles, Calendar, Globe, BookOpen } from 'lucide-react';
import ASTROLOGIA_KABALISTICA, { getKabbalisticSign, getTikunSign, ZODIAC_COLORS } from '../../../data/astrologiaKabalisticaData';

const SECTION_ICONS = {
  pruebasCamino: Shield,
  sintesisMision: Star,
  tikunGeneral: Compass,
  nisyotPrincipales: Shield,
  recomendacionesCamino: Sun,
  practicasTikun: Sparkles,
  fechasCiclos: Calendar,
};

const SECTION_TITLES = {
  pruebasCamino: 'Las Pruebas (Nisyonot) del Camino',
  sintesisMision: 'Síntesis: La Misión del Alma',
  tikunGeneral: 'El Tikun General',
  nisyotPrincipales: 'Las Nisyot Principales',
  recomendacionesCamino: 'Recomendaciones para el Camino Espiritual',
  practicasTikun: 'Prácticas para Fortalecer el Tikun',
  fechasCiclos: 'Fechas y Ciclos Importantes',
};

function SignSelector({ signs, activeId, onSelect, userSignId }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {signs.map((sign) => {
        const isActive = sign.id === activeId;
        const isUserSign = sign.id === userSignId;
        const borderColor = ZODIAC_COLORS[sign.signo];
        return (
          <motion.button
            key={sign.id}
            onClick={() => onSelect(sign.id)}
            className="relative"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              padding: '8px 18px',
              borderRadius: 10,
              background: isActive
                ? `linear-gradient(135deg, ${borderColor}25, ${borderColor}08)`
                : 'rgba(255,255,255,0.03)',
              border: `1px solid ${isActive ? borderColor + '60' : 'rgba(255,255,255,0.08)'}`,
              color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.85rem',
              fontWeight: isActive ? 700 : 500,
              cursor: 'pointer',
              transition: 'all 0.2s',
              opacity: isActive ? 1 : 0.6,
            }}
          >
            {isUserSign && (
              <span style={{
                position: 'absolute',
                top: -6,
                right: -6,
                fontSize: '0.6rem',
                background: 'var(--color-accent)',
                color: '#000',
                padding: '1px 6px',
                borderRadius: 6,
                fontWeight: 700,
                lineHeight: '16px',
              }}>
                TU SIGNO
              </span>
            )}
            <span style={{ marginRight: 6 }}>{sign.signo}</span>
            <span style={{ fontSize: '0.7rem', opacity: 0.6, fontWeight: 400 }}>
              ({sign.mesHebreo})
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}

function InfoBlock({ icon: Icon, title, children, color }) {
  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="card-body">
        <h3 className="section-title" style={{ marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon size={18} className="icon" style={{ color, flexShrink: 0 }} />
          <span>{title}</span>
        </h3>
        {children}
      </div>
    </motion.div>
  );
}

function SectionRenderer({ section, data, color }) {
  const Icon = SECTION_ICONS[section];
  const title = SECTION_TITLES[section];

  if (section === 'pruebasCamino' || section === 'nisyotPrincipales' || section === 'recomendacionesCamino' || section === 'practicasTikun' || section === 'fechasCiclos') {
    return (
      <InfoBlock icon={Icon} title={title} color={color}>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {data[section].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              style={{
                padding: '12px 16px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: 8,
                border: `1px solid ${color}10`,
                borderLeft: `3px solid ${color}40`,
                color: 'var(--color-text-secondary)',
                fontSize: '0.82rem',
                lineHeight: 1.55,
              }}
            >
              <span style={{ color, fontWeight: 700, marginRight: 6 }}>{i + 1}.</span>
              {item}
            </motion.li>
          ))}
        </ul>
      </InfoBlock>
    );
  }

  if (section === 'sintesisMision' || section === 'tikunGeneral') {
    return (
      <InfoBlock icon={Icon} title={title} color={color}>
        <div style={{
          padding: '16px 20px',
          background: `linear-gradient(135deg, ${color}08, transparent)`,
          borderRadius: 10,
          border: `1px solid ${color}15`,
          color: 'var(--color-text-secondary)',
          fontSize: '0.85rem',
          lineHeight: 1.7,
        }}>
          {data[section]}
        </div>
      </InfoBlock>
    );
  }

  return null;
}

function SignDetail({ sign }) {
  const color = ZODIAC_COLORS[sign.signo];
  const sections = Object.keys(SECTION_TITLES);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <motion.div
        className="glass-card"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: `linear-gradient(135deg, ${color}12, rgba(255,255,255,0.02))`,
          border: `1px solid ${color}25`,
        }}
      >
        <div className="card-body">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'flex-start' }}>
            <div style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: `${color}18`,
              border: `2px solid ${color}50`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: `0 0 24px ${color}20`,
            }}>
              <span style={{
                fontFamily: 'serif',
                fontSize: '1.8rem',
                color,
                fontWeight: 700,
                lineHeight: 1,
              }}>
                {sign.letraSigno.hebrea}
              </span>
            </div>

            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'baseline', marginBottom: 4 }}>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'var(--color-text-primary)',
                  margin: 0,
                }}>
                  {sign.signo}
                </h2>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  color: 'var(--color-text-muted)',
                  fontWeight: 500,
                }}>
                  · Mes de {sign.mesHebreo}
                </span>
              </div>

              <p style={{
                color: 'var(--color-text-muted)',
                fontSize: '0.82rem',
                fontStyle: 'italic',
                margin: '0 0 10px',
              }}>
                {sign.conceptoClave}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                <span className="badge" style={{
                  background: `${color}15`,
                  border: `1px solid ${color}25`,
                  color,
                  fontSize: '0.72rem',
                  padding: '3px 10px',
                  borderRadius: 6,
                  fontWeight: 600,
                }}>
                  <Globe size={11} className="icon" /> {sign.planeta}
                </span>
                <span className="badge" style={{
                  background: `${color}15`,
                  border: `1px solid ${color}25`,
                  color,
                  fontSize: '0.72rem',
                  padding: '3px 10px',
                  borderRadius: 6,
                  fontWeight: 600,
                }}>
                  {sign.elemento}
                </span>
                <span className="badge" style={{
                  background: `${color}15`,
                  border: `1px solid ${color}25`,
                  color,
                  fontSize: '0.72rem',
                  padding: '3px 10px',
                  borderRadius: 6,
                  fontWeight: 600,
                }}>
                  {sign.parteCuerpo}
                </span>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: 16,
              padding: '10px 14px',
              background: 'rgba(0,0,0,0.15)',
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.05)',
              flexShrink: 0,
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'serif',
                  fontSize: '1.5rem',
                  color: 'var(--color-text-primary)',
                  fontWeight: 700,
                  marginBottom: 2,
                }}>{sign.letraSigno.hebrea}</div>
                <div style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                  {sign.letraSigno.nombre}
                </div>
                <div style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>
                  Signo
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'serif',
                  fontSize: '1.5rem',
                  color: 'var(--color-text-primary)',
                  fontWeight: 700,
                  marginBottom: 2,
                }}>{sign.letraPlaneta.hebrea}</div>
                <div style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                  {sign.letraPlaneta.nombre}
                </div>
                <div style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>
                  Planeta
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {sections.map((section, i) => (
        <SectionRenderer
          key={section}
          section={section}
          data={sign}
          color={color}
        />
      ))}
    </div>
  );
}

function VidasPasadasArticle() {
  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.15 }}
    >
      <div className="card-body">
        <h3 className="section-title" style={{ marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
          <BookOpen size={18} className="icon" style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
          <span>Influencia de Vidas Pasadas</span>
        </h3>

        <div style={{
          padding: '16px 20px',
          background: 'rgba(139,92,246,0.06)',
          borderRadius: 10,
          border: '1px solid rgba(139,92,246,0.12)',
          color: 'var(--color-text-secondary)',
          fontSize: '0.82rem',
          lineHeight: 1.7,
          marginBottom: 12,
        }}>
          <p style={{ margin: '0 0 12px' }}>
            Según la Cábala, nuestra carta astral tiene una posición que revela los secretos de nuestras vidas pasadas: el <strong>Nodo Lunar</strong>, también llamado <strong>punto de corrección (Tikun)</strong>. Esta posición abarca dos aspectos diametralmente opuestos que la astrología convencional llama <strong>"nodo sur"</strong> y <strong>"nodo norte"</strong>.
          </p>
          <p style={{ margin: '0 0 12px' }}>
            El <strong>nodo sur</strong> describe el equipaje que trajimos de vidas anteriores — las decisiones que limitaron el crecimiento de nuestra alma. El <strong>nodo norte</strong> describe el camino de corrección en nuestra vida presente — el Tikun que debemos realizar para evolucionar espiritualmente.
          </p>
          <p style={{ margin: 0 }}>
            El estudio de este punto revela los problemas que enfrentamos perpetuamente, la naturaleza de nuestros impedimentos y los aspectos que tenemos que arreglar para obtener una conciencia superior. Si no emprendemos un trabajo espiritual serio durante nuestra encarnación actual, inevitablemente volveremos al mismo proceso y enfrentaremos nuevamente los mismos obstáculos.
          </p>
        </div>

        <div style={{
          padding: '16px 20px',
          background: 'rgba(250,204,21,0.05)',
          borderRadius: 10,
          border: '1px solid rgba(250,204,21,0.12)',
          color: 'var(--color-text-secondary)',
          fontSize: '0.82rem',
          lineHeight: 1.7,
        }}>
          <p style={{ margin: '0 0 8px', fontWeight: 600, color: 'var(--color-text-primary)' }}>
            ¿Cómo se determina tu Tikun?
          </p>
          <p style={{ margin: '0 0 8px' }}>
            El Nodo Lunar se mueve lentamente a través del zodíaco, cambiando de signo aproximadamente cada 1.5 a 2 años. Los sabios cabalistas, basados en las enseñanzas del Zóhar y el Séfer Yetzirá, calcularon el movimiento exacto del Nodo Lunar desde el año 1900 hasta el 2050.
          </p>
          <p style={{ margin: '0 0 8px' }}>
            Dependiendo del año y el día exacto de tu nacimiento, tu Nodo Lunar (tu punto de Tikun) cae en un signo específico. Por ejemplo, las personas nacidas entre el <strong>6 de julio de 1978 y el 5 de enero de 1980</strong> tienen su Tikun en <strong>Virgo</strong>, mientras que quienes nacieron entre el <strong>8 de enero de 1977 y el 5 de julio de 1978</strong> lo tienen en <strong>Libra</strong>.
          </p>
          <p style={{ margin: 0 }}>
            Esta tabla fue extraída del libro <em>"Astrología Cabalística y el Significado de Nuestras Vidas"</em> del Rav Philip S. Berg, director del Centro de la Cábala, quien dedicó su vida a difundir esta sabiduría ancestral. Cada período en la tabla corresponde al movimiento real del Nodo Lunar calculado por los cabalistas.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function TikunProfile({ tikunSign, zodiacSign }) {
  if (!tikunSign) return null;
  const color = ZODIAC_COLORS[tikunSign.signo];

  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45 }}
      style={{
        background: `linear-gradient(135deg, ${color}15, rgba(255,255,255,0.02))`,
        border: `1px solid ${color}30`,
        borderLeft: `4px solid ${color}`,
      }}
    >
      <div className="card-body">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'flex-start', marginBottom: 16 }}>
          <div style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: `${color}18`,
            border: `2px solid ${color}50`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Compass size={26} style={{ color }} />
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{
              display: 'inline-block',
              background: `${color}20`,
              color,
              fontSize: '0.65rem',
              fontWeight: 700,
              padding: '2px 10px',
              borderRadius: 6,
              marginBottom: 6,
              letterSpacing: '0.5px',
            }}>
              TU TIKUN PERSONAL
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem',
              fontWeight: 800,
              color: 'var(--color-text-primary)',
              margin: 0,
            }}>
              {tikunSign.signo}
              <span style={{ fontWeight: 400, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                {' · '}Mes de {tikunSign.mesHebreo}
              </span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', margin: '4px 0 0' }}>
              Tu signo zodiacal es <strong>{zodiacSign?.signo}</strong>, pero esta vida tu punto de corrección (Tikun) está en <strong>{tikunSign.signo}</strong>
            </p>
          </div>
        </div>

        <div style={{
          padding: '16px 20px',
          background: 'rgba(0,0,0,0.15)',
          borderRadius: 10,
          border: `1px solid ${color}15`,
          color: 'var(--color-text-secondary)',
          fontSize: '0.85rem',
          lineHeight: 1.7,
        }}>
          {tikunSign.tikunGeneral}
        </div>
      </div>
    </motion.div>
  );
}

export default function EnergiasTab({ profile, birthdate }) {
  const userSign = getKabbalisticSign(birthdate);
  const tikunSign = getTikunSign(birthdate);
  const [activeSignId, setActiveSignId] = useState(userSign?.id ?? 0);

  return (
    <div className="tab-section">
      <div className="tab-section-header">
        <h2 className="tab-section-title">Astrología Kabalística</h2>
        <p className="tab-section-desc">
          La sabiduría ancestral del Zóhar y el Séfer Yetzirá aplicada a los 12 signos del Zodíaco hebreo
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {tikunSign && (
          <TikunProfile tikunSign={tikunSign} zodiacSign={userSign} />
        )}

        <VidasPasadasArticle />

        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="card-body">
            <h3 className="section-title" style={{ marginBottom: 16 }}>
              <Sun size={18} className="icon" style={{ color: 'var(--color-accent)' }} />
              Signos del Zodíaco
            </h3>
            <SignSelector
              signs={ASTROLOGIA_KABALISTICA}
              activeId={activeSignId}
              onSelect={setActiveSignId}
              userSignId={userSign?.id}
            />
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSignId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            <SignDetail
              sign={ASTROLOGIA_KABALISTICA.find(s => s.id === activeSignId)}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
