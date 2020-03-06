import React from 'react';
import PropType from 'prop-types';

import AboutFirm from './AboutFirm';
import TrendingStories from '../../../components/TrendingStories';
import Search from '../../../components/Search';

const Sidebar = (props) => {
  const {
    trending,
  } = props;

  return (
    <div>
      <Search />
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
