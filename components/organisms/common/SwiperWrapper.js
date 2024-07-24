import SliderNavigation from 'components/common/SliderNavigation';
import React, { useEffect, useRef, useState } from 'react';
import { SliderWrapper } from 'styles/Slider.style';
import empty from 'is-empty';

const SwiperWrapper = ({
  breakpoints,
  children,
  pagination = 'true',
  navigation = 'true',
  slidesPerView = '1',
  loop = false,
  spaceBetween = 20,
  ...props
}) => {
  const swiperRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const handleClickBtnNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handleClickBtnPrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  useEffect(() => {
    if (!empty(breakpoints)) {
      const slider = {
        breakpoints,
      };

      Object.assign(swiperRef.current, slider);
      swiperRef.current.initialize();
    }

    swiperRef.current.addEventListener('swiperslidechange', (e) => {
      setCurrentIndex(swiperRef.current?.swiper.realIndex);
      setIsEnd(swiperRef.current?.swiper.isEnd);
    });
  }, []);

  return (
    <SliderWrapper>
      <swiper-container
        pagination={pagination}
        pagination-clickable={pagination}
        class="slider-container"
        ref={swiperRef}
        loop={loop}
        slides-per-view={slidesPerView}
        space-between={spaceBetween}
        {...props}
      >
        {children}
      </swiper-container>

      {navigation && (
        <SliderNavigation
          handleClickBtnNext={handleClickBtnNext}
          handleClickBtnPrev={handleClickBtnPrev}
          isEnd={!loop && isEnd}
          currentIndex={!loop && currentIndex}
        />
      )}
    </SliderWrapper>
  );
};

export default SwiperWrapper;
