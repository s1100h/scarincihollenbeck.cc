import React, { forwardRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  SliderNavigationButton,
  SliderNavigationWrapper,
} from 'styles/Slider.style';

const SliderNavigation = forwardRef(({ prevRef, nextRef }, ref) => (
  <SliderNavigationWrapper className="navigation-container">
    <SliderNavigationButton
      className="custom-prev-button"
      ref={prevRef}
      aria-label="previous slide"
    >
      <IoIosArrowBack />
    </SliderNavigationButton>
    <SliderNavigationButton
      className="custom-next-button"
      ref={nextRef}
      aria-label="next slide"
    >
      <IoIosArrowForward />
    </SliderNavigationButton>
  </SliderNavigationWrapper>
));

export default SliderNavigation;
