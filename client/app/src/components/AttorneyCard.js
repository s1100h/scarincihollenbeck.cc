import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

import PropTypes from 'prop-types';

function AttorneyCard(props) {
  const {
    link, image, name, title, number, email, height, width,
  } = props;

  return (
    <div className="d-flex flex-row attorney-card" height={height}>
      <Link to={link}>
        <img rel="preload" src={image} alt={name} className="mr-1" style={{ width }} />
      </Link>
      <div className="mt-3 ml-3">
        <Link to={link}>
          <p className="text-uppercase red-title small-excerpt">
            <strong>{name}</strong>
          </p>
          <p className="mb-1 small-excerpt">
            <strong>
              {title}
            </strong>
          </p>
        </Link>
        <div className="small-excerpt">
          <FontAwesomeIcon icon={faPhone} />
          {' '}
          {number}
          <br />
          <FontAwesomeIcon icon={faEnvelope} />
          {' '}
          {email}
        </div>
      </div>
    </div>
  );
}

AttorneyCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  number: PropTypes.string,
  email: PropTypes.string,
  link: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

AttorneyCard.defaultProps = {
  image: '',
  name: '',
  title: '',
  number: '',
  email: '',
  link: '',
  height: '',
  width: '',
};

export default AttorneyCard;
