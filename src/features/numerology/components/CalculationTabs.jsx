import { useState, memo } from 'react';
import { Compass, Heart, User, Star, Settings2 } from 'lucide-react';
import { VOWELS, CONSONANTS } from '../data/numerologyData';
import { reduceToSingleDigit, reductionChain, buildLetterSection } from '../engine/numerologyEngine';

const TABS = [
  { id: 'destiny', label: 'Destino', icon: Compass },
  { id: 'soul', label: 'Alma', icon: Heart },
  { id: 'personality', label: 'Personalidad', icon: User },
  { id: 'mission', label: 'Misión', icon: Star },
];

const TAB_DESCRIPTIONS = {
  destiny: 'Cálculo basado en tu fecha de nacimiento:',
  soul: 'Cálculo basado en las vocales de tu nombre:',
  personality: 'Cálculo basado en las consonantes de tu nombre:',
  mission: 'Cálculo basado en la combinación de destino y alma:',
};

const CalculationTabs = memo(function CalculationTabs({ results, fullName, birthdate }) {
  const [activeTab, setActiveTab] = useState('destiny');

  if (!results) {
    return (
      <section className="detail-section" aria-label="Detalles del cálculo">
        <h3><Settings2 size={20} className="icon" /> Detalles de Cálculo</h3>
        <p className="kabbalistic-placeholder">Ingresa tus datos para ver el cálculo detallado.</p>
      </section>
    );
  }

  const [year, month, day] = birthdate.split('-');
  const dNum = parseInt(day, 10);
  const mNum = parseInt(month, 10);
  const yNum = parseInt(year, 10);
  const dRed = reduceToSingleDigit(dNum);
  const mRed = reduceToSingleDigit(mNum);
  const yRed = reduceToSingleDigit(yNum);
  const intermediate = dRed + mRed + yRed;
  const missionSum = results.destiny + results.soul;
  const name = results.name;

  const contentMap = {
    destiny: `
      Fecha: ${day}/${month}/${year}\n
      Día: ${dNum} → ${reductionChain(dNum)}\n
      Mes: ${mNum} → ${reductionChain(mNum)}\n
      Año: ${yNum} → ${reductionChain(yNum)}\n\n
      ${dRed} + ${mRed} + ${yRed} = ${intermediate} → ${results.destiny}
    `,
    soul: buildLetterSection(name, 'Vocales', ch => VOWELS.has(ch)),
    personality: buildLetterSection(name, 'Consonantes', ch => CONSONANTS.has(ch)),
    mission: `
      Número de Destino: ${results.destiny}\n
      Número del Alma: ${results.soul}\n\n
      ${results.destiny} + ${results.soul} = ${missionSum} → ${results.mission}
    `,
  };

  return (
    <section className="detail-section" aria-label="Detalles del cálculo">
      <h3><Settings2 size={20} className="icon" /> Detalles de Cálculo</h3>

      <div className="tab-container" role="tablist">
        <div className="tabs">
          {TABS.map(tab => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                <TabIcon size={14} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {TABS.map(tab => (
          <div
            key={tab.id}
            className={`tab-content ${activeTab === tab.id ? 'active' : ''}`}
            id={`${tab.id}-content`}
            role="tabpanel"
          >
            <p>{TAB_DESCRIPTIONS[tab.id]}</p>
            <div
              className="calc-details"
              dangerouslySetInnerHTML={{ __html: contentMap[tab.id].replace(/\n/g, '<br>') }}
            />
          </div>
        ))}
      </div>
    </section>
  );
});

export default CalculationTabs;
