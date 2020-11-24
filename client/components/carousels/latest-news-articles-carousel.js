
import LazyLoad from 'react-lazyload';
import Carousel from 'react-multi-carousel';
import styleFonts from 'styles/Fonts.module.css'

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

function limitTitleLength(title) {
  if (title.length > 200) {
    return `${title.substring(0, 200)} ...`;
  }

  return title;
}

export default function LatestNewsArticlesCarousel({ slides }) {
  return (slides.length > 0) && (
    <Carousel aria-label="carousel" responsive={responsive} infinite arrows swipeable>
      {slides.map((post) => (
        <div key={parseInt(post.node.id, 10)} className={`pb-2 px-4 carousel-slide level-${parseInt(post.node.id, 10)}`}>
          <a href={post.node.link}>
            <LazyLoad height={150}>
              <img rel="preconnect" src={(post.node.image) ? post.node.image.node.sourceUrl : (post.node.featuredImage) ? post.node.featuredImage.node.sourceUrl : 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/no-image-found-diamond.png'} alt={post.node.title} className="img-thumbnail mx-auto d-block" />
            </LazyLoad>
            <h5 className="mt-3 mb-2 text-center text-dark">
              <strong>
                {post.node.categories.nodes[0].name || '' }
              </strong>
            </h5>
            <p className={`${styleFonts.smallExcerpt} text-muted small-excerpt text-center`}>{limitTitleLength(post.node.title)}</p>
          </a>
        </div>
      ))}
    </Carousel>
  );
}
