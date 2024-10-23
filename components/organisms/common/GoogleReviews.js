import React, { useId } from 'react';
import empty from 'is-empty';
import {
  GoogleReviewsCard,
  GoogleReviewsHolder,
  GoogleReviewsSection,
} from 'styles/GoogleReviews.style';
import GoogleLogo from 'components/atoms/GoogleLogo';
import { BsStarFill } from 'react-icons/bs';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { ContainerDefault } from 'styles/Containers.style';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <IoIosArrowForward />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <IoIosArrowBack />
    </button>
  );
}

const GoogleReviews = ({ reviews, anchorId }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="reviews__arrow-next" />,
    prevArrow: <SamplePrevArrow className="reviews__arrow-prev" />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <GoogleReviewsSection className="margin-scroll" id={anchorId}>
      <ContainerDefault>
        <GoogleReviewsHolder>
          <Slider {...settings}>
            {!empty(reviews)
              && reviews.map((review) => (
                <GoogleReviewsCard
                  key={review.time}
                  href={review.author_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="review__header">
                    <div className="review__info">
                      <h4>{review.author_name}</h4>
                      <div className="review__rating">
                        {Array(review.rating)
                          .fill('')
                          .map((_, i) => (
                            <BsStarFill key={useId()} />
                          ))}
                      </div>
                    </div>
                    <div className="review__logo">
                      <GoogleLogo />
                    </div>
                  </div>
                  <div className="review__description">
                    <p>{review.text}</p>
                  </div>
                </GoogleReviewsCard>
              ))}
          </Slider>
        </GoogleReviewsHolder>
      </ContainerDefault>
    </GoogleReviewsSection>
  );
};

export default GoogleReviews;
