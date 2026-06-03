import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { getNumerologyMeaning } from '../utils/helpers';
import PDFCard from './PDFCard';

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontFamily: 'Lato',
    fontSize: 10,
    fontWeight: 700,
    color: '#A78BFA',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    lineHeight: 1.4,
  },
  valueBox: {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 4,
  },
  value: {
    fontFamily: 'Lato',
    fontSize: 20,
    fontWeight: 800,
    color: '#F59E0B',
    lineHeight: 1.2,
  },
  description: {
    fontFamily: 'Lato',
    fontSize: 9,
    fontWeight: 400,
    color: '#94A3B8',
    lineHeight: 1.6,
    marginBottom: 6,
  },
  meaning: {
    fontFamily: 'Lato',
    fontSize: 9,
    fontWeight: 400,
    color: '#64748B',
    lineHeight: 1.5,
    fontStyle: 'italic',
  },
});

export default function PDFNumerologyCard({ title, value, description }) {
  const meaning = getNumerologyMeaning(value);

  return (
    <PDFCard>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.valueBox}>
          <Text style={styles.value}>{value}</Text>
        </View>
      </View>
      {description && <Text style={styles.description}>{description}</Text>}
      <Text style={styles.meaning}>{meaning}</Text>
    </PDFCard>
  );
}
