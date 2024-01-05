import AnchorsTopBar from 'components/molecules/practice/AnchorsTopBar';
import React, { useEffect, useRef, useState } from 'react';
import { ContainerContent } from 'styles/practices-special-style/commonForSpecial.style';
import {
  PracticeAnchorEmpty,
  PracticeAnchorsHolder,
} from 'styles/practices/PracticeAnchors.style';

const PracticeAnchors = ({ handleClickAnchorLink, anchorData, title }) => {
  const [fixed, setFixed] = useState(false);
  const [holderHeight, setHolderHeight] = useState(0);

  const ref = useRef();
  const emptyRef = useRef();

  useEffect(() => {
    if (ref.current && emptyRef.current) {
      setHolderHeight(ref.current.clientHeight);
      const header = document.querySelector('header');
      let holderPosition = Math.floor(
        ref.current.getBoundingClientRect().top + window.scrollY,
      );
      let headerHeight = header.offsetHeight
        + parseInt(getComputedStyle(ref.current).marginTop, 10);

      const updateValues = () => {
        setHolderHeight(ref.current.clientHeight);
        headerHeight = header.offsetHeight
          + parseInt(getComputedStyle(ref.current).marginTop, 10);
        if (!fixed && window.scrollY < holderPosition - headerHeight) {
          holderPosition = Math.floor(
            ref.current.getBoundingClientRect().top + window.scrollY,
          );
        } else {
          holderPosition = Math.floor(
            emptyRef.current.getBoundingClientRect().top + window.scrollY,
          );
        }
      };

      const handleScroll = () => {
        if (window.scrollY >= holderPosition - headerHeight) {
          setFixed(true);
        } else {
          setFixed(false);
        }
      };

      const handleResize = () => {
        updateValues();
      };

      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [anchorData]);

  return (
    <>
      <PracticeAnchorsHolder ref={ref} className={fixed ? 'fixed' : ''}>
        <ContainerContent className="practice-container">
          <AnchorsTopBar
            title={title}
            handleClickAnchorLink={handleClickAnchorLink}
            anchorData={anchorData}
          />
        </ContainerContent>
      </PracticeAnchorsHolder>
      <PracticeAnchorEmpty height={holderHeight} show={fixed} ref={emptyRef} />
    </>
  );
};

export default PracticeAnchors;
