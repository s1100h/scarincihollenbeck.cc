import React from 'react';
import PropTypes from 'prop-types';
import CarouselContainer from '../../components/Carousel';

const FullWidthContent = (props) => {
  const { sortedPosts, sortedLocations, end } = props;

  return (
    <div className="row">
      <div className="col-sm-12 mt-5 px-0">
        <div className="line-header"><h3>News & Events</h3></div>
      </div>
       <div className="col-sm-12 px-0 pt-5">
        {(sortedPosts.length >0 ) && <CarouselContainer sliderType="LargeArticle" slides={sortedPosts} />}
       </div>
      <div className="col-sm-12 mt-5 px-0">
        <div className="line-header"><h3>OUR OFFICES</h3></div>
      </div>
      <div className="col-sm-12 px-0 pt-5">
        <div className="location-carousel-container">
          {(sortedLocations.length >0 ) && <CarouselContainer sliderType="Location" slides={sortedLocations} />}
        </div>
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
