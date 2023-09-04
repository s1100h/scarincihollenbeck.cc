import Link from 'next/link';
import { Nav, NavDropdown } from 'react-bootstrap';
import { NavbarStyled } from 'styles/Navigation.style';
import { SITE_NAVIGATION } from 'utils/constants';

const Navigation = ({ scrollTop, isHidden }) => (
  <NavbarStyled className={`${isHidden && 'd-none'} navContainer`}>
    <Nav className="navContainerWrapper">
      {scrollTop && (
        <Nav.Item id="home">
          <Link href="/">Home</Link>
        </Nav.Item>
      )}
      {SITE_NAVIGATION.map((nav) => (nav.children ? (
        <NavDropdown key={nav.label} title={`${nav.label}`} id={nav.menuId}>
          {nav.children.map((child) => (
            <Link key={child.label} href={child.slug} passHref legacyBehavior>
              <NavDropdown.Item>{child.label}</NavDropdown.Item>
            </Link>
          ))}
        </NavDropdown>
      ) : (
        <Nav.Item key={nav.label} id={nav.menuId}>
          <Link href={nav.slug} legacyBehavior>
            <a>{nav.label}</a>
          </Link>
        </Nav.Item>
      )))}
    </Nav>
  </NavbarStyled>
);

export default Navigation;
