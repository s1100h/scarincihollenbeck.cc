import FocusedCard from 'components/atoms/FocusedCard';
import React from 'react';
import {
  CareersInfoContent,
  CareersInfoHolder,
  CareersInfoSection,
} from 'styles/Careers.style';
import { FocusedServicesCards } from 'styles/home-page/WhyChooseUs.style';
import empty from 'is-empty';
import { Title32, Title20 } from 'styles/common/Typography.style';
import ContentRender from 'components/atoms/ContentRender';

const CareersInfo = ({
  description, title, subtitle, focusedCards,
}) => {
  if (empty(description) && empty(focusedCards)) return null;
  return (
    <CareersInfoSection>
      <CareersInfoHolder>
        {!empty(description) && (
          <CareersInfoContent>
            <Title32>{title}</Title32>
            <Title20>{subtitle}</Title20>
            <ContentRender content={description} />
          </CareersInfoContent>
        )}
        {!empty(focusedCards) && (
          <FocusedServicesCards>
            {focusedCards.map(({ title, icon, text }) => (
              <li key={title}>
                <FocusedCard title={title} icon={icon} text={text} />
              </li>
            ))}
          </FocusedServicesCards>
        )}
      </CareersInfoHolder>
    </CareersInfoSection>
  );
};

export default CareersInfo;
