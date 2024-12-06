import React, { useId } from 'react';
import empty from 'is-empty';
import {
  TabContentColumn,
  TabContentColumns,
  TabTitle,
} from 'styles/VerticalTabs.style';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';

const VerticalTabsContentColumns = ({ columns }) => {
  if (empty(columns)) return null;
  const columnId = useId();

  return (
    <TabContentColumns>
      {columns?.map((column, columnIndex) => (
        <TabContentColumn key={`${columnId}-${columnIndex + 1}`}>
          {column?.title && <TabTitle>{column?.title}</TabTitle>}
          {column?.description && (
            <JSXWithDynamicLinks HTML={column?.description} />
          )}
        </TabContentColumn>
      ))}
    </TabContentColumns>
  );
};

export default VerticalTabsContentColumns;
