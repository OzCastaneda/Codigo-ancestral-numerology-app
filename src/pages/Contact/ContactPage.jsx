import { motion } from 'framer-motion';
import ContactSection from '../../components/contact/ContactSection';

export default function ContactPage() {
  return (
    <motion.div
      className="content-grid single"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <ContactSection />
    </motion.div>
  );
}
