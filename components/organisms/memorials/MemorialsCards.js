import LawyerCard from 'components/shared/LawyerCard';
import React from 'react';
import { AttorneyCardsWrapper } from 'styles/Attornyes.style';

const MemorialsCards = ({ memorials }) => {
  if (!memorials) return null;
  return (
    <AttorneyCardsWrapper>
      {memorials.map((card) => (
        <LawyerCard
          key={card?.databaseId}
          link={card?.uri}
          image={card?.memorialFields?.image?.sourceUrl}
          name={card?.title}
          born={card?.memorialFields?.born}
          death={card?.memorialFields?.death}
        />
      ))}
    </AttorneyCardsWrapper>
  );
};

export default MemorialsCards;
