'use client';

import { motion, Variants } from 'framer-motion';
import { X, Github } from 'lucide-react';
import Image from 'next/image';
import styles from './ProjectModal.module.scss';

export default function ProjectModal({ item, onClose }: any) {
  if (!item) return null;

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: 0.3, 
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className={styles.modalContent}
        layoutId={`item-container-${item.id}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.mediaSide}>
          <motion.div className={styles.imageWrapper} layoutId={`item-image-${item.id}`}>
            {item.video ? (
              <video src={item.video} autoPlay loop muted playsInline />
            ) : (
              <Image src={item.img} alt={item.title} fill priority />
            )}
          </motion.div>
        </div>

        <motion.div 
          className={styles.infoSide}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={24} strokeWidth={1.5} />
          </button>

          <div className={styles.textContent}>
            <motion.h2 className={styles.title} variants={itemVariants}>
              {item.title}
            </motion.h2>

            <motion.div className={styles.tags} variants={itemVariants}>
              {item.tags?.map((tag: string) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </motion.div>

            <motion.p className={styles.description} variants={itemVariants}>
              {item.desc}
            </motion.p>
          </div>

          <motion.div className={styles.footer} variants={itemVariants}>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                <span>View Source</span>
                <Github size={18} />
              </a>
            ) : (
              <div className={styles.privateLabel}>[ Internal Lab Case ]</div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}