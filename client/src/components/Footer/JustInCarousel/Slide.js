import React from 'react';
import LazyLoad from 'react-lazyload';

const Content = (props) => {
  const {title, image, category, link, date, location} = props;
  const publishDate = date;

  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString();
   };

  return (
    <div className="JustInCarouselContent card">
      <a href={link}>
        <p className="just-in-header">
          <span className="category"><i className="far fa-newspaper"/> {category}</span>
          <span className="date">{(formatDate(publishDate) === "Invalid Date") ? '' : formatDate(publishDate)}</span>
        </p>
        <div className="just-in-content">
          <h5>{title}</h5>
          <LazyLoad>
            <img src={image} alt={title} className="img-thumbnail d-block mx-auto" />
          </LazyLoad>
        </div>
        <hr /><p className="tag"><i className="fas fa-plus-circle" />{location}</p>
      </a>
    </div>
  );
};

export default Content;