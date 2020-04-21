
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

function LocationCarousel(props) {
  const { post } = props;
  const { slug, featuredImg, title } = post;

  return (
    <div className="location-card mx-auto d-block border">
      <Link to={slug}>
        <LazyLoad height={150}>
          <img rel="preconnect" src={featuredImg} alt={title} className="mw-100 mx-auto d-block" />
        </LazyLoad>
        <p className="red-title m-3 text-uppercase">
          <strong>{title}</strong>
        </p>
      </Link>
    </div>
  );
}

LocationCarousel.propTypes = {
  post: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])),
};

LocationCarousel.defaultProps = {
  post: {},
};

export default LocationCarousel;
