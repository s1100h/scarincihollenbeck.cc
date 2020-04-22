import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from '../../utils/helpers';

function CategoryHeader(props) {
  const { title, content } = props;

  return (
    <div className="bg-light-gray w-100">
      <div className="p-4">
        <h1 className="proxima-bold display-4 red-title mb-0 pb-0">
          {title}
        </h1>
        <hr className="mt-1 pt-1" />
        <div dangerouslySetInnerHTML={createMarkup(content)} className="proxima-regular" />
      </div>
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
