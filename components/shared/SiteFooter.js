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
  const colOnePractices = CORE_PRACTICES.filter((_, i) => i <= 4);
  const colTwoPractices = CORE_PRACTICES.filter((_, i) => i >= 5);

  return (
    <footer className={`${styles.footerContainer} d-print-none`}>
      {/* <Container fluid className={styles.footerHeader}> */}
      {/*  <Container className="py-3"> */}
      {/*    <Row> */}
      {/*      <Col sm={12}> */}
      {/*        <ul className={`${styles.mainLinks} list-inline text-left text-md-center mb-0`}> */}
      {/*          {SITE_FOOTER_NAVIGATION.map((nav, index) => ( */}
      {/*            <li key={nav.label} className="list-inline-item p-2 p-md-0"> */}
      {/*              <Link href={nav.slug}> */}
      {/*                <a className={styles.mainLink}> */}
      {/*                  <u>{nav.label}</u> */}
      {/*                </a> */}
      {/*              </Link> */}
      {/*              {SITE_FOOTER_NAVIGATION.length - 1 > index && ( */}
      {/*                <span className="mx-3 d-none d-md-inline-block">|</span> */}
      {/*              )} */}
      {/*            </li> */}
      {/*          ))} */}
      {/*        </ul> */}
      {/*      </Col> */}
      {/*    </Row> */}
      {/*  </Container> */}
      {/* </Container> */}
      <div className={`${styles.footerBody} wrapper-section`}>
        <div className="d-flex flex-column flex-md-row justify-content-md-between">
          <div className="mr-0 mr-md-2 mr-lg-0">
            <p className={`${styles.linkTitle}`}>
              <strong>Firm Pages</strong>
            </p>
            <ul className={styles.linkList}>
              {FIRM_PAGES.map((nav) => (
                <li key={nav.id}>
                  <Link href={nav.slug}>
                    <a>{nav.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mr-0 mr-md-2 mr-lg-0">
            <p className={`${styles.linkTitle}`}>
              <strong>Office Locations</strong>
            </p>
            <ul className={styles.linkList}>
              {OFFICE_LOCATIONS.map((office) => (
                <li key={office.id}>
                  <Link href={office.slug}>
                    <a>{office.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <p className={`${styles.linkTitle}`}>
              <strong>Social Media</strong>
            </p>
            <ul className={styles.linkList}>
              {SOCIAL_MEDIA_LINKS.map(({ url, label }) => (
                <li key={label}>
                  <a href={url} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mr-0 mr-md-2 mr-lg-0">
            <p className={`${styles.linkTitle}`}>
              <strong>Client Services</strong>
            </p>
            <ul className={styles.linkList}>
              {MAKE_A_PAYMENT_URLS.map(({ url, label, id }) => (
                <li key={id}>
                  <a href={url} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <p className={`${styles.linkTitle}`}>
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

          <div className="mr-0 mr-md-2 mr-lg-0">
            <p className={`${styles.linkTitle}`}>
              <strong>Core Practices</strong>
            </p>
            <ul className={styles.linkList}>
              {colOnePractices.map(({ slug, title, id }) => (
                <li key={id}>
                  <Link href={slug}>
                    <a>{title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mr-0 mr-md-2 mr-lg-0">
            <ul className={styles.linkList}>
              {colTwoPractices.map(({ slug, title, id }) => (
                <li key={id}>
                  <Link href={slug}>
                    <a>{title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={`${styles.footerDetails} wrapper-section `}>
        <div className={styles.footerBottom}>
          <div className={styles.logoFooter}>
            <Image
              src="/images/scarinci-hollenbeck-diamond-badge-SVG.svg"
              alt="sh diamond logo favicon"
              width={100}
              height={100}
            />
          </div>
          <p>
            <span className={styles.bottomTag}>ATTORNEY ADVERTISING</span>
            <span>
              Prior results do not guarantee a similar outcome. @
              {currentYear}
              , Scarinci Hollenbeck,
              LLC, all rights reserved
            </span>
          </p>
        </div>
        <ul className={`${styles.bottomLinks}`}>
          <li>
            <Link href="/privacy-policy">
              <a>Privacy policy</a>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link href="/terms-of-use">
              <a>Terms of use</a>
            </Link>
          </li>
        </ul>
      </div>
      <CookieConsentMessage />
    </footer>
  );
}
