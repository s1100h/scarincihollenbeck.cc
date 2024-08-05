import { useState } from 'react';
import { useRouter } from 'next/router';
import { getSlugFromUrl } from 'utils/helpers';
import { LogoBox } from '../../../styles/Header.style';
import Logo from '../../organisms/Navbar/Logo';
import LinkButtons from '../../organisms/Navbar/LinkButtons';
import MobileMenu from '../../organisms/Navbar/MobileMenu/MobileMenu';
import useIsScroll from '../../../hooks/useIsScroll';
import {
  SearchBoxContainer,
  SearchOpenBtn,
  SpecialHeaderContainer,
  VisibleHiddenSearch,
} from '../../../styles/practices-special-style/header/SpecialHeader.style';
import { GlobalSearch } from '../GlobalSearch/GlobalSearch';

const className = (pageSlug) => {
  const pagesMap = {
    'new-jersey-cannabis-law': 'cannabis-header',
    // 'entertainment-and-media': 'entertainment-header', // page ready for deploy in prod but paused, commit 26.12.2023
  };

  return pagesMap[pageSlug] || '';
};

const SpecialHeader = ({ practices, locations }) => {
  const { scrollTop } = useIsScroll();
  const [isOpenSearch, setOpenSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useRouter();
  const slug = getSlugFromUrl(pathname);

  const handleOpenSearch = () => {
    setOpenSearch(!isOpenSearch);

    if (showMenu) {
      setShowMenu(false);
    }
  };

  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  return (
    <>
      <SpecialHeaderContainer
        isChangeOrder={isOpenSearch}
        scrollDown={scrollTop}
        className={className(slug)}
      >
        <LogoBox>
          <Logo whiteVariant />
        </LogoBox>
        <VisibleHiddenSearch isOpenBlock={isOpenSearch}>
          <GlobalSearch />
        </VisibleHiddenSearch>
        <SearchBoxContainer isOpenSearch={isOpenSearch ? 'true' : ''}>
          <SearchOpenBtn onClick={handleOpenSearch} />
        </SearchBoxContainer>

        <LinkButtons variant="special" />
        <MobileMenu
          show={showMenu}
          handleShow={handleShowMenu}
          handleClose={handleCloseMenu}
          practices={practices}
          locations={locations}
        />
      </SpecialHeaderContainer>
    </>
  );
};

export default SpecialHeader;
