import React from 'react';
import { FaAngleDoubleLeft } from 'react-icons/fa';

const PreviousArrow = (props) => {
  const { nextImage, arrowSize } = props;
  return (
    <div onClick={nextImage} className="my-7" style={{fontSize: `${arrowSize}em`}}>
      <FaAngleDoubleLeft />
    </div>
  )
};

export default PreviousArrow;
