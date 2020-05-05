import React from 'react';
import PropType from 'prop-types';
import Search from './Search';
import AboutFirm from './AboutFirm';
import TrendingStories from './TrendingStories';

const Sidebar = (props) => {
  const {
    searchTerm,
    onChange,
    onSubmit,
    trending,
    allPractices,
    allAttorneys,
    allCategories,
  } = props;

  return (
    <div>
      <Search
        searchTerm={searchTerm}
        onChange={onChange}
        allPractices={allPractices}
        allAttorneys={allAttorneys}
        allCategories={allCategories}
        onSubmit={onSubmit}
      />
      <AboutFirm />
      <TrendingStories posts={trending} />      
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
  trending: PropType.arrayOf(PropType.object),
};

Sidebar.defaultProps = {
  searchTerm: '',
  onChange: () => {},
  onSubmit: () => {},
  allPractices: [],
  allAttorneys: [],
  allCategories: [],
  trending: [],
};

export default Sidebar;
