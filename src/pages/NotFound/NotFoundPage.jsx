import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <motion.div
      className="content-grid single"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="glass-card" style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '6rem',
          fontWeight: 800,
          background: 'linear-gradient(135deg, var(--color-primary-light), var(--color-accent-light))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: 8,
          lineHeight: 1.1,
        }}>
          404
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem', marginBottom: 32 }}>
          La página que buscas no existe.
        </p>
        <Link
          to="/"
          className="btn-premium"
          style={{ display: 'inline-flex', width: 'auto', padding: '14px 36px', textDecoration: 'none' }}
        >
          <Home size={18} /> Volver al Inicio
        </Link>
      </div>
    </motion.div>
  );
}
