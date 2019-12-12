import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { addRandomKey } from '../../utils/helpers';
import './index.scss';

const NextArrow = (props) => {
  const { onClick } = props;
  return <i className="fas fa-angle-double-right featured-slider-arrow right" onKeyPress={onClick} role="button" tabIndex="0" onClick={onClick} />;
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return <i className="fas fa-angle-double-left featured-slider-arrow left" onKeyPress={onClick} role="button" tabIndex="0" onClick={onClick} />;
};

const NewsScroller = (props) => {
  const { attorneysMentioned, title } = props;

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
    <div className="mt-4 w-100 d-block">
      <h4 className="bg-light-gray">
        Latest From
        {' '}
        {title}
      </h4>
      {
        (attorneysMentioned.length > 3) ? (
          <Slider {...Articlesettings}>
            {
              attorneysMentioned.map(v => (
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
                attorneysMentioned.map(v => (
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

NewsScroller.propTypes = {
  title: PropTypes.string,
  attorneysMentioned: PropTypes.arrayOf(PropTypes.object),
};

NewsScroller.defaultProps = {
  title: '',
  attorneysMentioned: [],
};

export default NewsScroller;
