import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import lineStyles from 'styles/LineHeader.module.css';

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

export default function AwardSlider({ content }) {
  return (
    <div className="mt-4 w-100 d-block">
      <div className={lineStyles.lineHeader}>
        <h3>Awards</h3>
      </div>
      <div className="mx-auto mt-5">
        <Carousel aria-label="carousel" responsive={responsive} infinite arrows swipeable>
          {content.map((c) => (
            <div key={c.awardTitle} className="pb-2 px-4">
               <Image
                  src={c.awardImage.sourceUrl}
                  alt={c.awardTitle}
                  width={210}
                  height={210}
                  layout="intrinsic"
                  className="border px-1"
                />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="mx-auto my-1">
        <Link href="/awards">
          <a>
            Award Methodology
          </a>
        </Link>
      </div>
    </div>
  );
}
