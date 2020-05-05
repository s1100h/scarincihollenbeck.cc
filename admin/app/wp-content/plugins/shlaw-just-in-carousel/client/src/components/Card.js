import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const {
    title,
    image,
    category,
    link,
    date,
    location,
  } = props;

  const publishDate = date;

  const formatDate = (dt) => {
    const d = new Date(dt);
    return d.toLocaleDateString();
  };

  return (
    <div className="JustInCarouselContent card">
      <a href={link}>
        <p className="just-in-header">
          <span className="category">
            <i className="far fa-newspaper" />
            {' '}
            {category}
          </span>
          <span className="date">{(formatDate(publishDate) === 'Invalid Date') ? '' : formatDate(publishDate)}</span>
        </p>
        <div className="just-in-content">
          <h5>{title}</h5>
          <img src={image} alt={title} className="img-thumbnail d-block mx-auto" />
        </div>
        <hr />
        <p className="tag">
          <i className="fas fa-plus-circle" />
          {' '}
          {location}
        </p>
      </a>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  category: PropTypes.string,
  link: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
};

Card.defaultProps = {
  title: '',
  image: '',
  category: '',
  link: '',
  date: '',
  location: '',
};

export default Card;
