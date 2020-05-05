import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import './index.scss';

const NextArrow = (props) => {
  const { onClick } = props;
  return <i className="fas fa-angle-double-right featured-slider-arrow right" onKeyPress={onClick} role="button" tabIndex="0" onClick={onClick} />;
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return <i className="fas fa-angle-double-left featured-slider-arrow left" onKeyPress={onClick} role="button" tabIndex="0" onClick={onClick} />;
};


const FeaturedSlider = (props) => {
  const { content, title } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: 'fs-container',
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
              content.map(c => <a href={c.link} key={c.title} className="mx-3"><img src={c.featuredImg} width="230" alt={c.title} className="img-fluid" /></a>)
            }
          </Slider>
        ) : (
          <div className="d-flex flex-row">
            {
              content.map(c => <a href={c.link} key={c.title} className="mx-3"><img src={c.featuredImg} width="230" alt={c.title} className="img-fluid" /></a>)
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
