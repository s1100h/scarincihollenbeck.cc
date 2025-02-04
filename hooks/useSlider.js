import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useSwipeable } from 'react-swipeable';

const useSlider = ({ slides, autoplayInterval = 0, loop = true }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const intervalRef = useRef(null);
  const sliderRef = useRef(null);

  const getSlideIndex = useCallback(
    (direction) => {
      const lastIndex = slides?.length - 1;
      if (direction === 'prev') {
        if (activeSlideIndex > 0) {
          return activeSlideIndex - 1;
        }
        return loop ? lastIndex : activeSlideIndex;
      }
      if (direction === 'next') {
        if (activeSlideIndex < lastIndex) {
          return activeSlideIndex + 1;
        }
        return loop ? 0 : activeSlideIndex;
      }
    },
    [activeSlideIndex, slides?.length],
  );

  const stopAutoplay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const resetAutoplay = useCallback(() => {
    if (autoplayInterval === 0) {
      stopAutoplay(); // disable autoplay when autoplayInterval = 0
      return;
    }
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveSlideIndex(() => getSlideIndex('next'));
    }, autoplayInterval);
  }, [getSlideIndex, autoplayInterval, stopAutoplay]);

  const startAutoplay = useCallback(() => {
    if (!intervalRef.current && autoplayInterval > 0) {
      resetAutoplay();
    }
  }, [resetAutoplay, autoplayInterval]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAutoplay();
        } else {
          stopAutoplay();
        }
      },
      { threshold: 0.5 },
    );

    if (sliderRef?.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      observer.disconnect();
      stopAutoplay();
    };
  }, [startAutoplay, stopAutoplay]);

  const onClickPrev = useCallback(() => {
    setActiveSlideIndex(getSlideIndex('prev'));
    resetAutoplay();
  }, [getSlideIndex]);

  const onClickNext = useCallback(() => {
    setActiveSlideIndex(getSlideIndex('next'));
    resetAutoplay();
  }, [getSlideIndex]);

  const swipeHandlers = useSwipeable({
    onSwipedRight: onClickPrev,
    onSwipedLeft: onClickNext,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const activeSlide = slides?.[activeSlideIndex];
  const prevSlide = slides?.[getSlideIndex('prev')];
  const nextSlide = slides?.[getSlideIndex('next')];

  return {
    activeSlide,
    prevSlide,
    nextSlide,
    activeSlideIndex,
    sliderRef,
    swipeHandlers,
    onClickPrev,
    onClickNext,
  };
};

export default useSlider;
