import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { LogIn, Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const loginSchema = z.object({
  email: z.string().min(1, 'El email es obligatorio').email('Email inválido'),
  password: z.string().min(1, 'La contraseña es obligatoria'),
});

export default function LoginForm({ onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const handleFormSubmit = async (data) => {
    try {
      await onSubmit(data);
    } catch (err) {
      const message =
        err.message === 'Invalid login credentials'
          ? 'Email o contraseña incorrectos'
          : err.message || 'Error al iniciar sesión';
      setError('root', { message });
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="auth-form flex flex-col gap-5" noValidate>
      {errors.root && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="auth-error-banner flex items-center gap-2.5 p-3 sm:p-4 rounded-xl text-sm"
        >
          <AlertCircle size={16} />
          <span>{errors.root.message}</span>
        </motion.div>
      )}

      <div className="auth-field flex flex-col gap-1.5">
        <label htmlFor="login-email" className="auth-label flex items-center gap-2 text-sm">
          <Mail size={16} />
          Email
        </label>
        <input
          id="login-email"
          type="email"
          placeholder="tu@email.com"
          className={`auth-input w-full px-4 py-3 min-h-[48px] sm:min-h-[44px] text-base rounded-xl ${errors.email ? 'auth-input-error' : ''}`}
          {...register('email')}
          autoComplete="email"
        />
        {errors.email && (
          <span className="auth-field-error text-xs sm:text-sm">{errors.email.message}</span>
        )}
      </div>

      <div className="auth-field flex flex-col gap-1.5">
        <label htmlFor="login-password" className="auth-label flex items-center gap-2 text-sm">
          <Lock size={16} />
          Contraseña
        </label>
        <div className="auth-input-wrapper relative">
          <input
            id="login-password"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            className={`auth-input w-full px-4 py-3 min-h-[48px] sm:min-h-[44px] text-base rounded-xl pr-12 ${errors.password ? 'auth-input-error' : ''}`}
            {...register('password')}
            autoComplete="current-password"
          />
          <button
            type="button"
            className="auth-toggle-password absolute right-3 top-1/2 -translate-y-1/2 p-2"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
            aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.password && (
          <span className="auth-field-error text-xs sm:text-sm">{errors.password.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="auth-submit-btn flex items-center justify-center gap-2.5 w-full py-3.5 min-h-[48px] sm:min-h-[44px] text-base font-semibold rounded-xl mt-1"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="auth-spinner" />
        ) : (
          <LogIn size={18} />
        )}
        <span>{isSubmitting ? 'Ingresando...' : 'Iniciar Sesión'}</span>
      </button>
    </form>
  );
}
