import { Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  block: {
    fontFamily: 'Helvetica',
    fontSize: 9.5,
    fontWeight: 400,
    color: '#94A3B8',
    lineHeight: 1.8,
    marginBottom: 10,
  },
  label: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    fontWeight: 700,
    lineHeight: 1.5,
    marginBottom: 5,
  },
  green: { color: '#34D399' },
  red: { color: '#F87171' },
  gold: { color: '#FBBF24' },
  accent: { color: '#A78BFA' },
  white: { color: '#E2E8F0' },
});

export default function PDFTextBlock({ children, variant, style }) {
  return <Text style={[styles.block, style]}>{children}</Text>;
}

export function PDFLabel({ children, variant, style }) {
  const colorStyle = variant === 'green' ? styles.green
    : variant === 'red' ? styles.red
    : variant === 'gold' ? styles.gold
    : variant === 'accent' ? styles.accent
    : variant === 'white' ? styles.white
    : null;

  return <Text style={[styles.label, colorStyle, style]}>{children}</Text>;
}
