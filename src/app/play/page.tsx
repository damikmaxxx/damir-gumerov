'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import ProjectModal from '@/components/Play/ProjectModal';
import { useLang } from '@/context/LanguageContext';
import TagTitle from '@/components/UI/tagTitle/TagTitle';

import { PlayItem } from './types';

export default function PlayPage() {
  const { t } = useLang();

  const items = t('play.items') as PlayItem[];

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedItem = Array.isArray(items)
    ? items.find((item: PlayItem) => item.id === selectedId)
    : null;

  return (
    <>
      <div className={styles.playWrapper}>
        <TagTitle>{t('play.tag')}</TagTitle>
        
        <motion.div
          className={styles.grid}
          initial="hidden"
          animate="show"
          variants={{
            show: { transition: { staggerChildren: 0.05 } }
          }}
        >
          {Array.isArray(items) && items.map((item: PlayItem) => (
            <motion.div
              key={item.id}
              layoutId={`item-container-${item.id}`}
              className={`${styles.item} ${styles[item.size]}`}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                show: { opacity: 1, scale: 1 }
              }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedId(item.id)}
            >
              <motion.div className={styles.imageWrap} layoutId={`item-image-${item.id}`}>
                <Image 
                  priority={item.id <= 4} 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px" 
                />
              </motion.div>

              <div className={styles.overlay}>
                <div className={styles.itemInfo}>
                  <span className={styles.category}>[{item.category}]</span>
                  <span className={styles.title}>{item.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.footerStatus}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className={styles.statusPulse} />
          <span>{t('play.footer')}</span>
        </motion.div>

        <AnimatePresence>
          {selectedId && (
            <ProjectModal
              item={selectedItem}
              onClose={() => setSelectedId(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}