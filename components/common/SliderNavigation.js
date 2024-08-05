import React, { forwardRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  SliderNavigationButton,
  SliderNavigationWrapper,
} from 'styles/Slider.style';

const SliderNavigation = forwardRef(({ prevRef, nextRef }, ref) => (
  <SliderNavigationWrapper className="navigation-container">
    <SliderNavigationButton className="custom-prev-button" ref={prevRef}>
      <IoIosArrowBack />
    </SliderNavigationButton>
    <SliderNavigationButton className="custom-next-button" ref={nextRef}>
      <IoIosArrowForward />
    </SliderNavigationButton>
  </SliderNavigationWrapper>
));

export default SliderNavigation;
