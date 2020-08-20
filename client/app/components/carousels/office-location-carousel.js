
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import Carousel from 'react-multi-carousel';

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

export default function OfficeLocationCarousel(props) {
  const { slides } = props;

  return (slides.length > 0) && (
    <Carousel responsive={responsive} infinite arrows swipeable>
      {slides.map((post) => (
        <div key={post.title} className="location-card mx-auto d-block border">
          <Link href="/location/[slug]" as={post.slug}>
            <a>
              <LazyLoad height={150}>
                <img rel="preconnect" src={post.featuredImg} alt={post.title} className="mw-100 mx-auto d-block" />
              </LazyLoad>
              <p className="red-title m-3 text-uppercase">
                <strong>{post.title}</strong>
              </p>
            </a>
          </Link>
        </div>
      ))}
    </Carousel>
  );
}
