import { Music } from 'lucide-react';
import { KABBALAH } from '../data/numerologyData';
import { colorHex } from '../utils/helpers';

export default function PlanetaryGrid() {
  return (
    <section className="sephiroth-section" aria-label="Correspondencias planetarias" style={{ borderTop: 'none' }}>
      <div className="glass-card">
        <div className="card-body">
          <h2 className="section-title">
            <Music size={22} className="icon" />
            Tabla de Planetas, Notas y Colores
          </h2>
          <div className="planetary-grid">
            {KABBALAH.planetaryColors.map((p, i) => {
              const hex = colorHex(p.color);
              const textColor = p.color === 'Blanco' || p.color === 'Amarillo' ? '#222' : '#fff';
              return (
                <div className="planetary-card" key={i}>
                  <div className="planetary-card-planet">{p.planet}</div>
                  <div className="planetary-card-note">{p.note}</div>
                  <div className="planetary-card-color" style={{ background: hex, color: textColor }}>
                    {p.color}
                  </div>
                  <div className="planetary-card-vowel">{p.vowel}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
