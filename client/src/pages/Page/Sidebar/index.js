import React from 'react';
import PropType from 'prop-types';
import Search from '../../../components/Search';
import TrendingNews from './TrendingNews';
import SubscriptionContent from './SubscriptionContent';

const Sidebar = (props) => {
  const {
    posts,
    hideSubscription,
    show,
    toggleModal,
  } = props;

  return (
    <div>
      <Search />
      <TrendingNews posts={posts} /> 
      <SubscriptionContent
        toggleModal={toggleModal}
        hideSubscription={hideSubscription}
        show={show}
      />
    </div>
  );
};

Sidebar.propTypes = {
  posts: PropType.arrayOf(PropType.object),
  hideSubscription: PropType.func,
  show: PropType.bool,
  toggleModal: PropType.func,
};

Sidebar.defaultProps = {
  posts: [],
  hideSubscription: () => {},
  show: false,
  toggleModal: () => {},
};

export default Sidebar;
