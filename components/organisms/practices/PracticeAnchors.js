import AnchorsTopBar from 'components/molecules/practice/AnchorsTopBar';
import { SizesContext } from 'contexts/SizesContext';
import React, { useContext } from 'react';
import { ContainerDefault } from 'styles/Containers.style';
import { PracticeAnchorsHolder } from 'styles/practices/PracticeAnchors.style';

const PracticeAnchors = ({ handleClickAnchorLink, anchorData, title }) => {
  const { headerSize } = useContext(SizesContext);

  return (
    <PracticeAnchorsHolder $headerHeight={headerSize?.height}>
      <ContainerDefault>
        <AnchorsTopBar
          title={title}
          handleClickAnchorLink={handleClickAnchorLink}
          anchorData={anchorData}
        />
      </ContainerDefault>
    </PracticeAnchorsHolder>
  );
};

export default PracticeAnchors;
