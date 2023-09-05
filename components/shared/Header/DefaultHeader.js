import { useContext } from 'react';
import {
  DefaultHeaderSearchContainer, HeaderContainer, LinksBox, LogoBox, Wrapper,
} from '../../../styles/Header.style';
import Logo from '../../organisms/Navbar/Logo';
import GlobalSearch from '../GlobalSearch/GlobalSearch';
import LinkButtons from '../../organisms/Navbar/LinkButtons';
import MobileMenu from '../../organisms/Navbar/MobileMenu/MobileMenu';
import Navigation from '../../organisms/Navbar/Navigation';
import Filters from '../../organisms/attorneys/Filters';
import Selection from '../../organisms/attorneys/Selection';
import { AttorneysContext } from '../../../contexts/AttorneysContext';
import useStateScreen from '../../../hooks/useStateScreen';

const DefaultHeader = ({ scrollTop, pathname }) => {
  const {
    dataForFilter, userInput, select, handleChange, onSelect, clearQuery, clearAll, onSelectLetter, attorneysContext,
  } = useContext(AttorneysContext);
  const { isTabletScreen } = useStateScreen();
  const { sPractices, locations, designations } = dataForFilter;
  const isAttorneysPage = pathname === '/attorneys';
  return (
    <HeaderContainer scrollDown={scrollTop}>
      <Wrapper>
        <LogoBox>
          <Logo />
        </LogoBox>
        <DefaultHeaderSearchContainer>
          <GlobalSearch />
        </DefaultHeaderSearchContainer>
        <LinksBox>
          <LinkButtons variant="default" />
        </LinksBox>
        <MobileMenu />
      </Wrapper>
      <Navigation />
      {scrollTop && isAttorneysPage && !isTabletScreen && (
        <Filters practices={sPractices} locations={locations} designation={designations} userInput={userInput} handleChange={handleChange} onSelect={onSelect} attorneysContext={attorneysContext} onSelectLetter={onSelectLetter} select={select}>
          {(userInput.length > 0 || select.length > 0) && <Selection select={select} clearQuery={clearQuery} userInput={userInput} clearAll={clearAll} />}
        </Filters>
      )}
    </HeaderContainer>
  );
};

export default DefaultHeader;
