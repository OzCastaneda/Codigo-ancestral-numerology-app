import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import RegisterForm from './RegisterForm';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function RegisterPage() {
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async ({ fullName, email, password }) => {
    await registerUser(email, password, fullName);
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
            <h1 className="auth-title text-xl sm:text-2xl">Crear tu cuenta</h1>
            <p className="auth-subtitle text-sm sm:text-base">
              Registrate para guardar tus reportes y acceder a tu historial
            </p>
          </div>

          <RegisterForm onSubmit={handleRegister} />

          <p className="auth-footer-text text-center text-sm mt-6">
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" className="auth-link font-medium">
              Iniciar sesión
            </Link>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
