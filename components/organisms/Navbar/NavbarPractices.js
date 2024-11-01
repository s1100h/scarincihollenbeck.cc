import React, { useEffect, useMemo, useState } from 'react';
import {
  NavbarLeftBlock,
  NavbarLeftList,
  NavbarLeftItem,
  NavbarRightBlock,
  NavbarRightList,
  NavbarRightItem,
  NavbarRightTitle,
  NavbarLeftItemOpener,
  NavbarLeftItemOpenerIcon,
  NavbarRightItemLink,
  NavbarPracticesHolder,
} from 'styles/Navigation.style';
import empty from 'is-empty';
import { IoIosArrowForward } from 'react-icons/io';
import { SidebarMenuItemContentList } from 'styles/Sidebar.style';
import MenuSubitem from 'components/shared/Header/SidebarMenuSubitem';

const NavbarPractices = ({
  practices,
  setShowNavContent,
  isScreenLg,
  setIsSidebarOpen,
}) => {
  const modifiedPractices = useMemo(
    () => [
      {
        databaseId: 'view-all-practices-nav',
        uri: '/services',
        title: 'Open practices page',
        additionalClass: 'underlined',
      },
      ...practices,
    ],
    [practices],
  );
  const [childData, setChildData] = useState([]);
  const [childTitle, setChildTitle] = useState('');
  const [activeItem, setActiveItem] = useState(0);
  const [openItemIndex, setOpenItemIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  useEffect(() => {
    const firstItemWithChildren = modifiedPractices.find(
      (item) => !empty(item?.list),
    );
    if (firstItemWithChildren) {
      setChildData(firstItemWithChildren.list);
      setChildTitle(firstItemWithChildren.title);
      setActiveItem(modifiedPractices.indexOf(firstItemWithChildren));
    } else {
      setChildData([]);
      setChildTitle('');
      setActiveItem(0);
    }
  }, [modifiedPractices]);

  const handleClickItem = (index) => {
    if (!empty(modifiedPractices[index]?.list)) {
      setChildData(modifiedPractices[index]?.list);
      setChildTitle(modifiedPractices[index]?.title);
      setActiveItem(index);
    } else {
      setShowNavContent(false);
    }
  };

  return isScreenLg ? (
    <NavbarPracticesHolder>
      <NavbarLeftBlock>
        <NavbarLeftList>
          {modifiedPractices?.map((item, index) => (
            <NavbarLeftItem key={item?.databaseId}>
              <NavbarLeftItemOpener
                as={!empty(item?.list) && 'button'}
                href={empty(item?.list) ? item?.uri : undefined}
                onClick={() => handleClickItem(index)}
                className={`${activeItem === index ? 'active' : ''} ${
                  item?.additionalClass || ''
                }`}
              >
                {item?.title}
                {!empty(item?.list) && (
                  <NavbarLeftItemOpenerIcon className="item-icon">
                    <IoIosArrowForward />
                  </NavbarLeftItemOpenerIcon>
                )}
              </NavbarLeftItemOpener>
            </NavbarLeftItem>
          ))}
        </NavbarLeftList>
      </NavbarLeftBlock>
      <NavbarRightBlock>
        <NavbarRightTitle>{childTitle}</NavbarRightTitle>
        <NavbarRightList>
          {childData?.map((item, index) => (
            <NavbarRightItem key={item?.databaseId}>
              <NavbarRightItemLink
                href={item?.uri}
                onClick={() => setShowNavContent(false)}
              >
                {item?.title}
              </NavbarRightItemLink>
            </NavbarRightItem>
          ))}
        </NavbarRightList>
      </NavbarRightBlock>
    </NavbarPracticesHolder>
  ) : (
    !empty(modifiedPractices) && (
      <SidebarMenuItemContentList className="practices-list">
        {modifiedPractices?.map((item, index) => (
          <MenuSubitem
            key={item?.databaseId}
            title={item?.title}
            href={item?.uri}
            list={item?.list}
            additionalClass={item?.additionalClass}
            isOpen={openItemIndex === index}
            onClick={() => handleItemClick(index)}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        ))}
      </SidebarMenuItemContentList>
    )
  );
};

export default NavbarPractices;
