import React from 'react';
import PropType from 'prop-types';
import Search from '../../../components/Search';
import AboutAuthor from './AboutAuthor';
import AttorneyServices from './AttorneyServices';

const SideBar = (props) => {
  const {
    bio,
    practices,
  } = props;

  return (
    <div>
      <Search />
      <AboutAuthor bio={bio} />
      <AttorneyServices practices={practices} bio={bio} />
    </div>
  );
};

SideBar.propTypes = {
  practices: PropType.arrayOf(PropType.object),
  bio: PropType.arrayOf(PropType.object),
};

SideBar.defaultProps = {
  bio: [],
  practices: [],
};

export default SideBar;
