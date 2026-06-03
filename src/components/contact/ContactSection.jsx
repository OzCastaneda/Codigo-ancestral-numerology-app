import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import ContactButtons from './ContactButtons';
import ContactForm from './ContactForm';
import ConsultationCards from './ConsultationCards';

export default function ContactSection() {
  return (
    <div className="contact-section px-4 sm:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="contact-heading text-center mb-8 sm:mb-9"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight mb-3"
          style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}
        >
          Conéctate con{' '}
          <span style={{ background: 'linear-gradient(135deg, #8B5CF6, #F59E0B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Código Ancestral
          </span>
        </h2>
        <p className="text-sm sm:text-base leading-relaxed max-w-lg mx-auto"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Descubre el mensaje oculto de tu alma y recibe una lectura personalizada diseñada para tu energía única.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7 items-start">
        <div className="flex flex-col gap-6">
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="card-body">
              <h3 className="section-title mb-3.5">
                <MessageCircle size={18} className="icon" />
                Contáctanos Directamente
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed mb-4"
                style={{ color: 'var(--color-text-muted)' }}>
                Elige el canal de tu preferencia para recibir atención personalizada.
              </p>
              <ContactButtons />
            </div>
          </motion.div>

          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="card-body">
              <h3 className="section-title mb-3.5">
                Tipos de Consulta
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed mb-3.5"
                style={{ color: 'var(--color-text-muted)' }}>
                Descubre qué tipo de lectura resuena con tu momento espiritual.
              </p>
              <ConsultationCards />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <div className="card-body">
            <h3 className="section-title mb-3.5">
              Solicita tu Consulta Personalizada
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed mb-4"
              style={{ color: 'var(--color-text-muted)' }}>
              Completa el formulario y te contactaremos para coordinar tu sesión.
            </p>
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
