import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const ClientSlider = ({ clients }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    easing: 'ease-in',
  };
  return (
    <>
      <Slider {...settings}>
        {clients.map(({ clientImage, clientLink, clientTitle }) => (
          <div key={clientTitle}>
            <a href={clientLink}>
              <Image src={clientImage.sourceUrl} alt={clientTitle} width={300} height={300} />
            </a>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ClientSlider;
