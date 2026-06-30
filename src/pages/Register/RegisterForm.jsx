import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { UserPlus, Mail, Lock, User, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import validatePassword from '../../utils/passwordValidator';
import '../../styles/passwordStrength.css';

const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(2, 'El nombre debe tener al menos 2 caracteres')
      .max(100, 'El nombre es demasiado largo'),
    email: z.string().min(1, 'El email es obligatorio').email('Email inválido'),
    password: z
      .string()
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .max(100, 'La contraseña es demasiado larga'),
    confirmPassword: z.string().min(1, 'Confirma tu contraseña'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });

export default function RegisterForm({ onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: { fullName: '', email: '', password: '', confirmPassword: '' },
  });

  const handleFormSubmit = async (data) => {
    try {
      await onSubmit(data);
    } catch (err) {
      const message =
        err.message === 'User already registered'
          ? 'Este email ya está registrado'
          : err.message || 'Error al registrarse';
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
        <label htmlFor="reg-name" className="auth-label flex items-center gap-2 text-sm">
          <User size={16} />
          Nombre completo
        </label>
        <input
          id="reg-name"
          type="text"
          placeholder="Tu nombre"
          className={`auth-input w-full px-4 py-3 min-h-[48px] sm:min-h-[44px] text-base rounded-xl ${errors.fullName ? 'auth-input-error' : ''}`}
          {...register('fullName')}
          autoComplete="name"
        />
        {errors.fullName && (
          <span className="auth-field-error text-xs sm:text-sm">{errors.fullName.message}</span>
        )}
      </div>

      <div className="auth-field flex flex-col gap-1.5">
        <label htmlFor="reg-email" className="auth-label flex items-center gap-2 text-sm">
          <Mail size={16} />
          Email
        </label>
        <input
          id="reg-email"
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
        <label htmlFor="reg-password" className="auth-label flex items-center gap-2 text-sm">
          <Lock size={16} />
          Contraseña
        </label>
        <div className="auth-input-wrapper relative">
          <input
            id="reg-password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Mín. 6 caracteres"
            className={`auth-input w-full px-4 py-3 min-h-[48px] sm:min-h-[44px] text-base rounded-xl pr-12 ${errors.password ? 'auth-input-error' : ''}`}
            {...register('password', {
              onChange: (e) => setPasswordStrength(validatePassword(e.target.value)),
            })}
            autoComplete="new-password"
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
        {passwordStrength && (
          <div className="password-strength">
            <div className="strength-bar-bg">
              <div
                className="strength-bar-fill"
                style={{ width: `${(passwordStrength.score / 4) * 100}%` }}
                data-score={passwordStrength.score}
              />
            </div>
            <span className="strength-label">{passwordStrength.strengthLabel}</span>
            {passwordStrength.feedback.length > 0 && (
              <ul className="strength-suggestions">
                {passwordStrength.feedback.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            )}
          </div>
        )}
        {errors.password && (
          <span className="auth-field-error text-xs sm:text-sm">{errors.password.message}</span>
        )}
      </div>

      <div className="auth-field flex flex-col gap-1.5">
        <label htmlFor="reg-confirm" className="auth-label flex items-center gap-2 text-sm">
          <Lock size={16} />
          Confirmar contraseña
        </label>
        <div className="auth-input-wrapper relative">
          <input
            id="reg-confirm"
            type={showConfirm ? 'text' : 'password'}
            placeholder="Repite la contraseña"
            className={`auth-input w-full px-4 py-3 min-h-[48px] sm:min-h-[44px] text-base rounded-xl pr-12 ${errors.confirmPassword ? 'auth-input-error' : ''}`}
            {...register('confirmPassword')}
            autoComplete="new-password"
          />
          <button
            type="button"
            className="auth-toggle-password absolute right-3 top-1/2 -translate-y-1/2 p-2"
            onClick={() => setShowConfirm(!showConfirm)}
            tabIndex={-1}
            aria-label={showConfirm ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          >
            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.confirmPassword && (
          <span className="auth-field-error text-xs sm:text-sm">{errors.confirmPassword.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="auth-submit-btn flex items-center justify-center gap-2.5 w-full py-3.5 min-h-[48px] sm:min-h-[44px] text-base font-semibold rounded-xl mt-1"
        disabled={isSubmitting || !passwordStrength?.isStrong}
      >
        {isSubmitting ? (
          <span className="auth-spinner" />
        ) : (
          <UserPlus size={18} />
        )}
        <span>{isSubmitting ? 'Creando cuenta...' : !passwordStrength?.isStrong ? 'Crea una contraseña más fuerte' : 'Crear Cuenta'}</span>
      </button>
    </form>
  );
}
