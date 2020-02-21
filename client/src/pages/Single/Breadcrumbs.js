import React from 'react';
import { FaCaretRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { makeTitle } from '../../utils/helpers';

const Breadcrumbs = (props) => {
  const { title } = props;

  const currentUrl = window.location.pathname.split('/');
  const filterUrl = currentUrl.filter((a) => a !== '');
  filterUrl.pop();

  return (
    <div className="mt-0 mb-3">
      <h6>
        <span>
          <a href={`${window.location.origin}`} className="red-title proxima-bold">
          HOME
          </a>
          <strong className="text-black mt-2 mx-2 proxima-bold">
            <FaCaretRight />
          </strong>
        </span>
        {filterUrl.map((url) => (
          <span key={url}>
            <a href={`${window.location.origin}/category/${url}`} className="red-title proxima-bold">
              {makeTitle(url)}
            </a>
            <strong className="text-black mt-2 mx-2 proxima-bold">
              <FaCaretRight />
            </strong>
          </span>
        ))}
        <span>
          <a href={`${window.location.href}`} className="red-title proxima-bold text-uppercase">
            <u>{title}</u>
          </a>
        </span>
      </h6>
    </div>
  );
};

Breadcrumbs.propTypes = {
  title: PropTypes.string,
};

Breadcrumbs.defaultProps = {
  title: '',
};

export default Breadcrumbs;
