'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './page.module.scss';
import { useLang } from '@/context/LanguageContext';
import WorksSlider from '@/components/Works/WorksSlider';
import TagTitle from '@/components/UI/TagTitle/TagTitle';
import AutoScanImage from '@/components/Works/AutoScanImage';
import { ProjectItem } from './types';

export default function ProjectsPage() {
  const { t } = useLang();

  const projectList = t('projects.list');

  return (
    <>
      <div className={styles.projectsWrapper}>
        <header className={styles.headerTitle}>
          <TagTitle>{t('projects.tag')} </TagTitle>
          <h1 className={styles.mainTitle}>
            {t('projects.title.first')}<span>{t('projects.title.accent')}</span>
          </h1>
        </header>

        {Array.isArray(projectList) && projectList.map((project: ProjectItem) => (
          <motion.section
            key={project.id}
            className={styles.projectItem}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.imageSide}>
              <div className={styles.browserDecor}>
                <span /><span /><span />
              </div>

              {project.autoScan && project.image ? (
                <AutoScanImage
                  src={project.image}
                  alt={project.title}
                />
              ) : project.images && project.images.length > 0 ? (
                <WorksSlider images={project.images} />
              ) : project.image ? (
                <div className={styles.imageContainer}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={false}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    className={styles.projectImage}
                  />
                </div>
              ) : null}

            </div>

            <div className={styles.infoSide}>
              <div className={styles.header}>
                <span className={styles.number}>{'// '}{project.id}</span>
                <h2 className={styles.title}>{project.title}</h2>
                <span className={styles.category}>{project.category}</span>
              </div>

              <p className={styles.description}>
                {project.description}
              </p>

              <div className={styles.techList}>
                {project.tech.map((t: string) => (
                  <span key={t} className={styles.techItem}>{t}</span>
                ))}
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </>
  );
}
