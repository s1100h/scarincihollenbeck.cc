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
} from 'styles/Sidebar.style';
import { globalTransition } from 'styles/global_styles/Global.styles';

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
      const scrollContainer = e.target.closest('.sidebar-open');
      if (scrollContainer) {
        setTimeout(
          () => scrollContainer.scrollTo({
            top: e?.target?.offsetTop,
            behavior: 'smooth',
          }),
          globalTransition?.transitionDuration,
        );
      }

      onClick();
    } else if (setIsSidebarOpen) {
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
                  onClick={() => setIsSidebarOpen && setIsSidebarOpen(false)}
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
