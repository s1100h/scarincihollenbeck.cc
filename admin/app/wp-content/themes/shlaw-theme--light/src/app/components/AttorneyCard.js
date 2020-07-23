import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

export default function AttorneyCard(props) {
  const {
    link,
    image,
    name,
    title,
    number,
    email,
    height,
    width,
    type,
  } = props;

  return (
    <div className="d-flex flex-row attorney-card" height={height}>
        <a href={link}>
          <img rel="preload" src={image} alt={name} className="mr-1" style={{ width }} />
        </a>
      <div className="mt-3 ml-3">
          <a href={link}>
            <p className="text-uppercase red-title small-excerpt">
              <strong>{name}</strong>
            </p>
            <p className="mb-1 small-excerpt">
              <strong>
                {title}
              </strong>
            </p>
          </a>
        <div className="small-excerpt">
          <FontAwesomeIcon icon={faPhone} className="icon-w8px-h20px" />
          {' '}
          {number}
          <br />
          <FontAwesomeIcon icon={faEnvelope} className="icon-w8px-h20px" />
          {' '}
          {email}
        </div>
      </div>
    </div>
  );
}