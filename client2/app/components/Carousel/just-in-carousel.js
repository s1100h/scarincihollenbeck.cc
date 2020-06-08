
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons/faNewspaper';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';

function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString();
};

function JustInCarousel(props) {
  const { post } = props;
  const {
    id, link, date, category, title, image, location,
  } = post;

  const publishDate = date;

  return (
    <div className={`JustInCarouselContent card carousel-slide level-${id}`}>
      <Link href={link}>
        <a>
          <p className="just-in-header">
            <span className="category">
              <FontAwesomeIcon icon={faNewspaper} />
              {' '}
              {category}
            </span>
            <span className="date">{(formatDate(publishDate) === 'Invalid Date') ? '' : formatDate(publishDate)}</span>
          </p>
          <div className="just-in-content">
            <h5>{title}</h5>
            <LazyLoad height={150}>
              <img rel="preconnect" src={image} alt={title} className="img-thumbnail d-block mx-auto" />
            </LazyLoad>
          </div>
          <hr />
          <p className="tag">
            <FontAwesomeIcon icon={faPlusCircle} />
            {' '}
            {location}
          </p>
        </a>
      </Link>
    </div>
  );
}

export default JustInCarousel;
