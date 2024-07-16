import SliderNavigation from 'components/common/SliderNavigation';
import React, { useEffect, useRef, useState } from 'react';
import { SliderWrapper } from 'styles/Slider.style';
import AwardCard from './AwardCard';

const breakpoints = {
  1440: {
    slidesPerView: 5,
    spaceBetween: 32,
  },
  1280: {
    slidesPerView: 4,
  },
  768: {
    spaceBetween: 20,
    slidesPerView: 3,
  },
  0: {
    spaceBetween: 12,
    slidesPerView: 2,
  },
};

const AwardsSlider = ({ images }) => {
  const swiperRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const loop = false;

  const handleClickBtnNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handleClickBtnPrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  useEffect(() => {
    const slider = {
      grabCursor: true,
      breakpoints,
    };

    Object.assign(swiperRef.current, slider);
    swiperRef.current.initialize();

    swiperRef.current.addEventListener('swiperslidechange', (e) => {
      setCurrentIndex(swiperRef.current?.swiper.realIndex);
      setIsEnd(swiperRef.current?.swiper.isEnd);
    });
  }, []);

  return (
    <SliderWrapper>
      <swiper-container
        pagination="true"
        pagination-clickable="true"
        class="slider-container"
        ref={swiperRef}
        loop={loop}
        slides-per-view="5"
        space-between={32}
        lazy="true"
      >
        {images?.map((item) => (
          <swiper-slide key={item?.id} class="slide">
            <AwardCard
              image={item?.image}
              key={item?.id}
              year={item?.year}
              label={item?.label}
            />
          </swiper-slide>
        ))}
      </swiper-container>

      <SliderNavigation
        handleClickBtnNext={handleClickBtnNext}
        handleClickBtnPrev={handleClickBtnPrev}
        isEnd={!loop && isEnd}
        currentIndex={!loop && currentIndex}
      />
    </SliderWrapper>
  );
};

export default AwardsSlider;
