import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { globalColor } from 'styles/global_styles/Global.styles';
import {
  SubHeaderInteractive,
  SubHeaderMenuLink,
  SubHeaderMenuList,
} from 'styles/practices/SubHeader.style';

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
          <li key={item?.id}>
            <SubHeaderMenuLink
              href={item?.slug}
              className={currentPath === item?.slug ? 'active' : ''}
            >
              {item?.label}
            </SubHeaderMenuLink>
          </li>
        ))}
      </SubHeaderMenuList>
    </SubHeaderInteractive>
  );
};

export default SubHeaderMenu;
