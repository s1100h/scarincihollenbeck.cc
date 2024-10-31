import React, { memo, useCallback, useState } from 'react';
import { SidebarMenuList } from 'styles/Sidebar.style';
import MenuItem from './SidebarMenuItem';

const SidebarMenuItems = memo(({ menuData, setIsSidebarOpen }) => {
  const [openItemIndex, setOpenItemIndex] = useState(null);

  const handleItemClick = useCallback(
    (index) => {
      setOpenItemIndex(openItemIndex === index ? null : index);
    },
    [setOpenItemIndex, openItemIndex],
  );

  return (
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
  );
});

export default SidebarMenuItems;
