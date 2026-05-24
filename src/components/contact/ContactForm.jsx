import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const CONSULTATION_TYPES = [
  'Numerología Cabalística',
  'Compatibilidad de Pareja',
  'Lectura Kármica',
  'Propósito de Vida',
  'Consulta Espiritual Completa',
];

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  birthdate: '',
  consultType: '',
  message: '',
};

const EMAIL_ADDR = 'angelusignis777@gmail.com';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const hasEmailJS = !!(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);

function validateForm(data) {
  const errors = {};
  if (!data.name.trim()) errors.name = 'El nombre es requerido';
  if (!data.email.trim()) {
    errors.email = 'El email es requerido';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Email no válido';
  }
  if (!data.phone.trim()) {
    errors.phone = 'El teléfono es requerido';
  } else if (!/^[\d\s\+\-()]{7,20}$/.test(data.phone)) {
    errors.phone = 'Teléfono no válido';
  }
  if (!data.consultType) errors.consultType = 'Selecciona un tipo de consulta';
  return errors;
}

function FormField({ label, error, children }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{
        display: 'block',
        color: 'var(--color-text-secondary)',
        fontSize: '0.82rem',
        fontWeight: 500,
        marginBottom: 6,
      }}>
        {label}
      </label>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ color: '#F87171', fontSize: '0.75rem', margin: '4px 0 0' }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

function inputStyle(hasError) {
  return {
    width: '100%',
    padding: '12px 14px',
    background: hasError ? 'rgba(239,68,68,0.06)' : 'rgba(255,255,255,0.04)',
    border: `1px solid ${hasError ? 'rgba(239,68,68,0.3)' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: 10,
    color: 'var(--color-text-primary)',
    fontFamily: 'inherit',
    fontSize: '0.88rem',
    outline: 'none',
    transition: 'border-color 0.2s ease, background 0.2s ease',
    boxSizing: 'border-box',
  };
}

function buildMailtoUrl(form) {
  const subject = encodeURIComponent('Consulta Numerológica Personalizada');
  const body = encodeURIComponent(
    `Nuevo mensaje de contacto:\n\n` +
    `Nombre: ${form.name}\n` +
    `Email: ${form.email}\n` +
    `WhatsApp: ${form.phone}\n` +
    `Fecha de Nacimiento: ${form.birthdate || 'No especificada'}\n` +
    `Tipo de Consulta: ${form.consultType}\n` +
    `Mensaje: ${form.message || 'Sin mensaje adicional'}`
  );
  return `mailto:${EMAIL_ADDR}?subject=${subject}&body=${body}`;
}

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }, [errors]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('sending');

    try {
      if (hasEmailJS) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            from_email: form.email,
            phone: form.phone,
            birthdate: form.birthdate || 'No especificada',
            consult_type: form.consultType,
            message: form.message || 'Sin mensaje adicional',
            to_email: EMAIL_ADDR,
          },
          EMAILJS_PUBLIC_KEY
        );
      } else {
        window.location.href = buildMailtoUrl(form);
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      setStatus('success');
      setForm(INITIAL_STATE);
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Error al enviar:', err);

      try {
        window.location.href = buildMailtoUrl(form);
      } catch {}

      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  }, [form]);

  const isSending = status === 'sending';

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }} noValidate>
      <FormField label="Nombre completo *" error={errors.name}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Tu nombre completo"
          style={inputStyle(!!errors.name)}
          disabled={isSending}
        />
      </FormField>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <FormField label="Email *" error={errors.email}>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            style={inputStyle(!!errors.email)}
            disabled={isSending}
          />
        </FormField>
        <FormField label="WhatsApp *" error={errors.phone}>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+57 322 835 2645"
            style={inputStyle(!!errors.phone)}
            disabled={isSending}
          />
        </FormField>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <FormField label="Fecha de nacimiento">
          <input
            type="date"
            name="birthdate"
            value={form.birthdate}
            onChange={handleChange}
            style={inputStyle(false)}
            disabled={isSending}
          />
        </FormField>
        <FormField label="Tipo de consulta *" error={errors.consultType}>
          <select
            name="consultType"
            value={form.consultType}
            onChange={handleChange}
            style={inputStyle(!!errors.consultType)}
            disabled={isSending}
          >
            <option value="">Selecciona una opción</option>
            {CONSULTATION_TYPES.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </FormField>
      </div>

      <FormField label="Mensaje adicional">
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Cuéntanos más sobre lo que te gustaría explorar..."
          rows={4}
          style={{
            ...inputStyle(false),
            resize: 'vertical',
            minHeight: 80,
          }}
          disabled={isSending}
        />
      </FormField>

      <motion.button
        type="submit"
        className="btn-premium"
        disabled={isSending}
        whileHover={isSending ? {} : { scale: 1.02 }}
        whileTap={isSending ? {} : { scale: 0.98 }}
        style={{
          width: '100%',
          marginTop: 4,
          opacity: isSending ? 0.7 : 1,
          cursor: isSending ? 'wait' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          padding: '14px 24px',
        }}
      >
        {isSending ? (
          <><Loader2 size={18} className="spin" /> Enviando...</>
        ) : status === 'success' ? (
          <><CheckCircle size={18} /> ¡Solicitud enviada!</>
        ) : status === 'error' ? (
          <><AlertCircle size={18} /> Error al enviar</>
        ) : (
          <><Send size={18} /> Enviar Solicitud</>
        )}
      </motion.button>

      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            textAlign: 'center',
            color: '#34D399',
            fontSize: '0.82rem',
            marginTop: 12,
          }}
        >
          ✨ Tu solicitud fue enviada correctamente. Te contactaremos pronto.
        </motion.p>
      )}

      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            textAlign: 'center',
            color: '#F87171',
            fontSize: '0.82rem',
            marginTop: 12,
          }}
        >
          ❌ Error enviando el mensaje. Intenta de nuevo o escríbenos directamente por{' '}
          <a
            href="https://wa.me/573228352645"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#25D366', textDecoration: 'underline' }}
          >
            WhatsApp
          </a>
          .
        </motion.p>
      )}
    </form>
  );
}
