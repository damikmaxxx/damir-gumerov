'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper';
import { EffectFade } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from './WorksSlider.module.scss';

export default function WorksSlider({ images }: { images: string[] }) {
  const [swiperRef, setSwiperRef] = useState<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (!swiperRef || isInteracting || images.length < 2) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      const nextIndex = (swiperRef.activeIndex + 1) % images.length;
      swiperRef.slideTo(nextIndex);
    }, 1800);

    return () => window.clearInterval(interval);
  }, [images.length, isInteracting, swiperRef]);

  return (
    <div className={styles.imageContainer}>
      <div
        className={styles.sliderWrapper}
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
        onFocus={() => setIsInteracting(true)}
        onBlur={() => setIsInteracting(false)}
        onTouchStart={() => setIsInteracting(true)}
        onTouchEnd={() => setIsInteracting(false)}
      >
        <Swiper
          modules={[EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={900}
          onSwiper={setSwiperRef}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className={styles.mySwiper}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className={styles.imageContainer}>
                <Image src={img} alt={`Work ${i}`} fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.hoverOverlay}>
          {images.map((_, i) => (
            <div
              key={i}
              className={styles.zone}
              onMouseEnter={() => swiperRef?.slideTo(i)}
            />
          ))}
        </div>

        <div className={styles.paginationHUD}>
          {images.map((_, i) => (
            <div
              key={i}
              className={`${styles.bar} ${i === activeIndex ? styles.active : ''}`}
              style={{ width: `calc(100% / ${images.length} - 4px)` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
