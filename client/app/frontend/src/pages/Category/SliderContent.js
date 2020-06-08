import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/Carousel';

function SliderContent(props) {
  const { title, slides } = props;

  return (
    <div className="mt-5 category-slider-content">
      <div className="line-header">
        <h3>{title}</h3>
      </div>
      <div className="mt-5">
        <Carousel sliderType="LargeArticle" slides={slides} />
      </div>
    </div>
  );
}

SliderContent.propTypes = {
  title: PropTypes.string,
  slides: PropTypes.arrayOf(PropTypes.object),
};

SliderContent.defaultProps = {
  title: '',
  slides: [],
};

export default SliderContent;
