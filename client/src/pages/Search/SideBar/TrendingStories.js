import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const TrendingStories = (props) => {
  const { posts } = props;

  return (
    <div className="w-100 mt-5">
      <div className="sidebar-title">
        Trending Stories
      </div>
      <div className="off-white">
        {
          (posts) ? posts.map(p => (
            <div key={p.title}  className="p-2">
              <a href={p.link} className="top-article">
                <h5 className="mb-0">{p.title}</h5>
                <p className="mt-0 mb-3 ft-22">{p.author}</p>
              </a>
            </div>
          )) : ''
        }
      </div>
    </div>
  );
};

TrendingStories.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

TrendingStories.defaultProps = {
  posts: [],
};

export default TrendingStories;
