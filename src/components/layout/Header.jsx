import { Sparkles, Star, Home, BookOpen, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { path: '/', label: 'Inicio', icon: Home },
  { path: '/about', label: 'Sobre Código Ancestral', icon: BookOpen },
  { path: '/contact', label: 'Contacto', icon: Mail },
];

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden="true" />
      {isHome && (
        <span className="hero-badge">
          <Sparkles size={14} />
          Numerología Pitagórica & Cabalística
        </span>
      )}
      <h1>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className="star-icon" aria-hidden="true">
            <Star size={28} strokeWidth={1.5} style={{ color: 'var(--color-accent)', verticalAlign: 'middle' }} />
          </span>{' '}
          <span className="gradient-text">Código Ancestral</span>{' '}
          <span style={{ fontSize: '0.5em' }} role="img" aria-label="sparkles">✨</span>
        </Link>
      </h1>
      {isHome && <p className="hero-subtitle">Decodifica tu alma a través de números ancestrales. Sabiduría pitagórica y cabalística en una sola experiencia.</p>}

      <nav className="main-nav" aria-label="Navegación principal">
        {NAV_LINKS.map(link => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`main-nav-link ${isActive ? 'active' : ''}`}
            >
              <Icon size={15} />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </section>
  );
}
