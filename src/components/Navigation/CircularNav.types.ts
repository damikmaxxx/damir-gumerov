import { LucideIcon} from 'lucide-react';
import { MotionValue } from 'framer-motion';

export interface NavItem {
    path: string;
    icon: LucideIcon;
    labelKey: string;
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