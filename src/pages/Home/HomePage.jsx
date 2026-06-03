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
    <section className="grid grid-cols-1 md:grid-cols-[1fr_380px] xl:grid-cols-[1.1fr_1fr_400px] gap-6 md:gap-8 xl:gap-10 items-start px-4 sm:px-6 md:px-8 xl:px-0 py-6 md:py-8 xl:py-10">
      <div className="hidden xl:block home-grid-image">
        <div className="home-grid-starfield" aria-hidden="true" />
      </div>

      <div className="flex flex-col gap-5 pt-0 xl:pt-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="home-section-title">
            Tu alma tiene un{' '}
            <span className="home-section-gradient">
              código único
            </span>
          </h2>

          <p className="home-section-desc">
            La numerología revela la vibración secreta de tu nombre y fecha de nacimiento.
            Esta aplicación combina la{' '}
            <strong>tradición pitagórica</strong> con la{' '}
            <strong>sabiduría cabalística</strong> del
            Sepher Yetzirah y las 22 letras hebreas.
          </p>

          <ul className="home-benefit-list">
            {BENEFITS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="home-benefit-item"
                >
                  <span className="home-benefit-icon">
                    <Icon size={18} />
                  </span>
                  <span className="home-benefit-text">
                    {item.text}
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </div>

      <div className="md:sticky md:top-6">
        <InputForm />
      </div>
    </section>
  );
}
