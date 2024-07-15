import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  SliderNavigationButton,
  SliderNavigationWrapper,
} from 'styles/Slider.style';

const SliderNavigation = ({
  handleClickBtnNext,
  handleClickBtnPrev,
  currentIndex,
  isEnd,
}) => (
  <SliderNavigationWrapper>
    <SliderNavigationButton
      className="custom-prev-button"
      onClick={handleClickBtnPrev}
      disabled={currentIndex === 0}
    >
      <IoIosArrowBack />
    </SliderNavigationButton>
    <SliderNavigationButton
      className="custom-next-button"
      onClick={handleClickBtnNext}
      disabled={isEnd}
    >
      <IoIosArrowForward />
    </SliderNavigationButton>
  </SliderNavigationWrapper>
);

export default SliderNavigation;
