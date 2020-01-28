import React from 'react';
import PropTypes from 'prop-types';

const TrendingStories = (props) => {
  const { content } = props;

  return (
    <div>
      Trending stories list will go here..
    </div>
  )
};

TrendingStories.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object)
};

TrendingStories.defaultProps = {
  content: []
};

export default TrendingStories;
