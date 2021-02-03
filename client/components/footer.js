import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CookieConsentContainer from './cookie-consent';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <Container fluid className={styles.footerHeader}>
        <Container className="py-3">
          <Row>
            <Col sm={12}>
              <ul className={`${styles.mainLinks} list-inline text-center mb-0`}>
                <li className="list-inline-item">
                  <Link href="/attorneys">
                    <a className={styles.mainLink}>
                      <u>Attorneys</u>
                    </a>
                  </Link>
                  <span className="mx-3">|</span>
                </li>
                <li className="list-inline-item">
                  <Link href="/careers">
                    <a className={styles.mainLink}>
                      <u>Careers</u>
                    </a>
                  </Link>
                  <span className="mx-3">|</span>
                </li>
                <li className="list-inline-item">
                  <Link href="/contacts">
                    <a className={styles.mainLink}>
                      <u>Contacts</u>
                    </a>
                  </Link>
                  <span className="mx-3">|</span>
                </li>
                <li className="list-inline-item">
                  <Link href="/firm-overview">
                    <a className={styles.mainLink}>
                      <u>Firm Overview</u>
                    </a>
                  </Link>
                  <span className="mx-3">|</span>
                </li>
                <li className="list-inline-item">
                  <Link href="/practices">
                    <a className={styles.mainLink}>
                      <u>Practices</u>
                    </a>
                  </Link>
                  <span className="mx-3">|</span>
                </li>
                <li className="list-inline-item">
                  <Link href="/library">
                    <a className={styles.mainLink}>
                      <u>Library</u>
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className={styles.footerBody}>
        <Row>
          <Col sm={12} md={2}>
            Firm Pages
          </Col>
          <Col sm={12} md={2}>
            Client Services

            Social Media
          </Col>
          <Col sm={12} md={2}>
            Office Locations
          </Col>
          <Col sm={12} md={2}>
            Contact
          </Col>
          <Col sm={12} md={2}>
            Core Practices
          </Col>
          <Col sm={12} md={2}>
            Core Practice list continued
          </Col>
        </Row>
      </Container>
      <Container className={styles.footerDetails}>
        <Row>
          <Col sm={12} md={8}>
            Main content
          </Col>
          <Col sm={12} md={4}>
            Links
          </Col>
        </Row>
      </Container>
      <CookieConsentContainer />
    </footer>
  );
}
