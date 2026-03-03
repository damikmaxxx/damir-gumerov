"use client";
import { motion } from 'framer-motion';
import { PROJECTS } from '@/constants/projects';
import styles from './Projects.module.scss';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>Избранные проекты</h2>
      <div className={styles.grid}>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`${styles.card} ${styles[project.size]}`}
          >
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.tags}>
                  {project.stack.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                <ArrowUpRight className={styles.icon} />
              </div>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
            </div>
            <div className={styles.glow} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}