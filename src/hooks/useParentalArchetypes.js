import { useState, useEffect, useCallback } from 'react';
import { ensureClient } from '../lib/supabase';

const FALLBACK_ARCHETYPES = {
  1: {
    PADRE: {
      number: 1, archetype_type: 'PADRE', name: 'El Padre Autoridad',
      characteristics: 'Líder nato, independiente, pionero, ambicioso. Marca el camino con determinación y espera que los demás sigan su ejemplo.',
      psychological_influence: 'Influye en la autoestima y la confianza para tomar decisiones. Un padre 1 bien integrado enseña a ser valiente y a confiar en uno mismo.',
      shadow_aspect: 'Autoritarismo extremo, egoísmo, incapacidad para escuchar. Puede ser dominante, competitivo en exceso o ausente emocionalmente.',
      integration_path: 'Aprender a liderar desde el servicio, no desde la imposición. Integrar la humildad y la escucha activa.',
    },
    MADRE: {
      number: 1, archetype_type: 'MADRE', name: 'La Madre Independiente',
      characteristics: 'Mujer pionera, creativa, con fuerte identidad propia. Independiente y segura de sí misma.',
      psychological_influence: 'Moldea la capacidad de valerse por sí mismo y la confianza en el propio criterio. Una madre 1 integrada cría hijos seguros y emprendedores.',
      shadow_aspect: 'Egocentrismo, necesidad de ser el centro de atención, competitividad con sus hijos. Puede imponer sus expectativas.',
      integration_path: 'Equilibrar la independencia con la conexión emocional. Permitir que los hijos tengan su propio espacio.',
    },
  },
  8: {
    PADRE: {
      number: 8, archetype_type: 'PADRE', name: 'El Padre Ejecutivo',
      characteristics: 'Ambicioso, eficiente, con gran capacidad ejecutiva. Proveedor material, orientado al logro y al reconocimiento social.',
      psychological_influence: 'Influye en la relación con el dinero, el poder y el éxito. Un padre 8 integrado enseña a manejar los recursos con sabiduría.',
      shadow_aspect: 'Materialismo extremo, frialdad emocional, exigencia implacable. Puede priorizar el éxito sobre los vínculos afectivos.',
      integration_path: 'Sanar la creencia de que el valor propio depende del éxito material. Aprender a expresar afecto más allá de lo material.',
    },
    MADRE: {
      number: 8, archetype_type: 'MADRE', name: 'La Madre Exitosa',
      characteristics: 'Mujer de gran capacidad organizativa, ambiciosa y eficiente. Busca la excelencia en todo lo que hace.',
      psychological_influence: 'Marca la relación con la abundancia, la autoexigencia y la capacidad de gestionar la vida práctica.',
      shadow_aspect: 'Exigencia excesiva, crítica constante, frialdad. Puede transmitir la creencia de que nunca es suficiente.',
      integration_path: 'Aprender a valorar el ser sobre el hacer. Relajar los estándares de perfección. Mostrar vulnerabilidad y afecto incondicional.',
    },
  },
  3: {
    PADRE: {
      number: 3, archetype_type: 'PADRE', name: 'El Padre Creativo',
      characteristics: 'Comunicador, optimista, talentoso, con gran sentido del humor. Inspira a través de la expresión artística.',
      psychological_influence: 'Influye en la capacidad de expresión, la creatividad y la alegría. Un padre 3 integrado fomenta la autoexpresión.',
      shadow_aspect: 'Irresponsabilidad, vanidad, dispersión. Puede ser emocionalmente inmaduro o usar el encanto para evadir responsabilidades.',
      integration_path: 'Canalizar la creatividad con disciplina. Profundizar en las relaciones más allá de la superficie.',
    },
    MADRE: {
      number: 3, archetype_type: 'MADRE', name: 'La Madre Artista',
      characteristics: 'Mujer creativa, expresiva, sociable y alegre. Llena el hogar de arte, música y celebración.',
      psychological_influence: 'Moldea la capacidad de expresar emociones y la creatividad. Una madre 3 integrada cría hijos comunicativos.',
      shadow_aspect: 'Vanidad, necesidad de aprobación externa, competencia con los hijos. Puede ser excesivamente dramática.',
      integration_path: 'Desarrollar profundidad emocional más allá de la superficie alegre. Validar las emociones de los hijos sin competir.',
    },
  },
  6: {
    PADRE: {
      number: 6, archetype_type: 'PADRE', name: 'El Padre Protector',
      characteristics: 'Responsable, protector, artístico, con fuerte sentido del deber. Valora la familia y la armonía.',
      psychological_influence: 'Influye en la capacidad de compromiso, la responsabilidad afectiva y el sentido de pertenencia.',
      shadow_aspect: 'Sobreprotector, entrometido, mártir. Puede generar culpa en los hijos al sacrificarse constantemente.',
      integration_path: 'Aprender a cuidar sin anular. Distinguir entre protección amorosa y control ansioso.',
    },
    MADRE: {
      number: 6, archetype_type: 'MADRE', name: 'La Madre Abnegada',
      characteristics: 'Mujer profundamente amorosa, protectora, dedicada al hogar y la familia.',
      psychological_influence: 'Marca la relación con el amor, el servicio y la pertenencia. Una madre 6 integrada cría hijos con fuerte sentido de familia.',
      shadow_aspect: 'Martirio, sobreprotección, sacrificio extremo. Puede vivir a través de sus hijos.',
      integration_path: 'Sanar la autoestima para dar desde la plenitud, no desde la carencia. Aprender a recibir.',
    },
  },
};

export default function useParentalArchetypes(number) {
  const [father, setFather] = useState(null);
  const [mother, setMother] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchArchetypes() {
      setLoading(true);
      try {
        const client = ensureClient();
        const { data, error: fetchError } = await client
          .from('parental_archetypes')
          .select('*')
          .eq('number', number);

        if (cancelled) return;

        if (fetchError) throw fetchError;

        if (data && data.length > 0) {
          const fatherData = data.find(a => a.archetype_type === 'PADRE');
          const motherData = data.find(a => a.archetype_type === 'MADRE');
          setFather(fatherData || null);
          setMother(motherData || null);
        } else {
          const fallbackNum = FALLBACK_ARCHETYPES[number];
          if (fallbackNum) {
            setFather(fallbackNum.PADRE || null);
            setMother(fallbackNum.MADRE || null);
          }
        }
      } catch (err) {
        if (!cancelled) {
          console.warn('Error fetching parental archetypes, using fallback:', err.message);
          const fallbackNum = FALLBACK_ARCHETYPES[number];
          if (fallbackNum) {
            setFather(fallbackNum.PADRE || null);
            setMother(fallbackNum.MADRE || null);
          }
          setError(err.message);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (number) {
      fetchArchetypes();
    } else {
      setLoading(false);
    }

    return () => { cancelled = true; };
  }, [number]);

  return { father, mother, loading, error };
}
