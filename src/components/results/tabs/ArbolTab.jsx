import { motion } from 'framer-motion';
import { TreePine, Info } from 'lucide-react';
import TreeOfLife from '../../kabbalah/TreeOfLife';
import KabbalisticSection from '../../../features/numerology/components/KabbalisticSection';

export default function ArbolTab({ profile }) {
  const results = profile?.results;

  if (!results) return null;

  return (
    <div className="tab-section">
      <div className="tab-section-header">
        <h2 className="tab-section-title">Árbol Cabalístico</h2>
        <p className="tab-section-desc">
          Los 10 Sephiroth, las 22 letras hebreas y sus conexiones espirituales
        </p>
      </div>

      <div className="tree-layout" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 24,
        alignItems: 'start',
      }}>
        <div>
          <TreeOfLife />
        </div>

        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="card-body">
            <h3 className="section-title" style={{ marginBottom: 12 }}>
              <Info size={18} className="icon" />
              Sobre el Árbol de la Vida
            </h3>
            <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: 1.8 }}>
              <p>
                El Árbol de la Vida (<em>Etz HaChayim</em>) es un símbolo central de la Cábala que representa la estructura del universo y el camino del alma hacia la unión con lo divino.
              </p>
              <p style={{ marginTop: 12 }}>
                Consta de <strong style={{ color: 'var(--color-primary-light)' }}>10 Sephiroth</strong> (emanaciones divinas) conectados por <strong style={{ color: 'var(--color-accent)' }}>22 senderos</strong> que corresponden a las 22 letras del alfabeto hebreo.
              </p>
              <p style={{ marginTop: 12 }}>
                Cada Sephirah representa un atributo divino y una etapa en el proceso de creación y evolución espiritual.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div style={{ marginTop: 28 }}>
        <KabbalisticSection results={results} />
      </div>
    </div>
  );
}
