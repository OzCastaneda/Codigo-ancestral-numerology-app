import PsychoEnergeticSchema from '../../../features/numerology/components/PsychoEnergeticSchema';

export default function EsquemaTab({ profile }) {
  const results = profile?.results;

  if (!results) return null;

  return (
    <PsychoEnergeticSchema
      profileNumbers={{
        destiny: results.destiny,
        soul: results.soul,
        personality: results.personality,
        mission: results.mission,
      }}
    />
  );
}
