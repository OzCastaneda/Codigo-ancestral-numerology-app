import { motion } from 'framer-motion';
import { Sparkles, Brain, Heart, Compass } from 'lucide-react';
import InputForm from '../../components/forms/InputForm';

const BENEFITS = [
  { icon: Compass, text: 'Descubre tu número de destino y propósito de vida' },
  { icon: Heart, text: 'Conoce los deseos profundos de tu alma' },
  { icon: Brain, text: 'Comprende tu personalidad y cómo te perciben' },
  { icon: Sparkles, text: 'Recibe guía numerológica personalizada' },
];

export default function HomePage() {
  return (
    <section className="home-hero">
      <div className="home-hero-image">
        <div className="home-hero-starfield" aria-hidden="true" />
      </div>

      <div className="home-hero-content">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="home-hero-title">
            Tu alma tiene un{' '}
            <span className="home-hero-gradient">
              código único
            </span>
          </h2>

          <p className="home-hero-description">
            La numerología revela la vibración secreta de tu nombre y fecha de nacimiento.
            Esta aplicación combina la{' '}
            <strong>tradición pitagórica</strong> con la{' '}
            <strong>sabiduría cabalística</strong> del
            Sepher Yetzirah y las 22 letras hebreas.
          </p>

          <ul className="home-hero-benefits">
            {BENEFITS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="home-hero-benefit-item"
                >
                  <span className="home-hero-benefit-icon">
                    <Icon size={18} />
                  </span>
                  <span className="home-hero-benefit-text">
                    {item.text}
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>

        <InputForm />
      </div>
    </section>
  );
}
