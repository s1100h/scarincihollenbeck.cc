
import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload'


function Item(props) {
  const { id, post } = props;

  return (
    <li className={`list-inline-item carousel-slide level-${id}`}>
      <LazyLoad height={150}>
        <img rel="preconnect" src={post.image} alt={post.title} className="mx-auto d-block my-2" />
      </LazyLoad>
      
      <h5>{post.title}</h5>     
    </li>
  ) 
}

export default Item