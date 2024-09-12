import React from 'react';
import { FaDiamond } from 'react-icons/fa6';
import { SeparatedTitleWrapper } from 'styles/SeparatedTitle.style';
import { DiamondSeparator } from 'styles/Separators.style';

const SeparatedTitle = ({
  separatorSize,
  separatorColor,
  title,
  titleLevel = 'h2',
}) => (
  <SeparatedTitleWrapper as={titleLevel} className="separated-title">
    <DiamondSeparator
      $size={separatorSize}
      $color={separatorColor}
      className="title-separator"
    >
      <FaDiamond />
    </DiamondSeparator>
    <span className="title-text">{title}</span>
  </SeparatedTitleWrapper>
);

export default SeparatedTitle;
