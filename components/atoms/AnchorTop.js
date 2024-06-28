import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { AnchorTopBtn } from 'styles/AnchorTop.style';
import { debounce } from 'utils/helpers';

const AnchorTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = debounce(checkScrollTop, 200);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showScroll]);

  return (
    <AnchorTopBtn className={showScroll ? 'show' : ''} onClick={scrollToTop}>
      <FaArrowUp />
    </AnchorTopBtn>
  );
};

export default AnchorTop;
