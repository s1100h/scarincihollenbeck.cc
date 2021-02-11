import Image from 'next/image';
import styles from 'styles/Banner.module.css';
import SimpleSearch from 'components/simple-search';

export default function HomeBanner() {
  return (
    <div className={styles.banner}>
      <div className={`${styles.bannerContainer} animate__animated animate__fadeInUp animate__fast`}>
        <div className="d-flex">
        <Image
          src="/images/scarinci-hollenbeck-diamond-badge-SVG.svg"
          alt="scarinci hollenbeck diamond logo"
          width={170}
          height={147}
        />
        <div>
          <h2 className={`${styles.h2Text} display-4 shadow-lg`}>
            Ready to rebuild?
          </h2>
          <h3 className="my-0 display-3 shadow-lg">
            <strong>We are here to help</strong>
          </h3>
        </div>
        </div>        
        <div className="w-75">
        <SimpleSearch />
        </div>
      </div>
    </div>
  );
}
