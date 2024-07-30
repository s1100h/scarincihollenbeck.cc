import React from 'react';
import { LatestPostsCards } from 'styles/LatestPosts.style';
import { StandardBlueButton } from 'styles/Buttons.style';
import Link from 'next/link';
import LatestPostsCard from './LatestPostsCard';
import SwiperWrapper from '../common/SwiperWrapper';

const LatestPostsSlider = ({ activeTabData, activeTabId }) => (
  <SwiperWrapper space-between={24} slides-per-view="1">
    {activeTabData?.articles?.map((chunk, indexChunk) => (
      // eslint-disable-next-line react/no-array-index-key
      <swiper-slide key={`${activeTabId}-${indexChunk}`} class="slide">
        <LatestPostsCards>
          <>
            {chunk?.map((article, indexChunkArticle) => (
              <LatestPostsCard
                key={article?.databaseId}
                article={article}
                isBig={!!(indexChunk === 0 && indexChunkArticle === 0)}
              />
            ))}
            {indexChunk === activeTabData?.articles?.length - 1 && (
              <StandardBlueButton
                as={Link}
                href={activeTabData?.categoryLink}
                className="discovery-button"
              >
                Discovery more...
              </StandardBlueButton>
            )}
          </>
        </LatestPostsCards>
      </swiper-slide>
    ))}
  </SwiperWrapper>
);

export default LatestPostsSlider;
