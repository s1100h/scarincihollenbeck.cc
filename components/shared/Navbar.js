import { useState, useEffect } from 'react';
import MobileMenu from 'components/organisms/Navbar/MobileMenu';
import GlobalSearch from 'components/shared/GlobalSearch';
import LinkButtons from 'components/organisms/Navbar/LinkButtons';
import Navigation from 'components/organisms/Navbar/Navigation';
import SiteLogo from 'components/organisms/Navbar/SiteLogo';
import {
  Header,
  Wrapper,
  LogoBox,
  LinksBox,
  DesktopVisible,
  MobileVisible,
} from 'styles/Header.style';

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
    <Header scrollDown={scrollTop}>
      <Wrapper>
        <LogoBox>
          <SiteLogo scrollTop={scrollTop} />
        </LogoBox>
        <DesktopVisible>
          <GlobalSearch scrollTop={scrollTop} />
        </DesktopVisible>
        <LinksBox>
          <LinkButtons />
        </LinksBox>
        <MobileMenu />
      </Wrapper>
      <MobileVisible>
        <GlobalSearch scrollTop={scrollTop} />
      </MobileVisible>
      <Navigation scrollTop={scrollTop} />
    </Header>
  );
}
