import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, ExternalLink, ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = '573228352645';
const WHATSAPP_MSG = encodeURIComponent('Hola, deseo una consulta personalizada de numerología.');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;
const EMAIL_ADDR = 'angelusignis777@gmail.com';

function buildMailtoUrl() {
  const subject = encodeURIComponent('Consulta Numerológica Personalizada');
  const body = encodeURIComponent(
    'Hola,\n\nMe gustaría solicitar una consulta personalizada de numerología.\n\nQuedo atento a su respuesta.\n\nSaludos cordiales.'
  );
  return `mailto:${EMAIL_ADDR}?subject=${subject}&body=${body}`;
}

export default function ContactButtons() {
  const handleEmailClick = useCallback((e) => {
    e.preventDefault();
    window.location.href = buildMailtoUrl();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        style={buttonStyle('#25D366')}
        onMouseEnter={(e) => hoverIn(e, '#25D366')}
        onMouseLeave={(e) => hoverOut(e, '#25D366')}
      >
        <IconCircle color="#25D366" Icon={MessageCircle} />
        <ButtonText label="WhatsApp" desc="Respuesta rápida en minutos" />
        <ArrowRight size={18} style={{ color: 'var(--color-text-muted)', opacity: 0.4, flexShrink: 0 }} />
      </motion.a>

      <motion.a
        href={buildMailtoUrl()}
        onClick={handleEmailClick}
        className="contact-btn"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        style={buttonStyle('#8B5CF6')}
        onMouseEnter={(e) => hoverIn(e, '#8B5CF6')}
        onMouseLeave={(e) => hoverOut(e, '#8B5CF6')}
      >
        <IconCircle color="#8B5CF6" Icon={Mail} />
        <ButtonText label="Correo Electrónico" desc="Te respondemos en 24-48 horas" />
        <ArrowRight size={18} style={{ color: 'var(--color-text-muted)', opacity: 0.4, flexShrink: 0 }} />
      </motion.a>
    </div>
  );
}

function IconCircle({ color, Icon }) {
  return (
    <div style={{
      width: 48, height: 48, borderRadius: '50%',
      background: `${color}18`, border: `2px solid ${color}30`,
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      transition: 'background 0.3s ease',
    }}>
      <Icon size={22} style={{ color }} />
    </div>
  );
}

function ButtonText({ label, desc }) {
  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ color: 'var(--color-text-primary)', fontWeight: 700, fontSize: '1.05rem' }}>{label}</span>
        <ExternalLink size={13} style={{ color: 'var(--color-text-muted)', opacity: 0.6 }} />
      </div>
      <span style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginTop: 2, display: 'block' }}>{desc}</span>
    </div>
  );
}

function buttonStyle(color) {
  return {
    display: 'flex', alignItems: 'center', gap: 16,
    padding: '18px 24px',
    background: `linear-gradient(135deg, ${color}12, ${color}06)`,
    border: `1px solid ${color}20`, borderRadius: 14,
    textDecoration: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  };
}

function hoverIn(e, color) {
  e.currentTarget.style.borderColor = `${color}50`;
  e.currentTarget.style.boxShadow = `0 0 30px ${color}15`;
}

function hoverOut(e, color) {
  e.currentTarget.style.borderColor = `${color}20`;
  e.currentTarget.style.boxShadow = 'none';
}
