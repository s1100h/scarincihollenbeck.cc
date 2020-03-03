import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const NextArrow = (props) => (
  <div onClick={props.nextImage} className="carousel-slide-arrow my-5">
    <FaAngleDoubleRight />
  </div>
);

export default NextArrow;
