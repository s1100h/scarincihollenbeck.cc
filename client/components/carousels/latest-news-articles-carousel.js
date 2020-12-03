import Link from 'next/link'
import Image from 'next/image'
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
      {slides.map((slide) => (
        <div key={slide.node.id} className="pb-2 px-4">
          <Link href={slide.node.link}>
            <a>
              <Image
                src={(slide.node.image) ? slide.node.image.node.sourceUrl : (slide.node.featuredImage) ? slide.node.featuredImage.node.sourceUrl : 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/no-image-found-diamond.png'}
                alt={slide.node.title}
                width={300}
                height={150}
                layout="intrinsic"
              />
              <h5 className="mt-3 mb-2 text-center text-dark">
                <strong>
                  {(slide.node.categories.nodes.length > 0) ? slide.node.categories.nodes[0].name : '' }
                </strong>
              </h5>
              <p className={`${styleFonts.smallExcerpt} text-muted text-center`}>
                {limitTitleLength(slide.node.title)}
              </p>            
            </a>
          </Link>
        </div>
      ))}
    </Carousel>
  );
}
