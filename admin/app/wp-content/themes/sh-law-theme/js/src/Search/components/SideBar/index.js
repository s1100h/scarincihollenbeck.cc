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
    t,
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
        t={t}
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
  t: PropType.objectOf(PropType.string),
};

Sidebar.defaultProps = {
  searchTerm: '',
  onChange: () => {},
  onSubmit: () => {},
  allPractices: [],
  allAttorneys: [],
  allCategories: [],
  trending: [],
  t: {},
};

export default Sidebar;
