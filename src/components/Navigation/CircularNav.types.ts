import { LucideIcon} from 'lucide-react';
import { MotionValue } from 'framer-motion';
import { en } from '@/data/translations/en';

type NavLabelKey = keyof typeof en.nav;

export interface NavItem {
    path: string;
    icon: LucideIcon;
    labelKey: NavLabelKey;
}

export interface NavIconsProps {
    mode: 'circle' | 'sidebar';
    activePath: string;
    rotation: MotionValue<number>;
}

export interface NavIconProps {
    item: NavItem;
    index: number;
    isActive: boolean;
    mode: 'circle' | 'sidebar';
    rotation: MotionValue<number>;
}
