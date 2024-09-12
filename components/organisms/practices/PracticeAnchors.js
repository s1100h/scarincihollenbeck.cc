import AnchorsTopBar from 'components/molecules/practice/AnchorsTopBar';
import React from 'react';
import { useSelector } from 'react-redux';
import { ContainerDefault } from 'styles/Containers.style';
import { PracticeAnchorsHolder } from 'styles/practices/PracticeAnchors.style';

const PracticeAnchors = ({ handleClickAnchorLink, anchorData, title }) => {
  const { headerSize } = useSelector((state) => state.sizes);

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
