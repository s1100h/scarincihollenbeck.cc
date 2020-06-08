import React from 'react';
import PropType from 'prop-types';
import TrendingStories from '../../components/TrendingStories';
import Search from '../../components/Search';
import AboutFirm from '../../components/AboutFirm';

function Sidebar(props) {
  const {
    trending,
  } = props;

  return (
    <div>
      <Search />
      <AboutFirm />
      <TrendingStories title="Trending Stories" content={trending} />
    </div>
  );
}

Sidebar.propTypes = {
  trending: PropType.arrayOf(PropType.object),
};

Sidebar.defaultProps = {
  trending: [],
};

export default Sidebar;
