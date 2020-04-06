import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons/faAngleDoubleLeft'


const PreviousArrow = (props) => {
  const { previousImage, arrowSize } = props;
  return (
    <div onClick={previousImage} className="my-7 site-arrows" style={{fontSize: `${arrowSize}em`}}>
      <FontAwesomeIcon icon={faAngleDoubleLeft} />
    </div>
  )
};

export default PreviousArrow;
