import { motion } from 'framer-motion';
import { Book } from 'lucide-react';

export default function AboutPage() {
  return (
    <motion.section
      className="explanation-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="glass-card">
        <div className="card-body">
          <h3 className="section-title">
            <Book size={24} className="icon" />
            Sobre la Numerología Pitagórica y Cabalística
          </h3>
          <p>La numerología es una antigua práctica que estudia la relación mística entre los números y los eventos en la vida humana. Esta aplicación combina dos tradiciones poderosas:</p>
          <ul>
            <li><strong>Numerología Pitagórica</strong>: Basada en las enseñanzas del matemático griego Pitágoras, que asignó valores numéricos a las letras y desarrolló un sistema para interpretar la personalidad y el destino.</li>
            <li><strong>Numerología Cabalística</strong>: Originada en la tradición mística judía, enfocada en descubrir significados ocultos en los nombres y palabras mediante la asignación numérica de las letras hebreas y las 22 letras del Sepher Yetzirah.</li>
          </ul>
          <p>Este sistema incorpora las correspondencias de las 22 letras del alfabeto hebreo, los 10 Sephiroth del Árbol de la Vida, y las tablas planetarias de la tradición cabalística, proporcionando una visión profunda de tu personalidad, talentos, desafíos y propósito de vida.</p>
          <p className="explanation-source"><strong>Fuente:</strong> Shirley Blackwell Lawrence — <em>&quot;The Hidden Meaning of Numbers and Letters&quot;</em> y <em>&quot;La Numerología a la luz del Árbol de Vida y las Letras Hebraicas&quot;</em>.</p>
        </div>
      </div>
    </motion.section>
  );
}
