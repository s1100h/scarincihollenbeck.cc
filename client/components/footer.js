import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CookieConsentContainer from './cookie-consent';
import FrontSearch from './frontpage/front-search';
import JustInArticlesCarousel from './carousels/just-in-articles-carousel';
import styles from '../styles/Footer.module.css'
import textStyles from '../styles/Text.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container fluid className={`${styles.bkGray} d-print-none`}>
      <div className={`${styles.justInContainer} w-75`}>
        <JustInArticlesCarousel />
      </div>
      <footer>
        <Container fluid className={`h-100 mt-5 w-75 ${styles.bkGray}`}>
          <Row className={`${styles.borderRed} mb-3`}>
            <Col sm={12} lg={8}>
              {' '}
            </Col>
            <Col sm={12} lg={4}>
              <div className={styles.FooterSearch}>
                <FrontSearch/>
              </div>
            </Col>
          </Row>
          <Row className="pb-3 mb-0">
            <Col sm={6}>
              <p className="mr-auto h5 pb-0 mb-0">
                <strong>ATTORNEY ADVERTISING</strong>
              </p>
              <p className="mr-auto mt-0 pt-0">
                Prior results do not guarantee a similar outcome.
                <br />
                ©
                {' '}
                {currentYear}
                , Scarinci Hollenbeck, LLC, all rights reserved.
              </p>
            </Col>
            <Col sm={6} className="my-3">
              <div role="navigation" className={`d-flex ${styles.LinkContainer}`}>
                <div>
                  <Link href="/contact">
                    <a className={`${textStyles.redTitle} h6`}>
                      <strong>Contact Us</strong>
                    </a>
                  </Link>
                  <span className={styles.LinkSeperator}>|</span>
                </div>
                <div>
                  <Link href="/careers">
                    <a className={`${textStyles.redTitle} h6`}>
                      <strong>Careers</strong>
                    </a>
                  </Link>
                  <span className={styles.LinkSeperator}>|</span>
                </div>
                <div>
                  <Link href="/awards">
                    <a className={`${textStyles.redTitle} h6`}>
                      <strong>Awards</strong>
                    </a>
                  </Link>
                </div>
              </div>
              <div className={`d-flex ${styles.LinkContainer}`}>
                <div>
                  <a href="https://secure.lawpay.com/pages/scarincihollenbeck/operating" className={`${textStyles.redTitle} h6`}>
                    <strong>Make Payment</strong>
                  </a>
                  <span className={styles.LinkSeperator}>|</span>
                </div>
                <div>
                  <a href="https://scarincihollenbeck.com/sitemap.xml" className={`${textStyles.redTitle} h6`}>
                    <strong>Sitemaps</strong>
                  </a>
                  <span className={styles.LinkSeperator}>|</span>
                </div>
                <div>
                  <Link href="/terms-of-use">
                    <a className={`${textStyles.redTitle} h6`}>
                      <strong>Terms of Use</strong>
                    </a>
                  </Link>
                  <span className={styles.LinkSeperator}>|</span>
                </div>
                <div>
                  <Link href="/privacy-policy">
                    <a className={`${textStyles.redTitle} h6`}>
                      <strong>
                        Privacy Policy
                      </strong>
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <CookieConsentContainer />
    </Container>
  );
}
