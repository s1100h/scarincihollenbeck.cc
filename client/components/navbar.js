import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HamburgerMobileMenu from 'components/hamburger-mobile-menu';
import navBarStyles from '../styles/Navbar.module.css';
import textStyles from '../styles/Text.module.css';

export default function NavBar() {
  return (
    <header className="mb-0">
      <Container>
        <Row className="my-2  border-bottom ">
          <Col sm={12} md={6}>
            <p className="my-1 pb-1 mx-0 px-0 mr-2">
              <Link href="/covid-19-crisis-management-unit">
                <a className={`ml-0 ${textStyles.redTitle} font-weight-bold`}>
                  <u>COVID-19 Crisis Management Unit</u>
                </a>
              </Link>
            </p>
          </Col>
          <Col
            sm={12}
            md={6}
            className={`d-flex ${navBarStyles.contactBanner} pr-0`}
          >
            <p className="my-1 pb-1 mx-0 px-0 mr-2">
              <span>
                {' '}
                <strong>201-896-4100</strong>
                {' '}
              </span>
              <span className="px-1">
                <strong> | </strong>
              </span>
              <span>
                {' '}
                <strong>info@sh-law.com</strong>
              </span>
              <Link href="/subscribe">
                <a className={`ml-2 ${textStyles.redTitle} font-weight-bold`}>
                  <u>Join our mailing list</u>
                </a>
              </Link>
              <a
                href="https://secure.lawpay.com/pages/scarincihollenbeck/operating"
                target="_blank"
                rel="noreferrer"
                className={`ml-2 ${textStyles.redTitle} font-weight-bold`}
              >
                <u>Make payment</u>
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            lg={6}
            className={`${navBarStyles.logoBanner} mt-2 ml-0 pl-0`}
          >
            <h1>
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
            </h1>
          </Col>
          <Col xs={12} lg={6} className=" mt-sm-2 mt-lg-3 pr-0 pl-0">
            <Navbar className={`${navBarStyles.navContainer} pr-0 mr-0`}>
              <Nav>
                <NavDropdown
                  title="The Firm"
                  id="basic-nav-dropdown"
                  className={`${navBarStyles.navItem} ${navBarStyles.dropDownItem}`}
                >
                  <NavDropdown.Item
                    className={navBarStyles.dropDownNavItem}
                    href="/administration"
                  >
                    Administration
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={navBarStyles.dropDownNavItem}
                    href="/careers"
                  >
                    Careers
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={navBarStyles.dropDownNavItem}
                    href="/community-involvement"
                  >
                    Community Involvement
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={navBarStyles.dropDownNavItem}
                    href="/diversity-group"
                  >
                    Diversity Group
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={navBarStyles.dropDownNavItem}
                    href="/firm-overview"
                  >
                    Firm Overview
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={navBarStyles.dropDownNavItem}
                    href="/pro-bono"
                  >
                    Pro Bono
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={navBarStyles.dropDownNavItem}
                    href="/women-lead"
                  >
                    Women Lead
                  </NavDropdown.Item>
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
                <Nav.Item className={navBarStyles.navItem}>
                  <a href="/library" className="text-dark">Library</a>
                </Nav.Item>
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
