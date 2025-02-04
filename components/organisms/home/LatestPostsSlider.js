import React from 'react';
import LatestPostsCards from 'components/common/LatestPostsCards';
import SwiperWrapper from '../common/SwiperWrapper';
import SwiperSlide from '../common/SwiperSlide';

const LatestPostsSlider = ({ activeTabData, activeTabId }) => (
  <SwiperWrapper space-between={24} slides-per-view="1">
    {activeTabData?.articles?.map((chunk, indexChunk) => (
      // eslint-disable-next-line react/no-array-index-key
      <SwiperSlide key={`${activeTabId}-${indexChunk}`}>
        <LatestPostsCards
          posts={chunk}
          isRenderDiscoveryButton={
            indexChunk === activeTabData?.articles?.length - 1
          }
          linkDiscovery={activeTabData?.categoryLink}
          isBig={indexChunk === 0}
        />
      </SwiperSlide>
    ))}
  </SwiperWrapper>
);

export default LatestPostsSlider;
