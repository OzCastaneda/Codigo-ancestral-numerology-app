import { Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'Playfair Display',
    fontSize: 24,
    fontWeight: 800,
    color: '#F1F5F9',
    marginBottom: 6,
    lineHeight: 1.2,
  },
  h2: {
    fontFamily: 'Playfair Display',
    fontSize: 18,
    fontWeight: 700,
    color: '#E2E8F0',
    marginBottom: 8,
    lineHeight: 1.3,
  },
  h3: {
    fontFamily: 'Playfair Display',
    fontSize: 13,
    fontWeight: 700,
    color: '#C4B5FD',
    marginBottom: 6,
    lineHeight: 1.4,
  },
  h4: {
    fontFamily: 'Playfair Display',
    fontSize: 11,
    fontWeight: 700,
    color: '#94A3B8',
    marginBottom: 4,
    lineHeight: 1.4,
  },
  body: {
    fontFamily: 'Lato',
    fontSize: 10,
    fontWeight: 400,
    color: '#94A3B8',
    lineHeight: 1.7,
    marginBottom: 10,
  },
  bodySmall: {
    fontFamily: 'Lato',
    fontSize: 9,
    fontWeight: 400,
    color: '#64748B',
    lineHeight: 1.6,
    marginBottom: 6,
  },
  label: {
    fontFamily: 'Lato',
    fontSize: 8,
    fontWeight: 500,
    color: '#64748B',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  accent: {
    color: '#F59E0B',
  },
  green: {
    color: '#34D399',
  },
  red: {
    color: '#F87171',
  },
  gold: {
    color: '#FBBF24',
  },
});

export function PDFH1({ children, style }) {
  return <Text style={[styles.h1, style]}>{children}</Text>;
}

export function PDFH2({ children, style }) {
  return <Text style={[styles.h2, style]}>{children}</Text>;
}

export function PDFH3({ children, style }) {
  return <Text style={[styles.h3, style]}>{children}</Text>;
}

export function PDFH4({ children, style }) {
  return <Text style={[styles.h4, style]}>{children}</Text>;
}

export function PDFBody({ children, style }) {
  return <Text style={[styles.body, style]}>{children}</Text>;
}

export function PDFBodySmall({ children, style }) {
  return <Text style={[styles.bodySmall, style]}>{children}</Text>;
}

export function PDFLabel({ children, style }) {
  return <Text style={[styles.label, style]}>{children}</Text>;
}
