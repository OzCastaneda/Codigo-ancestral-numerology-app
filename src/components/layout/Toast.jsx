import { useEffect } from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useNumerologyStore, { useToastValue } from '../../store/useNumerologyStore';

export default function Toast() {
  const toast = useToastValue();

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        useNumerologyStore.getState().clearToast();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <div className="toast-container">
      <AnimatePresence>
        {toast && (
          <motion.div
            className={`toast ${toast.type === 'error' ? 'toast-error' : 'toast-success'}`}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            role="alert"
          >
            {toast.type === 'error' ? <AlertTriangle size={18} /> : <CheckCircle size={18} />}
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
