import styles from 'styles/Banner.module.css';
import FrontSearch from 'components/home/front-search';

export default function HomeBanner() {
  return (
    <div className={styles.banner}>
      <div
        className={`${styles.redBanner} animate__animated animate__fadeInLeft animate__slow`}
      >
        <div className={`${styles.homeBannerContainer} ${styles.homeBanner}`}>
          <div className="d-flex p-4">
            <div>
              <h2
                className={`${styles.h2Text} animate__animated animate__fadeInDown animate__slow`}
              >
                Ready to rebuild?
              </h2>
              <h3
                className={`${styles.h3Text} animate__animated animate__fadeInDown animate__slow`}
              >
                <strong>We are here to help</strong>
              </h3>
              <div className="animate__animated animate__fadeInUp animate__slow my-2">
                <FrontSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
