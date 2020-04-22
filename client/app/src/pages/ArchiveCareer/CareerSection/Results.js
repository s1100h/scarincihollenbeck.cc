import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { urlify } from '../../../utils/helpers';

function Results(props) {
  const { positions } = props;

  return (
    <div className="w-100 border mt-0">
      <div className="container mt-2">
        <div className="row">
          {
            positions.map((p) => (
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
            ))
          }
        </div>
      </div>
    </div>
  );
}

Results.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.object),
};

Results.defaultProps = {
  positions: [],
};

export default Results;
