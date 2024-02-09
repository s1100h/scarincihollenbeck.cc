import { useContext, useState } from 'react';
import Logo from 'components/organisms/Navbar/Logo';
import {
  DefaultHeaderSearchContainer,
  HeaderContainer,
  LinksBox,
  LogoBox,
  Wrapper,
} from '../../../styles/Header.style';
import GlobalSearch from '../GlobalSearch/GlobalSearch';
import LinkButtons from '../../organisms/Navbar/LinkButtons';
import MobileMenu from '../../organisms/Navbar/MobileMenu/MobileMenu';
import Navigation from '../../organisms/Navbar/Navigation';
import Filters from '../../organisms/attorneys/Filters';
import Selection from '../../organisms/attorneys/Selection';
import { AttorneysContext } from '../../../contexts/AttorneysContext';
import useStateScreen from '../../../hooks/useStateScreen';
import AddressSubscription from './AddressSubscription';

const DefaultHeader = ({
  scrollTop, pathname, practices, locations,
}) => {
  const {
    dataForFilter,
    userInput,
    select,
    handleChange,
    onSelect,
    clearQuery,
    clearAll,
    onSelectLetter,
    attorneysContext,
  } = useContext(AttorneysContext);
  const { isTabletScreen } = useStateScreen();
  const { sPractices, designations } = dataForFilter;
  const isAttorneysPage = pathname === '/attorneys';
  const [isOpenSearch, setOpenSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleOpenSearch = () => {
    setOpenSearch(true);

    if (showMenu) {
      setShowMenu(false);
    }
  };

  const handleHideSearch = (e) => {
    e.stopPropagation();
    setOpenSearch(false);
  };

  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  return (
    <HeaderContainer scrollDown={scrollTop}>
      <AddressSubscription />
      <Wrapper isOpenBlock={isOpenSearch}>
        <LogoBox>
          <Logo />
        </LogoBox>
        <Navigation practices={practices} locations={locations} />
        <DefaultHeaderSearchContainer
          isOpenBlock={isOpenSearch}
          onClick={handleOpenSearch}
        >
          <GlobalSearch />
          <button className="search-icon" onClick={(e) => handleHideSearch(e)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M11.6151 10.0006L15.6514 5.96311C15.7605 5.85778 15.8475 5.73179 15.9073 5.59248C15.9671 5.45318 15.9986 5.30335 16 5.15174C16.0013 5.00013 15.9724 4.84977 15.915 4.70945C15.8576 4.56912 15.7728 4.44164 15.6656 4.33443C15.5584 4.22722 15.4309 4.14244 15.2906 4.08503C15.1502 4.02762 14.9999 3.99873 14.8483 4.00004C14.6967 4.00136 14.5468 4.03286 14.4075 4.0927C14.2682 4.15254 14.1422 4.23953 14.0369 4.34858L9.99943 8.3849L5.96311 4.34858C5.85778 4.23953 5.73179 4.15254 5.59248 4.0927C5.45318 4.03286 5.30335 4.00136 5.15174 4.00004C5.00013 3.99873 4.84977 4.02762 4.70945 4.08503C4.56912 4.14244 4.44164 4.22722 4.33443 4.33443C4.22722 4.44164 4.14244 4.56912 4.08503 4.70945C4.02762 4.84977 3.99873 5.00013 4.00004 5.15174C4.00136 5.30335 4.03286 5.45318 4.0927 5.59248C4.15254 5.73179 4.23953 5.85778 4.34858 5.96311L8.3849 9.99943L4.34858 14.0369C4.23953 14.1422 4.15254 14.2682 4.0927 14.4075C4.03286 14.5468 4.00136 14.6967 4.00004 14.8483C3.99873 14.9999 4.02762 15.1502 4.08503 15.2906C4.14244 15.4309 4.22722 15.5584 4.33443 15.6656C4.44164 15.7728 4.56912 15.8576 4.70945 15.915C4.84977 15.9724 5.00013 16.0013 5.15174 16C5.30335 15.9986 5.45318 15.9671 5.59248 15.9073C5.73179 15.8475 5.85778 15.7605 5.96311 15.6514L9.99943 11.6151L14.0369 15.6514C14.1422 15.7605 14.2682 15.8475 14.4075 15.9073C14.5468 15.9671 14.6967 15.9986 14.8483 16C14.9999 16.0013 15.1502 15.9724 15.2906 15.915C15.4309 15.8576 15.5584 15.7728 15.6656 15.6656C15.7728 15.5584 15.8576 15.4309 15.915 15.2906C15.9724 15.1502 16.0013 14.9999 16 14.8483C15.9986 14.6967 15.9671 14.5468 15.9073 14.4075C15.8475 14.2682 15.7605 14.1422 15.6514 14.0369L11.6151 10.0006Z"
                fill="#656565"
              />
            </svg>
          </button>
        </DefaultHeaderSearchContainer>
        <LinksBox>
          <LinkButtons variant="default" />
        </LinksBox>
        <MobileMenu
          show={showMenu}
          handleShow={handleShowMenu}
          handleClose={handleCloseMenu}
          practices={practices}
          locations={locations}
        />
      </Wrapper>
      {scrollTop && isAttorneysPage && !isTabletScreen && (
        <Filters
          practices={sPractices}
          locations={locations}
          designation={designations}
          userInput={userInput}
          handleChange={handleChange}
          onSelect={onSelect}
          attorneysContext={attorneysContext}
          onSelectLetter={onSelectLetter}
          select={select}
        >
          {(userInput.length > 0 || select.length > 0) && (
            <Selection
              select={select}
              clearQuery={clearQuery}
              userInput={userInput}
              clearAll={clearAll}
            />
          )}
        </Filters>
      )}
    </HeaderContainer>
  );
};

export default DefaultHeader;
