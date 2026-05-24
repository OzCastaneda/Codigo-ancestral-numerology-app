import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import ContactButtons from './ContactButtons';
import ContactForm from './ContactForm';
import ConsultationCards from './ConsultationCards';

export default function ContactSection() {
  return (
    <div className="contact-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="contact-heading"
        style={{
          textAlign: 'center',
          marginBottom: 36,
        }}
      >
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2rem',
          fontWeight: 800,
          color: 'var(--color-text-primary)',
          margin: '0 0 12px',
          letterSpacing: '-0.02em',
        }}>
          Conéctate con{' '}
          <span style={{ background: 'linear-gradient(135deg, #8B5CF6, #F59E0B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Código Ancestral
          </span>
        </h2>
        <p style={{
          color: 'var(--color-text-muted)',
          fontSize: '0.95rem',
          lineHeight: 1.7,
          maxWidth: 520,
          margin: '0 auto',
        }}>
          Descubre el mensaje oculto de tu alma y recibe una lectura personalizada diseñada para tu energía única.
        </p>
      </motion.div>

      <div className="contact-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 28,
        alignItems: 'start',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="card-body">
              <h3 className="section-title" style={{ marginBottom: 14 }}>
                <MessageCircle size={18} className="icon" />
                Contáctanos Directamente
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: 18 }}>
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
              <h3 className="section-title" style={{ marginBottom: 14 }}>
                Tipos de Consulta
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: 14 }}>
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
            <h3 className="section-title" style={{ marginBottom: 14 }}>
              Solicita tu Consulta Personalizada
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: 16 }}>
              Completa el formulario y te contactaremos para coordinar tu sesión.
            </p>
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
