import React from 'react';
import PropTypes from 'prop-types';

const ProfileImage = (props) => {
  const { image, name } = props;
  return <img src={image.url} alt={name} className="img-fluid white-transparent-border" />;
};

ProfileImage.propTypes = {
  image: PropTypes.objectOf(PropTypes.string),
  name: PropTypes.string,
};

ProfileImage.defaultProps = {
  image: {},
  name: '',
};

export default ProfileImage;
