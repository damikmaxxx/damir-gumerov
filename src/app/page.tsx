'use client';

import { motion, animate, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Sparkle } from 'lucide-react';
import styles from './page.module.scss';
import NavIcons from '@/components/Navigation/CircularNav';
import { useAnimationContext } from '@/context/AnimationContext';
import { useLang } from '@/context/LanguageContext'; 
import { useIsMobile } from '@/hooks/useIsMobile';

export default function HomePage() {
  const { rotation, hasPlayed, setHasPlayed } = useAnimationContext();
  const { t } = useLang(); 
  const [step, setStep] = useState(hasPlayed ? 'nav' : 'lines');
  const pathname = usePathname();

  useEffect(() => {
    if (hasPlayed) return;

    const timer1 = setTimeout(() => setStep('name'), 500);
    const timer2 = setTimeout(() => {
      setStep('nav');
      setHasPlayed(true);
      animate(rotation, 360, {
        duration: 3,
        ease: [0.22, 1, 0.36, 1]
      })
    }, 1500);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, [hasPlayed, rotation, setHasPlayed]);

  const roles = t('hero.roles');
  const isMobile = useIsMobile();
  return (
    <div className={styles.heroContainer}>
      <div className={styles.linesContainer}>
        {[16.66, 33.33, 50, 66.66, 83.33].map((left, i) => (
          <motion.div
            key={i}
            className={styles.line}
            style={{ left: `${left}%`, transformOrigin: i % 2 === 0 ? 'bottom center' : 'top center' }}
            initial={hasPlayed ? false : { scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 5, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </div>

      <div className={styles.centerStage}>
        <motion.svg
          viewBox="0 0 500 500"
          className={styles.circleSvg}
          style={{ rotate: rotation, position: 'absolute' }}
          initial={hasPlayed ? false : { scale: 0, opacity: 0 }}
          animate={step !== 'lines' ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 2 }}
        >
          <circle cx="250" cy="250" r="240" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        </motion.svg>

        {!isMobile && <div className={styles.iconContainer}>
          <NavIcons mode="circle" activePath={pathname} rotation={rotation} />
        </div>}

        <AnimatePresence>
          {step !== 'lines' && (
            <motion.div
              className={styles.heroText}
              initial={hasPlayed ? false : { opacity: 0, filter: 'blur(10px)', y: 20 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.8, delay: hasPlayed ? 0 : 0.2 }}
            >
              <h1 className={styles.heroTitle}>
                {t('hero.name')[0]}<br />{t('hero.name')[1]}
              </h1>

              <motion.div
                className={styles.rolePlaque}
                initial={hasPlayed ? false : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: hasPlayed ? 0 : 0.5, duration: 0.8 }}
              >
                <div className={styles.marqueeTrack}>
                  {[...roles, ...roles].map((role, index) => (
                    <div key={index} className={styles.roleItem}>
                      <span>{role}</span>
                      <Sparkle size={12} className={styles.sparkleIcon} />
                    </div>
                  ))}
                </div>
              </motion.div>

              <p className={styles.heroSubtitle}>
                {t('hero.subtitle')}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}