import React from 'react';
import PropType from 'prop-types';
import TrendingStories from '../../components/TrendingStories';
import Search from '../../components/Search';
import AboutFirm from '../../components/AboutFirm';

const SideBar = (props) => {
  const {
    trending,
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
