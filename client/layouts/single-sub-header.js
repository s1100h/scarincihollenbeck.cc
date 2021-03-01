import { createMarkup } from 'utils/helpers';
import styles from 'styles/Banner.module.css';

export default function SingleSubHeader({
  title, subtitle,
}) {
  return (
    <div className={styles.backPageBanner}>
      <div className={`${styles.bannerContainer} animate__animated animate__fadeInUp animate__fast`}>
        <div className="d-flex border flex-column p-4" style={{ width: 900 }}>
          <h1 className="text-white border-bottom display-4 pb-2 mb-4"><strong>{title}</strong></h1>
          <h2 cassName="mt-3 mb-5" style={{ fontSize: '1.4rem' }} dangerouslySetInnerHTML={createMarkup(subtitle)} />
        </div>
      </div>
    </div>
  );
}
