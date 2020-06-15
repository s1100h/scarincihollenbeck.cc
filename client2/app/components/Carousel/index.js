import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import JustInArticlesCarousel from './just-in-articles-carousel';
import LatestNewsArticlesCarousel from './latest-news-articles-carousel';
import OfficeLocationCarousel from './office-location-carousel';

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
    return slides.map((post) => <LatestNewsArticlesCarousel id={post.title} key={post.title} post={post} />);
  }

  if (type === 'Location') {
    return slides.map((post) => <OfficeLocationCarousel id={parseInt(post.id, 10)} key={parseInt(post.id, 10)} post={post} />);
  }

  if (type === 'JustInCarousel') {
    return slides.map((post) => <JustInArticlesCarousel key={post.id} post={post} />);
  }
}

function CarouselContainer(props) {  
  const { sliderType, slides } = props;
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

export default CarouselContainer;
