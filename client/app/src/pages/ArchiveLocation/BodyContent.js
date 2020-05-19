import React from 'react';
import PropTypes from 'prop-types';
import AttorneyCard from '../../components/AttorneyCard';
import { sortByKey } from '../../utils/helpers';

function BodyContent(props) {
  const {
    attorneys,
    practices,
    map,
    title,
  } = props;

  const sortedAttorneys = sortByKey(attorneys, 'lastName');

  return (
    <div id="location-body">
      <h4 className="bg-light-gray text-capitalize">
        {title}
        {' '}
        Office
      </h4>
      <div className="w-100">
        <iframe rel="preconnect" title={`${title} office`} src={map} className="w-100 h-300" frameBorder="0" allowFullScreen />
      </div>
      <h4 className="bg-light-gray text-capitalize mt-5">
        {title}
        {' '}
        Attorneys
      </h4>
      <div className="container">
        <div className="row">
          {
          sortedAttorneys.map((m) => (
            <div key={m.ID} className="ccol-sm-12 col-md-12 col-lg-6 mb-2">
              <AttorneyCard
                link={m.link}
                image={m.image}
                name={m.name}
                title={m.designation}
                number={m.contact}
                email={m.email}
                height="109px"
                width="75%"
              />

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
}

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
