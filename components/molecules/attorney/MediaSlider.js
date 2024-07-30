import React from 'react';
import SwiperWrapper from 'components/organisms/common/SwiperWrapper';
import empty from 'is-empty';
import { MediaSliderWrapper } from 'styles/attorney-page/MediaSlider.style';
import SimpleNewsCard from 'components/common/SimpleNewsCard';

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
          <swiper-slide key={item?.title} class="slide">
            <SimpleNewsCard
              title={item?.title}
              label={item?.label || item?.publisher}
              date={item?.date}
              video={item?.video?.videoLink || item?.video?.uploadVideo}
              link={item?.link}
              textPost={item?.description}
              isFull
            />
          </swiper-slide>
        ))}
      </SwiperWrapper>
    </MediaSliderWrapper>
  );
};

export default MediaSlider;
