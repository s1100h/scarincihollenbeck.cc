import React from 'react';
import PropType from 'prop-types';
// lazy load components
import AboutFirm from './AboutFirm'
import TrendingStories from '../../../components/TrendingStories'
import Search from '../../../components/Search'

const SideBar = (props) => {
  const {
    trending
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
