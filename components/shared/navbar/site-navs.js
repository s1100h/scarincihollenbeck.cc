import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navBarStyles from 'styles/Navbar.module.css';
import { SITE_NAVIGATION } from 'utils/constants';

export default function SiteNavs() {
  return (
    <Navbar className={`${navBarStyles.navContainer} pr-0 mr-0`}>
      <Nav>
        {SITE_NAVIGATION.map((nav) => (nav.children ? (
          <NavDropdown
            key={nav.label}
            title={nav.label}
            id={nav.menuId}
            className={`${navBarStyles.navItem} ${navBarStyles.dropDownItem}`}
          >
            {nav.children.map((child) => (
              <Link key={child.label} href={child.slug}>
                <a className={`${navBarStyles.dropDownNavItem} dropdown-item`}>{child.label}</a>
              </Link>
            ))}
          </NavDropdown>
        ) : (
          <Nav.Item key={nav.label} id={nav.menuId} className={navBarStyles.navItem}>
            <Link href={nav.slug}>
              <a className="text-dark">{nav.label}</a>
            </Link>
          </Nav.Item>
        )))}
      </Nav>
    </Navbar>
  );
}
