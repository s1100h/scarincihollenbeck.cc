import Link from 'next/link';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import styleFonts from 'styles/Fonts.module.css';
import lineStyles from 'styles/LineHeader.module.css';
import { limitTitleLength } from 'utils/helpers';

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

export default function SingleAttorneyNonGraphQLSlider({ title, content }) {
  return (
    <div className="mt-4 w-100 d-block">
      <div className={lineStyles.lineHeader}>
        <h3>{title}</h3>
      </div>
      <div className="mx-auto mt-5">
        <Carousel
          aria-label="carousel"
          responsive={responsive}
          infinite
          arrows
          swipeable
        >
          {content.map((post) => (
            <div key={post.title} className="pb-2 px-4">
              <Link href={post.link}>
                <a>
                  <Image
                    src={
                      post.image
                        ? post.image
                        : post.featuredImg
                          ? post.featuredImg
                          : '/images/no-image-found-diamond.png'
                    }
                    alt={post.title}
                    width={300}
                    height={150}
                    layout="intrinsic"
                  />
                  <h5 className="mt-3 mb-2 text-center">
                    {post.category || ''}
                  </h5>
                  <p
                    className={`${styleFonts.smallExcerpt} text-muted text-center`}
                  >
                    {limitTitleLength(post.title)}
                  </p>
                </a>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
