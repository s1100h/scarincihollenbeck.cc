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
import { ButtonRed } from 'styles/Buttons.style';
import Navigation from 'components/organisms/Navbar/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import SidebarMenuItems from './SidebarMenuItems';
import { handleSubscriptionModalOpener } from '../../../redux/slices/modals.slice';

const SidebarMenu = memo(
  ({
    practices,
    locations,
    industries,
    menuData,
    isSidebarOpen,
    setIsSidebarOpen,
  }) => {
    const dispatch = useDispatch();
    const { headerSize } = useSelector((state) => state.sizes);

    return (
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <SidebarMenuWrapper
              key="sidebar-menu-motion"
              className={isSidebarOpen ? 'sidebar-open' : ''}
              inert={isSidebarOpen ? undefined : ''}
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: `calc(100dvh - ${headerSize.height}px)`,
              }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ ease: 'easeOut', duration: 0.3 }}
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
                    <button
                      onClick={() => dispatch(
                        handleSubscriptionModalOpener({ active: true }),
                      )}
                      className="sidebar-subscription-btn"
                    >
                      <SidebarMenuButtonIcon>
                        <MailingListIcon />
                      </SidebarMenuButtonIcon>
                      Join our mailing list
                    </button>

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
                        <SidebarMenuSocialIcon>
                          {item?.icon}
                        </SidebarMenuSocialIcon>
                        {item?.title}
                      </SidebarMenuSocial>
                    ))}
                  </SidebarMenuSocials>
                </SidebarMenuContainer>
              </SidebarMenuFooter>
            </SidebarMenuWrapper>

            <SidebarMenuBackdrop
              key="sidebar-menu-backdrop"
              $headerHeight={headerSize.height}
              onClick={() => setIsSidebarOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: 'easeOut', duration: 0.2 }}
            />
          </>
        )}
      </AnimatePresence>
    );
  },
);

export default SidebarMenu;
