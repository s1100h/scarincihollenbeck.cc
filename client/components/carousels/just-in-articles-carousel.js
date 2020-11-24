
import LazyLoad from 'react-lazyload';
import Carousel from 'react-multi-carousel';
import useSWR from 'swr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons/faNewspaper';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import { fetcher } from 'utils/helpers';
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
  const { data: slides=[] } = useSWR(`https://wp.scarincihollenbeck.com/wp-json/just-in/posts`, fetcher);

  return (slides.length > 0) && (
    <Carousel aria-label="carousel" responsive={jiResponsive} infinite arrows swipeable>
      {slides.map((post) => (
        <div key={parseInt(post.id, 10)} className={styles.JustInCarouselContent}>
          <a href={post.link}>
            <p className={styles.justInHeader}>
              <span className={styles.category}>
                <FontAwesomeIcon icon={faNewspaper} />
                {' '}
                {post.category}
              </span>
              {(formatDate(post.date) !== 'Invalid Date') && (
                <span className={styles.date}>{formatDate(post.date)}</span>
              )}              
            </p>
            <div className={styles.justInContent}>
              <h5>
                <strong>
                  {post.title}
                </strong>
              </h5>
              <LazyLoad height={150}>
                <img rel="preconnect" src={post.image} alt={post.title} className="img-thumbnail d-block mx-auto" />
              </LazyLoad>
            </div>
            <hr />
            <p className={styles.tag}>
              <FontAwesomeIcon icon={faPlusCircle} />
              {' '}
              {post.location}
            </p>
          </a>
        </div>
      ))}
    </Carousel>
  );
}
