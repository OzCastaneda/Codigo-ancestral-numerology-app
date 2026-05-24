import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import PDFCover from './components/PDFCover';
import PDFSection from './components/PDFSection';
import PDFPageWrapper from './components/PDFPageWrapper';
import PDFSectionTitle from './components/PDFSectionTitle';
import PDFInterpretationCard from './components/PDFInterpretationCard';
import PDFNumerologyCard from './components/PDFNumerologyCard';
import PDFCard from './components/PDFCard';
import PDFTextBlock from './components/PDFTextBlock';
import { formatDate, todayFormatted, getNumberDescription } from './utils/helpers';
import { registerFonts } from './utils/fonts';

registerFonts();

const styles = StyleSheet.create({
  resultsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  resultsCol: {
    flex: 1,
  },
  kabbalisticCard: {
    marginBottom: 18,
  },
  interpHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  interpTitle: {
    fontFamily: 'Helvetica',
    fontSize: 13,
    fontWeight: 700,
    color: '#C4B5FD',
    lineHeight: 1.5,
  },
  interpBody: {
    fontFamily: 'Helvetica',
    fontSize: 9,
    fontWeight: 400,
    color: '#94A3B8',
    lineHeight: 1.7,
    marginBottom: 10,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 6,
  },
  interpTag: {
    fontFamily: 'Helvetica',
    fontSize: 8,
    fontWeight: 500,
    color: '#A78BFA',
    backgroundColor: 'rgba(139, 92, 246, 0.08)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 3,
    marginRight: 4,
    marginBottom: 4,
  },
  hebrewLetter: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    color: '#F59E0B',
    lineHeight: 1,
  },
  astrologyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  astrologyLabel: {
    fontFamily: 'Helvetica',
    fontSize: 8,
    fontWeight: 500,
    color: '#64748B',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  astrologyValue: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    fontWeight: 700,
    color: '#F59E0B',
  },
  traitText: {
    fontFamily: 'Helvetica',
    fontSize: 9,
    fontWeight: 400,
    lineHeight: 1.5,
    marginBottom: 2,
  },
  traitPositive: { color: '#34D399' },
  traitNegative: { color: '#F87171' },
  traitDestructive: { color: '#FB923C' },
});

const CATEGORY_MAP = [
  { key: 'destiny', title: 'Número de Destino' },
  { key: 'soul', title: 'Impulso del Alma' },
  { key: 'personality', title: 'Personalidad / Expresión' },
  { key: 'mission', title: 'Yo Interno / Kármico' },
];

function ResultsBlock({ results, fullName, birthdate }) {
  const rows = [
    { key: 'destiny', title: 'Destino' },
    { key: 'soul', title: 'Alma' },
    { key: 'personality', title: 'Personalidad' },
    { key: 'mission', title: 'Misión' },
  ];

  return (
    <View wrap={false}>
      <PDFSectionTitle
        title="Tus Números de Vida"
        subtitle={`${fullName} — ${formatDate(birthdate)}`}
      />
      <View style={styles.resultsRow}>
        {rows.slice(0, 2).map(r => (
          <View key={r.key} style={styles.resultsCol}>
            <PDFNumerologyCard title={r.title} value={results[r.key]} description={getNumberDescription(r.key)} />
          </View>
        ))}
      </View>
      <View style={styles.resultsRow}>
        {rows.slice(2).map(r => (
          <View key={r.key} style={styles.resultsCol}>
            <PDFNumerologyCard title={r.title} value={results[r.key]} description={getNumberDescription(r.key)} />
          </View>
        ))}
      </View>
    </View>
  );
}

function InterpretationBlock({ interpretation, title }) {
  if (!interpretation) return null;
  return <PDFInterpretationCard interpretation={interpretation} title={title} />;
}

function KabbalisticBlock({ results, kabbalistic }) {
  if (!kabbalistic) return null;

  const entries = Object.entries(kabbalistic).filter(([, letter]) => letter && letter.name);
  if (entries.length === 0) return null;

  return (
    <View wrap={false}>
      <PDFSectionTitle
        title="Correspondencias Cabalísticas"
        subtitle="Letras hebreas, Sepher Yetzirah y Árbol de la Vida"
      />
      {entries.map(([key, letter]) => (
        <View key={key} style={styles.kabbalisticCard} wrap={false}>
          <PDFCard variant="gold">
            <View style={styles.interpHeader}>
              <Text style={[styles.interpTitle, { color: '#F59E0B' }]}>
                {results[key]} — {letter.name}
              </Text>
              <Text style={styles.hebrewLetter}>{letter.hebrew}</Text>
            </View>
            <Text style={styles.interpBody}>{letter.esoteric}</Text>

            <View style={styles.tagRow}>
              {letter.element && <Text style={styles.interpTag}>{letter.element}</Text>}
              {letter.planet && <Text style={styles.interpTag}>{letter.planet}</Text>}
              {letter.color && <Text style={styles.interpTag}>{letter.color}</Text>}
              {letter.tarot && <Text style={styles.interpTag}>{letter.tarot}</Text>}
            </View>

            {letter.positive && (
              <Text style={[styles.traitText, styles.traitPositive]}>
                ✓ {letter.positive}
              </Text>
            )}
            {letter.negative && (
              <Text style={[styles.traitText, styles.traitNegative]}>
                ✗ {letter.negative}
              </Text>
            )}
            {letter.destructive && (
              <Text style={[styles.traitText, styles.traitDestructive]}>
                ⚡ {letter.destructive}
              </Text>
            )}
          </PDFCard>
        </View>
      ))}
    </View>
  );
}

