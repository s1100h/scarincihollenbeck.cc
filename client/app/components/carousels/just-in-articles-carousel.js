
import LazyLoad from 'react-lazyload';
import Carousel from 'react-multi-carousel';
import useSWR from 'swr';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons/faNewspaper';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';

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

async function fetcher(...args) {
  const res = await fetch(...args);
  return res.json();
}

export default function JustInArticlesCarousel() {
  const { data: slides=[] } = useSWR(`https://admin.scarincihollenbeck.com/wp-json/just-in/posts`, fetcher);

  return (slides.length > 0) && (
    <Carousel responsive={jiResponsive} infinite arrows swipeable>
      {slides.map((post) => (
        <div key={parseInt(post.id, 10)} className={`JustInCarouselContent card carousel-slide level-${parseInt(post.id, 10)}`}>
          <a href={post.link}>
            <p className="just-in-header">
              <span className="category">
                <FontAwesomeIcon icon={faNewspaper} />
                {' '}
                {post.category}
              </span>
              <span className="date">{(formatDate(post.date) === 'Invalid Date') ? '' : formatDate(post.date)}</span>
            </p>
            <div className="just-in-content">
              <h5>{post.title}</h5>
              <LazyLoad height={150}>
                <img rel="preconnect" src={post.image} alt={post.title} className="img-thumbnail d-block mx-auto" />
              </LazyLoad>
            </div>
            <hr />
            <p className="tag">
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
