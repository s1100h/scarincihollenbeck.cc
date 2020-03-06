import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader';
import Carousel from '../../components/Carousel';

const FullWidthContent = (props) => {
  const { sortedPosts, sortedLocations, end } = props;
  console.log('end', end)

  
  return (
    <div className="row">
       <div className="col-sm-12 px-0">
        <Carousel sliderType="LargeArticle" slides={sortedPosts} start={0} end={end} arrowSize={1} />
       </div>
      <div className="col-sm-12 mt-5 px-0">
        <div className="line-header"><h3>OUR OFFICES</h3></div>
      </div>
      <div className="col-sm-12 px-0 mt-5">
        <Carousel sliderType="LargeArticle" slides={sortedPosts} start={0} end={end} arrowSize={1} />
      </div>
    </div>
  );
};

FullWidthContent.propTypes = {
  sortedPosts: PropTypes.arrayOf(PropTypes.object),
  sortedLocations: PropTypes.arrayOf(PropTypes.object),
  end: PropTypes.number
};

FullWidthContent.defaultProps = {
  sortedPosts: [],
  sortedLocations: [],
  end: 0,
};

export default FullWidthContent;
