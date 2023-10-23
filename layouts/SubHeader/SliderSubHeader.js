import empty from 'is-empty';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { AnimatePresence, motion } from 'framer-motion';
import { ContainerContent } from 'styles/practices-special-style/commonForSpecial.style';
import PostBreadcrumbs from '../../components/organisms/post/PostBreadcrumbs';
import {
  AnimateTitleWrapper,
  SlideBlock,
  SlideBtn,
  SlideBtns,
  SlideContent,
  SlideDarkText,
  SlideNumberActive,
  SlideNumberCount,
  SlideNumbers,
  SlideSidebar,
  SlideSmallTitle,
  SlideSubHeader,
  SlideSubTitle,
  SlideTitle,
  SliderPagination,
  SliderPaginationArrowDown,
  SliderPaginationArrowUp,
  SliderPaginationDote,
  SliderPaginationDots,
  SliderSubHeaderContainer,
} from '../../styles/practices-special-style/SpecialSubHeader.style';

const arrowUp = '/images/arrow-up.svg';
const arrowDown = '/images/arrow-down.svg';
const arrowUpDisabled = '/images/arrow-up-disabled.svg';
const arrowDownDisabled = '/images/arrow-down-disabled.svg';

const SliderSubHeader = ({
  subtitle,
  slidesData,
  sliderCfg,
  subHeaderBtns,
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [dots, setDots] = useState([]);
  const isPrevBtnDisabled = activeSlideIndex === 0;
  const isNextBtnDisabled = activeSlideIndex === slidesData?.length - 1;
  const titleRef = useRef(null);
  const [titleHeight, setTitleHeight] = useState(0);

  const goToPrevSlide = () => {
    if (activeSlideIndex > 0) {
      setActiveSlideIndex(activeSlideIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (activeSlideIndex < slidesData.length - 1) {
      setActiveSlideIndex(activeSlideIndex + 1);
    }
  };

  const autoPlaySlides = () => {
    if (activeSlideIndex < slidesData.length - 1) {
      setActiveSlideIndex(activeSlideIndex + 1);
    } else {
      setActiveSlideIndex(0);
    }
  };

  useEffect(() => {
    setDots(
      new Array(slidesData?.length)
        .fill(0)
        .map((_, index) => index === activeSlideIndex),
    );
  }, [activeSlideIndex, slidesData]);

  useEffect(() => {
    if (titleRef.current) {
      const height = titleRef.current.clientHeight;
      setTitleHeight(height);
    }
  }, []);

  useEffect(() => {
    if (sliderCfg.isSlidesAutoPlay) {
      const intervalId = setInterval(autoPlaySlides, sliderCfg.autoPlaySpeed);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [activeSlideIndex]);

  return (
    <SliderSubHeaderContainer>
      <ContainerContent>
        <PostBreadcrumbs />
        {!empty(slidesData) && (
          <SlideSubHeader>
            {!empty(slidesData[activeSlideIndex].image) && (
              <AnimatePresence>
                {slidesData.map(
                  (slide, index) => index === activeSlideIndex && (
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="animation-wrapper"
                  >
                    <Image
                      src={slidesData[activeSlideIndex].image}
                      alt={slidesData[activeSlideIndex].title}
                      width={1920}
                      height={1080}
                    />
                  </motion.div>
                  ),
                )}
              </AnimatePresence>
            )}
            <SlideSidebar>
              <SlideDarkText className="slide__company">
                Scarinci Hollenbeck’s
              </SlideDarkText>
              <SlideDarkText className="slide__date">2023</SlideDarkText>
            </SlideSidebar>

            <SlideContent>
              <SlideBlock>
                <SlideSmallTitle>
                  {slidesData.map((slide, index) => {
                    const isLastElement = index === slidesData.length - 1;
                    return isLastElement ? slide.title : `${slide.title} & `;
                  })}
                </SlideSmallTitle>
                <AnimateTitleWrapper titleHeight={titleHeight}>
                  <AnimatePresence type="crossfade">
                    {slidesData.map(
                      (slide, index) => index === activeSlideIndex && (
                      <motion.div
                        key={slide.title}
                        initial={{
                          opacity: 0,
                          y: 100,
                        }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{
                          opacity: 0,
                          y: -100,
                          position: 'absolute',
                        }}
                        transition={{
                          duration: 0.5,
                          type: 'spring',
                          damping: 15,
                          stiffness: 80,
                        }}
                        ref={titleRef}
                      >
                        <SlideTitle>{slide.title}</SlideTitle>
                      </motion.div>
                      ),
                    )}
                  </AnimatePresence>
                </AnimateTitleWrapper>
                <SlideTitle className="slide__title-margin">In law</SlideTitle>
                <SlideSubTitle>{subtitle}</SlideSubTitle>
                <SlideBtns>
                  {subHeaderBtns.map((btn) => (
                    <SlideBtn key={btn.btnLink}>{btn.btnText}</SlideBtn>
                  ))}
                </SlideBtns>
              </SlideBlock>
              <SlideNumbers>
                <SlideNumberActive>{activeSlideIndex + 1}</SlideNumberActive>
                <SlideNumberCount>
                  /
                  {slidesData.length}
                </SlideNumberCount>
              </SlideNumbers>
              <SliderPagination>
                <SliderPaginationArrowUp
                  arrowUp={isPrevBtnDisabled ? arrowUpDisabled : arrowUp}
                  onClick={goToPrevSlide}
                />
                <SliderPaginationDots>
                  {slidesData.map((slide, index) => (
                    <SliderPaginationDote
                      key={slide.id}
                      className={index === activeSlideIndex ? 'active' : ''}
                    />
                  ))}
                </SliderPaginationDots>
                <SliderPaginationArrowDown
                  arrowDown={isNextBtnDisabled ? arrowDownDisabled : arrowDown}
                  onClick={goToNextSlide}
                />
              </SliderPagination>
            </SlideContent>
          </SlideSubHeader>
        )}
      </ContainerContent>
    </SliderSubHeaderContainer>
  );
};

export default SliderSubHeader;
