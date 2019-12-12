import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const FeaturedAdmin = (props) => {
  const { img } = props;
  return (
    <span>
      <img src={img.url} className="img-fluid img-thumbnail" alt={img.altTag} />
    </span>
  );
};

FeaturedAdmin.propTypes = {
  img: PropTypes.objectOf(PropTypes.string),
};

FeaturedAdmin.defaultProps = {
  img: {},
};

export default FeaturedAdmin;
