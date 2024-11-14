import React from 'react';
import SwiperWrapper from 'components/organisms/common/SwiperWrapper';
import empty from 'is-empty';
import {
  GallerySliderCard,
  GallerySliderWrapper,
} from 'styles/attorney-page/GallerySlider.style';
import Image from 'next/image';
import SwiperSlide from 'components/organisms/common/SwiperSlide';

const GallerySlider = ({ items }) => {
  if (empty(items)) return null;

  return (
    <GallerySliderWrapper>
      <SwiperWrapper
        slides-per-view="auto"
        space-between={32}
        lazy="true"
        grab-cursor="true"
      >
        {items?.map((item) => (
          <SwiperSlide key={item?.image?.databaseId}>
            <GallerySliderCard orientation={item?.orientationImage}>
              <Image
                src={item?.image?.sourceUrl}
                alt={item?.caption}
                fill
                loading="lazy"
              />
            </GallerySliderCard>
          </SwiperSlide>
        ))}
      </SwiperWrapper>
    </GallerySliderWrapper>
  );
};

export default GallerySlider;
