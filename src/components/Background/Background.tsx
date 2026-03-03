'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useAnimationContext } from '@/context/AnimationContext';
import styles from './Background.module.scss';

export default function Background() {
  const { hasPlayed } = useAnimationContext();

  const finalOpacity = 0.35;
  const finalFilter = 'blur(0px) brightness(1) grayscale(1)';

  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.imageContainer}
        initial={hasPlayed ? false : { 
          scale: 1.25, 
          opacity: 0, 
          filter: 'blur(15px) brightness(2.5) grayscale(1)' 
        }}
        animate={{ 
          scale: 1, 
          opacity: finalOpacity, 
          filter: finalFilter 
        }}
        transition={{
          duration: 4,               
          ease: [0.16, 1, 0.3, 1],   
          delay: 0.3
        }}
        style={hasPlayed ? { opacity: finalOpacity, filter: finalFilter } : {}}
      >
        <Image
          src="https://w.wallhaven.cc/full/p2/wallhaven-p2ed9m.jpg"
          alt="background"
          fill
          priority
          quality={75}
          className={styles.bgImage}
        />
      </motion.div>

      <div className={styles.vignette} />


    </div>
  );
}