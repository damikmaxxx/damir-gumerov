'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from './WorksSlider.module.scss';

export default function WorksSlider({ images }: { images: string[] }) {
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        onSwiper={setSwiperRef}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className={styles.mySwiper}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className={styles.imageContainer}>
              <Image src={img} alt={`Work ${i}`} fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"/>
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
  );
}