import { createMarkup } from 'utils/helpers';
import styles from 'styles/Banner.module.css';

export default function SingleSubHeader({
  title, subtitle,
}) {
  return (
    <div className={styles.backPageBanner}>
      <div className={`${styles.bannerContainer} animate__animated animate__fadeInUp animate__fast`}>
        <div className="d-flex border flex-column p-4" style={{ width: 900 }}>
          <h1 className="text-white display-4 mb-0"><strong>{title}</strong></h1>
          <div
            className="w-100 d-block my-2"
            style={{
              height: '7px',
              backgroundColor: '#db2220',
              boxShadow: '2px 3px 3px #000',
            }}
          />
          <h2 className="mt-2 mb-0" style={{ fontSize: '1.4rem' }} dangerouslySetInnerHTML={createMarkup(subtitle)} />
        </div>
      </div>
    </div>
  );
}
