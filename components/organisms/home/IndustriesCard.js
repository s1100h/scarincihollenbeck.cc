import React from 'react';
import {
  IndustriesCardText,
  IndustriesCardTitle,
  IndustriesCardWrapper,
} from 'styles/Industries.style';
import empty from 'is-empty';
import Link from 'next/link';
import RenderIcon from 'components/common/RenderIcon';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';

const IndustriesCard = ({
  title, description, icon, image, link,
}) => (
  <IndustriesCardWrapper as={!empty(link) && Link} href={link}>
    <RenderIcon mobileSizes={40} sizes={40} image={image} icon={icon} />

    {!empty(title) && (
      <IndustriesCardTitle className="title">{title}</IndustriesCardTitle>
    )}

    {!empty(description) && (
      <IndustriesCardText>
        <JSXWithDynamicLinks HTML={description} />
      </IndustriesCardText>
    )}
  </IndustriesCardWrapper>
);

export default IndustriesCard;
