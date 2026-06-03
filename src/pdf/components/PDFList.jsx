import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 8,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 3,
    paddingLeft: 4,
  },
  bullet: {
    fontSize: 10,
    lineHeight: 1.6,
    width: 10,
    color: '#8B5CF6',
  },
  bulletGreen: {
    color: '#34D399',
  },
  bulletRed: {
    color: '#F87171',
  },
  bulletGold: {
    color: '#FBBF24',
  },
  text: {
    flex: 1,
    fontSize: 9,
    fontFamily: 'Lato',
    fontWeight: 400,
    color: '#94A3B8',
    lineHeight: 1.7,
  },
});

export default function PDFList({ items, bulletColor, style }) {
  if (!items || items.length === 0) return null;

  const bulletStyle = bulletColor === 'green' ? styles.bulletGreen
    : bulletColor === 'red' ? styles.bulletRed
    : bulletColor === 'gold' ? styles.bulletGold
    : null;

  return (
    <View style={[styles.wrapper, style]}>
      {items.map((item, i) => (
        <View key={i} style={styles.item} wrap={false}>
          <Text style={[styles.bullet, bulletStyle]}>•</Text>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </View>
  );
}
