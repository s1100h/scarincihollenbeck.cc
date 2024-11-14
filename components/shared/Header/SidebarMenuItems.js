import React, { useState } from 'react';
import { SidebarMenuList } from 'styles/Sidebar.style';
import MenuItem from './SidebarMenuItem';

const SidebarMenuItems = ({ menuData, setIsSidebarOpen }) => {
  const [openItemIndex, setOpenItemIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

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
};

export default SidebarMenuItems;
