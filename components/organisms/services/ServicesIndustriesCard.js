import React from 'react';
import {
  ServicesIndustriesCardWrapper,
  ServicesIndustriesCarLabel,
} from 'styles/services/ServicesIndustries.style';
import empty from 'is-empty';
import { Title32, UnderlinedLink } from 'styles/common/Typography.style';

const ServicesIndustriesCard = ({
  title,
  label = 'Industry',
  link,
  onClickModalOpener,
}) => {
  if (empty(title)) return null;

  return (
    <ServicesIndustriesCardWrapper>
      <ServicesIndustriesCarLabel>{label}</ServicesIndustriesCarLabel>
      <Title32 as="h3" $isWhite>
        {title}
      </Title32>
      {!empty(link) ? (
        <UnderlinedLink href={link} $isWhite>
          Learn about this industry
        </UnderlinedLink>
      ) : (
        <UnderlinedLink as="button" $isWhite onClick={onClickModalOpener}>
          Book free consultation
        </UnderlinedLink>
      )}
    </ServicesIndustriesCardWrapper>
  );
};

export default ServicesIndustriesCard;
