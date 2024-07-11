import React from 'react';
import {
  IndustriesCards,
  IndustriesHeader,
  IndustriesHolder,
  IndustriesTitleHolder,
  IndustriesWrapper,
} from 'styles/Industries.style';
import { globalColor } from 'styles/global_styles/Global.styles';
import { UnderlinedLink } from 'styles/Buttons.style';
import { ContainerDefault } from 'styles/Containers.style';
import SeparatedTitle from 'components/common/SeparatedTitle';
import IndustriesCard from './IndustriesCard';

const IndustriesSection = ({
  title, subtitle, link, industryCards,
}) => (
  <IndustriesWrapper>
    <ContainerDefault>
      <IndustriesHolder>
        <IndustriesHeader>
          <SeparatedTitle
            separatorSize={24}
            separatorColor={globalColor.blue.skyBlue}
            title={title}
          />

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
