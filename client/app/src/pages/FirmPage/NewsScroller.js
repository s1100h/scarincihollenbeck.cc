import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/Carousel';
import { addRandomKey } from '../../utils/helpers';

const noImg = 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/no-image-found-diamond.png';

function NewsScroller(props) {
  const { title, attorneysMentioned } = props;

  return (
    <div className="mt-4 w-100 d-block">
      <div className="line-header">
        <h3>
          Latest From
          {' '}
          {title}
        </h3>
      </div>

      {
        (attorneysMentioned.length > 3) ? <Carousel sliderType="LargeArticle" slides={attorneysMentioned} /> : (
          <div className="container">
            <div className="row">
              {
                attorneysMentioned.map((v) => (
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
}

NewsScroller.propTypes = {
  title: PropTypes.string,
  attorneysMentioned: PropTypes.arrayOf(PropTypes.object),
};

NewsScroller.defaultProps = {
  title: '',
  attorneysMentioned: [],
};

export default NewsScroller;
