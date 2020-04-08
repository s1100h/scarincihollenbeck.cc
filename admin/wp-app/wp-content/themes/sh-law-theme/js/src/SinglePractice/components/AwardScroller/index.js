import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { addRandomKey } from '../../../utils/helpers';
import noImg from '../../../no-image-found-diamond.png';
import './index.scss';

const HighlightNextArrow = (props) => {
  const { onClick } = props;
  return <i className="fas fa-angle-double-right featured-slider-arrow right" onKeyPress={onClick} role="button" tabIndex="0" onClick={onClick} />;
};

const HighlightPrevArrow = (props) => {
  const { onClick } = props;
  return <i className="fas fa-angle-double-left featured-slider-arrow left" onKeyPress={onClick} role="button" tabIndex="0" onClick={onClick} />;
};


const HighlightReal = (props) => {
  const { highlightReal } = props;

  const HighlightSettings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    nextArrow: <HighlightNextArrow />,
    prevArrow: <HighlightPrevArrow />,
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
    <div className="mt-4 w-100 d-block practice-news-list">
      <Slider {...HighlightSettings}>
        {
              highlightReal.map(v => (
                <div key={v.id} className="article-card">
                  <img src={(v.image) ? v.image : noImg} alt={v.title} width="212" className="img-thumbnail mx-auto d-block mt-3" />
                  <h5 className="my-3 text-center small-excerpt">{v.title}</h5>
                </div>
              ))
            }
      </Slider>
    </div>
  );
};

HighlightNextArrow.propTypes = {
  onClick: PropTypes.func,
};

HighlightNextArrow.defaultProps = {
  onClick: () => {},
};

HighlightPrevArrow.propTypes = {
  onClick: PropTypes.func,
};

HighlightPrevArrow.defaultProps = {
  onClick: () => {},
};

HighlightReal.propTypes = {
  highlightReal: PropTypes.arrayOf(PropTypes.object),
};

HighlightReal.defaultProps = {
  highlightReal: [],
};

export default HighlightReal;
