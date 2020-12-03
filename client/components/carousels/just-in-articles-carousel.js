import Link from 'next/link';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import useSWR from 'swr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons/faNewspaper';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import { blogArticlesQuery } from 'queries/home'
import { request } from 'graphql-request';
import SiteLoader from '../site-loader';
import ErrorMessage from '../error-message';
import styles from '../../styles/carousels/JustIn.module.css'

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

export default function JustInArticlesCarousel() {
  const { data: justInSlides, error: justInError } = useSWR(blogArticlesQuery(97), (query) =>
    request('https://wp.scarincihollenbeck.com/graphql', query)
  );

  if (justInError) return <ErrorMessage />
  if (!justInSlides) return <SiteLoader />

  return (
    <Carousel aria-label="carousel" responsive={jiResponsive} infinite arrows swipeable>
      {justInSlides.category.posts.edges.map((slide) => (
        <div key={slide.node.id} className={styles.JustInCarouselContent}>
          <Link href={slide.node.link}>
            <a>
              <p className={styles.justInHeader}>
                <span className={styles.category}>
                  <FontAwesomeIcon icon={faNewspaper} />
                  {' '}
                  {(slide.node.categories.nodes.length > 0) ? slide.node.categories.nodes[0].name : '' }
                </span>
                {(formatDate(slide.node.date) !== 'Invalid Date') && (
                  <span className={styles.date}>{formatDate(slide.node.date)}</span>
                )}  
              </p>
              <div className={styles.justInContent}>
                <h5>
                  <strong>
                    {slide.node.title}
                  </strong>
                </h5>
                <Image
                  src={(slide.node.image) ? slide.node.image.node.sourceUrl : (slide.node.featuredImage) ? slide.node.featuredImage.node.sourceUrl : 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/no-image-found-diamond.png'}
                  alt={slide.node.title}
                  width={300}
                  height={150}
                />
                <hr />
                <p className={styles.tag}>
                  <FontAwesomeIcon icon={faPlusCircle} />
                  {' '}
                  {slide.node.postsLocationSelection.locationSelection[0]}
                </p>
              </div>
            </a>
          </Link>
        </div>
      ))}     
    </Carousel>
  );
}
