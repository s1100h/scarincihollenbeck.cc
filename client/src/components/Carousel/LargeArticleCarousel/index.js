
import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';


 function LargeArticleCarousel(props) {
  const { id, post } = props;
  const { link, image, title, category } = post

  console.log(post)

  return (
    <li className={`px-3 pt-5 pb-2 carousel-slide level-${id}`}>
      <a href={link}>
        <LazyLoad height={150}>
          <img rel="preconnect" src={image} alt={title} className="img-thumbnail mx-auto d-block" />
        </LazyLoad>
        <h5 className="mt-3 mb-2 text-center">{category}</h5>
        <p className="text-muted small-excerpt text-center">{title}</p>
      </a>
    </li>
  ) 
}

export default LargeArticleCarousel;