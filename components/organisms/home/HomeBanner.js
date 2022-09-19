import styles from 'styles/Banner.module.css';

const HomeBanner = ({ lineOne, lineTwo, quote }) => (
  <div className={styles.banner}>
    <div className={`${styles.redBanner} animate__animated animate__fadeInLeft animate__slow`}>
      <div className={`${styles.homeBannerContainer} ${styles.homeBanner}`}>
        <div className="d-flex ">
          <div>
            <p className={`${styles.text} animate__animated animate__fadeInDown animate__slow`}>
              {lineOne}
            </p>
            <p className={`${styles.text} animate__animated animate__fadeInDown animate__slow`}>
              {lineTwo}
            </p>
            <span className={`${styles.quote} `}>{quote}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomeBanner;
