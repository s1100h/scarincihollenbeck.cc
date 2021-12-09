import { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import MobileMenu from 'components/organisms/Navbar/MobileMenu';
import GlobalSearch from 'components/shared/GlobalSearch';
import TopNavLinks from 'components/organisms/Navbar/TopNavLinks';
import SiteNavs from 'components/organisms/Navbar/SiteNavs';
import SiteLogo from 'components/organisms/Navbar/SiteLogo';
import navBarStyles from 'styles/Navbar.module.css';

export default function NavBar() {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(true);
      if (e.target.documentElement.scrollTop < 135) {
        setScrollTop(false);
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <header className="mb-0 pt-1 shadow sticky-top top--1 bg-white">
      <Container>
        <Row className={`${navBarStyles.borderWrapper} my-2`}>
          <Col sm={12} md={4} className="mb-3 mb-md-0">
            <GlobalSearch scrollTop={scrollTop} />
          </Col>
          <Col sm={12} md={8} className={`d-flex ${navBarStyles.contactBanner} pr-0`}>
            <TopNavLinks />
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            lg={6}
            className={`${navBarStyles.logoBanner} ${scrollTop ? 'mt-0' : 'mt-2'} ml-0 pl-0`}
          >
            <SiteLogo scrollTop={scrollTop} />
          </Col>
          <Col
            xs={12}
            lg={12}
            xl={6}
            className={scrollTop ? 'offset-lg-3' : 'mb-sm-2 mt-xl-3 pr-0 pl-0'}
          >
            <SiteNavs scrollTop={scrollTop} />
            <div className={navBarStyles.mobileMenu}>
              <MobileMenu />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
