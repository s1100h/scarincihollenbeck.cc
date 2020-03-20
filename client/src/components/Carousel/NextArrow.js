import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons/faAngleDoubleRight'

const NextArrow = (props) => {
  const { nextImage, arrowSize } = props;
  return (
    <div onClick={nextImage} className="my-7" style={{fontSize: `${arrowSize}em`}}>
      <FontAwesomeIcon icon={faAngleDoubleRight} />
    </div>
  )
};

export default NextArrow;
