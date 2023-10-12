import Image from 'next/image';
import { useId } from 'react';
import { sizeWindow } from '../../../styles/sizeWindow.style';
import { SliderStyled } from '../../../styles/Post/Slider.style';

const ClientSlider = ({
  clients, imgSize, numbers, buttons,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: numbers || 4,
    slidesToScroll: 3,
    autoplay: true,
    speed: 500,
    easing: 'ease-in',
    arrows: buttons || false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: sizeWindow.lg,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: sizeWindow.md,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: sizeWindow.sm,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 445,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <SliderStyled {...settings}>
        {clients.map(({ clientImage, clientLink, clientTitle }) => (clientLink?.length > 0 ? (
          <a
            className="hovered-client"
            key={useId()}
            href={clientLink}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={clientImage.sourceUrl}
              alt={clientImage.mediaDetails.altText || clientTitle}
              width={imgSize?.width || 150}
              height={imgSize?.height || 150}
            />
          </a>
        ) : (
          <div key={useId()}>
            <Image
              src={clientImage.sourceUrl}
              alt={clientImage.mediaDetails.altText || clientTitle}
              width={imgSize?.width || 150}
              height={imgSize?.height || 150}
            />
          </div>
        )))}
      </SliderStyled>
    </>
  );
};

export default ClientSlider;
