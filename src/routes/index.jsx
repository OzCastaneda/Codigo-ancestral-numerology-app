import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import ProtectedRoute from './ProtectedRoute';

const ResultsPage = lazy(() => import('../pages/Results/ResultsPage'));
const AboutPage = lazy(() => import('../pages/About/AboutPage'));
const ContactPage = lazy(() => import('../pages/Contact/ContactPage'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFoundPage'));
const LoginPage = lazy(() => import('../pages/Login/LoginPage'));
const RegisterPage = lazy(() => import('../pages/Register/RegisterPage'));
const DashboardPage = lazy(() => import('../pages/Dashboard/DashboardPage'));
const ReportDetailPage = lazy(() => import('../pages/ReportDetail/ReportDetailPage'));

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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/report/:id"
          element={
            <ProtectedRoute>
              <ReportDetailPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
