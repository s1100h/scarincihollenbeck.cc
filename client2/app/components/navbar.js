import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { SHLogo } from '../utils/next-gen-images';


const Header = () => (
  <header className="mt-3">
    <Container>
      <Row className="border-bottom">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand className="mr-5">
            <Link href="/">
              <a>
                <img src={SHLogo} alt="Scarinci Hollenbeck, LLC" />
              </a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="ml-5">
            <Nav className="ml-3 mt-3">
            <NavDropdown title="The Firm" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link href="/administration/">
                      Administration
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/careers/">
                      Careers
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/community-involvement/">
                      Community Involvement
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/diversity-group/">
                      Diversity Group
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/firm-overview/">
                      Firm Overview
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/pro-bono/">
                      Pro Bono
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/women-lead/">
                      Women Lead
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              <Nav.Item>
                <Link href="/attorneys/">
                  <a>
                    Attorneys
                  </a>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/practices/">
                  <a>
                    Practices
                  </a>
                </Link>
              </Nav.Item>
              <NavDropdown title="Library" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link href="/quick-news/">
                      Quick News
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/firm-news/">
                      Firm News
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/firm-events/">
                      Firm Events
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/law-firm-insights/">
                      Firm Insights
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              <Nav.Item>
                <Link href="/locations">
                  <a>
                    Locations
                  </a>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/contact">
                  <a>
                    Contact
                  </a>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <strong>Phone: </strong> 201-896-4100
              </Nav.Item>
            </Nav>            
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </Container>
  </header>
);

export default Header;
