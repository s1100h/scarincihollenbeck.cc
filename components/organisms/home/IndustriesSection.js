import React from 'react';
import {
  IndustriesCards,
  IndustriesHeader,
  IndustriesHolder,
  IndustriesTitle,
  IndustriesWrapper,
} from 'styles/Industries.style';
import { globalColor } from 'styles/global_styles/Global.styles';
import { UnderlinedLink } from 'styles/Buttons.style';
import { ContainerDefault } from 'styles/Containers.style';
import { DiamondSeparator } from '../../../styles/Separators.style';
import IndustriesCard from './IndustriesCard';

const IndustriesSection = ({
  title, subtitle, link, industryCards,
}) => (
  <IndustriesWrapper>
    <ContainerDefault>
      <IndustriesHolder>
        <IndustriesHeader>
          <IndustriesTitle>
            <DiamondSeparator $size={24} $color={globalColor.blue.skyBlue} />
            {title}
          </IndustriesTitle>

          <p>{subtitle}</p>
        </IndustriesHeader>

        <IndustriesCards>
          {industryCards.map((item, index) => (
            <IndustriesCard key={`${item?.title}-industry-card`} {...item} />
          ))}
        </IndustriesCards>
        <UnderlinedLink href={link?.url}>{link?.title}</UnderlinedLink>
      </IndustriesHolder>
    </ContainerDefault>
  </IndustriesWrapper>
);

export default IndustriesSection;
