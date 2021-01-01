import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import HamburgerMobileMenu from './hamburger-mobile-menu';
import navBarStyles from '../styles/Navbar.module.css';
import textStyles from '../styles/Text.module.css';

export default function NavBar() {
  return (
    <header className="mb-0">
      <Container>
        <Row className="my-2">
          <Col
            xs={12}
            className={`border-bottom d-flex ${navBarStyles.contactBanner} pr-0 justify-content-end`}
          >
            <p className="my-1 pb-1 mx-0 px-0">
              <span>
                <FontAwesomeIcon
                  style={{ fontSize: '1rem' }}
                  icon={faPhone}
                />
                {' '}
                201-895-4100
              </span>
              <span className="ml-3">
                <FontAwesomeIcon
                  style={{ fontSize: '1rem' }}
                  icon={faEnvelope}
                />
                {' '}
                info@sh-law.com
              </span>
              <Link href="/subscribe">
                <a className={`ml-2 ${textStyles.redTitle} font-weight-bold`}>
                  <u>Join our mailing list</u>
                </a>
              </Link>
            </p>
          </Col>
          <Col
            xs={12}
            lg={6}
            className={`${navBarStyles.logoBanner} mt-2 ml-0 pl-0`}
          >
            <Link href="/">
              <a>
                <Image
                  alt="Scarinci Hollenbeck, LLC"
                  height="52"
                  width="338"
                  layout="intrinsic"
                  src="/images/sh-logo-2020-compressor.png"
                />
              </a>
            </Link>
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
                <NavDropdown
                  title="Library"
                  id="basic-nav-dropdown"
                  className={`${navBarStyles.navItem} ${navBarStyles.dropDownItem}`}
                >
                  <NavDropdown.Item
                    className={navBarStyles.dropDownNavItem}
                    href="/category/firm-news"
                  >
                    Firm News
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={navBarStyles.dropDownNavItem}
                    href="/category/firm-events"
                  >
                    Firm Events
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={navBarStyles.dropDownNavItem}
                    href="/category/law-firm-insights"
                  >
                    Firm Insights
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className={navBarStyles.dropDownNavItem}
                    href="/quick-news?page=1"
                  >
                    Quick News
                  </NavDropdown.Item>
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
