import React, { useEffect, useRef, useState } from 'react';
import { LatestPostsCards } from 'styles/LatestPosts.style';
import { SliderWrapper } from 'styles/Slider.style';
import SliderNavigation from 'components/common/SliderNavigation';
import { StandardBlueButton } from 'styles/Buttons.style';
import Link from 'next/link';
import LatestPostsCard from './LatestPostsCard';

const LatestPostsSlider = ({ activeTabData, activeTabId }) => {
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
        space-between={24}
      >
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

export default LatestPostsSlider;
