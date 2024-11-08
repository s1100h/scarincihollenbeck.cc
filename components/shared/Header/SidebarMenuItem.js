import React, { memo, useCallback, useState } from 'react';
import empty from 'is-empty';
import {
  SidebarMenuItem,
  SidebarMenuItemArrow,
  SidebarMenuItemContent,
  SidebarMenuItemContentList,
  SidebarMenuItemIcon,
  SidebarMenuItemOpener,
} from 'styles/Sidebar.style';
import { BsChevronDown } from 'react-icons/bs';
import MenuSubitem from './SidebarMenuSubitem';

const MenuItem = memo(
  ({
    icon, title, href, list, isOpen, onClick, setIsSidebarOpen,
  }) => {
    const [openItemIndex, setOpenItemIndex] = useState(null);

    const handleItemClick = useCallback(
      (index) => {
        setOpenItemIndex(openItemIndex === index ? null : index);
      },
      [setOpenItemIndex, openItemIndex],
    );

    const handleClickItem = useCallback(
      (e) => {
        if (!empty(list)) {
          e.preventDefault();
          onClick();
        } else {
          setIsSidebarOpen(false);
        }
      },
      [setIsSidebarOpen, onClick, list],
    );

    return (
      <SidebarMenuItem $open={isOpen}>
        <SidebarMenuItemOpener
          href={href}
          onClick={handleClickItem}
          $open={isOpen}
        >
          <SidebarMenuItemIcon>{icon}</SidebarMenuItemIcon>
          {title}
          {!empty(list) && (
            <SidebarMenuItemArrow $open={isOpen}>
              <BsChevronDown size={24} />
            </SidebarMenuItemArrow>
          )}
        </SidebarMenuItemOpener>

        {!empty(list) && (
          <SidebarMenuItemContent $open={isOpen}>
            <SidebarMenuItemContentList>
              {list?.map((item, index) => (
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
          </SidebarMenuItemContent>
        )}
      </SidebarMenuItem>
    );
  },
);

export default MenuItem;
