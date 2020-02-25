import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import LazyLoad from 'react-lazyload';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';
import noImg from '../../images/no-image-found-diamond.png';

const PostsNextArrow = (props) => {
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

const PostsPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <FaAngleDoubleLeft
      className="post-scroll post-scroll-left"
      role="button"
      tabIndex={0}
      onKeyDown={onClick}
      onClick={onClick}
    />
  );
};

const LocationsNextArrow = (props) => {
  const { onClick } = props;
  return (
    <FaAngleDoubleRight
      className="post-scroll location-scroll-right"
      role="button"
      tabIndex={0}
      onKeyDown={onClick}
      onClick={onClick}
    />
  );
};

const LocationsPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <FaAngleDoubleLeft
      className="post-scroll location-scroll-left"
      role="button"
      tabIndex={0}
      onKeyDown={onClick}
      onClick={onClick}
    />
  );
};


const FullWidthContent = (props) => {
  const { sortedPosts, sortedLocations } = props;

  const postSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    lazyLoad: true,
    nextArrow: <PostsNextArrow />,
    prevArrow: <PostsPrevArrow />,
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

  const locationSettings = {
    dots: true,
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    lazyLoad: true,
    nextArrow: <LocationsNextArrow />,
    prevArrow: <LocationsPrevArrow />,
    responsive: [
      {
        breakpoint: 1690,
        settings: {
          slidesToShow: 3,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  
  return (
    <div className="row">
       <div className="col-sm-12 px-0">
              <Slider {...postSettings}>
                {
                sortedPosts.map(v => (
                  <div key={v.title} className="px-3 pt-5 pb-2">
                    <a href={v.link}>
                      <LazyLoad width={300} offset={100}>
                        <img src={v.image ? v.image : noImg} className="img-thumbnail mx-auto d-block" alt={v.title} />
                      </LazyLoad>                      
                      <h5 className="mt-3 mb-2 text-center">{v.category}</h5>
                      <p className="text-muted small-excerpt text-center">
                        {v.title}
                      </p>
                    </a>
                  </div>
                ))
              }
              </Slider>
            </div>
      <div className="col-sm-12 mt-5 px-0">
        <div className="line-header"><h3>OUR OFFICES</h3></div>
      </div>
      <div className="col-sm-12 px-0 mt-5">
        <Slider {...locationSettings}>
          {sortedLocations.map((l) => (
            <div className="card w-95 mb-2" key={l.id}>
              <a href={l.slug}>                
                <LazyLoad width={300} offset={100}>
                  <img src={l.featuredImg} alt={l.title} className="card-img-top" />
                </LazyLoad>   
                <p className="red-title m-3">
                  <strong>
                    {` ${l.title.toUpperCase()}`}
                  </strong>
                </p>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

FullWidthContent.propTypes = {
  sortedPosts: PropTypes.arrayOf(PropTypes.object),
  sortedLocations: PropTypes.arrayOf(PropTypes.object),
};

FullWidthContent.defaultProps = {
  sortedPosts: [],
  sortedLocations: [],
};

PostsNextArrow.propTypes = {
  onClick: PropTypes.func,
};

PostsPrevArrow.propTypes = {
  onClick: PropTypes.func,
};

LocationsNextArrow.propTypes = {
  onClick: PropTypes.func,
};

LocationsPrevArrow.propTypes = {
  onClick: PropTypes.func,
};


PostsNextArrow.defaultProps = {
  onClick: () => {},
};

PostsPrevArrow.defaultProps = {
  onClick: () => {},
};

LocationsNextArrow.defaultProps = {
  onClick: () => {},
};

LocationsPrevArrow.defaultProps = {
  onClick: () => {},
};

export default FullWidthContent;
