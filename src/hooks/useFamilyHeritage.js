import { useState, useEffect } from 'react';
import { ensureClient } from '../lib/supabase';

const FALLBACK_HERITAGE = {
  primary_psychological_pattern: 'Patrón del Salvador / Rescatador',
  core_family_nucleus: 'Núcleo familiar marcado por la sobreprotección materna y la ausencia emocional del padre. Se repite un patrón de cuidar a otros para sentirse valioso.',
  major_gifts: [
    'Empatía profunda y sanación emocional',
    'Capacidad de mediación en conflictos',
    'Intuición espiritual desarrollada',
    'Talento para la comunicación sanadora',
  ],
  liberation_challenge: 'Liberarse del mandato inconsciente de "salvar a todos" para poder salvarse a sí mismo. Romper con la creencia de que su valor depende de lo que da a otros.',
  personal_mission: 'Sanar la herida de abandono propia para poder acompañar a otros desde la plenitud, no desde la carencia.',
  family_mission: 'Restaurar los vínculos familiares desde la comprensión transgeneracional, honrando a los ancestros sin cargar con sus deudas.',
  social_mission: 'Crear comunidades de apoyo donde el cuidado mutuo reemplace el sacrificio unilateral. Ser puente entre el dolor ajeno y la sanación colectiva.',
  fundamental_mission: 'Encarnar el equilibrio entre el dar y el recibir. Recordar que su misión más alta es ser un canal de luz consciente, no un salvador agotado.',
};

export default function useFamilyHeritage({ profileId, userId } = {}) {
  const [heritage, setHeritage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchHeritage() {
      try {
        const client = ensureClient();
        let query = client
          .from('family_heritage')
          .select('*');

        if (profileId) {
          query = query.eq('profile_id', profileId);
        } else if (userId) {
          query = query.eq('user_id', userId);
        }

        const { data, error: fetchError } = await query
          .limit(1)
          .maybeSingle();

        if (cancelled) return;

        if (fetchError) throw fetchError;

        if (data) {
          setHeritage(data);
        } else {
          setHeritage(FALLBACK_HERITAGE);
        }
      } catch (err) {
        if (!cancelled) {
          console.warn('Error fetching family heritage, using fallback:', err.message);
          setHeritage(FALLBACK_HERITAGE);
          setError(err.message);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchHeritage();
    return () => { cancelled = true; };
  }, [profileId, userId]);

  return { heritage, loading, error };
}
