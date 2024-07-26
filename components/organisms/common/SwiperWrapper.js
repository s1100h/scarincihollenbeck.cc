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
  const [isInitialized, setIsInitialized] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;

    if (!empty(breakpoints) && !isInitialized) {
      const slider = {
        breakpoints,
      };

      Object.assign(swiperRef.current, slider);
      swiperRef.current.initialize();
      setIsInitialized(true);
    }

    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
    swiper.navigation.init();
    swiper.navigation.update();
  }, []);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      swiper.update();
      if (swiper.params.navigation && swiper.navigation) {
        swiper.navigation.update();
      }
      if (swiper.params.pagination && swiper.pagination) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    }
  }, [children]);

  return (
    <SliderWrapper>
      <swiper-container
        pagination={pagination}
        pagination-clickable={pagination}
        pagination-dynamic-bullets="true"
        pagination-dynamic-main-bullets="3"
        class="slider-container"
        ref={swiperRef}
        loop={loop}
        slides-per-view={slidesPerView}
        space-between={spaceBetween}
        {...props}
      >
        {children}
      </swiper-container>

      {navigation && <SliderNavigation prevRef={prevRef} nextRef={nextRef} />}
    </SliderWrapper>
  );
};

export default SwiperWrapper;
