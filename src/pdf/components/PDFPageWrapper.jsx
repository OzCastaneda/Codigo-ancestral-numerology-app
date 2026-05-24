import { Page, View, StyleSheet } from '@react-pdf/renderer';
import PDFFooter from './PDFFooter';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#0B1020',
    padding: 36,
    paddingTop: 40,
    paddingBottom: 64,
  },
  inner: {
    flexDirection: 'column',
    gap: 0,
  },
});

export default function PDFPageWrapper({ label, children, style, ...rest }) {
  return (
    <Page size="A4" style={[styles.page, style]} wrap {...rest}>
      <View style={styles.inner}>{children}</View>
      <PDFFooter label={label} />
    </Page>
  );
}
