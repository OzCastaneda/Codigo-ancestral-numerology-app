import { Sun, Moon, Sparkles, Globe } from 'lucide-react';
import { KABBALAH } from '../data/numerologyData';
import { getZodiacSignIndex } from '../engine/numerologyEngine';

export default function AstrologyProfile({ results, birthdate }) {
  if (!results) {
    return (
      <section className="detail-section" aria-label="Perfil astrológico cabalístico">
        <h3><Sun size={20} className="icon" style={{ color: 'var(--color-accent)' }} /> Perfil Astrológico Cabalístico</h3>
        <p className="kabbalistic-subtitle">Tu signo zodiacal según la tradición hebrea, con las letras del Sepher Yetzirah que lo rigen.</p>
        <div className="placeholder-text"><p>Ingresa tu fecha de nacimiento para ver tu perfil astrológico.</p></div>
      </section>
    );
  }

  const idx = getZodiacSignIndex(birthdate);
  const sign = KABBALAH.zodiac[idx];

  if (!sign) {
    return (
      <section className="detail-section" aria-label="Perfil astrológico cabalístico">
        <h3><Sun size={20} className="icon" style={{ color: 'var(--color-accent)' }} /> Perfil Astrológico Cabalístico</h3>
        <div className="placeholder-text"><p>No se pudo determinar el signo.</p></div>
      </section>
    );
  }

  return (
    <section className="detail-section" aria-label="Perfil astrológico cabalístico" style={{ marginTop: 0 }}>
      <h3><Sun size={20} className="icon" style={{ color: 'var(--color-accent)' }} /> Perfil Astrológico Cabalístico</h3>
      <p className="kabbalistic-subtitle">Tu signo zodiacal según la tradición hebrea, con las letras del Sepher Yetzirah que lo rigen.</p>

      <div className="astrology-card">
        <div className="astrology-header">
          <div className="astrology-sign-icon">
            <span className="astrology-hebrew-letter">{sign.signLetter}</span>
            <span className="astrology-planet-letter">{sign.planetLetter}</span>
          </div>
          <div className="astrology-title-group">
            <h3 className="astrology-sign-name">{sign.name}</h3>
            <span className="astrology-hebrew-month">Mes de {sign.hebrewMonth}</span>
            <span className="astrology-planet"><Globe size={12} className="icon" /> {sign.planet}</span>
          </div>
          <div className="astrology-letters-info">
            <span><strong>Letra del signo:</strong> {sign.signLetter} ({sign.signLetterName})</span>
            <br />
            <span><strong>Letra del planeta:</strong> {sign.planetLetter} ({sign.planetLetterName})</span>
          </div>
        </div>

        <div className="astrology-body">
          <div className="astrology-traits astrology-traits-positive">
            <h4><Sun size={16} className="icon" /> Características Positivas</h4>
            <p>{sign.positive}</p>
          </div>
          <div className="astrology-traits astrology-traits-negative">
            <h4><Moon size={16} className="icon" /> Características Negativas</h4>
            <p>{sign.negative}</p>
          </div>
          <div className="astrology-tikkun">
            <h4><Sparkles size={16} className="icon" /> Tikkun (Corrección)</h4>
            <p>{sign.tikkun}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
