import { createMarkup } from 'utils/helpers';
import styles from 'styles/Banner.module.css';

export default function SingleSubHeader({ title, subtitle, isBlog }) {
  return (
    <div className={styles.backPageBanner}>
      <div
        className={`${styles.backBanner} animate__animated animate__fadeInUp animate__fast`}
      >
        <div
          className="d-flex flex-column p-4"
          style={{ maxWidth: 900 }}
        >
          <h1 className="text-white mb-0" style={{ fontSize: !isBlog ? '4rem': null, textShadow: '2px 3px 3px #000'}}>
            <strong>{title}</strong>
          </h1>
          <div
            className="w-100 d-block my-2"
            style={{
              height: '3px',
              backgroundColor: '#db2220',
              
            }}
          />
          <h2
            className="mt-2 mb-0 text-white"
            style={{ fontSize: '1.4rem' }}
            dangerouslySetInnerHTML={createMarkup(subtitle)}
          />
        </div>
      </div>
    </div>
  );
}
