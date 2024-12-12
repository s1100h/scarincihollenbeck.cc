import { useRouter } from 'next/router';
import React from 'react';
import { globalColor } from 'styles/global_styles/Global.styles';
import {
  SubHeaderInteractive,
  SubHeaderMenuLink,
  SubHeaderMenuList,
} from 'styles/practices/SubHeader.style';

const SubHeaderMenu = ({ menu }) => {
  if (!menu) return null;
  const { asPath } = useRouter();
  return (
    <SubHeaderInteractive $bg={globalColor.blue.blue6002}>
      <SubHeaderMenuList>
        {menu.map((item) => (
          <li key={item?.id}>
            <SubHeaderMenuLink
              href={item?.slug}
              className={asPath === item?.slug ? 'active' : ''}
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
