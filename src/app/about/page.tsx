'use client';

import { motion } from 'framer-motion';
import styles from './page.module.scss';
import { Mail, Github, Send, Phone, LucideIcon } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import TagTitle from '@/components/UI/tagTitle/TagTitle';

import { 
  PersonalDataItem, 
  SkillGroup, 
  ExperienceItem, 
  EducationItem, 
  ContactItem 
} from './types';

const ICON_MAP: Record<string, LucideIcon> = {
  mail: Mail,
  github: Github,
  send: Send,
  phone: Phone
};

export default function AboutPage() {
  const { t } = useLang();

  return (
    <>
      <div className={styles.aboutWrapper}>
        <TagTitle>{t('about.tag')}</TagTitle>

        {/* ID КАРТА / ПАСПОРТ */}
        <motion.div
          className={styles.portraitContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.personalInfoGrid}>
            <div className={styles.systemInfo}>
              <span>OWNER</span>
              <span className={styles.serial}>D.GUMEROV</span>
            </div>

            <div className={styles.dataRows}>
              {(t('about.personalData') as PersonalDataItem[]).map((item, idx) => (
                <div key={idx} className={styles.infoRow}>
                  <span className={styles.infoLabel}>{item.label}</span>
                  <div className={styles.infoLine} />
                  <span className={styles.infoValue}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ЗАГОЛОВОК */}
        <motion.h1
          className={styles.mainHeading}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('about.title.first')}<span>{t('about.title.accent')}</span>{t('about.title.last')}
        </motion.h1>

        {/* БИОГРАФИЯ */}
        <motion.p
          className={styles.bio}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t('about.bio')}
        </motion.p>

        {/* НАВЫКИ / SKILLS */}
        <h2 className={styles.sectionTitle}>{t('about.sections.stack')}</h2>
        <div className={styles.skillsManifest}>
          {(t('about.skills') as SkillGroup[]).map((group, i) => (
            <div key={i} className={styles.manifestRow}>
              <span className={styles.manifestCategory}>{group.label}</span>
              <div className={styles.manifestDots}></div>
              <div className={styles.manifestItems}>
                {group.items.map((item, j) => (
                  <span key={j}>
                    {item}
                    {j < group.items.length - 1 && <span className={styles.divider}>/</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ОПЫТ РАБОТЫ */}
        <h2 className={styles.sectionTitle}>{t('about.sections.experience')}</h2>
        <div className={styles.experienceList}>
          {(t('about.experience') as ExperienceItem[]).map((exp, index) => (
            <motion.div
              key={index}
              className={styles.expItem}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.roleInfo}>
                <span className={styles.role}>{exp.role}</span>
                <span className={styles.company}>{exp.company}</span>
              </div>
              <span className={styles.date}>{exp.date}</span>
            </motion.div>
          ))}
        </div>

        {/* ОБРАЗОВАНИЕ */}
        <h2 className={styles.sectionTitle}>{t('about.sections.education')}</h2>
        <div className={styles.experienceList}>
          {(t('about.education') as EducationItem[]).map((edu, index) => (
            <motion.div
              key={index}
              className={styles.expItem}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.roleInfo}>
                <span className={styles.role}>{edu.degree}</span>
                <span className={styles.company}>{edu.university}</span>
                <span className={styles.eduFaculty}>{edu.faculty}</span>
              </div>
              <span className={styles.date}>{edu.date}</span>
            </motion.div>
          ))}
        </div>

        {/* КОНТАКТЫ */}
        <h2 className={styles.sectionTitle} style={{ marginTop: '6rem' }}>{t('about.sections.contact')}</h2>
        <div className={styles.contactList}>
          {(t('about.contacts') as ContactItem[]).map((contact, index) => {
            const Icon = ICON_MAP[contact.iconKey];
            return (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.contactLabel}>
                  {Icon && <Icon size={16} strokeWidth={1.5} />}
                  <span>{contact.label}</span>
                </div>
                <span className={styles.contactValue}>{contact.value}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </>
  );
}