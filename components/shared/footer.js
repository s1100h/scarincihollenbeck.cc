import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CookieConsentContainer from 'components/shared/cookie-consent';
import styles from 'styles/Footer.module.css';
import textStyles from 'styles/Text.module.css';
import { FIRM_PAGES, SITE_FOOTER_NAVIGATION, BASE_API_URL } from 'utils/constants';

export default function Footer() {
  const [offices, setOffices] = useState([]);
  const currentYear = new Date().getFullYear();

  /** Fetch current list of offices */
  useEffect(() => {
    const fetchOfficeLocations = async () => {
      const url = `${BASE_API_URL}/wp-json/location-portal/offices`;
      const request = await fetch(url)
        .then((data) => data.json())
        .catch((err) => err);
      const officeList = request.offices.map((office) => ({
        slug: office.slug,
        label: office.title,
      }));

      setOffices(officeList);
    };

    if (offices.length <= 0) {
      fetchOfficeLocations();
    }
  }, []);

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
              <li>
                <a
                  href="https://secure.lawpay.com/pages/scarincihollenbeck/operating"
                  className="text-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  Make a payment
                </a>
              </li>
            </ul>
            <p className={`${textStyles.redTitle} ${styles.linkTitle} mb-0`}>
              <strong>Social Media</strong>
            </p>
            <ul className={styles.linkList}>
              <li>
                <a
                  href="https://www.linkedin.com/company/scarinci-hollenbeck-llc"
                  target="_blank"
                  rel="noreferrer"
                  className="text-dark"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/ScarinciHollenbeck"
                  target="_blank"
                  rel="noreferrer"
                  className="text-dark"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className="mr-0 mr-md-2 mr-lg-0">
            <p className={`${textStyles.redTitle} ${styles.linkTitle} mb-0`}>
              <strong>Office Locations</strong>
            </p>
            <ul className={styles.linkList}>
              {offices
                && offices.map((office) => (
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
                201-896-4100
              </li>
              <li>
                <strong>Fax: </strong>
                {' '}
                201-896-8660
              </li>
              <li>
                <strong>Email: </strong>
                {' '}
                info@sh-law.com
              </li>
            </ul>
          </div>
          <div className="d-flex flex-column flex-md-row">
            <div className="mr-0 mr-md-2 mr-lg-3">
              <p className={`${textStyles.redTitle} ${styles.linkTitle} mb-1`}>
                <strong>Core Practices</strong>
              </p>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/practice/bankruptcy-and-creditors-rights">
                    <a className="text-dark">Bankruptcy & Creditors’ Rights</a>
                  </Link>
                </li>
                <li>
                  <Link href="/practice/commercial-real-estate">
                    <a className="text-dark">Commercial Real Estate</a>
                  </Link>
                </li>
                <li>
                  <Link href="/practice/corporate-transactions-business">
                    <a className="text-dark">Corporate Transactions</a>
                  </Link>
                </li>
                <li>
                  <Link href="/practice/education-law">
                    <a className="text-dark">Education Law</a>
                  </Link>
                </li>
                <li>
                  <Link href="/practice/environmental">
                    <a className="text-dark">Environmental</a>
                  </Link>
                </li>
                <li>
                  <Link href="/practice/government-strategies">
                    <a className="text-dark">Government Strategies</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sub-list">
              <ul className={styles.linkList}>
                <li>
                  <Link href="/practice/intellectual-property">
                    <a className="text-dark">Intellectual Property</a>
                  </Link>
                </li>
                <li>
                  <Link href="/practice/labor-employment">
                    <a className="text-dark">Labor & Employment</a>
                  </Link>
                </li>
                <li>
                  <Link href="/practice/litigation">
                    <a className="text-dark">Litigation</a>
                  </Link>
                </li>
                <li>
                  <Link href="/practice/public-law">
                    <a className="text-dark">Public Law</a>
                  </Link>
                </li>
                <li>
                  <Link href="/practice/tax-trusts-estates">
                    <a className="text-dark">Tax, Trusts, & Estates</a>
                  </Link>
                </li>
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
      <CookieConsentContainer />
    </footer>
  );
}
