import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import LoginForm from './LoginForm';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    await login(email, password);
    navigate('/dashboard');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="auth-page px-4 sm:px-6"
    >
      <div className="auth-container max-w-[440px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="auth-card p-6 sm:p-8 md:p-10"
        >
          <div className="auth-header text-center mb-8">
            <div className="auth-logo mx-auto mb-4">
              <Sparkles size={28} />
            </div>
            <h1 className="auth-title text-xl sm:text-2xl">Bienvenido de vuelta</h1>
            <p className="auth-subtitle text-sm sm:text-base">
              Ingresa para acceder a tus reportes numerológicos
            </p>
          </div>

          <LoginForm onSubmit={handleLogin} />

          <p className="auth-footer-text text-center text-sm mt-6">
            ¿No tienes cuenta?{' '}
            <Link to="/register" className="auth-link font-medium">
              Crear cuenta
            </Link>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
