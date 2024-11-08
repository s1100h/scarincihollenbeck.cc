import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import {
  SubHeaderSlide,
  SubHeaderSlideContent,
  SubHeaderSlideDescription,
  SubHeaderSlideImage,
  SubHeaderSlideLabel,
  SubHeaderSlideNavigationButton,
  SubHeaderSlideNavigationIcon,
  SubHeaderSlider,
  SubHeaderSlideTitle,
} from 'styles/practices/SubHeader.style';
import empty from 'is-empty';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import ModalWindow from 'components/common/ModalWindow';
import { FormBox } from 'styles/AboutAuthorFormCard.style';
import ContactForm from 'components/shared/ContactForm/ContactForm';
import Image from 'next/image';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useSwipeable } from 'react-swipeable';

const SubHeaderIndustriesSlider = ({ slides, autoplayInterval = 10000 }) => {
  const [isContactModal, setIsContactModal] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const intervalRef = useRef(null);
  const sliderRef = useRef(null);

  const getSlideIndex = useCallback(
    (direction) => {
      const lastIndex = slides.length - 1;
      if (direction === 'prev') {
        return activeSlideIndex > 0 ? activeSlideIndex - 1 : lastIndex;
      }
      if (direction === 'next') {
        return activeSlideIndex < lastIndex ? activeSlideIndex + 1 : 0;
      }
    },
    [activeSlideIndex, slides?.length],
  );

  const activeSlide = slides?.[activeSlideIndex];
  const prevSlide = slides?.[getSlideIndex('prev')];
  const nextSlide = slides?.[getSlideIndex('next')];

  const stopAutoplay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const resetAutoplay = useCallback(() => {
    if (autoplayInterval === 0) {
      stopAutoplay(); // disable autoplay when autoplayInterval = 0
      return;
    }
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveSlideIndex(() => getSlideIndex('next'));
    }, autoplayInterval);
  }, [getSlideIndex, autoplayInterval]);

  const startAutoplay = useCallback(() => {
    if (!intervalRef.current && autoplayInterval > 0) {
      resetAutoplay();
    }
  }, [resetAutoplay, autoplayInterval]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAutoplay();
        } else {
          stopAutoplay();
        }
      },
      { threshold: 0.5 },
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      observer.disconnect();
      stopAutoplay();
    };
  }, [startAutoplay, stopAutoplay]);

  const onClickPrev = useCallback(() => {
    setActiveSlideIndex(getSlideIndex('prev'));
    resetAutoplay();
  }, [getSlideIndex]);

  const onClickNext = useCallback(() => {
    setActiveSlideIndex(getSlideIndex('next'));
    resetAutoplay();
  }, [getSlideIndex]);

  const swipeHandlers = useSwipeable({
    onSwipedRight: onClickPrev,
    onSwipedLeft: onClickNext,
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <SubHeaderSlider {...swipeHandlers}>
      <SubHeaderSlide ref={sliderRef}>
        <SubHeaderSlideImage>
          <Image
            alt={`${activeSlide?.title} industry`}
            src={activeSlide?.industryContent?.industryImage?.sourceUrl}
            width={300}
            height={350}
            priority={activeSlideIndex === 0}
            loading={activeSlideIndex === 0 ? 'eager' : 'lazy'}
          />
        </SubHeaderSlideImage>

        <SubHeaderSlideContent>
          <SubHeaderSlideNavigationButton
            onClick={onClickPrev}
            className="prev"
          >
            <span className="nav-text">{prevSlide?.title}</span>
            <SubHeaderSlideNavigationIcon>
              <IoIosArrowUp size={24} />
            </SubHeaderSlideNavigationIcon>
          </SubHeaderSlideNavigationButton>

          <SubHeaderSlideTitle>{activeSlide?.title}</SubHeaderSlideTitle>
          <SubHeaderSlideLabel>industry</SubHeaderSlideLabel>

          {!empty(activeSlide?.industryContent?.description) && (
            <SubHeaderSlideDescription>
              <JSXWithDynamicLinks
                HTML={activeSlide?.industryContent?.description}
              />
            </SubHeaderSlideDescription>
          )}

          <button
            className="underlined-link"
            onClick={() => setIsContactModal(true)}
          >
            Contact now
          </button>

          <SubHeaderSlideNavigationButton
            onClick={onClickNext}
            className="next"
          >
            <span className="nav-text">{nextSlide?.title}</span>
            <SubHeaderSlideNavigationIcon>
              <IoIosArrowDown size={24} />
            </SubHeaderSlideNavigationIcon>
          </SubHeaderSlideNavigationButton>
        </SubHeaderSlideContent>
      </SubHeaderSlide>

      <ModalWindow isOpen={isContactModal} setOpenModal={setIsContactModal}>
        <FormBox>
          <p className="contact-form-title">Let`s get in touch!</p>
          <ContactForm blockName="sub-header-industry-slider" />
        </FormBox>
      </ModalWindow>
    </SubHeaderSlider>
  );
};

export default SubHeaderIndustriesSlider;
