import React from 'react';
import empty from 'is-empty';
import { ContainerDefault } from 'styles/Containers.style';
import ContentSection from 'components/molecules/ContentSection';
import {
  FirmContentHolder,
  FirmContentSections,
  FirmContentSidebar,
  FirmContentWrapper,
} from 'styles/FirmContent.style';
import SubscriptionSidebar from '../common/SubscriptionSidebar';

const FirmContent = ({ sections }) => {
  if (empty(sections)) return null;

  return (
    <FirmContentWrapper>
      <ContainerDefault>
        <FirmContentHolder>
          <FirmContentSections>
            {sections?.map(({ title, content }) => (
              <ContentSection key={title} title={title} content={content} />
            ))}
          </FirmContentSections>

          <FirmContentSidebar>
            <SubscriptionSidebar />
          </FirmContentSidebar>
        </FirmContentHolder>
      </ContainerDefault>
    </FirmContentWrapper>
  );
};

export default FirmContent;
