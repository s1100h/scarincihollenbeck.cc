import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import CookieConsentMessage from 'components/shared/CookieConsentMessage';
import styles from 'styles/Footer.module.css';
import textStyles from 'styles/Text.module.css';
import {
  FIRM_PAGES,
  SITE_FOOTER_NAVIGATION,
  OFFICE_LOCATIONS,
  SITE_PHONE,
  SITE_FAX,
  SITE_EMAIL,
  CORE_PRACTICES,
  SOCIAL_MEDIA_LINKS,
  MAKE_A_PAYMENT_URLS,
} from 'utils/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const colOnePractices = CORE_PRACTICES.filter((_, i) => i <= 5);
  const colTwoPractices = CORE_PRACTICES.filter((_, i) => i >= 6);

  return (
    <footer className={`${styles.footerContainer} d-print-none`}>
      <Container fluid className={styles.footerHeader}>
        <Container className="py-3">
          <Row>
            <Col sm={12}>
              <ul className={`${styles.mainLinks} list-inline text-left text-md-center mb-0`}>
                {SITE_FOOTER_NAVIGATION.map((nav, index) => (
                  <li key={nav.label} className="list-inline-item p-2 p-md-0">
                    <Link href={nav.slug}>
                      <a className={styles.mainLink}>
                        <u>{nav.label}</u>
                      </a>
                    </Link>
                    {SITE_FOOTER_NAVIGATION.length - 1 > index && (
                      <span className="mx-3 d-none d-md-inline-block">|</span>
                    )}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className={styles.footerBody}>
        <div className="d-flex flex-column flex-md-row justify-content-md-between">
          <div className="mr-0 mr-md-2 mr-lg-0">
            <p className={`${textStyles.redTitle} ${styles.linkTitle} mb-0`}>
              <strong>Firm Pages</strong>
            </p>
            <ul className={styles.linkList}>
              {FIRM_PAGES.sort((a, b) => (a.title > b.title ? 1 : -1)).map((nav) => (
                <li key={nav.id}>
                  <Link key={nav.id} href={nav.slug}>
                    <a className="text-dark">{nav.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mr-0 mr-md-2 mr-lg-0">
            <p className={`${textStyles.redTitle} ${styles.linkTitle} mb-0`}>
              <strong>Client Services</strong>
            </p>
            <ul className={styles.linkList}>
              {MAKE_A_PAYMENT_URLS.map(({ url, label }) => (
                <li>
                  <a href={url} className="text-dark" target="_blank" rel="noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <p className={`${textStyles.redTitle} ${styles.linkTitle} mb-0`}>
              <strong>Social Media</strong>
            </p>
            <ul className={styles.linkList}>
              {SOCIAL_MEDIA_LINKS.map(({ slug, label }) => (
                <li key={label}>
                  <a href={slug} target="_blank" rel="noreferrer" className="text-dark">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mr-0 mr-md-2 mr-lg-0">
            <p className={`${textStyles.redTitle} ${styles.linkTitle} mb-0`}>
              <strong>Office Locations</strong>
            </p>
            <ul className={styles.linkList}>
              {OFFICE_LOCATIONS.map((office) => (
                <li key={office.label}>
                  <Link href={office.slug}>
                    <a className="text-dark">{office.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mr-0 mr-md-2 mr-lg-0">
            <p className={`${textStyles.redTitle} ${styles.linkTitle} mb-1`}>
              <strong>Contact Information</strong>
            </p>
            <ul className={styles.linkList}>
              <li>
                <strong>Phone: </strong>
                {' '}
                {SITE_PHONE}
              </li>
              <li>
                <strong>Fax: </strong>
                {' '}
                {SITE_FAX}
              </li>
              <li>
                <strong>Email: </strong>
                {' '}
                {SITE_EMAIL}
              </li>
            </ul>
          </div>
          <div className="d-flex flex-column flex-md-row">
            <div className="mr-0 mr-md-2 mr-lg-3">
              <p className={`${textStyles.redTitle} ${styles.linkTitle} mb-1`}>
                <strong>Core Practices</strong>
              </p>
              <ul className={styles.linkList}>
                {colOnePractices.map(({ slug, title }) => (
                  <li>
                    <Link href={slug}>
                      <a className="text-dark">{title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sub-list">
              <ul className={styles.linkList}>
                {colTwoPractices.map(({ slug, title }) => (
                  <li>
                    <Link href={slug}>
                      <a className="text-dark">{title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            @media (min-width: 768px) {
              div.sub-list {
                margin-top: 1.9em;
              }
            }
          `}
        </style>
      </Container>
      <Container className={styles.footerDetails}>
        <Row>
          <Col sm={12} md={8}>
            <div className="d-flex">
              <Image
                src="/images/scarinci-hollenbeck-diamond-badge-SVG.svg"
                alt="sh diamond logo favicon"
                width={32}
                height={32}
              />
              <div className="mx-1">
                <p className="py-1">
                  <strong className={styles.bottomTag}>ATTORNEY ADVERTISING</strong>
                  <small>
                    <strong>
                      Prior results do not guarantee a similar outcome. @
                      {currentYear}
                      , Scarinci
                      Hollenbeck, LLC, all rights reserved
                    </strong>
                  </small>
                </p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <ul className={`${styles.bottomLinks} float-right`}>
              <li className="list-inline-item">
                <Link href="/privacy-policy">
                  <a className="text-dark">
                    <u>Privacy policy</u>
                  </a>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/terms-of-use">
                  <a className="text-dark">
                    <u>Terms of use</u>
                  </a>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/sitemap.xml">
                  <a className="text-dark">
                    <u>Sitemap</u>
                  </a>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <CookieConsentMessage />
    </footer>
  );
}
