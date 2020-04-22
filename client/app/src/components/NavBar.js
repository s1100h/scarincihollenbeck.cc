import React from 'react';
import { Link } from 'react-router-dom';

const SHLogo = 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/sh-logo-2020-compressor.png';

const NavBar = () => (
  <div className="navigation-wrap bg-light start-header start-style d-print-none">
    <div className="container">
      <div className="row border-bottom pb-2">
        <div className="col-12 mt-3">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link className="navbar-brand mb-3" to="/">
              <img rel="preconnect" src={SHLogo} alt="Scarinci Hollenbeck Regional Business law firm" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            {/** Dropdown Menu */}
            <div id="navbarSupportedContent" className="navbar-collapse collapse show">
              <ul id="menu-main-menu" className="navbar-nav ml-auto py-4 py-md-0">
                <li itemScope="itemScope" itemType="https://www.schema.org/SiteNavigationElement" className="dropdown nav-item">
                  <div title="The Firm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link span-hover">
                    The Firm
                  </div>
                  <ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-29112" role="menu">
                    <li className="nav-item">
                      <Link title="Administration" to="/administration" className="dropdown-item">Administration</Link>
                    </li>
                    <li className="nav-item">
                      <Link title="Careers" to="/careers/" className="dropdown-item">Careers</Link>
                    </li>
                    <li className="nav-item">
                      <Link title="Community Involvement" to="/community-involvement/" className="dropdown-item">Community Involvement</Link>
                    </li>
                    <li className="nav-item">
                      <Link title="Diversity Group" to="/diversity-group/" className="dropdown-item">Diversity Group</Link>
                    </li>
                    <li className="nav-item">
                      <Link title="Firm Overview" to="/firm-overview/" className="dropdown-item">Firm Overview</Link>
                    </li>
                    <li className="nav-item">
                      <Link title="Pro Bono" to="/pro-bono/" className="dropdown-item">Pro Bono</Link>
                    </li>
                    <li className="nav-item">
                      <Link title="Women LEAD" to="/women-lead/" className="dropdown-item">Women LEAD</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link title="Attorneys" to="/attorneys/" className="nav-link">Attorneys</Link>
                </li>
                <li className="nav-item">
                  <Link title="Practices" to="/practices/" className="nav-link">Practices</Link>
                </li>
                <li className="dropdown nav-item">
                  <div title="Library" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link span-hover">Library</div>
                  <ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-29122" role="menu">
                    <li className="nav-item">
                      <a title="Firm News" href="/category/firm-news/" className="dropdown-item">Firm News</a>
                    </li>
                    <li className="nav-item">
                      <a title="Firm Events" href="/category/firm-events/" className="dropdown-item">Firm Events</a>
                    </li>
                    <li className="nav-item">
                      <a title="Firm Insights" href="/category/law-firm-insights/" className="dropdown-item">Firm Insights</a>
                    </li>
                    <li className=" nav-item">
                      <a title="Quick News" href="/category/quick-news/" className="dropdown-item">Quick News</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link title="Locations" to="/locations/" className="nav-link">Locations</Link>
                </li>
                <li className="nav-item">
                  <Link title="Contact" to="/contact/" className="nav-link">Contact</Link>
                </li>
                <li className="nav-item">
                  <span title="Phone: 201-896-4100" className="nav-link">
                    <strong className="not-link">Phone:</strong>
                    {' '}
                    201-896-4100
                  </span>
                </li>
              </ul>
            </div>
            {/** End of Dropdown Menu */}
          </nav>
        </div>
      </div>
    </div>
  </div>
);

export default NavBar;
