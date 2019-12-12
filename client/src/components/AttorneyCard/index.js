import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './index.scss';

const AttorneyCard = (props) => {
  const { link, image, name, title, number, email, height, width } = props;

  const Card = styled.div`
    height: ${height};
    overflow: hidden;
    border: .9px solid #e9e9e9;
    width: 100%;
  `;

  return (
    <Card className="d-flex flex-row">
    <a href={link}>
      <img src={image} alt={name} className="mr-1" style={{width}} />
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
      <i className="fas fa-phone d-block small-excerpt">
        {' '}
        {number}
      </i>
      <i className="fas fa-envelope d-block small-excerpt">
        {' '}
        {email}
      </i>
    </div>
  </Card>
  );
};

AttorneyCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  number: PropTypes.string,
  email: PropTypes.string,
};

AttorneyCard.defaultProps = {
  image: '',
  name: '',
  title: '',
  number: '',
  email: '',
};

export default AttorneyCard;
