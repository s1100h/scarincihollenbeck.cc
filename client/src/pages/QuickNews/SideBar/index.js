import React from 'react';
import PropType from 'prop-types';
import Search from '../../../components/Search';
import AboutFirm from './AboutFirm';
import TrendingStories from './TrendingStories';

const Sidebar = (props) => {
  const {
    searchTerm,
    trending,
  } = props;

  return (
    <div>
      <Search />
      />
      <AboutFirm />
      <TrendingStories posts={trending} />      
    </div>
  );
};

Sidebar.propTypes = {
  trending: PropType.arrayOf(PropType.object),
};

Sidebar.defaultProps = {
  trending: [],
};

export default Sidebar;
