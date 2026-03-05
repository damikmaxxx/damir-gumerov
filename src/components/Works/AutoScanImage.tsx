'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './AutoScanImage.module.scss';

interface AutoScanImageProps {
    src: string;
    alt: string;
}

export default function AutoScanImage({ src, alt }: AutoScanImageProps) {
    return (
        <div className={styles.window}>

            <motion.div
                className={styles.panningContainer}
                whileInView={{
                    x: ['0%', '-15%', '0%']
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className={styles.image}
                />
            </motion.div>

            <div className={styles.scanLine} />
        </div>
    );
}