import React from 'react';
import PropTypes from 'prop-types';

const TrendingStories = (props) => {
  const { content } = props;

  return (
    <div className="w-100 mt-4">
    <div className="sidebar-title">
      Trending Stories
    </div>
    <div className="off-white">
      {
        (content.length > 0) && content.map((p) => (
          <div key={p.ID} className="p-2">
            <a href={p.link} className="top-article">
              <h5 className="mb-0">{p.title}</h5>
              {(content.hasOwnProperty("author") || p.author === 'Scarinci Hollenbeck') ? <p className="mt-0 mb-3 ft-22">{p.author}</p> : <br/>}
            </a>
          </div>
        ))
      }
    </div>
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
