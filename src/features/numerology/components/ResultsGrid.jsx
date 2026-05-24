import NumberCard from '../../../components/cards/NumberCard';

const CARDS = [
  { key: 'destiny', title: 'Número de Destino', desc: 'Tu camino de vida y propósito existencial. Representa las oportunidades y desafíos que enfrentarás.' },
  { key: 'soul', title: 'Número del Alma', desc: 'Tus deseos internos, motivaciones profundas y lo que realmente anhelas en la vida.' },
  { key: 'personality', title: 'Número de Personalidad', desc: 'Cómo te perciben los demás, tu imagen externa y la forma en que interactúas con el mundo.' },
  { key: 'mission', title: 'Misión de Vida', desc: 'Tu propósito esencial, lo que viniste a aprender y contribuir en esta existencia.' },
];

export default function ResultsGrid({ results, calcKey }) {
  return (
    <div className="results-grid">
      {CARDS.map((card, i) => (
        <NumberCard
          key={`${card.key}-${results?.[card.key] ?? 'empty'}-${calcKey}`}
          title={card.title}
          value={results?.[card.key] ?? null}
          description={card.desc}
          index={i}
        />
      ))}
    </div>
  );
}
