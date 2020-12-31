import Link from 'next/link';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import useSWR from 'swr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons/faNewspaper';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import { blogArticlesQuery } from 'queries/home';
import { request } from 'graphql-request';
import styles from 'styles/JustIn.module.css';
import SiteLoader from 'components/site-loader';
import ErrorMessage from 'components/error-message';
import { fetcher } from 'utils/helpers';

const jiResponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1865 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1865, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 675 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 675, min: 0 },
    items: 1,
  },
};

function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString();
}

export default function CarouselsJustIn() {
  const { data: justInSlides, error: justInError } = useSWR(`https://wp.scarincihollenbeck.com/wp-json/just-in/posts`, fetcher);

  if (justInError) return <ErrorMessage />;
  if (!justInSlides) return <SiteLoader />;

  return (
    <Carousel
      aria-label="carousel"
      responsive={jiResponsive}
      infinite
      arrows
      swipeable
    >
      {justInSlides.map((slide) => (
        <div key={slide.id} className={styles.JustInCarouselContent}>
          <Link href={slide.link}>
            <a>
              <p className={styles.justInHeader}>
                <span className={styles.category}>
                  <FontAwesomeIcon icon={faNewspaper} />
                  {' '}
                  {slide.category}
                </span>
                {formatDate(slide.date) !== 'Invalid Date' && (
                  <span className={styles.date}>
                    {formatDate(slide.date)}
                  </span>
                )}
              </p>
              <div className={styles.justInContent}>
                <h5>
                  <strong>{slide.title}</strong>
                </h5>
                <Image
                  src={slide.image ||'/images/no-image-found-diamond-750x350.png'}
                  alt={slide.title}
                  width={300}
                  height={150}
                />
                <hr />
                <p className={styles.tag}>
                  <FontAwesomeIcon icon={faPlusCircle} />
                  {' '}
                  {slide.location}
                </p>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </Carousel>
  );
}
