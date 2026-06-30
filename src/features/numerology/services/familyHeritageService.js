import { getFamilyHeritageByNumber } from '../data/familyHeritageData';

export function computeFamilyHeritage(results) {
  if (!results) return null;

  const { destiny, soul, personality, mission } = results;

  const destinyHeritage = getFamilyHeritageByNumber(destiny);
  const soulHeritage = getFamilyHeritageByNumber(soul);
  const personalityHeritage = getFamilyHeritageByNumber(personality);
  const missionHeritage = getFamilyHeritageByNumber(mission);

  if (!destinyHeritage && !soulHeritage && !personalityHeritage && !missionHeritage) return null;

  return {
    primary_psychological_pattern: destinyHeritage?.psychological_pattern || 'Patrón en evolución',
    core_family_nucleus: buildNucleus(destinyHeritage, soulHeritage),
    major_gifts: buildGifts(personalityHeritage, soulHeritage),
    liberation_challenge: soulHeritage?.liberation_challenge || 'Confiar en el proceso de sanación',
    personal_mission: destinyHeritage?.personal_mission || 'Descubrir tu propio camino',
    family_mission: soulHeritage?.family_mission || 'Sanar los vínculos desde el amor consciente',
    social_mission: personalityHeritage?.social_mission || 'Contribuir al bienestar colectivo',
    fundamental_mission: missionHeritage?.fundamental_mission || 'Vivir en coherencia con tu esencia',
  };
}

function buildNucleus(destiny, soul) {
  const parts = [];
  if (destiny?.family_nucleus) parts.push(destiny.family_nucleus);
  if (soul?.family_nucleus) {
    const soulPart = soul.family_nucleus.charAt(0).toLowerCase() + soul.family_nucleus.slice(1);
    parts.push(soulPart);
  }
  if (parts.length === 0) return 'Núcleo familiar en proceso de descubrimiento consciente.';
  return parts.join(' ') + ' La combinación de tus números revela que tu linaje te preparó para una evolución única.';
}

function buildGifts(personality, soul) {
  const gifts = [];
  if (personality?.gifts) {
    gifts.push(...personality.gifts.slice(0, 2));
  }
  if (soul?.gifts) {
    gifts.push(...soul.gifts.slice(2, 4));
  }
  if (gifts.length === 0) {
    return ['Empatía y sensibilidad', 'Conexión con tu propósito'];
  }
  return gifts;
}
