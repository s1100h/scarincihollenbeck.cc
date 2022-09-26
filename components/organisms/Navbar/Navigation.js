import Link from 'next/link';
import { Nav, NavDropdown } from 'react-bootstrap';
import { NavbarStyled } from 'styles/Navigation.style';
import navBarStyles from 'styles/Navbar.module.css';
import { SITE_NAVIGATION } from 'utils/constants';

const Navigation = ({ scrollTop }) => (
  <NavbarStyled className={`${navBarStyles.navContainer}`}>
    <Nav className={`${navBarStyles.navContainerWrapper}`}>
      {scrollTop && (
        <Nav.Item id="home" className={navBarStyles.navItem}>
          <Link href="/">
            <a className="text-dark">Home</a>
          </Link>
        </Nav.Item>
      )}
      {SITE_NAVIGATION.map((nav) => (nav.children ? (
        <NavDropdown
          key={nav.label}
          title={`${nav.label} ᐁ`}
          id={nav.menuId}
          className={`${navBarStyles.navItem} ${navBarStyles.dropDownItem}`}
        >
          {nav.children.map((child) => (
            <Link key={child.label} href={child.slug} passHref>
              <NavDropdown.Item className={`${navBarStyles.dropDownNavItem} dropdown-item`}>
                {child.label}
              </NavDropdown.Item>
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
  </NavbarStyled>
);

export default Navigation;
