'use client';

import { motion, useTransform } from 'framer-motion'; 
import Link from 'next/link';
import { Home, User, Briefcase, Gamepad2 } from 'lucide-react';
import styles from './CircularNav.module.scss';
import { useLang } from '@/context/LanguageContext';
import { NavIconProps, NavIconsProps, NavItem } from './CircularNav.types';

export const navItems: NavItem[] = [
    { path: '/', icon: Home, labelKey: 'home' },
    { path: '/about', icon: User, labelKey: 'about' },
    { path: '/projects', icon: Briefcase, labelKey: 'projects' },
    { path: '/play', icon: Gamepad2, labelKey: 'play' },
];

export const CIRCLE_ANGLES = [45 - 22.5, 90 - 22.5, 135 - 22.5, 180 - 22.5].map(a => a - 90);

export default function NavIcons({ mode, activePath, rotation }: NavIconsProps) {
    return (
        <div className={`${styles.navContainer} ${styles[mode]}`}>
            {navItems.map((item, i) => (
                <NavIcon
                    key={item.path}
                    item={item}
                    index={i}
                    isActive={activePath === item.path}
                    mode={mode}
                    rotation={rotation}
                />
            ))}
        </div>
    );
}

function NavIcon({ item, index, isActive, mode, rotation }: NavIconProps) {
    const { t } = useLang();
    const Icon = item.icon;

    const currentRadius = useTransform(rotation, [0, 360], [0, 320]);

    const finalX = useTransform(rotation, (r: number) => {
        if (mode !== 'circle') return 0;

        const angleRad = (CIRCLE_ANGLES[index] + r) * (Math.PI / 180);
        return currentRadius.get() * Math.cos(angleRad);
    });

    const finalY = useTransform(rotation, (r: number) => {
        if (mode !== 'circle') return 0;

        const angleRad = (CIRCLE_ANGLES[index] + r) * (Math.PI / 180);
        return currentRadius.get() * Math.sin(angleRad);
    });


    return (
        <Link href={item.path}>
            <motion.div
                layoutId={`nav-item-${item.path}`}
                layout="position"
                className={`${styles.iconWrapper} ${isActive ? styles.active : ''} ${styles[mode]}`}
                style={{ x: finalX, y: finalY }}
                animate={{ scale: mode === 'sidebar' && isActive ? 1.1 : 1 }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    layout: { type: "spring", stiffness: 300, damping: 30 }
                }}
            >
                <Icon size={mode === 'circle' ? 30 : 26} strokeWidth={isActive ? 2 : 1.5} />
                {isActive && mode === 'sidebar' && (
                    <motion.div layoutId="active-dot" className={styles.activeDot} />
                )}
                <span className={styles.tooltip}>{t(`nav.${item.labelKey}`)}</span>
            </motion.div>
        </Link>
    );
}