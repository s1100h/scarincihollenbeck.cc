import styles from 'styles/Banner.module.css';

export default function HomeBanner({ lineOne, lineTwo }) {
  return (
    <div className={styles.banner}>
      <div className={`${styles.redBanner} animate__animated animate__fadeInLeft animate__slow`}>
        <div className={`${styles.homeBannerContainer} ${styles.homeBanner}`}>
          <div className="d-flex p-4">
            <div>
              <p className={`${styles.text} animate__animated animate__fadeInDown animate__slow`}>
                {lineOne}
              </p>
              <p className={`${styles.text} animate__animated animate__fadeInDown animate__slow`}>
                <strong>{lineTwo}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
