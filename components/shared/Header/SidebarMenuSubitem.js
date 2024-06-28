import React from 'react';
import empty from 'is-empty';
import {
  SidebarMenuItemContent,
  SidebarMenuItemContentList,
  SidebarMenuSubitem,
  SidebarMenuSubitemContentItem,
  SidebarMenuSubitemContentLink,
  SidebarMenuSubitemIcon,
  SidebarMenuSubitemOpener,
} from 'styles/Header.style';

const MenuSubitem = ({
  title,
  href = '/',
  list,
  isStrong,
  isOpen,
  onClick,
  setIsSidebarOpen,
}) => {
  const handleClickItem = (e) => {
    if (!empty(list)) {
      e.preventDefault();
      onClick();
    } else {
      setIsSidebarOpen(false);
    }
  };

  return (
    <SidebarMenuSubitem $open={isOpen}>
      <SidebarMenuSubitemOpener
        href={href}
        onClick={handleClickItem}
        $open={isOpen}
        $isStrong={isStrong}
      >
        {!empty(list) && <SidebarMenuSubitemIcon $open={isOpen} />}
        {title}
      </SidebarMenuSubitemOpener>

      {!empty(list) && (
        <SidebarMenuItemContent $open={isOpen}>
          <SidebarMenuItemContentList>
            {list.map((item) => (
              <SidebarMenuSubitemContentItem key={item.databaseId}>
                <SidebarMenuSubitemContentLink
                  href={item?.uri}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item?.title}
                </SidebarMenuSubitemContentLink>
              </SidebarMenuSubitemContentItem>
            ))}
          </SidebarMenuItemContentList>
        </SidebarMenuItemContent>
      )}
    </SidebarMenuSubitem>
  );
};

export default MenuSubitem;
