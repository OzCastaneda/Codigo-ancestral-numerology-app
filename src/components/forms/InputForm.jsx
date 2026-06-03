import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Calendar, Calculator, Loader2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import useNumerologyStore from '../../store/useNumerologyStore';
import { createReport } from '../../services/reportService';
import { useAuth } from '../../hooks/useAuth';

export default function InputForm() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const fullName = useNumerologyStore((s) => s.fullName);
  const birthdate = useNumerologyStore((s) => s.birthdate);
  const isLoading = useNumerologyStore((s) => s.isLoading);
  const setFullName = useNumerologyStore((s) => s.setFullName);
  const setBirthdate = useNumerologyStore((s) => s.setBirthdate);
  const calculate = useNumerologyStore((s) => s.calculate);
  const showToast = useNumerologyStore((s) => s.showToast);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName.trim() || !birthdate) {
      showToast('Por favor, completa todos los campos correctamente.', 'error');
      return;
    }
    const parts = fullName.trim().split(/\s+/).filter(Boolean);
    if (parts.length < 2) {
      showToast('Ingresa al menos tu nombre y apellido.', 'error');
      return;
    }
    const success = calculate();
    if (!success) return;

    if (user) {
      try {
        const { results } = useNumerologyStore.getState();
        await createReport({
          user_id: user.id,
          full_name: fullName,
          birth_date: birthdate,
          destiny_number: results.destiny,
          soul_number: results.soul,
          personality_number: results.personality,
          karmic_number: results.mission,
          report_data: results,
        });
      } catch (error) {
        console.error('Error saving report:', error);
      }
    }

    navigate('/results');
  };

  return (
    <motion.section
      className="glass-card form-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="section-title text-lg sm:text-xl">
        <Calculator size={22} className="icon" />
        Tus Datos
      </h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="fullName" className="text-sm sm:text-base">Nombre Completo</label>
          <div className="input-wrapper">
            <User size={18} className="input-icon" />
            <input
              id="fullName"
              className="input-field text-base min-h-[48px] sm:min-h-[44px]"
              type="text"
              placeholder="Ej: María García López"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              disabled={isLoading}
              autoComplete="name"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="birthdate" className="text-sm sm:text-base">Fecha de Nacimiento</label>
          <div className="input-wrapper">
            <Calendar size={18} className="input-icon" />
            <input
              id="birthdate"
              className="input-field text-base min-h-[48px] sm:min-h-[44px]"
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              disabled={isLoading}
            />
          </div>
        </div>
        <button className="btn-premium w-full text-base min-h-[48px] sm:min-h-[44px]" type="submit" disabled={isLoading}>
          {isLoading ? (
            <><Loader2 size={18} className="spin" /> Calculando...</>
          ) : (
            <><Calculator size={18} className="btn-icon" /> Calcular Números</>
          )}
        </button>
        <div className="form-note text-xs sm:text-sm">
          <AlertCircle size={14} style={{ verticalAlign: 'middle', marginRight: 4 }} />
          <strong>Nota:</strong> Ingresa tu <strong>nombre completo</strong> tal como figura en tu
          documento (nombres y apellidos). La fecha de nacimiento se usa para cálculos adicionales
          como tu signo zodiacal en la tradición cabalística.
        </div>
      </form>
    </motion.section>
  );
}
