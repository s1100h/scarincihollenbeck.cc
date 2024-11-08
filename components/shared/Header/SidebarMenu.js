import React, { memo } from 'react';
import {
  SidebarMenuBackdrop,
  SidebarMenuButton,
  SidebarMenuButtonIcon,
  SidebarMenuButtons,
  SidebarMenuContainer,
  SidebarMenuFooter,
  SidebarMenuLink,
  SidebarMenuLinks,
  SidebarMenuSocial,
  SidebarMenuSocialIcon,
  SidebarMenuSocials,
  SidebarMenuWrapper,
} from 'styles/Sidebar.style';
import {
  MAKE_A_PAYMENT,
  SIDEBAR_POLITIC_LINKS,
  SOCIAL_LINKS,
} from 'utils/constants';
import PaymentIcon from 'components/common/icons/PaymentIcon';
import MailingListIcon from 'components/common/icons/MailingListIcon';
import SubscriptionModal from 'components/molecules/subscription/SubscriptionModal';
import { ButtonRed } from 'styles/Buttons.style';
import Navigation from 'components/organisms/Navbar/Navigation';
import { useSelector } from 'react-redux';
import SidebarMenuItems from './SidebarMenuItems';

const SidebarMenu = memo(
  ({
    practices,
    locations,
    industries,
    menuData,
    isSidebarOpen,
    setIsSidebarOpen,
  }) => {
    const { headerSize } = useSelector((state) => state.sizes);

    const menuHeight = isSidebarOpen
      ? `calc(100dvh - ${headerSize.height}px)`
      : '0';

    return (
      <>
        <SidebarMenuWrapper
          $headerHeight={menuHeight}
          $isSidebarOpen={isSidebarOpen}
          className={isSidebarOpen ? 'sidebar-open' : ''}
          inert={isSidebarOpen ? undefined : ''}
        >
          <SidebarMenuContainer>
            <Navigation
              key="header-navigation"
              practices={practices}
              locations={locations}
              industries={industries}
              setIsSidebarOpen={setIsSidebarOpen}
            />

            <SidebarMenuItems
              menuData={menuData}
              setIsSidebarOpen={setIsSidebarOpen}
            />

            <SidebarMenuLinks>
              {SIDEBAR_POLITIC_LINKS?.map((item) => (
                <SidebarMenuLink
                  key={item?.title}
                  href={item?.link}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item?.title}
                </SidebarMenuLink>
              ))}
            </SidebarMenuLinks>
          </SidebarMenuContainer>

          <SidebarMenuFooter>
            <SidebarMenuContainer>
              <SidebarMenuButtons>
                <ButtonRed href="/contact" className="sidebar-contact-btn">
                  Contact us
                </ButtonRed>

                <SubscriptionModal customClass="sidebar-subscription-btn">
                  <SidebarMenuButtonIcon>
                    <MailingListIcon />
                  </SidebarMenuButtonIcon>
                  Join our mailing list
                </SubscriptionModal>

                <SidebarMenuButton
                  href={MAKE_A_PAYMENT}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SidebarMenuButtonIcon>
                    <PaymentIcon />
                  </SidebarMenuButtonIcon>
                  Make payment
                </SidebarMenuButton>
              </SidebarMenuButtons>

              <SidebarMenuSocials>
                {SOCIAL_LINKS.map((item) => (
                  <SidebarMenuSocial
                    key={item?.id}
                    href={item?.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SidebarMenuSocialIcon>{item?.icon}</SidebarMenuSocialIcon>
                    {item?.title}
                  </SidebarMenuSocial>
                ))}
              </SidebarMenuSocials>
            </SidebarMenuContainer>
          </SidebarMenuFooter>
        </SidebarMenuWrapper>

        <SidebarMenuBackdrop
          $headerHeight={headerSize.height}
          $isSidebarOpen={isSidebarOpen}
          onClick={() => setIsSidebarOpen(false)}
        />
      </>
    );
  },
);

export default SidebarMenu;
