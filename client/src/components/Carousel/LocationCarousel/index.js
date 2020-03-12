
import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';

function LocationCarousel(props) {
  const { id, post } = props;
  const { link, image, title } = post;

  return (
    <li className={`card w-376 mx-2 mb-2 carousel-slide level-${id}`}>
      <a href={link}>
        <LazyLoad height={150}>
          <img rel="preconnect" src={post.featuredImg} alt={post.title} className="card-img-top" />
        </LazyLoad>
        <p className="red-title m-3 text-uppercase">
          <strong>{title}</strong>
        </p>    
      </a>     
    </li>
  ) 
}

export default LocationCarousel;