import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 24,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(139, 92, 246, 0.08)',
    paddingTop: 10,
  },
  left: {
    fontFamily: 'Helvetica',
    fontSize: 7,
    fontWeight: 400,
    color: '#475569',
  },
  right: {
    fontFamily: 'Helvetica',
    fontSize: 7,
    fontWeight: 400,
    color: '#475569',
  },
});

export default function PDFFooter({ label }) {
  return (
    <View style={styles.footer} fixed>
      <Text style={styles.left}>Código Ancestral — Tu código ancestral, revelado en números</Text>
      <Text style={styles.right}>{label || ''}</Text>
    </View>
  );
}
