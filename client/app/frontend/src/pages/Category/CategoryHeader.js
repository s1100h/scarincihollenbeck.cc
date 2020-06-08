import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from '../../utils/helpers';

function CategoryHeader(props) {
  const { title, content } = props;

  return (
    <div className="w-100" id="category-header">
      <h1 className="proxima-bold red-title mb-2">
        {title}
      </h1>
      <div dangerouslySetInnerHTML={createMarkup(content)} className="proxima-regular" />
      <hr className="mt-1 pt-1" />
    </div>
  );
}


CategoryHeader.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

CategoryHeader.defaultProps = {
  title: '',
  content: '',
};

export default CategoryHeader;
