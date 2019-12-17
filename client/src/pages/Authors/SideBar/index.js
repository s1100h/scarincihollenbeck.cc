import React from 'react';
import PropType from 'prop-types';
import Search from '../../../components/Search';
import AboutAuthor from './AboutAuthor';
import AttorneyServices from './AttorneyServices';

const Sidebar = (props) => {
  const {
    searchTerm,
    onChange,
    onSubmit,
    bio,
    practices,
    allPractices,
    allAttorneys,
    allCategories,
  } = props;

  return (
    <div>
      <Search
        searchTerm={searchTerm}
        onChange={onChange}
        onSubmit={onSubmit}
        allPractices={allPractices}
        allAttorneys={allAttorneys}
        allCategories={allCategories}
      />
      <AboutAuthor bio={bio} />
      <AttorneyServices practices={practices} bio={bio} />
    </div>
  );
};

Sidebar.propTypes = {
  searchTerm: PropType.string,
  onChange: PropType.func,
  onSubmit: PropType.func,
  allPractices: PropType.arrayOf(PropType.object),
  allAttorneys: PropType.arrayOf(PropType.object),
  allCategories: PropType.arrayOf(PropType.object),
  practices: PropType.arrayOf(PropType.object),
  bio: PropType.arrayOf(PropType.object),
};

Sidebar.defaultProps = {
  searchTerm: '',
  onChange: () => {},
  onSubmit: () => {},
  allPractices: [],
  allAttorneys: [],
  allCategories: [],
  bio: [],
  practices: [],
};

export default Sidebar;
