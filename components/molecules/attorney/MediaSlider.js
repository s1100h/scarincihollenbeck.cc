import React from 'react';
import SwiperWrapper from 'components/organisms/common/SwiperWrapper';
import empty from 'is-empty';
import { MediaSliderWrapper } from 'styles/attorney-page/MediaSlider.style';

const breakpoints = {
  1440: {
    slidesPerView: 3,
    spaceBetween: 24,
  },
  768: {
    spaceBetween: 20,
    slidesPerView: 2,
  },
  0: {
    slidesPerView: 1,
  },
};

const MediaSlider = ({ items }) => {
  if (empty(items)) return null;

  return (
    <MediaSliderWrapper>
      <SwiperWrapper breakpoints={breakpoints} grab-cursor="true">
        {items?.map((item) => (
          <swiper-slide key={item?.id} class="slide">
            <div>123</div>
          </swiper-slide>
        ))}
      </SwiperWrapper>
    </MediaSliderWrapper>
  );
};

export default MediaSlider;
