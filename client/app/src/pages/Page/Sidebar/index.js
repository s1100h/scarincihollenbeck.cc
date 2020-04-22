import React from 'react';
import PropType from 'prop-types';
import Search from '../../../components/Search';
import TrendingStories from '../../../components/TrendingStories';
import SubscriptionContent from './SubscriptionContent';

function Sidebar(props) {
  const {
    posts,
    hideSubscription,
    show,
    toggleModal,
    covidPage,
  } = props;

  return (
    <div>
      <Search />
      <TrendingStories title={(covidPage) ? 'Current Covid-19 News' : 'Trending Stories'} content={posts} />
      <SubscriptionContent
        toggleModal={toggleModal}
        hideSubscription={hideSubscription}
        show={show}
      />
    </div>
  );
}

Sidebar.propTypes = {
  posts: PropType.arrayOf(PropType.object),
  hideSubscription: PropType.func,
  show: PropType.bool,
  covidPage: PropType.bool,
  toggleModal: PropType.func,
};

Sidebar.defaultProps = {
  posts: [],
  hideSubscription: () => {},
  toggleModal: () => {},
  show: false,
  covidPage: false,
};

export default Sidebar;
