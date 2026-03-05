'use client';
import { motion } from 'framer-motion';
import styles from './Skeleton.module.scss';
import React from 'react'; 

interface SkeletonProps {
  className?: string;
  style?: React.CSSProperties; 
}

export default function Skeleton({ className, style }: SkeletonProps) {
  return (
    <motion.div 
      className={`${styles.skeleton} ${className || ''}`}
      style={style} 
      initial={{ opacity: 0.3 }}
      animate={{ opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}