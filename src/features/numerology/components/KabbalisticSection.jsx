import { memo } from 'react';
import { Compass, Heart, User, Star, Star as StarIcon, Wind, Globe, Palette, Sparkles, Sun, Moon, Zap, Crown } from 'lucide-react';
import { getLetter, getSephirah } from '../data/numerologyData';
import { colorHex } from '../utils/helpers';

const NUMBERS = [
  { key: 'destiny', label: 'Destino', icon: Compass },
  { key: 'soul', label: 'Alma', icon: Heart },
  { key: 'personality', label: 'Personalidad', icon: User },
  { key: 'mission', label: 'Misión', icon: Star },
];

const ICON_MAP = {
  wind: Wind,
  globe: Globe,
  palette: Palette,
  crown: Crown,
};

const ElementIcon = Wind;
const PlanetIcon = Globe;
const ColorIcon = Palette;

const KabbalisticCard = memo(function KabbalisticCard({ letter, number, label, icon: Icon }) {
  const sephirah = number <= 9 ? getSephirah(number) : null;

  return (
    <article className="kabbalistic-card">
      <div className="kabbalistic-header">
        <span className="kabbalistic-hebrew">{letter.hebrew}</span>
        <div className="kabbalistic-meta">
          <h3 className="kabbalistic-card-title">
            <Icon size={16} className="icon" /> {label}
            <span className="kabbalistic-number">{number}</span>
          </h3>
          <span className="kabbalistic-letter-name">{letter.name} — {letter.literal}</span>
        </div>
      </div>

      <p className="kabbalistic-esoteric">{letter.esoteric}</p>

      <div className="kabbalistic-tags">
        {letter.element && (
          <span className="tag tag-element"><ElementIcon size={12} /> {letter.element}</span>
        )}
        {letter.planet && (
          <span className="tag tag-planet"><PlanetIcon size={12} /> {letter.planet}</span>
        )}
        {letter.color && (
          <span className="tag tag-color" style={{ '--tag-color': colorHex(letter.color) }}>
            <ColorIcon size={12} /> {letter.color}
          </span>
        )}
        {letter.tarot && (
          <span className="tag tag-tarot"><Sparkles size={12} /> {letter.tarot}</span>
        )}
      </div>

      <div className="kabbalistic-detail-row">
        <div className="kabbalistic-detail-item">
          <span className="kabbalistic-detail-label">Sephirah</span>
          <span className="kabbalistic-detail-value">{letter.sephirah}</span>
        </div>
        <div className="kabbalistic-detail-item">
          <span className="kabbalistic-detail-label">Cuerpo</span>
          <span className="kabbalistic-detail-value">{letter.bodyPart || '—'}</span>
        </div>
      </div>

      {letter.positive && (
        <div className="trait-tier trait-positive">
          <h4><Sun size={14} className="icon" /> Positivo</h4>
          <p>{letter.positive}</p>
        </div>
      )}
      {letter.negative && (
        <div className="trait-tier trait-negative">
          <h4><Moon size={14} className="icon" /> Negativo</h4>
          <p>{letter.negative}</p>
        </div>
      )}
      {letter.destructive && (
        <div className="trait-tier trait-destructive">
          <h4><Zap size={14} className="icon" /> Destructivo</h4>
          <p>{letter.destructive}</p>
        </div>
      )}

      <div className="kabbalistic-attributes">
        <strong>Atributos:</strong> {letter.attributes}
      </div>
      <div className="kabbalistic-concepts">
        <strong>Conceptos:</strong> {letter.concepts}
      </div>
      {letter.meaning && (
        <div className="kabbalistic-master-meaning">
          <Crown size={16} className="icon" /> {letter.meaning}
        </div>
      )}
    </article>
  );
});

function PlaceholderCard({ number, label, icon: Icon }) {
  return (
    <article className="kabbalistic-card">
      <h3 className="kabbalistic-card-title">
        <Icon size={16} /> {label} — {number}
      </h3>
      <p className="kabbalistic-empty">Sin correspondencia disponible</p>
    </article>
  );
}

export default function KabbalisticSection({ results }) {
  return (
    <section className="detail-section" aria-label="Correspondencias cabalísticas" style={{ borderColor: 'rgba(245, 158, 11, 0.1)' }}>
      <h3><StarIcon size={20} className="icon" style={{ color: 'var(--color-accent)' }} /> Correspondencias Cabalísticas</h3>
      <p className="kabbalistic-subtitle">
        Interpretación de tus números según las 22 letras hebreas, el Sepher Yetzirah y el Árbol de la Vida.
      </p>

      {!results ? (
        <div className="kabbalistic-placeholder">
          <p>Ingresa tus datos para ver las correspondencias cabalísticas.</p>
        </div>
      ) : (
        <div className="kabbalistic-grid">
          {NUMBERS.map(({ key, label, icon }) => {
            const n = results[key];
            const letter = getLetter(n);
            if (!letter) {
              return <PlaceholderCard key={key} number={n} label={label} icon={icon} />;
            }
            return (
              <KabbalisticCard
                key={key}
                letter={letter}
                number={n}
                label={label}
                icon={icon}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
