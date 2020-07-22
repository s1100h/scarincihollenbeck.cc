/* eslint-disable react/prop-types */
import React from 'react';


const AttorneyCard = (props) => {
  const { m } = props;
  return (
    <div className="attorney-card d-flex flex-row w-90">
      <a href={m.link}>
        <img src={m.better_featured_image} alt={m.title} className="w-75 mr-1" />
      </a>
      <div className="mt-3 ml--1">
        <a href={m.link}>
          <p className="text-uppercase red-title small-excerpt">
            <strong>{m.title}</strong>
          </p>
          <p className="mb-1 small-excerpt">
            <strong>
              {m.designation}
            </strong>
          </p>
        </a>
        <i className="fas fa-phone d-block small-excerpt">
          {' '}
          <span className="proxima-thin">
            {m.phone}
          </span>
        </i>
        <i className="fas fa-envelope d-block small-excerpt">
          {' '}
          <span className="proxima-thin">
            {m.email}
          </span>
        </i>
      </div>
    </div>
  );
};


export default AttorneyCard;
