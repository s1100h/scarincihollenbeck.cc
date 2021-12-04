import Link from 'next/link';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AwardSlider = ({ awards }) => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
  };
  return (
    <>
      <Slider {...settings}>
        {awards.map(({ awardImage, awardLink, awardTitle }) => (
          <div key={awardTitle}>
            <a href={awardLink}>
              <img src={awardImage.sourceUrl} alt={awardTitle} width="auto" height="120" />
            </a>
          </div>
        ))}
      </Slider>
      <small>
        <Link scroll={false} href="/awards">
          <a>Award Methodology</a>
        </Link>
      </small>
    </>
  );
};

export default AwardSlider;
