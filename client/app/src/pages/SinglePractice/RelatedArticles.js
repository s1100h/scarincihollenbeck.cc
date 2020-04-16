/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
const noImg = 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/no-image-found-diamond.png';

const RelatedArticles = (props) => {
  const { articles } = props;
  return (
    <div className="container related-article-container">
      <div className="row">
        {
          (articles) ? (
            articles.map((v) => (
              <div className="col-sm-12 col-md-6 mb-3 article-card" key={v.ID}>
                <a href={v.slug}>
                  <img src={(v.image) ? v.image : noImg} width="300" className="img-thumbnail mx-auto d-block" alt={v.title} />
                  <p className="small-excerpt text-center">{v.title}</p>
                </a>
              </div>
            ))
          ) : ''
        }
      </div>
    </div>
  );
};

RelatedArticles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
};

RelatedArticles.defaultProps = {
  articles: [],
};

export default RelatedArticles;
