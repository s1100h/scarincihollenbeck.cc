import Image from 'next/legacy/image';
import Carousel from 'react-multi-carousel';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ClientSlider = ({ content }) => (
  <Carousel
    aria-label="carousel"
    responsive={responsive}
    infinite
    arrows
    swipeable
  >
    {content.map((slide) => (
      <div key={slide.id} className="pb-2 px-4">
        <Image
          src={slide.image || '/images/no-image-found-diamond.png'}
          width={300}
          height={300}
          layout="intrinsic"
          alt={slide.title}
        />
      </div>
    ))}
  </Carousel>
);

export default ClientSlider;
