import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CookieConsentContainer from './cookie-consent';
import FrontSearch from './frontpage/front-search';
import JustInArticlesCarousel from './carousels/just-in-articles-carousel';
import styles from '../styles/Footer.module.css'
import fontStyles from '../styles/Fonts.module.css'
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
             <div className="justify-content-end">
              <FrontSearch/>
             </div>
            </Col>
          </Row>
          <Row className="pb-3 mb-0">
            <Col sm={6}>
              <p className={`mr-auto ${fontStyles.proximaBold} h5 pb-0 mb-0`}>ATTORNEY ADVERTISING</p>
            <p className={`mr-auto ${fontStyles.proximaRegular} mt-0 pt-0`}>
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
                    <a className={`${fontStyles.proximaBold} ${textStyles.redTitle} h6`}>Contact Us</a>
                  </Link>
                  <span className={styles.LinkSeperator}>|</span>
                </div>
                <div>
                  <Link href="/careers">
                    <a className={`${fontStyles.proximaBold} ${textStyles.redTitle} h6`}>Careers</a>
                  </Link>
                  <span className={styles.LinkSeperator}>|</span>
                </div>
                <div>
                  <Link href="/awards">
                    <a className={`${fontStyles.proximaBold} ${textStyles.redTitle} h6`}>Awards </a>
                  </Link>
                </div>
              </div>
              <div className={`d-flex ${styles.LinkContainer}`}>
                <div>
                  <a href="https://secure.lawpay.com/pages/scarincihollenbeck/operating" className={`${fontStyles.proximaBold} ${textStyles.redTitle} h6`}>
                    Make Payment
                  </a>
                  <span className={styles.LinkSeperator}>|</span>
                </div>
                <div>
                  <a href="https://scarincihollenbeck.com/sitemap.xml" className={`${fontStyles.proximaBold} ${textStyles.redTitle} h6`}>
                    Sitemap
                  </a>
                  <span className={styles.LinkSeperator}>|</span>
                </div>
                <div>
                  <Link href="/terms-of-use">
                    <a className={`${fontStyles.proximaBold} ${textStyles.redTitle} h6`}>
                      Terms of Use
                    </a>
                  </Link>
                  <span className={styles.LinkSeperator}>|</span>
                </div>
                <div>
                  <Link href="/privacy-policy">
                    <a className={`${fontStyles.proximaBold} ${textStyles.redTitle} h6`}>
                      Privacy Policy
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
