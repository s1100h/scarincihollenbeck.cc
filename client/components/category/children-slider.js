import Link from 'next/link';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import styles from 'styles/LineHeader.module.css';
import styleFonts from 'styles/Fonts.module.css';
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

export default function CategoryChildrenSlider({ title, slides }) {
  return (
    <div className="mt-5 category-slider-content">
      <div className={styles.lineHeader}>
        <h3>{title}</h3>
      </div>
      <div className="mt-5">
        <Carousel
          aria-label="carousel"
          responsive={responsive}
          infinite
          arrows
          swipeable
        >
          {slides.map((slide) => (
            <div key={slide.title} className="pb-2 px-4">
              <Link href={slide.link.replace('https://scarincihollenbeck.com', '')}>
                <a>
                  <Image
                    src={slide.image || '/images/no-image-found-diamond.png'}
                    alt={slide.title}
                    width={300}
                    height={150}
                    layout="intrinsic"
                  />
                  <p
                    className={`${styleFonts.smallExcerpt} text-muted text-center`}
                  >
                    {limitTitleLength(slide.title)}
                  </p>
                </a>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
