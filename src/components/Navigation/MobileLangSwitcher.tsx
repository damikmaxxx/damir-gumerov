'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';
import styles from './MobileLangSwitcher.module.scss';

export default function MobileLangSwitcher() {
  const { lang, setLang } = useLang();

  const toggleLang = () => {
    setLang(lang === 'EN' ? 'RU' : 'EN');
  };

  return (
    <button className={styles.switcher} onClick={toggleLang}>
      <AnimatePresence mode="wait">
        <motion.span
          key={lang}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={styles.langText}
        >
          {lang}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}