import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/Carousel';

const HighlightReal = (props) => {
  const { highlightReal } = props;

  return (
    <div className="mt-4 w-100 d-block practice-news-list">
      <Carousel sliderType="LargeArticle" slides={highlightReal} />
    </div>
  );
};

HighlightReal.propTypes = {
  highlightReal: PropTypes.arrayOf(PropTypes.object),
};

HighlightReal.defaultProps = {
  highlightReal: [],
};

export default HighlightReal;
