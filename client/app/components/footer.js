import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CookieConsentContainer from './cookie-consent';
import SimpleSearch from './simple-search';
import JustInArticlesCarousel from './carousels/just-in-articles-carousel';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container fluid className="bk--gray d-print-none">
      <div className="just-in-container w-75">
        <JustInArticlesCarousel />
      </div>
      <footer>
        <Container fluid className="h-100 mt-5 w-75 bk--gray">
          <Row className="border--red mb-3">
            <Col sm={12} md={{ span: 3, offset: 9 }} className="mb-2 footer-search">
              <SimpleSearch />
            </Col>
          </Row>
          <Row className="pb-3 mb-0">
            <Col sm={6}>
              <p className="mr-auto proxima-bold h5 pb-0 mb-0">ATTORNEY ADVERTISING</p>
              <p className="mr-auto proxima-regular mt-0 pt-0">
                Prior results do not guarantee a similar outcome.
                <br />
                ©
                {' '}
                {currentYear}
                , Scarinci Hollenbeck, LLC, all rights reserved.
              </p>
            </Col>
            <Col sm={6} className="text-center">
              <ul className="d-flex justify-content-end no-dots list-inline pb-0 mb-0">
                <li className="list-inline-item">
                  <Link href="/contact">
                    <a className="proxima-bold red-title h6">Contact Us</a>
                  </Link>
                  {' '}
                  |
                  {' '}
                </li>
                <li className="list-inline-item">
                  <Link href="/careers">
                    <a className="proxima-bold red-title h6">Careers</a>
                  </Link>
                  {' '}
                  |
                  {' '}
                </li>
                <li className="list-inline-item">
                  <Link href="/awards">
                    <a className="proxima-bold red-title h6">Awards </a>
                  </Link>
                </li>
              </ul>
              <ul className="float-right no-dots list-inline mt-0 pt-0">
                <li className="list-inline-item">
                  <a href="https://secure.lawpay.com/pages/scarincihollenbeck/operating" className="proxima-bold red-title h6">
                    Make Payment
                  </a>
                  {' '}
                  |
                  {' '}
                </li>
                <li className="list-inline-item">
                  <a href="https://scarincihollenbeck.com/sitemap.xml" className="proxima-bold red-title h6">
                    Sitemap
                  </a>
                  {' '}
                  |
                  {' '}
                </li>
                <li className="list-inline-item">
                  <Link href="/terms-of-use">
                    <a className="proxima-bold red-title h6">
                      Terms of Use
                    </a>
                  </Link>
                  {' '}
                  |
                  {' '}
                </li>
                <li className="list-inline-item">
                  <Link href="/privacy-policy">
                    <a className="proxima-bold red-title h6">
                      Privacy Policy
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
      <CookieConsentContainer />
    </Container>
  );
}
