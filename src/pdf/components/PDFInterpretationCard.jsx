import { View, Text, StyleSheet } from '@react-pdf/renderer';
import PDFBulletList from './PDFBulletList';
import { getNumberColor } from '../../components/charts/chartConfig';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.12)',
    borderRadius: 6,
    padding: 18,
    paddingBottom: 14,
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleGroup: {
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'Times-Roman',
    fontSize: 14,
    fontWeight: 700,
    color: '#C4B5FD',
    lineHeight: 1.4,
  },
  numberBadge: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    fontWeight: 800,
    lineHeight: 1,
  },
  meaning: {
    fontFamily: 'Helvetica',
    fontSize: 9.5,
    fontWeight: 400,
    color: '#94A3B8',
    lineHeight: 1.8,
    marginBottom: 14,
  },
  sectionLabel: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    fontWeight: 700,
    lineHeight: 1.5,
    marginBottom: 5,
  },
  green: { color: '#34D399' },
  red: { color: '#F87171' },
  gold: { color: '#FBBF24' },
  energyWrap: {
    marginTop: 8,
    padding: '8 12',
    backgroundColor: 'rgba(139, 92, 246, 0.06)',
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.08)',
    borderRadius: 4,
  },
  energyText: {
    fontFamily: 'Helvetica',
    fontSize: 9,
    fontWeight: 400,
    fontStyle: 'italic',
    color: '#94A3B8',
    lineHeight: 1.6,
  },
  energyLabel: {
    fontWeight: 700,
    color: '#A78BFA',
  },
});

export default function PDFInterpretationCard({ interpretation, title }) {
  if (!interpretation) return null;

  const num = interpretation.numero;
  const color = getNumberColor(num);

  return (
    <View style={styles.card} wrap={false}>
      <View style={styles.headerRow}>
        <View style={styles.titleGroup}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={[styles.numberBadge, { color }]}>{num}</Text>
      </View>

      <Text style={styles.meaning}>{interpretation.significado}</Text>

      {interpretation.fortalezas?.length > 0 && (
        <View>
          <Text style={[styles.sectionLabel, styles.green]}>Fortalezas</Text>
          <PDFBulletList items={interpretation.fortalezas} color="green" />
        </View>
      )}

      {interpretation.debilidades?.length > 0 && (
        <View>
          <Text style={[styles.sectionLabel, styles.red]}>Debilidades</Text>
          <PDFBulletList items={interpretation.debilidades} color="red" />
        </View>
      )}

      {interpretation.aprendizajesKarmicos?.length > 0 && (
        <View>
          <Text style={[styles.sectionLabel, styles.gold]}>Aprendizajes Kármicos</Text>
          <PDFBulletList items={interpretation.aprendizajesKarmicos} color="gold" />
        </View>
      )}

      {interpretation.energiaEspiritual && (
        <View style={styles.energyWrap}>
          <Text style={styles.energyText}>
            <Text style={styles.energyLabel}>Energía Espiritual: </Text>
            {interpretation.energiaEspiritual}
          </Text>
        </View>
      )}
    </View>
  );
}
