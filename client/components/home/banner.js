import Image from 'next/image';
import styles from 'styles/Banner.module.css';
import FrontSearch from 'components/home/front-search';

export default function HomeBanner() {
  return (
    <div className={styles.banner}>
      <div
        className={`${styles.bannerContainer} animate__animated animate__fadeInUp animate__fast`}
      >
        <div className="d-flex border p-4">
          <Image
            src="/images/scarinci-hollenbeck-diamond-badge-SVG.svg"
            alt="scarinci hollenbeck diamond logo"
            width={110}
            height={95}
            className="mr-2 mb-3"
          />
          <div>
            <h2 className={styles.h2Text}>Ready to rebuild?</h2>
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
