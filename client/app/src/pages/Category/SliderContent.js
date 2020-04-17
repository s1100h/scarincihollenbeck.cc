import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/Carousel';

const SliderContent = (props) => {
  const { title, slides } = props;

  return (
    <div className="mt-5 category-slider-content">
      <div className="line-header">
        <h3>{title}</h3>
      </div>
      <Carousel sliderType="LargeArticle" slides={val.posts} />
    </div>
  );
};

SliderContent.propTypes = {
  title: PropTypes.string,
  slides: PropTypes.arrayOf(PropTypes.object),
};

SliderContent.defaultProps = {
  title: '',
  slides: [],
};

PrevArrow.propTypes = {
  onClick: PropTypes.func,
};

NextArrow.propTypes = {
  onClick: PropTypes.func,
};

NextArrow.defaultProps = {
  onClick: () => {},
};

PrevArrow.defaultProps = {
  onClick: () => {},
};

export default SliderContent;
