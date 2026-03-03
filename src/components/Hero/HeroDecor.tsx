'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLang } from '@/context/LanguageContext'; 
import styles from './HeroDecor.module.scss';

export default function HeroDecor() {
    const { lang, setLang, t } = useLang(); 
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString(lang === 'RU' ? 'ru-RU' : 'en-US', {
                hour12: lang !== 'RU',
                hour: '2-digit',
                minute: '2-digit'
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 10000);
        return () => clearInterval(interval);
    }, [lang]); 

    const fadeUp = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 0.5, y: 0 },
        transition: { duration: 1, delay: 1 }
    };

    return (
        <div className={styles.decorWrapper}>
            <motion.div className={`${styles.item} ${styles.topLeft}`} {...fadeUp}>
                <span>{t('decor.location')}</span>
                <span className={styles.separator}>—</span>
                <span>{time}</span>
            </motion.div>

            <motion.div className={`${styles.item} ${styles.topRight}`} {...fadeUp}>
                <span className={styles.langLabel}>LNG</span>
                <div className={styles.langSwitcher}>
                    <button
                        className={`${styles.langBtn} ${lang === 'EN' ? styles.active : ''}`}
                        onClick={() => setLang('EN')}
                    >
                        EN
                        {lang === 'EN' && <motion.div layoutId="activeLang" className={styles.langDot} />}
                    </button>

                    <button
                        className={`${styles.langBtn} ${lang === 'RU' ? styles.active : ''}`}
                        onClick={() => setLang('RU')}
                    >
                        RU
                        {lang === 'RU' && <motion.div layoutId="activeLang" className={styles.langDot} />}
                    </button>
                </div>
            </motion.div>
            <motion.div className={`${styles.item} ${styles.bottomLeft}`} {...fadeUp}>
                <div className={styles.statusDot} />
                <span>{t('decor.status')}</span>
            </motion.div>
            <motion.div className={`${styles.item} ${styles.bottomRight}`} {...fadeUp}>
                <span className={styles.accent}>{t('decor.name')}</span>
                <span className={styles.separator}>/</span>
                <span>{t('decor.dev')}</span>
            </motion.div>
        </div>
    );
}