import styles from './page.module.scss';
import Skeleton from '@/components/UI/Skeleton/Skeleton';

export default function Loading() {
  const skeletonItems = [
    { id: 1, size: 'large' },
    { id: 2, size: 'small' },
    { id: 3, size: 'small' },
    { id: 4, size: 'tall' },
    { id: 5, size: 'small' },
    { id: 6, size: 'small' },
    { id: 7, size: 'wide' },
  ];

  return (
    <div className={styles.playWrapper}>
      <div style={{ marginBottom: '40px' }}>
        <Skeleton style={{ width: '120px', height: '28px' }} />
      </div>

      <div className={styles.grid}>
        {skeletonItems.map((item) => (
          <div 
            key={item.id} 
            className={`${styles.item} ${styles[item.size]}`}
            style={{ border: 'none', background: 'transparent' }}
          >
            <Skeleton style={{ borderRadius: '16px' }} />
          </div>
        ))}
      </div>

      <div className={styles.footerStatus} style={{ opacity: 1 }}>
        <Skeleton style={{ width: '6px', height: '6px', borderRadius: '50%' }} />
        <Skeleton style={{ width: '200px', height: '14px' }} />
      </div>
    </div>
  );
}