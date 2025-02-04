import React from 'react';
import { IndustryAttorneysSection } from 'styles/industries/IndustryAttorneys.style';
import empty from 'is-empty';
import { Title60 } from 'styles/common/Typography.style';
import { AttorneyCardsWrapper } from 'styles/Attornyes.style';
import LawyerCard from 'components/shared/LawyerCard';

const IndustryAttorneys = ({ title, attorneys, anchorId }) => {
  if (empty(attorneys)) return null;

  return (
    <IndustryAttorneysSection
      id={anchorId}
      as="section"
      className="margin-scroll"
    >
      {!empty(title) && <Title60>{title}</Title60>}
      <AttorneyCardsWrapper>
        {attorneys.map((attorney) => (
          <LawyerCard
            key={attorney?.databaseId}
            link={attorney?.link}
            image={attorney?.profileImage}
            name={attorney?.title}
            designation={attorney.designation}
            locations={attorney.officeLocation}
            number={attorney.phoneNumber}
            email={attorney.email}
            isHorizontal
            isChair={attorney?.isChair}
          />
        ))}
      </AttorneyCardsWrapper>
    </IndustryAttorneysSection>
  );
};

export default IndustryAttorneys;
