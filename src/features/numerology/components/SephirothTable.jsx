import { TreePine } from 'lucide-react';
import { KABBALAH } from '../data/numerologyData';

export default function SephirothTable() {
  return (
    <section className="sephiroth-section" aria-label="Árbol de la Vida - Los 10 Sephiroth">
      <div className="glass-card">
        <div className="card-body">
          <h2 className="section-title">
            <TreePine size={22} className="icon" />
            Árbol de la Vida — Los 10 Sephiroth
          </h2>
          <p className="kabbalistic-subtitle">Correspondencia entre los números, las sephiroth y el cuerpo humano (Adam Kadmon).</p>
          <div className="sephiroth-table-wrapper">
            <table className="sephiroth-table">
              <thead>
                <tr>
                  <th>N.º</th>
                  <th>Sephirah</th>
                  <th>Significado</th>
                  <th>Atributo</th>
                  <th>Parte del Cuerpo</th>
                </tr>
              </thead>
              <tbody>
                {KABBALAH.sephiroth.map(s => (
                  <tr key={s.n}>
                    <td className="sephiroth-n">{s.n}</td>
                    <td className="sephiroth-name">{s.name}</td>
                    <td className="sephiroth-meaning">{s.meaning}</td>
                    <td className="sephiroth-attr">{s.attr}</td>
                    <td className="sephiroth-body">{s.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
