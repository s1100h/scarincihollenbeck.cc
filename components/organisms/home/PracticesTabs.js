import React from 'react';
import {
  PracticesTabsCards,
  PracticesTabsOpener,
  PracticesTabsOpeners,
  PracticesTabsWrapper,
} from 'styles/PracticesTabs.style';
import PracticeCard from './PracticeCard';

const PracticesTabs = () => (
  <PracticesTabsWrapper>
    <PracticesTabsOpeners>
      <PracticesTabsOpener>
        Corporate Transactions & Business
      </PracticesTabsOpener>
    </PracticesTabsOpeners>

    <PracticesTabsCards>
      <PracticeCard />
    </PracticesTabsCards>
  </PracticesTabsWrapper>
);

export default PracticesTabs;
