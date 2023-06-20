import { useContext } from 'react';
import MobileMenu from 'components/organisms/Navbar/MobileMenu/MobileMenu';
import GlobalSearch from 'components/shared/GlobalSearch/GlobalSearch';
import LinkButtons from 'components/organisms/Navbar/LinkButtons';
import Navigation from 'components/organisms/Navbar/Navigation';
import Logo from 'components/organisms/Navbar/Logo';
import {
  HeaderContainer, Wrapper, LogoBox, LinksBox, DesktopVisible, MobileVisible,
} from 'styles/Header.style';
import Filters from 'components/organisms/attorneys/Filters';
import { AttorneysContext } from 'contexts/AttorneysContext';
import Selection from 'components/organisms/attorneys/Selection';
import useIsScroll from 'hooks/useIsScroll';
import { useRouter } from 'next/router';
import useStateScreen from 'hooks/useStateScreen';

export default function Header() {
  const {
    dataForFilter, userInput, select, handleChange, onSelect, clearQuery, clearAll,
  } = useContext(AttorneysContext);
  const { isTabletScreen } = useStateScreen();

  const { sPractices, locations, designations } = dataForFilter;

  const { scrollTop } = useIsScroll();

  const { pathname } = useRouter();

  const isAttorneysPage = pathname === '/attorneys';

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
      {scrollTop && isAttorneysPage && !isTabletScreen && (
        <Filters practices={sPractices} locations={locations} designation={designations} userInput={userInput} handleChange={handleChange} onSelect={onSelect}>
          {(userInput.length > 0 || select.length > 0) && <Selection select={select} clearQuery={clearQuery} userInput={userInput} clearAll={clearAll} />}
        </Filters>
      )}
    </HeaderContainer>
  );
}
