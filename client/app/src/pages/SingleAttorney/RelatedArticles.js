import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/Carousel';
import { addRandomKey } from '../../utils/helpers';

const noImg = 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/no-image-found-diamond.png';

function RelatedArticles(props) {
  const { title, content } = props;

  return (
    <div className="mt-4 w-100 d-block attorney-news-slider">
      <div className="line-header mb-4">
        <h3>{title}</h3>
      </div>
      {
        (content.length > 3) ? (
          <div className="featured-article-attorney-container">
            <Carousel sliderType="LargeArticle" slides={content} />
          </div>
        ) : (
          <div className="container">
            <div className="row">
              { content.map((v) => (
                <div key={addRandomKey(v.title)} className="col-sm-12 col-md-4 article-card">
                  <a href={v.link}>
                    <img src={(v.featuredImg) ? v.featuredImg : noImg} alt={v.title} width="230" className="img-thumbnail mt-3" />
                    <h5 className="my-3 small-excerpt">{v.title}</h5>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )
      }
    </div>
  );
}

RelatedArticles.propTypes = {
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object),
};

RelatedArticles.defaultProps = {
  title: '',
  content: [],
};

export default RelatedArticles;
