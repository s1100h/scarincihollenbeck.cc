import React from 'react';
import PropType from 'prop-types';
import loadable from '@loadable/component';


// lazy load components
const AboutFirm = loadable(() => import('./AboutFirm'));
const TrendingStories = loadable(() => import('../../../components/TrendingStories'));
const Search = loadable(() => import('../../../components/Search'));

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
