import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/Carousel';
import { addRandomKey } from '../../utils/helpers';
const noImg = 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/no-image-found-diamond.png';

const FeaturedSlider = (props) => {
  const { content } = props;

  
  const firstEightArticles = content.filter((p, i) => i < 8);



  return (
    <div className="mt-4 w-100 d-block practice-news-list">
      {
        (firstEightArticles.length > 3) ? <Carousel sliderType="LargeArticle" slides={firstEightArticles} /> : (
          <div className="container">
            <div className="row">
              {
                firstEightArticles.map((v) => (
                  <div key={addRandomKey(v.title)} className="col-sm-12 col-md-4 article-card">
                    <a href={v.link}>
                      <img src={(v.image) ? v.image : noImg} alt={v.title} className="img-thumbnail mt-3" />
                      <h5 className="my-3 small-excerpt">{v.title}</h5>
                    </a>
                  </div>
                ))
              }
            </div>
          </div>
        )
      }
    </div>
  );
};

FeaturedSlider.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
};

FeaturedSlider.defaultProps = {
  content: [],
};

export default FeaturedSlider;
