import Image from 'next/image';
import styles from 'styles/Banner.module.css';
import FrontSearch from 'components/front-search';

export default function HomeBanner() {
  return (
    <div className={styles.banner}>
      <div className={`${styles.bannerContainer} animate__animated animate__fadeInUp animate__fast`}>
        <div className="d-flex border p-5">
          <Image
            src="/images/scarinci-hollenbeck-diamond-badge-SVG.svg"
            alt="scarinci hollenbeck diamond logo"
            width={150}
            height={130}
            className="mb-3 mr-2"
          />
          <div>
            <h2 className={styles.h2Text}>
              Ready to rebuild?
            </h2>
            <h3 className={styles.h3Text}>
              <strong>We are here to help</strong>
            </h3>
            <FrontSearch />
          </div>
        </div>
      </div>
    </div>
  );
}
