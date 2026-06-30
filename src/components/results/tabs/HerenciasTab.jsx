import FamilyHeritagePanel from '../../../features/numerology/components/FamilyHeritagePanel';

export default function HerenciasTab({ profile }) {
  const results = profile?.results;

  if (!results) return null;

  return <FamilyHeritagePanel results={results} />;
}
