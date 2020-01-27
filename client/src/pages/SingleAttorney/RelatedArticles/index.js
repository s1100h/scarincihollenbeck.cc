import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';
import { addRandomKey } from '../../../utils/helpers';
import './index.scss';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <FaAngleDoubleRight
      className="featured-slider-arrow right"
      onKeyPress={onClick}
      role="button"
      tabIndex="0"
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

const RelatedArticles = (props) => {
  const { title, content } = props;

  const firstEightArticles = content.filter((p, i) => i < 8);
  const noImg = `${process.env.API_URL}/wp-content/themes/sh-law-theme/includes/assets/images/88a9c0b8e7ff2ed7ecff91cfdaa0b816.png`;

  const Articlesettings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    dots: true,
    adaptiveHeight: true,
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
          dots: false,
          arrows: false,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="mt-4 w-100 d-block attorney-news-slider">
      <h4 className="bg-light-gray">{title}</h4>
      {
        (firstEightArticles.length > 3) ? (
          <Slider {...Articlesettings}>
            {
              firstEightArticles.map((v) => (
                <div key={addRandomKey(v.title)} className="article-card">
                  <a href={v.link}>
                    <img src={(v.featuredImg) ? v.featuredImg : noImg} alt={v.title} width="230" className="img-thumbnail mx-auto d-block mt-3" />
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
                      <img src={(v.featuredImg) ? v.featuredImg : noImg} alt={v.title} width="230" className="img-thumbnail mt-3" />
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

RelatedArticles.propTypes = {
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object),
};

RelatedArticles.defaultProps = {
  title: '',
  content: [],
};

export default RelatedArticles;
