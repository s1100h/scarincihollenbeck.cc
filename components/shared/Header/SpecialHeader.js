import { useState } from 'react';
import { LinksBox, LogoBox, MobileVisible } from '../../../styles/Header.style';
import Logo from '../../organisms/Navbar/Logo';
import GlobalSearch from '../GlobalSearch/GlobalSearch';
import LinkButtons from '../../organisms/Navbar/LinkButtons';
import MobileMenu from '../../organisms/Navbar/MobileMenu/MobileMenu';
import Navigation from '../../organisms/Navbar/Navigation';
import useIsScroll from '../../../hooks/useIsScroll';
import {
  SearchBoxContainer, SearchOpenBtn, SpecialHeaderContainer, VisibleHiddenSearch,
} from '../../../styles/practices-special-style/header/SpecialHeader.style';

const SpecialHeader = () => {
  const { scrollTop } = useIsScroll();
  const [isOpenSearch, setOpenSearch] = useState(false);
  return (
    <>
      <SpecialHeaderContainer scrollDown={scrollTop}>
        <LogoBox>
          <Logo whiteVariant />
        </LogoBox>
        <Navigation scrollTop={scrollTop} />
        <SearchBoxContainer>
          <SearchOpenBtn onClick={() => setOpenSearch(true)} />
        </SearchBoxContainer>
        <LinksBox>
          <LinkButtons variant="special" />
          <MobileMenu />
        </LinksBox>
      </SpecialHeaderContainer>
      <VisibleHiddenSearch isOpenBlock={isOpenSearch}>
        <GlobalSearch />
      </VisibleHiddenSearch>
    </>
  );
};

export default SpecialHeader;
