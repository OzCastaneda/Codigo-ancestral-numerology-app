import EnergyRadarChart from '../../charts/EnergyRadarChart';
import NumberDonutChart from '../../charts/NumberDonutChart';
import SpiritualTimeline from '../../charts/SpiritualTimeline';

export default function GraficasTab({ profile }) {
  const results = profile?.results;

  if (!results) return null;

  return (
    <div className="tab-section">
      <div className="tab-section-header">
        <h2 className="tab-section-title">Gráficas</h2>
        <p className="tab-section-desc">
          Visualización interactiva de tu perfil numerológico con espacio para apreciar cada detalle
        </p>
      </div>

      <div className="charts-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 28,
      }}>
        <div style={{ gridColumn: '1 / -1' }}>
          <EnergyRadarChart results={results} />
        </div>
        <NumberDonutChart results={results} />
        <SpiritualTimeline results={results} />
      </div>
    </div>
  );
}
