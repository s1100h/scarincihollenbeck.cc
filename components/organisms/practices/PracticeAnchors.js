import AnchorsTopBar from 'components/molecules/practice/AnchorsTopBar';
import React from 'react';
import { useSelector } from 'react-redux';
import { ContainerContent } from 'styles/practices-special-style/commonForSpecial.style';
import { PracticeAnchorsHolder } from 'styles/practices/PracticeAnchors.style';

const PracticeAnchors = ({ handleClickAnchorLink, anchorData, title }) => {
  const { headerSize } = useSelector((state) => state.sizes);

  return (
    <PracticeAnchorsHolder $headerHeight={headerSize?.height}>
      <ContainerContent className="practice-container">
        <AnchorsTopBar
          title={title}
          handleClickAnchorLink={handleClickAnchorLink}
          anchorData={anchorData}
        />
      </ContainerContent>
    </PracticeAnchorsHolder>
  );
};

export default PracticeAnchors;
