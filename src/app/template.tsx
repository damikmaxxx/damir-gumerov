'use client';

import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div

      animate={{ y: 0, opacity: 1,}}
      transition={{ ease: 'easeOut', duration: 0.6 }}
      style={{ width: '100%',}}
    >
      {children}
    </motion.div>
  );
}