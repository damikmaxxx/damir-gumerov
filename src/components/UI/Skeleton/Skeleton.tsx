'use client';
import { motion } from 'framer-motion';
import styles from './Skeleton.module.scss';
import React from 'react'; // Импортируем React для типов

interface SkeletonProps {
  className?: string;
  style?: React.CSSProperties; // <=== Разрешаем проп style
}

export default function Skeleton({ className, style }: SkeletonProps) {
  return (
    <motion.div 
      className={`${styles.skeleton} ${className || ''}`}
      style={style} // <=== Применяем стили здесь
      initial={{ opacity: 0.3 }}
      animate={{ opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}