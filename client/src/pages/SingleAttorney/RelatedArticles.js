import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/Carousel';
import { addRandomKey } from '../../utils/helpers';
import noImg from '../../images/no-image-found-diamond.png';

const RelatedArticles = (props) => {
  const { title, content } = props;

  return (
    <div className="mt-4 w-100 d-block attorney-news-slider">
      <h4 className="bg-light-gray">{title}</h4>
      {
        (content.length > 3) ? <Carousel sliderType="MiniArticle" slides={content} start={0} end={3} arrowSize={1} /> : (
          <div className="container">
            <div className="row">
              { content.map((v) => (
                  <div key={addRandomKey(v.title)} className="col-sm-12 col-md-4 article-card">
                    <a href={v.link}>
                      <img src={(v.featuredImg) ? v.featuredImg : noImg} alt={v.title} width="230" className="img-thumbnail mt-3" />
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

RelatedArticles.propTypes = {
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object),
};

RelatedArticles.defaultProps = {
  title: '',
  content: [],
};

export default RelatedArticles;
