import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Calendar, Calculator, Loader2, AlertCircle, Venus, Mars } from 'lucide-react';
import { motion } from 'framer-motion';
import useNumerologyStore, {
  useFullName, useBirthdate, useSex, useIsLoading,
  useSetFullName, useSetBirthdate, useSetSex,
  useCalculate, useShowToast,
} from '../../store/useNumerologyStore';
import { createReport } from '../../services/reportService';
import { useAuth } from '../../hooks/useAuth';

export default function InputForm() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const fullName = useFullName();
  const birthdate = useBirthdate();
  const sex = useSex();
  const isLoading = useIsLoading();
  const setFullName = useSetFullName();
  const setBirthdate = useSetBirthdate();
  const setSex = useSetSex();
  const calculate = useCalculate();
  const showToast = useShowToast();

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
        const report = await createReport({
          user_id: user.id,
          full_name: fullName,
          birth_date: birthdate,
          sex,
          destiny_number: results.destiny,
          soul_number: results.soul,
          personality_number: results.personality,
          karmic_number: results.mission,
          report_data: { ...results, sex },
        });
        console.log('Report created:', report.id);
        useNumerologyStore.getState().setReportId(report.id);
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
        <div className="form-group">
          <label className="text-sm sm:text-base">Sexo</label>
          <div style={{
            display: 'flex',
            gap: 12,
            marginTop: 6,
          }}>
            {[
              { value: 'masculino', icon: Mars, label: 'Masculino' },
              { value: 'femenino', icon: Venus, label: 'Femenino' },
            ].map(({ value, icon: Icon, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => setSex(value)}
                disabled={isLoading}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  padding: '10px 16px',
                  borderRadius: 10,
                  border: `2px solid ${sex === value ? 'var(--color-primary-light)' : 'rgba(255,255,255,0.08)'}`,
                  background: sex === value ? 'rgba(139,92,246,0.12)' : 'rgba(255,255,255,0.02)',
                  color: sex === value ? 'var(--color-primary-light)' : 'var(--color-text-muted)',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  fontFamily: 'inherit',
                  fontSize: '0.9rem',
                  fontWeight: sex === value ? 700 : 400,
                  transition: 'all 0.2s',
                  opacity: isLoading ? 0.6 : 1,
                }}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
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
