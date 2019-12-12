/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import noImg from '../../../images/no-image-found-diamond.png';
import './index.scss';


const RelatedArticles = (props) => {
  const { articles } = props; 
  return (
    <div className="container article-container">
      <div className="row">
        {
          (articles) ? (
            articles.map(v => (
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
