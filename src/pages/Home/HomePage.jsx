import { motion } from 'framer-motion';
import { Sparkles, Brain, Heart, Compass, Star } from 'lucide-react';
import InputForm from '../../components/forms/InputForm';

const BENEFITS = [
  { icon: Compass, text: 'Descubre tu número de destino y propósito de vida' },
  { icon: Heart, text: 'Conoce los deseos profundos de tu alma' },
  { icon: Brain, text: 'Comprende tu personalidad y cómo te perciben' },
  { icon: Sparkles, text: 'Recibe guía numerológica personalizada' },
];

export default function HomePage() {
  return (
    <div className="home-page">
      {/* ---- Hero ---- */}
      <section className="home-hero">
        <div className="home-hero-orb" aria-hidden="true" />
        <div className="home-hero-glow" aria-hidden="true" />

        <motion.div
          className="home-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="home-hero-badge">
            <Sparkles size={14} />
            Numerología Pitagórica & Cabalística
          </div>

          <h1 className="home-hero-title">
            Tu alma tiene un{' '}
            <span className="text-gradient">
              código único
            </span>
          </h1>

          <p className="home-hero-subtitle">
            La numerología revela la vibración secreta de tu nombre y fecha de nacimiento
            combinando la <strong>tradición pitagórica</strong> con la{' '}
            <strong>sabiduría cabalística</strong> del Sepher Yetzirah y las 22 letras hebreas.
          </p>

          <a href="#calculate" className="home-cta">
            <Star size={18} />
            <span>Descubre tu perfil ahora</span>
          </a>

          <p className="home-hero-footnote">Sin registro — completamente gratis</p>
        </motion.div>
      </section>

      {/* ---- Features ---- */}
      <section className="home-features">
        <motion.div
          className="home-features-grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          {BENEFITS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="home-feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="home-feature-icon">
                  <Icon size={22} />
                </div>
                <p className="home-feature-text">{item.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ---- CTA + Form ---- */}
      <section id="calculate" className="home-cta-section">
        <motion.div
          className="home-cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="home-cta-heading">
            ¿Listo para{' '}
            <span className="text-gradient-fire">descifrar tu destino</span>?
          </h2>
          <p className="home-cta-desc">
            Ingresa tus datos y recibe un análisis completo de tu perfil numerológico.
          </p>
        </motion.div>

        <motion.div
          className="home-form-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <InputForm />
        </motion.div>
      </section>
    </div>
  );
}
