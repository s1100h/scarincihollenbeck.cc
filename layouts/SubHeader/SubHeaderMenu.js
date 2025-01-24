import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { globalColor } from 'styles/global_styles/Global.styles';
import { SubHeaderInteractive } from 'styles/subheader/SubHeader.style';
import {
  SubHeaderMenuLink,
  SubHeaderMenuList,
} from 'styles/subheader/SubHeaderMenu.style';

const SubHeaderMenu = ({ menu }) => {
  const [currentPath, setCurrentPath] = useState(null);
  const { asPath } = useRouter();

  useEffect(() => {
    setCurrentPath(asPath);
  }, [asPath]);

  if (!menu) return null;
  return (
    <SubHeaderInteractive $bg={globalColor.blue.blue6002}>
      <SubHeaderMenuList>
        {menu.map((item) => (
          <li key={item?.databaseId}>
            <SubHeaderMenuLink
              href={item?.uri}
              className={currentPath === item?.uri ? 'active' : ''}
            >
              {item?.title}
            </SubHeaderMenuLink>
          </li>
        ))}
      </SubHeaderMenuList>
    </SubHeaderInteractive>
  );
};

export default SubHeaderMenu;
