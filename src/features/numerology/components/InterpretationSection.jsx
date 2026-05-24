import { memo } from 'react';
import { Compass, Heart, User, Star, BookOpen, Sun, Moon, Sparkles } from 'lucide-react';
import { getInterpretations } from '../data/numerologyInterpretations';

const CATEGORY_MAP = [
  { key: 'destiny', categoria: 'Destino', title: 'Número de Destino', icon: Compass },
  { key: 'soul', categoria: 'MotivacionAlma', title: 'Impulso del Alma', icon: Heart },
  { key: 'personality', categoria: 'PersonalidadExpresion', title: 'Personalidad / Expresión', icon: User },
  { key: 'mission', categoria: 'YoInternoKarmico', title: 'Yo Interno / Kármico', icon: Star },
];

const InterpretationCard = memo(function InterpretationCard({ interpretation, title, icon: Icon }) {
  if (!interpretation) return null;

  return (
    <article className="interpretation-card">
      <h3 className="interpretation-card-title">
        <Icon size={18} className="icon" />
        {title}
        <span className="kabbalistic-number">{interpretation.numero}</span>
      </h3>

      <p className="interpretation-meaning">{interpretation.significado}</p>

      <div className="interpretation-lists">
        <div className="interpretation-list-block interpretation-strengths">
          <h4><Sun size={14} className="icon" /> Fortalezas</h4>
          <ul>
            {interpretation.fortalezas.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </div>
        <div className="interpretation-list-block interpretation-weaknesses">
          <h4><Moon size={14} className="icon" /> Debilidades</h4>
          <ul>
            {interpretation.debilidades.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </div>
        <div className="interpretation-list-block interpretation-karmic">
          <h4><Sparkles size={14} className="icon" /> Aprendizajes Kármicos</h4>
          <ul>
            {interpretation.aprendizajesKarmicos.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </div>
      </div>

      <div className="interpretation-energy">
        <p><strong>Energía Espiritual:</strong> {interpretation.energiaEspiritual}</p>
      </div>

      {interpretation.compatibilidades.length > 0 && (
        <div className="interpretation-compat">
          <p><strong>Compatibilidades:</strong> {interpretation.compatibilidades.join(' · ')}</p>
        </div>
      )}
    </article>
  );
});

export default function InterpretationSection({ results }) {
  if (!results) return null;

  return (
    <section className="detail-section" aria-label="Interpretación numerológica" style={{ borderColor: 'rgba(139, 92, 246, 0.1)' }}>
      <h3><BookOpen size={20} className="icon" style={{ color: 'var(--color-primary-light)' }} /> Interpretación de tus Números</h3>

      <div className="interpretation-grid">
        {CATEGORY_MAP.map(({ key, categoria, title, icon: Icon }) => {
          const num = results[key];
          const interpretation = getInterpretations(num, categoria);
          if (!interpretation) return null;

          return (
            <InterpretationCard
              key={key}
              interpretation={interpretation}
              title={title}
              icon={Icon}
            />
          );
        })}
      </div>
    </section>
  );
}
