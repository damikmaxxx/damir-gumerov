'use client';

import { Mail, Github, Send} from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import styles from './Footer.module.scss';

export default function Footer() {
  const { t } = useLang();

  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footerIsland}>
        <div className={styles.getInTouch}>
          <h3>{t('footer.getInTouch')}</h3>
          <div className={styles.socials}>
            <a href="mailto:damirgumerovwork@gmail.com"><Mail size={22} strokeWidth={1.5} /></a>
            <a href="https://t.me/damik_max" target="_blank" rel="noopener noreferrer"><Send size={22} strokeWidth={1.5} /></a>
            <a href="https://github.com/damikmaxxx" target="_blank" rel="noopener noreferrer"><Github size={22} strokeWidth={1.5} /></a>
          </div>
        </div>

        <div className={styles.colophon}>
          <p>{t('footer.designedBy')}</p>
          <p>{t('footer.builtWith')}</p>
        </div>

        <div className={styles.copyright}>
          {t('footer.copyright')}
        </div>
        <div className={`${styles.decorLine} ${styles['decorLine--left']}`} />
        <div className={`${styles.decorLine} ${styles['decorLine--right']}`} />
      </footer>
    </div>
  );
}