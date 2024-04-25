import AnchorsTopBar from 'components/molecules/practice/AnchorsTopBar';
import React from 'react';
import { ContainerContent } from 'styles/practices-special-style/commonForSpecial.style';
import { PracticeAnchorsHolder } from 'styles/practices/PracticeAnchors.style';

const PracticeAnchors = ({ handleClickAnchorLink, anchorData, title }) => (
  <PracticeAnchorsHolder>
    <ContainerContent className="practice-container">
      <AnchorsTopBar
        title={title}
        handleClickAnchorLink={handleClickAnchorLink}
        anchorData={anchorData}
      />
    </ContainerContent>
  </PracticeAnchorsHolder>
);

export default PracticeAnchors;
