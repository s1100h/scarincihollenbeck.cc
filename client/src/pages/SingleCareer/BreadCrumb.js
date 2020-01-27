import React from 'react';
import PropTypes from 'prop-types';


const BreadCrumb = (props) => {
  const { currentTitle } = props;
  return (
    <h6>
      <span>
        <a href={`${window.location.origin}`} className="red-title proxima-bold">HOME</a>
      </span>
      <strong className="text-black mt-2 mx-2 proxima-bold">
        <i className="fas fa-caret-right" />
      </strong>
      <span>
        <a href={`${window.location.origin}/careers`} className="red-title proxima-bold">CAREERS</a>
      </span>
      <strong className="text-black mt-2 mx-2 proxima-bold">
        <i className="fas fa-caret-right" />
      </strong>
      <span>
        <a href={`${window.location.href}`} className="red-title proxima-bold text-uppercase">{currentTitle}</a>
      </span>
    </h6>
  );
};

BreadCrumb.propTypes = {
  currentTitle: PropTypes.string,
};

BreadCrumb.defaultProps = {
  currentTitle: '',
};

export default BreadCrumb;
