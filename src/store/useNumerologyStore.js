import { create } from 'zustand';
import { calculateAll } from '../features/numerology/engine/numerologyEngine';

const useNumerologyStore = create((set, get) => ({
  fullName: '',
  birthdate: '',
  sex: 'masculino',
  results: null,
  reportId: null,
  isLoading: false,
  error: null,
  toast: null,

  setFullName: (fullName) => set({ fullName }),
  setBirthdate: (birthdate) => set({ birthdate }),
  setSex: (sex) => set({ sex }),
  setReportId: (reportId) => set({ reportId }),

  showToast: (message, type = 'error') => {
    set({ toast: { message, type } });
    setTimeout(() => set({ toast: null }), 3000);
  },

  clearToast: () => set({ toast: null }),

  reset: () => set({
    fullName: '', birthdate: '', sex: 'masculino', results: null, error: null,
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

export const useFullName = () => useNumerologyStore((s) => s.fullName);
export const useBirthdate = () => useNumerologyStore((s) => s.birthdate);
export const useSex = () => useNumerologyStore((s) => s.sex);
export const useResults = () => useNumerologyStore((s) => s.results);
export const useReportId = () => useNumerologyStore((s) => s.reportId);
export const useIsLoading = () => useNumerologyStore((s) => s.isLoading);
export const useError = () => useNumerologyStore((s) => s.error);
export const useToastValue = () => useNumerologyStore((s) => s.toast);

export const useSetFullName = () => useNumerologyStore((s) => s.setFullName);
export const useSetBirthdate = () => useNumerologyStore((s) => s.setBirthdate);
export const useSetSex = () => useNumerologyStore((s) => s.setSex);
export const useSetReportId = () => useNumerologyStore((s) => s.setReportId);
export const useShowToast = () => useNumerologyStore((s) => s.showToast);
export const useClearToast = () => useNumerologyStore((s) => s.clearToast);
export const useCalculate = () => useNumerologyStore((s) => s.calculate);

export default useNumerologyStore;
