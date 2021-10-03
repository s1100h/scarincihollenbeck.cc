import Image from 'next/image';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HamburgerMobileMenu from 'components/shared/navbar/hamburger-mobile-menu';
import GlobalSearch from 'components/shared/navbar/global-search';
import TopNavLinks from 'components/shared/navbar/top-nav-links';
import navBarStyles from 'styles/Navbar.module.css';

export default function NavBar() {
  return (
    <header className="mb-0 sticky-top bg-white shadow">
      <Container>
        <Row className="my-2 border-bottom">
          <Col sm={12} md={6}>
            <GlobalSearch />
          </Col>
          <Col sm={12} md={6} className={`d-flex ${navBarStyles.contactBanner} pr-0`}>
            <TopNavLinks />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6} className={`${navBarStyles.logoBanner} mt-2 ml-0 pl-0`}>
            <Link href="/">
              <a>
                <Image
                  alt="Scarinci Hollenbeck, LLC"
                  height={65}
                  width={360}
                  layout="intrinsic"
                  src="/images/sh-logo-diamond.svg"
                />
              </a>
            </Link>
          </Col>
          <Col xs={12} lg={6} className=" mt-sm-2 mt-lg-3 pr-0 pl-0">
            <Navbar className={`${navBarStyles.navContainer} pr-0 mr-0`}>
              <Nav>
                <NavDropdown
                  title="The Firm"
                  id="the-firm-dropdown"
                  className={`${navBarStyles.navItem} ${navBarStyles.dropDownItem}`}
                >
                  <Link href="/administration">
                    <a className={`${navBarStyles.dropDownNavItem} dropdown-item`}>
                      Administration
                    </a>
                  </Link>
                  <Link href="/careers">
                    <a className={`${navBarStyles.dropDownNavItem} dropdown-item`}>Careers</a>
                  </Link>
                  <a
                    href="/community-involvement"
                    className={`${navBarStyles.dropDownNavItem} dropdown-item`}
                  >
                    Community Involvement
                  </a>

                  <a
                    href="/diversity-group"
                    className={`${navBarStyles.dropDownNavItem} dropdown-item`}
                  >
                    Diversity Group
                  </a>
                  <Link href="/firm-overview">
                    <a className={`${navBarStyles.dropDownNavItem} dropdown-item`}>Firm Overview</a>
                  </Link>
                  <a href="/pro-bono" className={`${navBarStyles.dropDownNavItem} dropdown-item`}>
                    Pro Bono
                  </a>
                  <a href="/women-lead" className={`${navBarStyles.dropDownNavItem} dropdown-item`}>
                    Women Lead
                  </a>
                </NavDropdown>
                <Nav.Item className={navBarStyles.navItem}>
                  <Link href="/attorneys">
                    <a className="text-dark">Attorneys</a>
                  </Link>
                </Nav.Item>
                <Nav.Item className={navBarStyles.navItem}>
                  <Link href="/practices">
                    <a className="text-dark">Practices</a>
                  </Link>
                </Nav.Item>
                <NavDropdown
                  title="Library"
                  id="the-library-dropdown"
                  className={`${navBarStyles.navItem} ${navBarStyles.dropDownItem}`}
                >
                  <a
                    href="/library/category/firm-news"
                    className={`${navBarStyles.dropDownNavItem} dropdown-item`}
                  >
                    Firm News
                  </a>
                  <a
                    href="/library/category/firm-events"
                    className={`${navBarStyles.dropDownNavItem} dropdown-item`}
                  >
                    Firm Events
                  </a>
                  <a
                    href="/library/category/law-firm-insights"
                    className={`${navBarStyles.dropDownNavItem} dropdown-item`}
                  >
                    Firm Insights
                  </a>
                </NavDropdown>
                <Nav.Item className={navBarStyles.navItem}>
                  <Link href="/locations">
                    <a className="text-dark">Locations</a>
                  </Link>
                </Nav.Item>
                <Nav.Item className={navBarStyles.navItem}>
                  <Link href="/contact">
                    <a className="text-dark">Contact</a>
                  </Link>
                </Nav.Item>
              </Nav>
            </Navbar>
            <div className={navBarStyles.mobileMenu}>
              <HamburgerMobileMenu />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
