import React from 'react';
import PropType from 'prop-types';
import loadable from '@loadable/component';


// lazy load components
const AboutFirm = loadable(() => import('./AboutFirm'));
const TrendingStories = loadable(() => import('../../../components/TrendingStories'));
const Search = loadable(() => import('../../../components/Search'));


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
      <TrendingStories content={trending} />      
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
