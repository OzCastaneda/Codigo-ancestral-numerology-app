import { motion } from 'framer-motion';
import { Globe, Sun, Moon, Wind, Zap, Sparkles, Palette, Compass, Heart, User, Star } from 'lucide-react';
import { KABBALAH } from '../../../features/numerology/data/numerologyData';
import { getNumberColor } from '../../charts/chartConfig';
import AstrologyProfile from '../../../features/numerology/components/AstrologyProfile';

const PLANETARY_ENERGIES = [
  { planet: 'Sol', color: '#F59E0B', element: 'Fuego', vibration: 'Voluntad, poder, individualidad' },
  { planet: 'Luna', color: '#C4B5FD', element: 'Agua', vibration: 'Emoción, intuición, receptividad' },
  { planet: 'Marte', color: '#EF4444', element: 'Fuego', vibration: 'Acción, impulso, coraje' },
  { planet: 'Mercurio', color: '#22D3EE', element: 'Aire', vibration: 'Comunicación, intelecto, adaptabilidad' },
  { planet: 'Júpiter', color: '#3B82F6', element: 'Aire', vibration: 'Expansión, sabiduría, abundancia' },
  { planet: 'Venus', color: '#EC4899', element: 'Tierra', vibration: 'Amor, belleza, armonía' },
  { planet: 'Saturno', color: '#10B981', element: 'Tierra', vibration: 'Estructura, disciplina, responsabilidad' },
];

const ARCHETYPES = [
  { num: 1, name: 'El Creador', desc: 'Líder visionario que inicia nuevos ciclos', color: '#8B5CF6' },
  { num: 2, name: 'La Mediadora', desc: 'Puente entre opuestos, diplomática natural', color: '#06B6D4' },
  { num: 3, name: 'La Expresiva', desc: 'Artista y comunicadora que embellece el mundo', color: '#F59E0B' },
  { num: 4, name: 'El Constructor', desc: 'Arquitecto de realidades sólidas y estables', color: '#10B981' },
  { num: 5, name: 'El Explorador', desc: 'Aventurero que busca libertad y experiencia', color: '#F97316' },
  { num: 6, name: 'El Guardián', desc: 'Protector y consejero que sirve con amor', color: '#EC4899' },
  { num: 7, name: 'El Sabio', desc: 'Buscador de verdad y conocimiento profundo', color: '#3B82F6' },
  { num: 8, name: 'El Poderoso', desc: 'Manifestador de abundancia y autoridad', color: '#6366F1' },
  { num: 9, name: 'El Sabio Universal', desc: 'Compasivo sanador que trasciende el ego', color: '#14B8A6' },
];

function EnergyCard({ icon: Icon, title, children, color = 'var(--color-primary-light)', delay = 0 }) {
  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="card-body">
        <h3 className="section-title" style={{ marginBottom: 14 }}>
          <Icon size={18} className="icon" style={{ color }} />
          {title}
        </h3>
        {children}
      </div>
    </motion.div>
  );
}

function PlanetsSection() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
      {PLANETARY_ENERGIES.map((e, i) => (
        <motion.div
          key={e.planet}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 + i * 0.04 }}
          style={{
            padding: '14px 16px',
            background: `linear-gradient(135deg, ${e.color}08, transparent)`,
            border: `1px solid ${e.color}15`,
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div style={{
            width: 34,
            height: 34,
            borderRadius: '50%',
            background: `${e.color}15`,
            border: `1px solid ${e.color}30`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Globe size={15} style={{ color: e.color }} />
          </div>
          <div style={{ minWidth: 0, flex: 1 }}>
            <p style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.85rem', margin: 0 }}>
              {e.planet}
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.72rem', margin: '1px 0 0' }}>
              {e.element} · {e.vibration}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ArchetypesSection({ results }) {
  if (!results) return null;

  const activeArchetypes = [
    { key: 'destiny', label: 'Destino', icon: Compass },
    { key: 'soul', label: 'Alma', icon: Heart },
    { key: 'personality', label: 'Personalidad', icon: User },
    { key: 'mission', label: 'Misión', icon: Star },
  ].map(({ key, label, icon }) => {
    const num = results[key];
    const arch = ARCHETYPES.find(a => a.num === num);
    return { label, icon, num, arch };
  });

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
      {activeArchetypes.map(({ label, icon: Icon, num, arch }, i) => {
        const color = getNumberColor(num);
        return (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
            style={{
              padding: '16px 18px',
              background: `${color}08`,
              border: `1px solid ${color}20`,
              borderRadius: 12,
              textAlign: 'center',
            }}
          >
            <div style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: `${color}15`,
              border: `2px solid ${color}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 10px',
              boxShadow: `0 0 20px ${color}20`,
            }}>
              <Icon size={18} style={{ color }} />
            </div>
            <p style={{ color, fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>
              {num}
            </p>
            <p style={{ color: 'var(--color-text-primary)', fontSize: '0.85rem', fontWeight: 600, margin: '4px 0 2px' }}>
              {label}: {arch?.name || '—'}
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', margin: 0, lineHeight: 1.4 }}>
              {arch?.desc || ''}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

function PlanetaryColorsSection() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 10 }}>
      {KABBALAH.planetaryColors.map((pc, i) => (
        <motion.div
          key={pc.planet}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 + i * 0.03 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '10px 14px',
            background: 'rgba(255,255,255,0.02)',
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.04)',
          }}
        >
          <div style={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: pc.color,
            flexShrink: 0,
            boxShadow: `0 0 8px ${pc.color}50`,
          }} />
          <div style={{ minWidth: 0, flex: 1 }}>
            <p style={{ color: 'var(--color-text-primary)', fontSize: '0.8rem', fontWeight: 600, margin: 0 }}>
              {pc.planet}
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.68rem', margin: 0 }}>
              {pc.color} · Nota {pc.note}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function EnergiasTab({ profile, birthdate }) {
  const results = profile?.results;

  return (
    <div className="tab-section">
      <div className="tab-section-header">
        <h2 className="tab-section-title">Energías</h2>
        <p className="tab-section-desc">
          Planetas, colores, chakras y arquetipos que vibran en tu perfil
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <EnergyCard icon={Globe} title="Planetas y Vibraciones" color="#F59E0B" delay={0.05}>
          <PlanetsSection />
        </EnergyCard>

        <EnergyCard icon={Sparkles} title="Arquetipos" color="#8B5CF6" delay={0.1}>
          <ArchetypesSection results={results} />
        </EnergyCard>

        <EnergyCard icon={Palette} title="Colores Planetarios" color="#EC4899" delay={0.15}>
          <PlanetaryColorsSection />
        </EnergyCard>

        <EnergyCard icon={Sun} title="Perfil Astrológico" color="#F59E0B" delay={0.2}>
          <AstrologyProfile results={results} birthdate={birthdate} />
        </EnergyCard>
      </div>
    </div>
  );
}
