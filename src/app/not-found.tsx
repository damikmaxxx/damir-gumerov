'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';
import styles from './not-found.module.scss';

export default function NotFound() {
  const { t } = useLang();

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {/* Гигантский номер с анимацией моргания */}
        <motion.h1 
          className={styles.errorCode}
          animate={{ 
            opacity: [1, 0.8, 1, 0.5, 1, 0.9, 1],
            textShadow: [
              "0 0 10px rgba(255,255,255,0.2)",
              "0 0 20px rgba(255,255,255,0.4)",
              "0 0 10px rgba(255,255,255,0.2)"
            ]
          }}
          transition={{ 
            duration: 0.5, 
            repeat: Infinity, 
            repeatType: "mirror",
            times: [0, 0.1, 0.2, 0.3, 0.8, 0.9, 1] 
          }}
        >
          404
        </motion.h1>

        <h2 className={styles.title}>{t('notFound.title')}</h2>
        
        <p className={styles.description}>
          {t('notFound.desc')}
        </p>

        <Link href="/" className={styles.backLink}>
          {t('notFound.button')}
        </Link>
      </div>
    </div>
  );
}