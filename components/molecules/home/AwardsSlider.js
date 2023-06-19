import { CarouselStyled } from 'styles/Awards.style';
import Accolade from './Accolade';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1200 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1200, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 992, min: 576 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1,
  },
};

export default function AwardsSlider({ images }) {
  return (
    <CarouselStyled ssr aria-label="carousel" responsive={responsive} infinite arrows swipeable showDots renderButtonGroupOutside renderDotsOutside>
      {images.map((slide) => (
        <div key={slide.id} className="px-4">
          <Accolade image={slide.image} />
        </div>
      ))}
    </CarouselStyled>
  );
}
