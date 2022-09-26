import { useState, useEffect } from 'react';
import MobileMenu from 'components/organisms/Navbar/MobileMenu';
import GlobalSearch from 'components/shared/GlobalSearch';
import LinkButtons from 'components/organisms/Navbar/LinkButtons';
import Navigation from 'components/organisms/Navbar/Navigation';
import Logo from 'components/organisms/Navbar/Logo';
import {
  HeaderContainer,
  Wrapper,
  LogoBox,
  LinksBox,
  DesktopVisible,
  MobileVisible,
} from 'styles/Header.style';

export default function Header() {
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
    <HeaderContainer scrollDown={scrollTop}>
      <Wrapper>
        <LogoBox>
          <Logo scrollTop={scrollTop} />
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
    </HeaderContainer>
  );
}
