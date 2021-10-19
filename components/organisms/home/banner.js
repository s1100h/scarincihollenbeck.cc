import styles from 'styles/Banner.module.css';

export default function HomeBanner() {
  return (
    <div className={styles.banner}>
      <div className={`${styles.redBanner} animate__animated animate__fadeInLeft animate__slow`}>
        <div className={`${styles.homeBannerContainer} ${styles.homeBanner}`}>
          <div className="d-flex p-4">
            <div>
              <p className={`${styles.text} animate__animated animate__fadeInDown animate__slow`}>
                Ready to rebuild?
              </p>
              <p className={`${styles.text} animate__animated animate__fadeInDown animate__slow`}>
                <strong>We are here to help</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
