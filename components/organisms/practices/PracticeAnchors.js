import AnchorsTopBar from 'components/molecules/practice/AnchorsTopBar';
import { SizesContext } from 'contexts/SizesContext';
import React, { useContext } from 'react';
import { ContainerContent } from 'styles/practices-special-style/commonForSpecial.style';
import { PracticeAnchorsHolder } from 'styles/practices/PracticeAnchors.style';

const PracticeAnchors = ({ handleClickAnchorLink, anchorData, title }) => {
  const { headerSize } = useContext(SizesContext);

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
