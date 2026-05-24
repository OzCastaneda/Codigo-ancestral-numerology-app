import { memo } from 'react';
import { motion } from 'framer-motion';

function NumberCard({ title, value, description, index = 0 }) {
  return (
    <motion.div
      className="number-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="number-title">{title}</div>
      <div className={`number-value${value ? ' pop' : ' loading'}`}>
        {value ?? ''}
      </div>
      <div className="number-desc">{description}</div>
    </motion.div>
  );
}

export default memo(NumberCard);
