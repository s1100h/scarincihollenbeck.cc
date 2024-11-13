import empty from 'is-empty';
import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import { ContainerDefault } from 'styles/Containers.style';
import {
  PracticeAttorneysBg,
  PracticeAttorneysSection,
  PracticeNoAttorneys,
} from 'styles/practices/PracticeAttorneys';
import { PracticeTitle } from 'styles/practices/PracticeCommon.style';
import { useSelector } from 'react-redux';
import AttorneysArea from '../attorneys/areas/AttorneysArea';

const PracticeAttorneys = ({ attorneys, chairs = [], anchorId }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);
  const [cardGap, setCardGap] = useState(0);
  const containerRef = useRef();
  const totalItems = attorneys?.length + chairs.length;
  const { width } = useSelector((state) => state.sizes.viewportSize);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.clientWidth);
    }
  }, [containerRef.current, width]);

  const calculateItemsPerRow = useMemo(() => {
    const availableWidth = containerWidth + cardGap;
    return Math.floor(availableWidth / (cardWidth + cardGap)) || 0;
  }, [containerWidth, cardWidth, cardGap]);

  const handleSetCardParams = (width, height) => {
    setCardWidth(width);
    setCardHeight(height);
  };

  const handleSetCardGap = (gap) => {
    setCardGap(gap);
  };

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  if (totalItems === 0 || Number.isNaN(totalItems)) {
    return (
      <PracticeAttorneysSection
        id={anchorId}
        className="margin-scroll"
        data-testid="collapse-attorneys"
      >
        <PracticeAttorneysBg
          src="/images/profile-attorney-bg.webp"
          fill
          alt="Attorneys background"
          sizes="100vw"
          loading="lazy"
        />
        <ContainerDefault>
          <PracticeTitle>Practice Area Attorneys</PracticeTitle>
          <PracticeNoAttorneys>Attorneys will appear soon!</PracticeNoAttorneys>
        </ContainerDefault>
      </PracticeAttorneysSection>
    );
  }

  return (
    <PracticeAttorneysSection
      className={`margin-scroll ${isCollapsed ? 'collapsed' : ''}`}
      id={anchorId}
      data-testid="collapse-attorneys"
    >
      <PracticeAttorneysBg
        src="/images/profile-attorney-bg.webp"
        fill
        alt="Attorneys background"
        sizes="100vw"
        loading="lazy"
      />
      <ContainerDefault>
        <div className="attorneys-practice__header">
          <PracticeTitle>Practice Area Attorneys</PracticeTitle>
          {totalItems > calculateItemsPerRow && (
            <button onClick={handleCollapse}>
              {!isCollapsed ? 'See all' : 'HIDE'}
            </button>
          )}
        </div>
        <div className="attorneys-practice__wrapper" ref={containerRef}>
          {(!empty(chairs) || !empty(attorneys)) && (
            <AttorneysArea
              attorneys={{
                chairs,
                attorneysList: attorneys,
              }}
              handleSetCardParams={handleSetCardParams}
              handleSetCardGap={handleSetCardGap}
              minHeight={chairs.length > 0 ? cardHeight + 34 : cardHeight}
            />
          )}
        </div>
      </ContainerDefault>
    </PracticeAttorneysSection>
  );
};

export default PracticeAttorneys;
