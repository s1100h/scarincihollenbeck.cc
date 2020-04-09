
import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';

function LocationCarousel(props) {
  const { id, post } = props;
  const { link, image, title } = post;

  return (
    <div className="location-card mx-auto d-block border">
      <a href={link}>
        <LazyLoad height={150}>
          <img rel="preconnect" src={post.featuredImg} alt={post.title} className="mw-100 mx-auto d-block"/>
        </LazyLoad>
        <p className="red-title m-3 text-uppercase">
          <strong>{title}</strong>
        </p>    
      </a>     
    </div>
  ) 
}

export default LocationCarousel;