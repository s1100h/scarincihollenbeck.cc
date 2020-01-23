import React from 'react';
import PropType from 'prop-types';
import Search from '../../../components/Search';
import AboutFirm from './AboutFirm';
import TrendingStories from './TrendingStories';

const SideBar = (props) => {
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
      <Search />
      <AboutFirm />
      <TrendingStories posts={trending} />      
    </div>
  );
};

SideBar.propTypes = {
  trending: PropType.arrayOf(PropType.object),
};

SideBar.defaultProps = {
  trending: [],
};

export default SideBar;