function AstrologyBlock({ zodiac }) {
  if (!zodiac || !zodiac.sign) return null;

  return (
    <View wrap={false}>
      <PDFSectionTitle
        title="Perfil Astrológico Cabalístico"
        subtitle="Signo zodiacal según la tradición hebrea"
      />
      <PDFCard variant="astrology">
        <View style={styles.astrologyRow}>
          <Text style={styles.astrologyLabel}>Signo</Text>
          <Text style={styles.astrologyValue}>{zodiac.sign.name}</Text>
        </View>
        <View style={styles.astrologyRow}>
          <Text style={styles.astrologyLabel}>Mes Hebreo</Text>
          <Text style={{ fontFamily: 'Helvetica', fontSize: 10, fontWeight: 600, color: '#94A3B8' }}>{zodiac.sign.hebrewMonth}</Text>
        </View>
        <View style={styles.astrologyRow}>
          <Text style={styles.astrologyLabel}>Planeta</Text>
          <Text style={{ fontFamily: 'Helvetica', fontSize: 10, fontWeight: 600, color: '#A78BFA' }}>{zodiac.sign.planet}</Text>
        </View>
        {zodiac.sign.tikkun && (
          <>
            <View style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.04)', marginVertical: 10 }} />
            <Text style={{ fontFamily: 'Helvetica', fontSize: 9, fontWeight: 700, color: '#F59E0B', marginBottom: 4, lineHeight: 1.4 }}>
              Tikkun (Corrección)
            </Text>
            <Text style={styles.interpBody}>{zodiac.sign.tikkun}</Text>
          </>
        )}
      </PDFCard>
    </View>
  );
}

function buildContentPages({ results, interpretations, kabbalistic, zodiac, fullName, birthdate }) {
  const pages = [];

  /* ── Page 1: Results ── */
  pages.push(
    <PDFPageWrapper key="page-results" label="1">
      <ResultsBlock results={results} fullName={fullName} birthdate={birthdate} />
    </PDFPageWrapper>
  );

  /* ── Pages 2-3: Interpretations (2 per page) ── */
  const interpGroups = [
    CATEGORY_MAP.slice(0, 2),
    CATEGORY_MAP.slice(2),
  ];

  interpGroups.forEach((group, gIdx) => {
    const pageLabel = String(gIdx + 2);
    const hasContent = group.some(({ key }) => {
      const interp = interpretations?.[key];
      return interp && interp.significado;
    });

    if (!hasContent) return;

    pages.push(
      <PDFPageWrapper key={`page-interp-${gIdx}`} label={pageLabel}>
        <PDFSectionTitle
          title="Interpretación de tus Números"
          subtitle="Significado espiritual, kármico y evolutivo"
        />
        {group.map(({ key, title }) => {
          const interp = interpretations?.[key];
          return <InterpretationBlock key={key} interpretation={interp} title={title} />;
        })}
      </PDFPageWrapper>
    );
  });

  /* ── Page 4: Kabbalistic + Astrology ── */
  const hasKabbalistic = kabbalistic && Object.entries(kabbalistic).some(([, l]) => l && l.name);
  const hasAstrology = zodiac && zodiac.sign;

  if (hasKabbalistic || hasAstrology) {
    pages.push(
      <PDFPageWrapper key="page-kabbalistic" label={String(interpGroups.length + 2)}>
        {hasKabbalistic && <KabbalisticBlock results={results} kabbalistic={kabbalistic} />}
        {hasAstrology && <AstrologyBlock zodiac={zodiac} />}
      </PDFPageWrapper>
    );
  }

  return pages;
}

export default function NumerologyReport({ profile, fullName, birthdate }) {
  const generatedDate = todayFormatted();
  const formattedBirthdate = formatDate(birthdate);

  const interpretations = profile?.interpretations || {};
  const kabbalistic = profile?.kabbalistic || {};
  const zodiac = profile?.zodiac || null;
  const results = profile?.results || {};

  const contentPages = buildContentPages({
    results,
    interpretations,
    kabbalistic,
    zodiac,
    fullName,
    birthdate,
  });

  return (
    <Document>
      <PDFCover
        fullName={fullName}
        birthdate={formattedBirthdate}
        generatedDate={generatedDate}
      />
      {contentPages}
    </Document>
  );
}
