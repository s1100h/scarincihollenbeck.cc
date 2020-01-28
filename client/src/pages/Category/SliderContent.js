import React from 'react';
import PropTypes from 'prop-types';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';
import Slider from 'react-slick';
import noImg from '../../images/no-image-found-diamond.png';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <FaAngleDoubleRight
      className="post-scroll post-scroll-right"
      role="button"
      tabIndex={0}
      onKeyDown={onClick}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <FaAngleDoubleLeft
      className="post-scroll post-scroll-left"
      tabIndex={0}
      onKeyDown={onClick}
      onClick={onClick}
    />
  );
};

const SliderContent = (props) => {
  const { title, slides } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    lazyLoad: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="mt-5">
      <div className="line-header">
        <h3>{title}</h3>
      </div>
      <Slider {...settings}>
        {
          slides.map((val) => (
            <div key={val.title} className="px-3 pt-5 pb-2">
              <a href={val.link}>
                <img src={val.image ? val.image : noImg} className="img-fluid" alt={val.title} />
                <h5 className="mt-3 mb-1">{val.title}</h5>
                <p className="text-muted small-excerpt">
                  {val.excerpt}
                </p>
              </a>
            </div>
          ))
        }
      </Slider>
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
