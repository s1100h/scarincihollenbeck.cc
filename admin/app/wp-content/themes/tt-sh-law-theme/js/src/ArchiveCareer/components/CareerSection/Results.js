import React from 'react';
import PropTypes from 'prop-types';
import DescriptionModal from '../DescriptionModal';
import { urlify } from '../../../utils/helpers';

const Results = (props) => {
   const { positions, setUrlHash } = props;

  return (
    <div className="w-100 border mt-0">
      <div className="container mt-2">
        <div className="row">
          {
            positions.map(p => (
              <div key={p.title} className="col-sm-12 col-md-4 mt-3 mb-2">
                <div
                  className="card d-flex flex-row"
                  type="button"
                  data-toggle="modal"
                  role="button"
                  tabIndex="0"
                  onClick={() => setUrlHash(urlify(p.title))}
                  onKeyPress={() => setUrlHash(p.title)}
                  data-target={`#${urlify(p.title)}`}
                >
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
                <DescriptionModal
                  id={urlify(p.title)}
                  title={p.title}
                  description={p.positionDescription}
                  contact={p.contact}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

Results.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.object),
  setUrlHash: PropTypes.func,
};

Results.defaultProps = {
  positions: [],
  setUrlHash: () => {},
};

export default Results;
