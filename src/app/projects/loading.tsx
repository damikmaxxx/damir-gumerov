import Skeleton from '@/components/UI/Skeleton/Skeleton';
import styles from './page.module.scss';

export default function Loading() {
  return (
    <div className={styles.projectsWrapper}>
      {/* Заголовок страницы */}
      <header className={styles.headerTitle}>
        <Skeleton style={{ width: '120px', height: '20px' }} />
        <Skeleton style={{ width: '40%', height: '60px', marginTop: '16px' }} />
      </header>

      {[1, 2].map((i) => (
        <div key={i} className={styles.projectItem} style={{ border: 'none' }}>
          {/* Левая сторона: Картинка */}
          <div className={styles.imageSide}>
            <Skeleton style={{ aspectRatio: '16/10', borderRadius: '12px' }} />
          </div>

          {/* Правая сторона: Текст */}
          <div className={styles.infoSide}>
            {/* Номер и Заголовок */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Skeleton style={{ width: '60px', height: '24px' }} />
              <Skeleton style={{ width: '90%', height: '44px' }} />
              <Skeleton style={{ width: '150px', height: '18px', marginBottom: '10px' }} />
            </div>

            {/* Полоски описания (текст) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Skeleton style={{ width: '100%', height: '14px' }} />
              <Skeleton style={{ width: '95%', height: '14px' }} />
              <Skeleton style={{ width: '90%', height: '14px' }} />
              <Skeleton style={{ width: '40%', height: '14px' }} />
            </div>

            {/* Имитация тегов (стек технологий) */}
            <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
              <Skeleton style={{ width: '80px', height: '24px', borderRadius: '4px' }} />
              <Skeleton style={{ width: '100px', height: '24px', borderRadius: '4px' }} />
              <Skeleton style={{ width: '70px', height: '24px', borderRadius: '4px' }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}