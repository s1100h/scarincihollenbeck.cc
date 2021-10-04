import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navBarStyles from 'styles/Navbar.module.css';

export default function SiteNavs() {
  return (
    <Navbar className={`${navBarStyles.navContainer} pr-0 mr-0`}>
      <Nav>
        <NavDropdown
          title="The Firm"
          id="the-firm-dropdown"
          className={`${navBarStyles.navItem} ${navBarStyles.dropDownItem}`}
        >
          <Link href="/administration">
            <a className={`${navBarStyles.dropDownNavItem} dropdown-item`}>Administration</a>
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

          <a href="/diversity-group" className={`${navBarStyles.dropDownNavItem} dropdown-item`}>
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
  );
}
