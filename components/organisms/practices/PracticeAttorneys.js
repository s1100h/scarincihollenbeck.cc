import AttorneysListBox from 'components/common/AttorneysListBox';
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

const PracticeAttorneys = ({ attorneys, chairs = [], anchorId }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);
  const [cardGap, setCardGap] = useState(0);
  const containerRef = useRef();
  const totalItems = attorneys?.length + chairs.length;

  useEffect(() => {
    let timeoutId;

    const handleResize = () => {
      if (containerRef.current) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setContainerWidth(containerRef.current.clientWidth);
        }, 300);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [containerRef.current]);

  const calculateItemsPerRow = useMemo(() => {
    const availableWidth = containerWidth + cardGap;
    return Math.floor(availableWidth / (cardWidth + cardGap)) || 0;
  }, [containerWidth, cardWidth, cardGap]);

  const handleCardParams = (width, height) => {
    setCardWidth(width);
    setCardHeight(height);
  };

  const handleCardGap = (gap) => {
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
      minHeight={chairs.length > 0 ? cardHeight + 34 : cardHeight}
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
          {totalItems > calculateItemsPerRow
            && (!isCollapsed ? (
              <button onClick={handleCollapse}>See all</button>
            ) : (
              <button onClick={handleCollapse}>HIDE</button>
            ))}
        </div>
        <div className="attorneys-practice__wrapper" ref={containerRef}>
          {(!empty(chairs) || !empty(attorneys)) && (
            <AttorneysListBox
              attorneys={{
                chairs,
                attorneysList: attorneys,
              }}
              handleCardParams={handleCardParams}
              handleCardGap={handleCardGap}
            />
          )}
        </div>
      </ContainerDefault>
    </PracticeAttorneysSection>
  );
};

export default PracticeAttorneys;
