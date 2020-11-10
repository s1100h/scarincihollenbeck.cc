import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { slide as Menu } from 'react-burger-menu'
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
import navBarStyles from '../styles/Navbar.module.css';
import fontStyles from '../styles/Fonts.module.css';
import textStyles from '../styles/Text.module.css';

const NavBar = () => (
  <header className="mb-0">
    <Container>
      <Row>
      <Col sm={12} className="mt-2 border-bottom d-flex justify-content-end">
          <p className="mb-1 pb-1 mx-0 px-0">
            <span>
              <FontAwesomeIcon icon={faPhone} />
              {' '}           
              201-895-4100
            </span>
            <span className="ml-3">
              <FontAwesomeIcon icon={faEnvelope} />
              {' '}
              info@sh-law.com
            </span>
            <Link href="/subscribe">
              <a className={`ml-2 ${textStyles.redTitle} ${fontStyles.proximaBold}`}>
                <u>
                Join our mailing list
                </u>
              </a>
            </Link>
          </p>
        </Col>        
        <Col sm={12} md={6} className="mb-0 mt-3 mx-0 px-0">
          <Link href="/">
            <a>
              <LazyLoadImage
                alt="Scarinci Hollenbeck, LLC"
                height="52"
                width="338"
                src="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/sh-logo-2020-compressor.png"
              />
            </a>
          </Link>
        </Col>
        <Col sm={12} md={6} className={`${navBarStyles.mainNav} mb-0 mt-4 mx-0 px-0`}>
          <Navbar className={navBarStyles.navContainer}>
              <Nav className="mr-auto">
                <NavDropdown title="The Firm" id="basic-nav-dropdown" className={`${navBarStyles.navItem} ${navBarStyles.dropDownItem}`}>
                  <NavDropdown.Item className={navBarStyles.dropDownNavItem} href="/administration">
                    Administration
                  </NavDropdown.Item>
                  <NavDropdown.Item className={navBarStyles.dropDownNavItem} href="/careers">
                    Careers
                  </NavDropdown.Item>
                  <NavDropdown.Item className={navBarStyles.dropDownNavItem} href="/community-involvement">
                    Community Involvement
                  </NavDropdown.Item>
                  <NavDropdown.Item className={navBarStyles.dropDownNavItem} href="/diversity-group">
                    Diversity Group
                  </NavDropdown.Item>
                  <NavDropdown.Item className={navBarStyles.dropDownNavItem} href="/firm-overview">
                    Firm Overview
                  </NavDropdown.Item>
                  <NavDropdown.Item className={navBarStyles.dropDownNavItem} href="/pro-bono">
                    Pro Bono
                  </NavDropdown.Item>
                  <NavDropdown.Item className={navBarStyles.dropDownNavItem} href="/women-lead">
                    Women Lead
                  </NavDropdown.Item>
                </NavDropdown>                  
                <Nav.Item className={navBarStyles.navItem}>
                  <Link href="/attorneys">
                    <a>
                      Attorneys
                    </a>
                  </Link>
                </Nav.Item>
                <Nav.Item className={navBarStyles.navItem}>
                  <Link href="/practices">
                    <a>
                      Practices
                    </a>
                  </Link>
                </Nav.Item>
                <NavDropdown title="Library" id="basic-nav-dropdown"  className={`${navBarStyles.navItem} ${navBarStyles.dropDownItem}`}>
                  <NavDropdown.Item  className={navBarStyles.dropDownNavItem} href="/category/firm-news">
                    Firm News
                  </NavDropdown.Item>
                  <NavDropdown.Item className={navBarStyles.dropDownNavItem} href="/category/firm-events">
                    Firm Events
                  </NavDropdown.Item>
                  <NavDropdown.Item className={navBarStyles.dropDownNavItem} href="/category/law-firm-insights">
                    Firm Insights
                  </NavDropdown.Item>
                  <NavDropdown.Item className={navBarStyles.dropDownNavItem} href="/category/quick-news?page=1">
                    Quick News
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Item className={navBarStyles.navItem}>
                  <Link href="/locations">
                    <a>
                      Locations
                    </a>
                  </Link>
                </Nav.Item>
                <Nav.Item className={navBarStyles.navItem}>
                  <Link href="/contact">
                    <a>
                      Contact
                    </a>
                  </Link>
                </Nav.Item> 
              </Nav>
          </Navbar>
          <div className={navBarStyles.mobileMenu} id="outer-container">
            <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
            <main id="page-wrap">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
            </main>
          </div>
        </Col>
      </Row>
    </Container>
  </header>
  // <header className="mt-3">
  //   <Container>
  //     <Row className="border-bottom">
  //       <Navbar bg="light">
  //         <Row className="mb-0">
  //           <Col sm={5}>
  //             <div className="pb-1">
  //               <Link href="/">
  //                 <a>

  //                 </a>
  //               </Link>                
  //             </div>
  //           </Col>
  //           <Col sm={7}>
  //           <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //             <Navbar.Collapse id="basic-navbar-nav" className="my-3">
  //               <Nav>




                
  //               </Nav>
  //             </Navbar.Collapse>
  //           </Col>
  //         </Row>         
  //       </Navbar>
  //     </Row>
  //   </Container>
  // </header>
);

export default NavBar;
