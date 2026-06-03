import { useState } from 'react';
import { Sparkles, Star, Home, BookOpen, Mail, LogIn, LayoutDashboard, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const PUBLIC_LINKS = [
  { path: '/', label: 'Inicio', icon: Home },
  { path: '/about', label: 'Sobre Código Ancestral', icon: BookOpen },
  { path: '/contact', label: 'Contacto', icon: Mail },
];

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { user, loading } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [...PUBLIC_LINKS];

  if (!loading) {
    if (user) {
      navLinks.push({ path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard });
    } else {
      navLinks.push({ path: '/login', label: 'Ingresar', icon: LogIn });
    }
  }

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

      {/* Hamburger button — visible on mobile only */}
      <button
        className="md:hidden inline-flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-stretch gap-2 mt-4 px-4 pb-4" aria-label="Navegación móvil">
          {navLinks.map(link => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 min-h-[44px] rounded-xl text-base transition-colors ${
                  isActive
                    ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
                    : 'text-white/70 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <Icon size={18} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      )}

      {/* Desktop nav */}
      <nav className="hidden md:flex main-nav" aria-label="Navegación principal">
        {navLinks.map(link => {
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
