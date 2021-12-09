import Link from 'next/link';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClientSlider = ({ clients }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    easing: 'ease-in',
  };
  return (
    <>
      <Slider {...settings}>
        {clients.map(({ clientImage, clientLink, clientTitle }) => (
          <div key={clientTitle}>
            <a href={clientLink}>
              <img src={clientImage.sourceUrl} alt={clientTitle} width="auto" height="300" />
            </a>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ClientSlider;
