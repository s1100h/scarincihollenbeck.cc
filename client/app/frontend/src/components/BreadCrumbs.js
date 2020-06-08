import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import PropTypes from 'prop-types';

function BreadCrumbs(props) {
  const { breadCrumb, categorySlug } = props;

  return (
    <h6>
      <span>
        <a href={`${window.location.origin}`} className="red-title proxima-bold">HOME</a>
      </span>
      <strong className="text-black mt-2 mx-2 proxima-bold">
        <FontAwesomeIcon icon={faCaretRight} className="red-title" />
      </strong>
      { breadCrumb.map((val, indx) => ((indx < breadCrumb.length - 1) ? (
        <span key={val}>
          <span className="red-title proxima-bold text-uppercase">
            { (val === categorySlug) ? (<u>{categorySlug}</u>) : `${categorySlug}` }
          </span>
          <strong className="text-black mt-2 mx-2 proxima-bold">
            <FontAwesomeIcon icon={faCaretRight} className="red-title" />
          </strong>
        </span>
      ) : (
        <span key={val}>
          <span className="red-title proxima-bold">
            { (val === categorySlug) ? (<u>{val}</u>) : `${val}` }
          </span>
        </span>
      )))}
    </h6>
  );
}

BreadCrumbs.propTypes = {
  breadCrumb: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  categorySlug: PropTypes.string,
};

BreadCrumbs.defaultProps = {
  breadCrumb: [],
  categorySlug: '',
};

export default BreadCrumbs;
