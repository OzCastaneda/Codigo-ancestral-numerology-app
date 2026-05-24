import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 28,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  iconText: {
    fontSize: 16,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    fontWeight: 700,
    color: '#F1F5F9',
    lineHeight: 1.3,
  },
  subtitle: {
    fontFamily: 'Helvetica',
    fontSize: 9,
    fontWeight: 400,
    color: '#64748B',
    marginTop: 2,
    lineHeight: 1.4,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(139, 92, 246, 0.15)',
    marginBottom: 16,
  },
  content: {},
});

export default function PDFSection({ icon, title, subtitle, children, wrap = true }) {
  return (
    <View style={styles.wrapper} wrap={wrap}>
      <View style={styles.headerRow}>
        {icon && <Text style={styles.iconText}>{icon}</Text>}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.content}>{children}</View>
    </View>
  );
}
