import React from 'react';
import {
  IndustriesCardIcon,
  IndustriesCardText,
  IndustriesCardTitle,
  IndustriesCardWrapper,
} from 'styles/Industries.style';
import empty from 'is-empty';
import Link from 'next/link';
import { getIcon } from 'utils/helpers';

const IndustriesCard = ({
  icon, title, text, link,
}) => (
  <IndustriesCardWrapper as={!empty(link?.url) && Link} href={link?.url}>
    {!empty(icon) && (
      <IndustriesCardIcon className="icon">{getIcon(icon)}</IndustriesCardIcon>
    )}

    {!empty(title) && (
      <IndustriesCardTitle className="title">{title}</IndustriesCardTitle>
    )}

    {!empty(text) && <IndustriesCardText>{text}</IndustriesCardText>}
  </IndustriesCardWrapper>
);

export default IndustriesCard;
