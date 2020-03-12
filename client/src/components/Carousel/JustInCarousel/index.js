
import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import { FaNewspaper, FaPlusCircle } from 'react-icons/fa';

const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString();
 };


function JustInCarousel(props) {
  const { id, post } = props;
  const { link, date, category, title, image, location } = post;

  const publishDate = date;

  return (
    <li className={`JustInCarouselContent card carousel-slide level-${id}`}>
      <a rel="preconnect" href={link}>
        <p className="just-in-header">
          <span className="category">
            <FaNewspaper />
            {' '}
            {category}
          </span>
          <span className="date">{(formatDate(publishDate) === "Invalid Date") ? '' : formatDate(publishDate)}</span>
        </p>
        <div className="just-in-content">
          <h5>{title}</h5>
          <LazyLoad height={150}>
            <img rel="preconnect" src={image} alt={title} className="img-thumbnail d-block mx-auto" />
          </LazyLoad>
        </div>
        <hr />
        <p className="tag">
          <FaPlusCircle />
          {' '}
          {location}
        </p>
      </a>    
    </li>
  ) 
}

export default JustInCarousel;