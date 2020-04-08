
import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload'


export default function MiniArticleCarousel(props) {
  const { id, post } = props;
  const { link, image, title, category } = post

  let postImg; 

  if(!image) {
    postImg = props.post.featuredImg;
  }

  return (
    <li className={`list-inline-item carousel-slide level-${id}`}>
      <a rel="preconnect" href={link}>
        <LazyLoad height={150}>
          <img rel="preconnect" src={image || postImg} alt={title} className="img-thumbnail mx-auto d-block" />
        </LazyLoad>
        <h5 className="mt-3 mb-2 text-center">{title}</h5>
      </a> 
    </li>
  ) 
}