import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { urlify } from '../../../utils/helpers';

function Results(props) {
  const { positions, loading } = props;
  console.log(loading);
  console.log(positions);

  return (
    <div className="w-100 border mt-0">
      <div className="container mt-2">
        <div className="row">
          {(loading === true) && (
            <div className="w-100 my-5">
              <h3 className="text-center red-title">Loading open career positions...</h3>
            </div>
          )}
          {(loading === false && positions.length < 1) && (
            <div className="w-100 my-5">
              <h3 className="text-center red-title">Sorry, no career position available...</h3>
            </div>
          )}
          {(loading === false) && positions.map((p) => (
            <div key={p.title} className="col-sm-12 col-md-4 mt-3 mb-2">
              <Link to={`/career/${urlify(p.title)}`}>
                <div className="card d-flex flex-row">
                  <div id="bg-red-block" />
                  <div className="my-2">
                    <h5 className="mb-0">{p.title}</h5>
                    <p className="my-0">
                      <strong>Location: </strong>
                      {p.positionLocation}
                    </p>
                    <p className="my-0">
                      <strong>Type: </strong>
                      {p.positionType}
                    </p>
                    <p className="my-0">
                      <strong>Start: </strong>
                      {p.startDate}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Results.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

Results.defaultProps = {
  positions: [],
  loading: true,
};

export default Results;
