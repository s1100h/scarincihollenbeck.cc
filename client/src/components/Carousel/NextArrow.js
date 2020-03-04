import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const NextArrow = (props) => {
  const { nextImage, arrowSize } = props;
  return (
    <div onClick={nextImage} className="my-7" style={{fontSize: `${arrowSize}em`}}>
      <FaAngleDoubleRight />
    </div>
  )
};

export default NextArrow;
