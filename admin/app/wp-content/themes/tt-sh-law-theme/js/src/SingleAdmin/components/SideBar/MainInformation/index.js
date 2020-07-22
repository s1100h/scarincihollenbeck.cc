import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const MainInformation = (props) => {
  const {
    name,
    title,
  } = props;

  return (
    <div className="mt-2">
      <h1>{name}</h1>
      <h2>{title}</h2>
    </div>
  );
};

MainInformation.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
};

MainInformation.defaultProps = {
  name: '',
  title: '',
};

export default MainInformation;
