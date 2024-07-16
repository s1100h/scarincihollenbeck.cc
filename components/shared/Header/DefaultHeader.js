import React, { useRef, useState } from 'react';
import { ContainerDefault } from 'styles/Containers.style';

import Logo from 'components/organisms/Navbar/Logo';
import { ButtonRed } from 'styles/Buttons.style';
import useHeaderSize from 'hooks/useHeaderSize';
import { useResize } from 'hooks/useResize';
import {
  HeaderMain,
  HeaderMainButtons,
  HeaderWrapper,
  LogoBox,
} from 'styles/Header.style';
import { SidebarOpener } from 'styles/Sidebar.style';
import Navigation from 'components/organisms/Navbar/Navigation';
import HeaderTopLine from './HeaderTopLine';
import HeaderSearch from './HeaderSearch';
import SidebarMenu from './SidebarMenu';

const DefaultHeader = ({ practices, locations, menuData }) => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const headerRef = useRef();
  useHeaderSize(headerRef);
  const { width: viewportWidth, isScreenLg } = useResize();

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <HeaderWrapper ref={headerRef} className="light-scrollbar">
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

          <Navigation
            key="header-navigation"
            practices={practices}
            locations={locations}
            isScreenLg={isScreenLg}
            setIsSidebarOpen={setIsSidebarOpen}
          />

          <HeaderMainButtons $wide={isOpenSearch}>
            <ButtonRed href="/contact" className="contact-header-btn">
              Contact us
            </ButtonRed>

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
              menuData={menuData}
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          </HeaderMainButtons>
        </HeaderMain>
      </ContainerDefault>
    </HeaderWrapper>
  );
};

export default DefaultHeader;
