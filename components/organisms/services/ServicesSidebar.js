import React, { useCallback, useState } from 'react';
import { ServicesAccordions } from 'styles/services/ServicesContent.style';
import { useSelector } from 'react-redux';
import MenuSubitem from 'components/shared/Header/SidebarMenuSubitem';
import empty from 'is-empty';

const sanitizeLinks = (array, isIndustries = false) => {
  if (empty(array)) return [];

  return array.map((item) => ({
    databaseId: item.databaseId,
    uri: !isIndustries ? `#${item.databaseId}` : '#industries',
    title: item.title,
  }));
};

const ServicesSidebar = ({ practices, industries }) => {
  const { headerSize } = useSelector((state) => state.sizes);
  const [openItemIndex, setOpenItemIndex] = useState(0);

  const handleItemClick = useCallback(
    (index) => {
      setOpenItemIndex(openItemIndex === index ? null : index);
    },
    [setOpenItemIndex, openItemIndex],
  );

  return (
    <ServicesAccordions $headerHeight={headerSize?.height}>
      <MenuSubitem
        title="Practices"
        list={sanitizeLinks(practices)}
        isOpen={openItemIndex === 0}
        onClick={() => handleItemClick(0)}
        href="#"
      />
      <MenuSubitem
        title="Industries"
        list={sanitizeLinks(industries, true)}
        isOpen={openItemIndex === 1}
        onClick={() => handleItemClick(1)}
        href="#"
      />
    </ServicesAccordions>
  );
};

export default ServicesSidebar;
