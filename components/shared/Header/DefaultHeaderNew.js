import React, { useRef, useState } from 'react';
import { ContainerDefault } from 'styles/Containers.style';
import {
  HeaderMain,
  HeaderMainButtons,
  HeaderWrapper,
  LogoBox,
  SidebarOpener,
} from 'styles/Header.style';
import Logo from 'components/organisms/Navbar/Logo';
import NavigationNew from 'components/organisms/Navbar/NavigationNew';
import { ButtonRed } from 'styles/Buttons.style';
import useHeaderSize from 'hooks/useHeaderSize';
import { useResize } from 'hooks/useResize';
import HeaderTopLine from './HeaderTopLine';
import HeaderSearch from './HeaderSearch';
import SidebarMenu from './SidebarMenu';

const DefaultHeaderNew = ({ practices, locations }) => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const headerRef = useRef();
  useHeaderSize(headerRef);
  const { width: viewportWidth } = useResize();

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <HeaderWrapper ref={headerRef}>
      <HeaderTopLine
        isOpenSearch={isOpenSearch}
        setIsOpenSearch={setIsOpenSearch}
        viewportWidth={viewportWidth}
      />
      <ContainerDefault>
        <HeaderMain>
          <LogoBox $isHide={isOpenSearch}>
            <Logo />
          </LogoBox>

          <NavigationNew practices={practices} locations={locations} />

          <HeaderMainButtons $wide={isOpenSearch}>
            <ButtonRed href="/contact">Contact us</ButtonRed>

            <HeaderSearch
              key="header-search"
              isOpenSearch={isOpenSearch}
              setIsOpenSearch={setIsOpenSearch}
            />

            <SidebarOpener
              aria-label="Sidebar opener"
              $isHide={isOpenSearch}
              onClick={handleToggleSidebar}
              $isSidebarOpen={isSidebarOpen}
            >
              <span className="burger-line" />
            </SidebarOpener>

            <SidebarMenu
              practices={practices}
              locations={locations}
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          </HeaderMainButtons>
        </HeaderMain>
      </ContainerDefault>
    </HeaderWrapper>
  );
};

export default DefaultHeaderNew;
