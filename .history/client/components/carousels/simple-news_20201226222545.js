import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import fontStyles from 'styles/Fonts.module.css';
import { limitTitleLength } from 'utils/helpers';

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

export default function CarouselsSimpleNews({ slides }) {
  console.log(slides)
  return (
    <Carousel
      aria-label="carousel"
      responsive={responsive}
      infinite
      arrows
      swipeable
    >
      {slides.map((slide) => (
        <div
          key={slide.title}
          className="pb-2 px-4"
        >
          <Link href={slide.link || '/'}>
            <a>
              <Image
                src={slide.featuredImage
                  ? slide.featuredImage.node.sourceUrl
                  : '/images/no-image-found-diamond.png'}
                width={300}
                height={150}
                layout="intrinsic"
                alt={slide.title}
              />
              <p className={`${fontStyles.smallExcerpt} text-center text-dark`}>
                {limitTitleLength(slide.title)}
              </p>
            </a>
          </Link>
        </div>
      ))}
    </Carousel>
  );
}
