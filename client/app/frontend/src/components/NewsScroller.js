import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import { sortByKey } from '../utils/helpers';

function NewsScroller(props) {
  const { title, articles } = props;
  const sortedPosts = sortByKey(articles, 'date');

  return (
    <div>
      <div className="line-header">
        <h3>{title}</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 pt-4">
            <Carousel sliderType="LargeArticle" slides={sortedPosts} />
          </div>
        </div>
      </div>
    </div>
  );
}

NewsScroller.propTypes = {
  title: PropTypes.string,
  articles: PropTypes.arrayOf(PropTypes.object),
};

NewsScroller.defaultProps = {
  title: '',
  articles: [],
};

export default NewsScroller;
