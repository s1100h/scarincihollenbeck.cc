import React from 'react';
import {
  PracticeCardButton,
  PracticeCardDescription,
  PracticeCardFooter,
  PracticeCardHeader,
  PracticeCardIcon,
  PracticeCardTitle,
  PracticeCardWrapper,
} from 'styles/PracticeCard.style';

const PracticeCard = () => (
  <PracticeCardWrapper>
    <PracticeCardHeader>
      <PracticeCardIcon>icon</PracticeCardIcon>

      <PracticeCardTitle>Education Law</PracticeCardTitle>
    </PracticeCardHeader>

    <PracticeCardDescription>
      By combining innovative strategies with business advisory and crisis
      management skills, we guide our clients through the turmoil surrounding
      financially troubled and bankrupt companies, set priorities, and allocate
      resources to maximize the prospects for effective recovery.
    </PracticeCardDescription>

    <PracticeCardFooter>
      <PracticeCardButton>View practice area</PracticeCardButton>
      <PracticeCardButton>View services</PracticeCardButton>
    </PracticeCardFooter>
  </PracticeCardWrapper>
);

export default PracticeCard;
