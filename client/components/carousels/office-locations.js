/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import styles from 'styles/OfficeLocation.module.css';
import textStyles from 'styles/Text.module.css';

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

export default function CarouselsOfficeLocations({ slides }) {
  return (
    <Carousel
      aria-label="carousel"
      responsive={responsive}
      infinite
      arrows
      swipeable
    >
      {slides.map((post) => (
        <div
          key={post.title}
          className={`${styles.locationCard} mx-auto d-block border `}
        >
          <Link href={post.uri}>
            <a>
              <Image
                src={post.featuredImage.node.sourceUrl}
                alt={post.title}
                width={333}
                height={220}
                layout="intrinsic"
              />
              <p
                className={`${textStyles.redTitle} my-3 ml-2 text-uppercase`}
              >
                <strong>{post.title}</strong>
              </p>
            </a>
          </Link>
        </div>
      ))}
    </Carousel>
  );
}
