import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/Carousel';

function FeaturedSlider(props) {
  const { content, title } = props;

  return (
    <div className="mt-4 w-100 d-block attorney-news-slider">
      <div className="line-header mb-3">
        <h3>
          {title}
        </h3>
      </div>
      {(title === 'Awards') && <a href="/awards" className="text-center d-block proxima-bold red-title">Award Methodology</a>}
      <div className="container mt--1">
        <div className="row">
          <div className="col-sm-12">
            { (content.length > 3) ? <Carousel sliderType="LargeArticle" slides={content} /> : (
              <div className="d-flex flex-row">
                {content.map((c) => <a href={c.link} key={c.title} className="mx-3"><img src={c.featuredImg} width="230" alt={c.title} className="img-fluid" /></a>) }
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

FeaturedSlider.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

FeaturedSlider.defaultProps = {
  content: [],
  title: '',
};

export default FeaturedSlider;
