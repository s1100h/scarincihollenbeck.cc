import { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import MobileMenu from 'components/organisms/Navbar/MobileMenu';
import GlobalSearch from 'components/shared/GlobalSearch';
import TopNavLinks from 'components/organisms/Navbar/TopNavLinks';
import SiteNavs from 'components/organisms/Navbar/SiteNavs';
import SiteLogo from 'components/organisms/Navbar/SiteLogo';
import navBarStyles from 'styles/Navbar.module.css';
import headerStyles from 'styles/Header.module.css';

navBarStyles.midle = undefined;
export default function NavBar() {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(true);
      if (e.target.documentElement.scrollTop < 100) {
        setScrollTop(false);
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <header
      className={`${headerStyles.header} ${
        scrollTop ? headerStyles.headerWhite : ''
      } mb-0 pt-1  sticky-top top--1`}
    >
      <div className={`${headerStyles.wrapper}`}>
        <Col className={`${navBarStyles.logoBanner} ml-0 pl-0`}>
          <SiteLogo scrollTop={scrollTop} />
        </Col>
        <div className={`${headerStyles.middle}`}>
          <GlobalSearch scrollTop={scrollTop} />
          <SiteNavs scrollTop={scrollTop} />
        </div>
        <Col
          className={`d-flex ${navBarStyles.contactBanner} ${navBarStyles.buttonContainerHeader} pr-0`}
        >
          <TopNavLinks />
        </Col>
        <Col
          xs={12}
          lg={12}
          xl={6}
          className={scrollTop ? 'offset-xl-3' : 'mb-sm-2 mt-xl-3 pr-0 pl-0'}
        >
          {' '}
        </Col>
        <div className="d-block d-md-none">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
