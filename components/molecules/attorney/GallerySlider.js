import React from 'react';
import SwiperWrapper from 'components/organisms/common/SwiperWrapper';
import empty from 'is-empty';
import {
  GallerySliderCard,
  GallerySliderWrapper,
} from 'styles/attorney-page/GallerySlider.style';
import Image from 'next/image';

const GallerySlider = ({ items }) => {
  if (empty(items)) return null;

  return (
    <GallerySliderWrapper>
      <SwiperWrapper
        slidesPerView="auto"
        spaceBetween={32}
        lazy="true"
        grab-cursor="true"
      >
        {items?.map((item) => (
          <swiper-slide key={item?.image?.databaseId} class="slide">
            <GallerySliderCard orientation={item?.orientationImage}>
              <Image src={item?.image?.sourceUrl} alt={item?.caption} fill />
            </GallerySliderCard>
          </swiper-slide>
        ))}
      </SwiperWrapper>
    </GallerySliderWrapper>
  );
};

export default GallerySlider;
