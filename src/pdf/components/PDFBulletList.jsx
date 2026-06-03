import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 12,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 4,
    paddingLeft: 2,
  },
  bullet: {
    fontSize: 11,
    lineHeight: 1.8,
    width: 12,
  },
  text: {
    flex: 1,
    fontFamily: 'Lato',
    fontSize: 9.5,
    fontWeight: 400,
    lineHeight: 1.8,
  },
  green: { color: '#34D399' },
  red: { color: '#F87171' },
  gold: { color: '#FBBF24' },
  defaultColor: { color: '#8B5CF6' },
  textColor: { color: '#94A3B8' },
});

export default function PDFBulletList({ items, color }) {
  if (!items || items.length === 0) return null;

  const bulletStyle = color === 'green' ? styles.green
    : color === 'red' ? styles.red
    : color === 'gold' ? styles.gold
    : styles.defaultColor;

  return (
    <View style={styles.wrapper}>
      {items.map((item, i) => (
        <View key={i} style={styles.item} wrap={false}>
          <Text style={[styles.bullet, bulletStyle]}>•</Text>
          <Text style={[styles.text, styles.textColor]}>{item}</Text>
        </View>
      ))}
    </View>
  );
}
