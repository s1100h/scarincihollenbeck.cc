import { useId, forwardRef } from 'react';
import Slider from 'react-slick';

const SliderCommon = forwardRef((props, ref) => {
  const {
    componentsArr, numbersToShow, isButtons, isVertical,
  } = props;

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: numbersToShow || 3,
    slidesToScroll: 1,
    autoplay: true,
    verticalSwiping: isVertical || false,
    speed: 1000,
    autoplaySpeed: 3000,
    easing: 'ease-in',
    arrows: isButtons || false,
    vertical: true,
    adaptiveHeight: true,
    variableHeight: false,
  };
  const addKeyToComponent = componentsArr.map((component) => ({ ...component, key: useId() }));
  return (
    <Slider ref={ref} {...settings}>
      {addKeyToComponent.map((component) => component)}
    </Slider>
  );
});

export default SliderCommon;
