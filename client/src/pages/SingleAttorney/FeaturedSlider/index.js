import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';
import './index.scss';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <FaAngleDoubleRight
      className="featured-slider-arrow right"
      role="button"
      tabIndex="0"
      onKeyPress={onClick}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <FaAngleDoubleLeft
      className="featured-slider-arrow left"
      role="button"
      tabIndex="0"
      onKeyPress={onClick}
      onClick={onClick}
    />
  );
};


const FeaturedSlider = (props) => {
  const { content, title } = props;

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    dots: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: 'fs-container',
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1690,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="mt-4 w-100 d-block attorney-news-slider">
      <h4 className="bg-light-gray">
        {
          (title === 'Awards')
            ? (
              <span>
                {title}
                {' '}
                -
                {' '}
                <a href="/awards/" className="small-excerpt position-relative award-link">Award Methodology</a>
              </span>
            )
            : title
        }
      </h4>
      {
        (content.length > 3) ? (
          <Slider {...settings}>
            {
              content.map((c) => <a href={c.link} key={c.title} className="mx-3"><img src={c.featuredImg} width="230" alt={c.title} className="img-fluid" /></a>)
            }
          </Slider>
        ) : (
          <div className="d-flex flex-row">
            {
              content.map((c) => <a href={c.link} key={c.title} className="mx-3"><img src={c.featuredImg} width="230" alt={c.title} className="img-fluid" /></a>)
            }
          </div>
        )
      }
    </div>
  );
};

NextArrow.propTypes = {
  onClick: PropTypes.func,
};

NextArrow.defaultProps = {
  onClick: () => {},
};

PrevArrow.propTypes = {
  onClick: PropTypes.func,
};

PrevArrow.defaultProps = {
  onClick: () => {},
};

FeaturedSlider.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

FeaturedSlider.defaultProps = {
  content: [],
  title: '',
};

export default FeaturedSlider;
