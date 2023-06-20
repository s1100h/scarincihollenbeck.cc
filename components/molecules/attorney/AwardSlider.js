import Slider from 'react-slick';
import renderAward from 'components/atoms/micro-templates/Award';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AwardSlider = ({ awards }) => {
  const settings = {
    dots: true,
    infinite: true,
    // slidesToScroll: 1,
    // slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 5000,
    variableWidth: true,
    cssEase: 'linear',
    centerMode: true,
    buttons: false,
    // responsive: [
    //   {
    //     breakpoint: 1400,
    //     settings: {
    //       slidesToScroll: 1,
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToScroll: 1,
    //       slidesToShow: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 991,
    //     settings: {
    //       slidesToScroll: 1,
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 546,
    //     settings: {
    //       slidesToScroll: 1,
    //       slidesToShow: 2,
    //     },
    //   },
    // ],
  };

  return (
    <>
      <Slider {...settings}>
        {awards.map(({ awardImage, awardLink, awardTitle }) => (
          <div key={awardTitle}>{renderAward(awardLink, awardImage.sourceUrl, awardTitle, false)}</div>
        ))}
      </Slider>
    </>
  );
};

export default AwardSlider;
