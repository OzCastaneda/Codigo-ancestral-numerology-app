import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';

const ResultsPage = lazy(() => import('../pages/Results/ResultsPage'));
const AboutPage = lazy(() => import('../pages/About/AboutPage'));
const ContactPage = lazy(() => import('../pages/Contact/ContactPage'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFoundPage'));

const FALLBACK = (
  <div className="content" style={{ justifyContent: 'center', padding: '60px 20px' }}>
    <p className="kabbalistic-placeholder">Cargando...</p>
  </div>
);

export default function AppRoutes() {
  return (
    <Suspense fallback={FALLBACK}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
