import { motion } from 'framer-motion';
import { Book } from 'lucide-react';

export default function AboutPage() {
  return (
    <motion.section
      className="explanation-section px-4 sm:px-6 md:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="glass-card">
        <div className="card-body p-5 sm:p-6 md:p-8">
          <h3 className="section-title text-lg sm:text-xl mb-4">
            <Book size={24} className="icon" />
            Sobre la Numerología Pitagórica y Cabalística
          </h3>
          <p className="text-sm sm:text-base leading-relaxed mb-4">La numerología es una antigua práctica que estudia la relación mística entre los números y los eventos en la vida humana. Esta aplicación combina dos tradiciones poderosas:</p>
          <ul className="text-sm sm:text-base space-y-3 mb-4">
            <li><strong>Numerología Pitagórica</strong>: Basada en las enseñanzas del matemático griego Pitágoras, que asignó valores numéricos a las letras y desarrolló un sistema para interpretar la personalidad y el destino.</li>
            <li><strong>Numerología Cabalística</strong>: Originada en la tradición mística judía, enfocada en descubrir significados ocultos en los nombres y palabras mediante la asignación numérica de las letras hebreas y las 22 letras del Sepher Yetzirah.</li>
          </ul>
          <p className="text-sm sm:text-base leading-relaxed">Este sistema incorpora las correspondencias de las 22 letras del alfabeto hebreo, los 10 Sephiroth del Árbol de la Vida, y las tablas planetarias de la tradición cabalística, proporcionando una visión profunda de tu personalidad, talentos, desafíos y propósito de vida.</p>
          <p className="explanation-source text-xs sm:text-sm mt-4"><strong>Fuente:</strong> Shirley Blackwell Lawrence — <em>&quot;The Hidden Meaning of Numbers and Letters&quot;</em> y <em>&quot;La Numerología a la luz del Árbol de Vida y las Letras Hebraicas&quot;</em>.</p>
        </div>
      </div>
    </motion.section>
  );
}
