import { create } from 'zustand';
import { calculateAll } from '../features/numerology/engine/numerologyEngine';

const useNumerologyStore = create((set, get) => ({
  fullName: '',
  birthdate: '',
  results: null,
  isLoading: false,
  error: null,
  toast: null,

  setFullName: (fullName) => set({ fullName }),
  setBirthdate: (birthdate) => set({ birthdate }),

  showToast: (message, type = 'error') => {
    set({ toast: { message, type } });
    setTimeout(() => set({ toast: null }), 3000);
  },

  clearToast: () => set({ toast: null }),

  reset: () => set({
    fullName: '', birthdate: '', results: null, error: null,
  }),

  calculate: () => {
    const { fullName, birthdate } = get();
    if (!fullName.trim() || !birthdate) {
      set({ error: 'Por favor, completa todos los campos.' });
      return false;
    }
    const parts = fullName.trim().split(/\s+/).filter(Boolean);
    if (parts.length < 2) {
      set({ error: 'Por favor, ingresa tu nombre completo (al menos nombre y apellido).' });
      return false;
    }
    try {
      set({ isLoading: true, error: null });
      const results = calculateAll(fullName, birthdate);
      set({ results, isLoading: false });
      return true;
    } catch (err) {
      set({ error: err.message, isLoading: false });
      return false;
    }
  },
}));

export default useNumerologyStore;
