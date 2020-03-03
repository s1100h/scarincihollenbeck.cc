import React from 'react';
import { FaAngleDoubleLeft } from 'react-icons/fa';

const PreviousArrow = (props) => (
  <div onClick={props.previousImage} className="carousel-slide-arrow my-5">
    <FaAngleDoubleLeft />
  </div>
);

export default PreviousArrow;