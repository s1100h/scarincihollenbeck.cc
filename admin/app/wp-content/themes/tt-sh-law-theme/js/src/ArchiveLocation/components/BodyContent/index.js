import React from 'react';
import PropTypes from 'prop-types';
import { sortByKey } from '../../../utils/helpers';
import './index.scss';

const BodyContent = (props) => {
  const {
    attorneys,
    practices,
    map,
    title,
  } = props;

  const sortedAttorneys = sortByKey(attorneys, 'lastName');

  return (
    <div>
      <h4 className="bg-light-gray text-capitalize">
        {title}
        {' '}
        Office
      </h4>
      <div className="w-100">
        <iframe title={`${title} office`} src={map} className="w-100 h-300" frameBorder="0" allowFullScreen />
      </div>
      <h4 className="bg-light-gray text-capitalize mt-5">
        {title}
        {' '}
        Attorneys
      </h4>
      <div className="container article-container">
        <div className="row">
          {
          sortedAttorneys.map(v => (
            <div key={v.ID} className="col-sm-12 col-md-12 col-lg-6">
              <div className="attorney-card mb-2">
                <a href={v.link}>
                  <img src={v.image} alt={v.name} />
                </a>
                <div className="attorney-card-body">
                  <a href={v.link}>
                    <p className="text-uppercase red-title mb-0 mt-2 small-excerpt"><strong>{v.name}</strong></p>
                    <p className="mb-2 small-excerpt"><strong>{v.designation}</strong></p>
                    <i className="fas fa-phone d-block mt---5 small-excerpt">
                      <span className="proxima-thin">{` ${v.contact}`}</span>
                    </i>
                    <i className="fas fa-envelope d-block small-excerpt">
                      <span className="proxima-thin">{` ${v.email}`}</span>
                    </i>
                  </a>
                </div>
              </div>
            </div>
          ))
        }
        </div>
      </div>
      <h4 className="bg-light-gray mt-5">
        Services We Offer
      </h4>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <ul className="blue-title">
              {
                practices.map((val, indx) => ((practices.length / 2 > indx) ? (
                  <li key={val.ID}>
                    <a href={val.slug} className="proxima-bold blue-title">
                      <u>
                        {val.title}
                      </u>
                    </a>
                  </li>
                ) : ''))
              }
            </ul>
          </div>
          <div className="col-sm-12  col-md-6">
            <ul className="blue-title">
              {
                practices.map((val, indx) => ((practices.length / 2 <= indx) ? (
                  <li key={val.ID}>
                    <a href={val.slug} className="proxima-bold blue-title">
                      <u>
                        {val.title}
                      </u>
                    </a>
                  </li>
                ) : ''))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

BodyContent.propTypes = {
  attorneys: PropTypes.arrayOf(PropTypes.object),
  practices: PropTypes.arrayOf(PropTypes.object),
  map: PropTypes.string,
  title: PropTypes.string,
};

BodyContent.defaultProps = {
  attorneys: [],
  practices: [],
  map: '',
  title: '',
};

export default BodyContent;
