import { Page, View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#070B1A',
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  badge: {
    fontSize: 11,
    color: '#A78BFA',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 24,
    fontFamily: 'Helvetica',
    fontWeight: 500,
    padding: '6 18',
    borderColor: 'rgba(167, 139, 250, 0.3)',
    borderWidth: 1,
    borderRadius: 4,
  },
  title: {
    fontSize: 48,
    fontFamily: 'Helvetica',
    fontWeight: 800,
    color: '#F1F5F9',
    textAlign: 'center',
    marginBottom: 8,
  },
  accent: {
    color: '#F59E0B',
  },
  sparkle: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Helvetica',
    fontWeight: 300,
    color: '#94A3B8',
    textAlign: 'center',
    lineHeight: 1.6,
    maxWidth: 360,
    marginBottom: 48,
  },
  divider: {
    width: 60,
    height: 2,
    backgroundColor: '#8B5CF6',
    marginBottom: 32,
    opacity: 0.6,
  },
  infoBlock: {
    alignItems: 'center',
    gap: 8,
  },
  infoLabel: {
    fontSize: 10,
    fontFamily: 'Helvetica',
    fontWeight: 500,
    color: '#64748B',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  infoValue: {
    fontSize: 18,
    fontFamily: 'Helvetica',
    fontWeight: 600,
    color: '#E2E8F0',
    textAlign: 'center',
  },
  infoDate: {
    fontSize: 11,
    fontFamily: 'Helvetica',
    color: '#64748B',
    marginTop: 4,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    fontSize: 9,
    color: '#475569',
    fontFamily: 'Helvetica',
    textAlign: 'center',
  },
});

export default function PDFCover({ fullName, birthdate, generatedDate }) {
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        <View style={styles.badge}>
          <Text>Informe Numerológico</Text>
        </View>

        <Text style={styles.sparkle}>✨</Text>
        <Text style={styles.title}>
          Código Ancestral
        </Text>
        <Text style={styles.subtitle}>
          Tu código ancestral, revelado en números.{'\n'}Numerología pitagórica y cabalística
        </Text>

        <View style={styles.divider} />

        <View style={styles.infoBlock}>
          <Text style={styles.infoLabel}>Consultante</Text>
          <Text style={styles.infoValue}>{fullName}</Text>
          <Text style={styles.infoDate}>
            Fecha de nacimiento: {birthdate}
          </Text>
        </View>
      </View>

      <Text style={styles.footer}>Generado el {generatedDate} — Código Ancestral © 2025</Text>
    </Page>
  );
}
