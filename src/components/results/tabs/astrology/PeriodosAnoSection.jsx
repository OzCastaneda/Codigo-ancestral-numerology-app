import { motion } from 'framer-motion';
import { Calendar, Star, Sun, Moon } from 'lucide-react';
import { MONTHS_DATA } from '../../../../data/tikunCompleteData';
import { ZODIAC_COLORS, getTikunYearRange } from '../../../../data/astrologiaKabalisticaData';

const ELEMENT_COLORS = {
  Fuego: '#F97316',
  Tierra: '#10B981',
  Aire: '#06B6D4',
  Agua: '#8B5CF6',
};

export default function PeriodosAnoSection({ tikunSign, userSign, birthdate }) {
  if (!tikunSign) return null;

  const birthMonth = birthdate ? new Date(birthdate).getMonth() + 1 : 0;
  const userMonth = MONTHS_DATA.find(m => m.number === birthMonth);

  const tikunMonth = MONTHS_DATA.find(m => m.sign === tikunSign.signo);
  const color = ZODIAC_COLORS[tikunSign.signo];

  return (
    <div className="astro-section">
      <div className="astro-header">
        <div className="astro-header-icon" style={{ background: 'rgba(6,182,212,0.15)', color: '#06B6D4' }}>
          <Calendar size={24} />
        </div>
        <div>
          <h2 className="astro-header-title">
            Períodos del Año y tu <span style={{ color }}>{tikunSign.signo}</span>
          </h2>
          <p className="astro-header-meta">
            Los ciclos de energía a lo largo del calendario hebreo
          </p>
        </div>
      </div>

      {userMonth && (
        <motion.div
          className="astro-block astro-block-gold"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ borderLeftColor: '#FCD34D' }}
        >
          <h4 className="astro-block-title" style={{ color: '#FCD34D' }}>
            <Sun size={16} /> Tu Mes Personal: {userMonth.hebrew}
          </h4>
          <p className="astro-block-text">
            Naciste en el mes de <strong>{userMonth.hebrew}</strong>, gobernado por la letra{' '}
            <strong>{userMonth.letter}</strong> ({userMonth.letterName}). Este mes tiene una energía
            especial de <strong>{userMonth.energy.toLowerCase()}</strong>. Durante este período cada año,
            tienes una oportunidad única de conectar con la energía de tu Tikun y avanzar en tu corrección.
          </p>
        </motion.div>
      )}

      <div className="astro-table-wrapper">
        <table className="astro-months-table">
          <thead>
            <tr>
              <th>Mes</th>
              <th>Hebreo</th>
              <th>Signo</th>
              <th>Letra</th>
              <th>Energía</th>
            </tr>
          </thead>
          <tbody>
            {MONTHS_DATA.map((month, i) => {
              const monthSign = month.sign;
              const signColor = ZODIAC_COLORS[monthSign];
              const isUserMonth = month.number === birthMonth;
              const isTikunMonth = month.sign === tikunSign.signo;

              return (
                <motion.tr
                  key={i}
                  className={`astro-month-row ${isUserMonth ? 'astro-month-current' : ''} ${isTikunMonth ? 'astro-month-tikun' : ''}`}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: i * 0.03 }}
                >
                  <td className="astro-month-cell astro-month-cell-num">{month.number}</td>
                  <td className="astro-month-cell">
                    <span className="astro-month-hebrew">{month.hebrew}</span>
                  </td>
                  <td className="astro-month-cell" style={{ color: signColor, fontWeight: 600 }}>
                    {month.sign}
                  </td>
                  <td className="astro-month-cell astro-month-letter">{month.letter}</td>
                  <td className="astro-month-cell astro-month-energy">{month.energy}</td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {tikunMonth && (
        <div className="astro-block" style={{ borderLeftColor: color }}>
          <h4 className="astro-block-title">
            <Moon size={16} /> El Mes de tu Tikun: {tikunMonth.hebrew}
          </h4>
          <p className="astro-block-text">
            El mes de <strong>{tikunMonth.hebrew}</strong> (correspondiente a {tikunSign.signo}) es un
            período de máxima energía para tu corrección. Durante este mes, las cualidades de tu Tikun
            se intensifican, ofreciéndote oportunidades únicas para trabajar en tus desafíos espirituales.
            La letra <strong>{tikunMonth.letter}</strong> ({tikunMonth.letterName}) de este mes activa
            la energía de corrección específica para tu alma.
          </p>
        </div>
      )}

      {(() => {
        const yr = getTikunYearRange(birthdate);
        if (!yr) return null;
        return (
          <motion.div
            className="astro-block"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ borderLeftColor: color }}
          >
            <h4 className="astro-block-title" style={{ color }}>
              <Calendar size={16} /> Tu Período de Tikun
            </h4>
            <p className="astro-block-text">
              Según tu año de nacimiento, tu Tikun <strong>{tikunSign.signo}</strong> rige desde el{' '}
              <strong>{yr.start}</strong> hasta el <strong>{yr.end}</strong>.
              Durante este período, las energías de corrección de {tikunSign.signo} están activas para tu alma.
            </p>
          </motion.div>
        );
      })()}

      <div className="astro-block" style={{ borderLeftColor: '#8B5CF6' }}>
        <h4 className="astro-block-title">Ciclos de 9 Años</h4>
        <p className="astro-block-text">
          Según la Cábala, el movimiento del Nodo Lunar sigue un patrón de aproximadamente 9 años para
          completar su ciclo retrógrado completo a través del zodíaco. Esto significa que cada 9 años
          tienes una oportunidad especialmente potente para avanzar significativamente en tu Tikun. Los
          años que son múltiplos de 9 (9, 18, 27, 36, 45, 54, 63, 72, 81...) son años críticos donde
          la energía de corrección está más disponible. Presta especial atención a estos períodos y
          duplica tus prácticas espirituales durante ellos.
        </p>
      </div>
    </div>
  );
}
