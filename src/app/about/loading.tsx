import Skeleton from '@/components/UI/Skeleton/Skeleton';
import styles from './page.module.scss';

export default function Loading() {
  return (
    <div className={styles.aboutWrapper}>
      <Skeleton style={{ width: '150px', height: '28px', marginBottom: '32px' }} />

      <div className={styles.portraitContainer} style={{ border: 'none', background: 'transparent' }}>
         <Skeleton style={{ borderRadius: '4px' }} />
      </div>

      <Skeleton style={{ width: '90%', height: '60px', marginBottom: '16px' }} />
      <Skeleton style={{ width: '50%', height: '60px', marginBottom: '40px' }} />

      <div style={{ marginBottom: '80px' }}>
        <Skeleton style={{ width: '100%', height: '20px', marginBottom: '10px' }} />
        <Skeleton style={{ width: '95%', height: '20px', marginBottom: '10px' }} />
        <Skeleton style={{ width: '80%', height: '20px' }} />
      </div>
    </div>
  );
}