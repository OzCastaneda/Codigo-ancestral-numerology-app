import { View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.12)',
    borderRadius: 6,
    padding: 16,
    marginBottom: 14,
  },
  cardGold: {
    backgroundColor: 'rgba(245, 158, 11, 0.04)',
    borderColor: 'rgba(245, 158, 11, 0.12)',
  },
  cardGreen: {
    backgroundColor: 'rgba(16, 185, 129, 0.04)',
    borderColor: 'rgba(16, 185, 129, 0.1)',
  },
  cardRed: {
    backgroundColor: 'rgba(239, 68, 68, 0.04)',
    borderColor: 'rgba(239, 68, 68, 0.1)',
  },
  cardAstrology: {
    backgroundColor: 'rgba(245, 158, 11, 0.04)',
    borderColor: 'rgba(245, 158, 11, 0.1)',
  },
});

export default function PDFCard({ variant, children, style }) {
  const variantStyle = variant === 'gold' ? styles.cardGold
    : variant === 'green' ? styles.cardGreen
    : variant === 'red' ? styles.cardRed
    : variant === 'astrology' ? styles.cardAstrology
    : null;

  return <View style={[styles.card, variantStyle, style]}>{children}</View>;
}
