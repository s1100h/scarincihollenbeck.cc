import React from 'react';
import Carousel from 'react-multi-carousel';
import PropTypes from 'prop-types';
import 'react-multi-carousel/lib/styles.css';
import JustInCarousel from './JustInCarousel';
import LargeArticleCarousel from './LargeArticleCarousel';
import LocationCarousel from './LocationCarousel';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const jiResponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function renderSlides(type, slides) {
  if (type === 'LargeArticle') {
    return slides.map((post) => <LargeArticleCarousel id={post.title} key={post.title} post={post} />);
  }

  if (type === 'Location') {
    return slides.map((post) => <LocationCarousel id={post.id} key={post.id} post={post} />);
  }

  if (type === 'JustInCarousel') {
    return slides.map((post) => <JustInCarousel key={post.id} post={post} />);
  }
}

function CarouselContainer(props) {
  const { slides, sliderType } = props;
  return (slides.length > 0) && (
  <Carousel
    responsive={(sliderType === 'JustInCarousel') ? jiResponsive : responsive}
    infinite
    arrows
    swipeable
  >
    {(slides.length > 0) && renderSlides(sliderType, slides) }
  </Carousel>
  );
}

CarouselContainer.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object),
  sliderType: PropTypes.string,
};

CarouselContainer.defaultProps = {
  slides: [],
  sliderType: '',
};

export default CarouselContainer;
