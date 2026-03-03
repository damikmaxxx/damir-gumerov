'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Briefcase, Gamepad2 } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Navigation.module.scss';
import MobileLangSwitcher from './MobileLangSwitcher';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/about', icon: User, label: 'About' },
  { path: '/projects', icon: Briefcase, label: 'Projects' },
  { path: '/play', icon: Gamepad2, label: 'Play' }, 
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className={styles.dockWrapper}>
      <nav className={styles.dock}>
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;

          return (
            <Link href={item.path} key={item.path} className={styles.navItem}>
              <Icon strokeWidth={1.5} size={20} className={isActive ? styles.activeIcon : styles.icon} />

              {isActive && (
                <motion.div
                  layoutId="activeTabDot"
                  className={styles.dot}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          );
        })}

      </nav>
      <MobileLangSwitcher />
    </div>
  );
}