import { useState, useEffect, useCallback } from 'react';
import { ensureClient } from '../lib/supabase';

const FALLBACK_LETTERS = {
  1: { number: 1, hebrew_name: 'Alef', hebrew_character: 'א', latin_equivalent: 'A', significance: 'El aliento de Dios. Principio vital de todo.', light_aspect: 'Liderazgo, iniciativa, confianza', shadow_aspect: 'Egoísmo, agresividad, terquedad', tarot_equivalent: 'El Mago', sephirah_connection: 'Kether — La Corona' },
  2: { number: 2, hebrew_name: 'Beith', hebrew_character: 'ב', latin_equivalent: 'B', significance: 'El lugar de nacimiento de la creación.', light_aspect: 'Diplomacia, cooperación, sensibilidad', shadow_aspect: 'Indecisión, dependencia, timidez', tarot_equivalent: 'La Sacerdotisa', sephirah_connection: 'Chochmah — Sabiduría' },
  3: { number: 3, hebrew_name: 'Guimel', hebrew_character: 'ג', latin_equivalent: 'G', significance: 'La fluidez del habla y la comunicación.', light_aspect: 'Creatividad, alegría, expresión', shadow_aspect: 'Vanidad, dispersión, impaciencia', tarot_equivalent: 'La Emperatriz', sephirah_connection: 'Binah — Entendimiento' },
  4: { number: 4, hebrew_name: 'Dálet', hebrew_character: 'ד', latin_equivalent: 'D', significance: 'El acceso a la manifestación física.', light_aspect: 'Disciplina, orden, estabilidad', shadow_aspect: 'Rigidez, adicción al trabajo, estrechez', tarot_equivalent: 'El Emperador', sephirah_connection: 'Chesed — Misericordia' },
  5: { number: 5, hebrew_name: 'He', hebrew_character: 'ה', latin_equivalent: 'H', significance: 'El aliento de vida. Potencia femenina divina.', light_aspect: 'Adaptabilidad, aventura, versatilidad', shadow_aspect: 'Impaciencia, irresponsabilidad, excesos', tarot_equivalent: 'El Hierofante', sephirah_connection: 'Geburah — Severidad' },
  6: { number: 6, hebrew_name: 'Vav', hebrew_character: 'ו', latin_equivalent: 'V, O, U', significance: 'El eslabón que une lo humano con lo divino.', light_aspect: 'Responsabilidad, arte, servicio', shadow_aspect: 'Entrometido, mártir, presunción', tarot_equivalent: 'Los Enamorados', sephirah_connection: 'Tiphereth — Belleza' },
  7: { number: 7, hebrew_name: 'Zain', hebrew_character: 'ז', latin_equivalent: 'Z', significance: 'El dominio de la lengua. La espada del discernimiento.', light_aspect: 'Análisis, sabiduría, perfección', shadow_aspect: 'Frialdad, escepticismo, reserva', tarot_equivalent: 'El Carro', sephirah_connection: 'Netzach — Victoria' },
  8: { number: 8, hebrew_name: 'Chet', hebrew_character: 'ח', latin_equivalent: 'CH', significance: 'El cultivo de la propia conciencia.', light_aspect: 'Ambición, eficiencia, juicio sólido', shadow_aspect: 'Materialismo, represión, impaciencia', tarot_equivalent: 'La Fuerza', sephirah_connection: 'Hod — Gloria' },
  9: { number: 9, hebrew_name: 'Tet', hebrew_character: 'ט', latin_equivalent: 'T', significance: 'Sabiduría ganada. La fuerza Kundalini.', light_aspect: 'Compasión, idealismo, arte', shadow_aspect: 'Frustración, amargura, dispersión', tarot_equivalent: 'El Ermitaño', sephirah_connection: 'Jesod — Fundamento' },
};

export default function useHebrewLetters() {
  const [letters, setLetters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchLetters() {
      try {
        const client = ensureClient();
        const { data, error: fetchError } = await client
          .from('hebrew_letters')
          .select('*')
          .order('number', { ascending: true });

        if (cancelled) return;

        if (fetchError) throw fetchError;

        if (data && data.length > 0) {
          const map = {};
          data.forEach(l => { map[l.number] = l; });
          setLetters(map);
        } else {
          setLetters(FALLBACK_LETTERS);
        }
      } catch (err) {
        if (!cancelled) {
          console.warn('Error fetching Hebrew letters, using fallback:', err.message);
          setLetters(FALLBACK_LETTERS);
          setError(err.message);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchLetters();
    return () => { cancelled = true; };
  }, []);

  const getLetterByNumber = useCallback((number) => {
    if (!letters) return null;
    return letters[number] || null;
  }, [letters]);

  return { letters, loading, error, getLetterByNumber };
}
