import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import JustInCarousel from './just-in-carousel';
import LargeArticleCarousel from './large-article-carousel';
import LocationCarousel from './location-carousel';

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
    breakpoint: { max: 4000, min: 1865 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1865, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 675 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 675, min: 0 },
    items: 1,
  },
};

function renderSlides(type, slides) {
  if (type === 'LargeArticle') {
    return slides.map((post) => <LargeArticleCarousel id={post.title} key={post.title} post={post} />);
  }

  if (type === 'Location') {
    return slides.map((post) => <LocationCarousel id={parseInt(post.id, 10)} key={parseInt(post.id, 10)} post={post} />);
  }

  if (type === 'JustInCarousel') {
    return slides.map((post) => <JustInCarousel key={post.id} post={post} />);
  }
}

function CarouselContainer(props) {
  const { slides, sliderType } = props;
  console.log(props);
  return (slides.length > 0) && (
  // <Carousel
  //   responsive={(sliderType === 'JustInCarousel') ? jiResponsive : responsive}
  //   infinite
  //   arrows
  //   swipeable
  // >
  //   {(slides.length > 0) && renderSlides(sliderType, slides) }
  // </Carousel>
  <div> slides will go here...</div>
  );
}

export default CarouselContainer;
