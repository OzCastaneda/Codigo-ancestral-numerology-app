import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 18,
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 22,
    fontWeight: 800,
    color: '#F1F5F9',
    lineHeight: 1.2,
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    fontWeight: 400,
    color: '#64748B',
    lineHeight: 1.5,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(139, 92, 246, 0.15)',
    marginTop: 10,
    marginBottom: 4,
  },
});

export default function PDFSectionTitle({ title, subtitle }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      <View style={styles.divider} />
    </View>
  );
}
