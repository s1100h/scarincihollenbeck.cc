import throttle from 'lodash.throttle';
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { AnchorTopBtn } from 'styles/AnchorTop.style';

const AnchorTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = throttle(() => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  }, 200);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
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
