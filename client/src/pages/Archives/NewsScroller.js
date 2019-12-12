import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { sortByKey } from '../../utils/helpers';
import noImg from '../../images/no-image-found-diamond.png';
import './index.scss';


const PostsNextArrow = (props) => {
  const { onClick } = props;
  return <i className="fas fa-angle-double-right quick-news-scroll right" role="button" tabIndex={0} onKeyDown={onClick} onClick={onClick} />;
};

const PostsPrevArrow = (props) => {
  const { onClick } = props;
  return <i className="fas fa-angle-double-left quick-news-scroll left" role="button" tabIndex={0} onKeyDown={onClick} onClick={onClick} />;
};


const NewsScroller = (props) => {
  const { title, articles } = props;

  const QuickNewsScrollerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
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

  const sortedPosts = sortByKey(articles, 'date');

  return (
    <div>
      <div className="line-header">
        <h3>{title}</h3>
      </div>
      <Slider {...QuickNewsScrollerSettings}>
        {
          sortedPosts.map(v => (
            <div key={v.title} className="px-3 pt-5 pb-2">
              <a href={v.link}>
                <img src={v.image ? v.image : noImg} className="img-thumbnail mx-auto d-block" alt={v.title} />
                <h5 className="mt-3 mb-2 text-center small-excerpt proxima-bold">{v.title}</h5>                
              </a>
            </div>
          ))
        }
      </Slider>
    </div>    
  );
};

NewsScroller.propTypes = {
  title: PropTypes.string,
  articles: PropTypes.arrayOf(PropTypes.object),
  PostsNextArrow: PropTypes.func,
  PostsPrevArrow: PropTypes.func,
  
};

NewsScroller.defaultProps = {
  title: '',
  articles: [],
  PostsNextArrow: () => {},
  PostsPrevArrow: () => {},
};

PostsPrevArrow.propTypes = {
  onClick: PropTypes.func,
};

PostsPrevArrow.defaultProps = {
  onClick: () => {},
};

PostsNextArrow.propTypes = {
  onClick: PropTypes.func,
};

PostsNextArrow.defaultProps = {
  onClick: () => {},
};

export default NewsScroller;

