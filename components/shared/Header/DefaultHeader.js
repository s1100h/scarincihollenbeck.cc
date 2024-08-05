import React, { useContext, useRef, useState } from 'react';
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
import { useScrollDirection } from 'hooks/useScrollDirection';
import { SizesContext } from 'contexts/SizesContext';
import InitGlobalVariables from 'styles/global_styles/InitGlobalVariables';
import HeaderTopLine from './HeaderTopLine';
import HeaderSearch from './HeaderSearch';
import SidebarMenu from './SidebarMenu';

const DefaultHeader = React.memo(({ practices, locations, menuData }) => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const headerRef = useRef();
  const { width: viewportWidth, isScreenLg } = useResize();
  const scrollDirection = useScrollDirection();
  useHeaderSize(headerRef, scrollDirection, viewportWidth);
  const { headerSize } = useContext(SizesContext);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <InitGlobalVariables>
        {`--header-height: ${headerSize?.height}px;`}
      </InitGlobalVariables>
      <HeaderWrapper
        ref={headerRef}
        key="header-wrapper-default"
        className={`light-scrollbar ${
          scrollDirection === 'down' ? 'hide' : 'show'
        }`}
      >
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
              <ButtonRed
                href="/contact"
                className="contact-header-btn"
                onClick={() => setIsSidebarOpen(false)}
              >
                Contact us
              </ButtonRed>

              <HeaderSearch
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
    </>
  );
});

export default DefaultHeader;
