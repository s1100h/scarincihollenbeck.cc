import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';
import { addRandomKey } from '../../../utils/helpers';
import noImg from '../../../images/no-image-found-diamond.png';
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
  const { content } = props;

  const firstEightArticles = content.filter((p, i) => i < 8);

  const Articlesettings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    dots: true,
    adaptiveHeight: true,
    lazyLoad: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
      {
        (firstEightArticles.length > 3) ? (
          <Slider {...Articlesettings}>
            {
              firstEightArticles.map((v) => (
                <div key={addRandomKey(v.title)} className="article-card">
                  <a href={v.slug}>
                    <img src={(v.image) ? v.image : noImg} alt={v.title} width="212" className="img-thumbnail mx-auto d-block mt-3" />
                    <h5 className="my-3 text-center small-excerpt">{v.title}</h5>
                  </a>
                </div>
              ))
            }
          </Slider>
        ) : (
          <div className="container">
            <div className="row">
              {
                firstEightArticles.map((v) => (
                  <div key={addRandomKey(v.title)} className="col-sm-12 col-md-4 article-card">
                    <a href={v.link}>
                      <img src={(v.image) ? v.image : noImg} alt={v.title} className="img-thumbnail mt-3" />
                      <h5 className="my-3 small-excerpt">{v.title}</h5>
                    </a>
                  </div>
                ))
              }
            </div>
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
};

FeaturedSlider.defaultProps = {
  content: [],
};

export default FeaturedSlider;
