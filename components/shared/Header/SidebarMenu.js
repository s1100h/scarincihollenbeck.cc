import React, { useContext, useMemo, useState } from 'react';
import {
  SidebarMenuBackdrop,
  SidebarMenuButton,
  SidebarMenuButtonIcon,
  SidebarMenuButtons,
  SidebarMenuContainer,
  SidebarMenuFooter,
  SidebarMenuLink,
  SidebarMenuLinks,
  SidebarMenuList,
  SidebarMenuWrapper,
} from 'styles/Header.style';
import { HeaderSizeContext } from 'contexts/HeaderSizeContext';
import empty from 'is-empty';
import { createMenuData } from 'utils/helpers';
import { MAKE_A_PAYMENT, SIDEBAR_POLITIC_LINKS } from 'utils/constants';
import PaymentIcon from 'components/common/icons/PaymentIcon';
import MailingListIcon from 'components/common/icons/MailingListIcon';
import SubscriptionModal from 'components/molecules/subscription/SubscriptionModal';
import { ButtonRed } from 'styles/Buttons.style';
import MenuItem from './SidebarMenuItem';

const sanitizeMenuData = (data) => {
  if (!data) return [];

  return data?.map((item) => ({
    databaseId: item?.databaseId,
    uri: item?.uri,
    title: item?.title,
    list: item?.childPractice || [],
  }));
};

const SidebarMenu = ({
  practices,
  locations,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const { headerSize } = useContext(HeaderSizeContext);
  const [openItemIndex, setOpenItemIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  const sanitizedLocations = sanitizeMenuData(locations);

  const practiceWithOverview = useMemo(() => {
    if (empty(practices)) return null;

    return practices.map((practice) => {
      if (empty(practice?.childPractice)) return practice;

      const overviewChild = {
        databaseId: `${practice.databaseId}_${practice.title}`,
        title: `${practice.title} overview`,
        uri: practice.uri,
      };

      const updatedChildPractice = [overviewChild, ...practice.childPractice];

      return {
        ...practice,
        childPractice: updatedChildPractice,
      };
    });
  }, [practices]);

  const sanitizedPractices = sanitizeMenuData(practiceWithOverview);

  const menuData = createMenuData(sanitizedPractices, sanitizedLocations);

  const menuHeight = isSidebarOpen
    ? `calc(100dvh - ${headerSize.height}px)`
    : '0';

  return (
    <>
      <SidebarMenuWrapper
        $headerHeight={menuHeight}
        $isSidebarOpen={isSidebarOpen}
        className={isSidebarOpen ? 'sidebar-open' : ''}
      >
        <SidebarMenuContainer>
          <SidebarMenuList>
            {menuData.map((item, index) => (
              <MenuItem
                key={item?.databaseId}
                icon={item?.icon}
                title={item?.title}
                href={item?.href}
                list={item?.list}
                isOpen={openItemIndex === index}
                onClick={() => handleItemClick(index)}
                setIsSidebarOpen={setIsSidebarOpen}
              />
            ))}
          </SidebarMenuList>

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

            {/* <SidebarMenuSocials>
              <SidebarMenuSocial>

              </SidebarMenuSocial>
            </SidebarMenuSocials> */}
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
};

export default SidebarMenu;
