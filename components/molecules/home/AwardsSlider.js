import React from 'react';
import SwiperWrapper from 'components/organisms/common/SwiperWrapper';
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

const AwardsSlider = ({ images }) => (
  <SwiperWrapper
    breakpoints={breakpoints}
    spaceBetween={32}
    lazy="true"
    grab-cursor="true"
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
  </SwiperWrapper>
);

export default AwardsSlider;
