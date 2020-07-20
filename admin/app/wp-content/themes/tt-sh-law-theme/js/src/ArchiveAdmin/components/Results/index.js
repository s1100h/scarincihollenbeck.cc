/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Results = (props) => {
  const {
    admins,
  } = props;

  return (
    <div className="row w-100 h-50">
      {
        admins.map(val => (
          <div className="col-sm-12 col-md-3 ie-mh-20" key={val.ID}>
            <div className="attorney-card card rounded mb-3">
              <a href={val.link}>
                <span className="d-flex justify-content-sm-between">
                  <img className="mx-2 my-2 rounded w-50" src={val.image.smallUrl} alt={val.image.altTag} />
                  <i className="fas fa-external-link-square-alt fa-14x link-position my-1 mx-1" />
                </span>
                <p className="mb-0 mb-1 pt-0 mx-2 red-title">
                  <strong>{val.name}</strong>
                </p>
                <p className="mb-1 pb-1 mx-2 mb-2 small-excerpt">{val.Title}</p>
                <span className="border-top py-2 d-block">
                  <i className="fas fa-phone mx-3">
                    <span className="proxima-thin">
                      201-896-4100
                      {' '}
                      {val.phone_extension}
                    </span>
                  </i>
                  <i className="fas fa-envelope mx-3">
                    <span className="proxima-thin">
                      {' '}
                      {val.email}
                    </span>
                  </i>
                </span>
              </a>
            </div>
          </div>

        ))
      }
    </div>
  );
};

Results.propTypes = {
  admins: PropTypes.arrayOf(PropTypes.object),
};

Results.defaultProps = {
  admins: [],
};

export default Results;
