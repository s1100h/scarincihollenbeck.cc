import React from 'react';
import PropType from 'prop-types';
import Search from './Search';
import TrendingNews from './TrendingNews';
import SubscriptionContent from './SubscriptionContent';

const Sidebar = (props) => {
  const {
    searchTerm,
    onChange,
    onSubmit,
    posts,
    hideSubscription,
    show,
    toggleModal,
    allPractices,
    allAttorneys,
    allCategories,
  } = props;

  return (
    <div>
      <Search
        searchTerm={searchTerm}
        onChange={onChange}
        allPractices={allPractices}
        allAttorneys={allAttorneys}
        allCategories={allCategories}
        onSubmit={onSubmit}
      />
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
  searchTerm: PropType.string,
  onChange: PropType.func,
  onSubmit: PropType.func,
  posts: PropType.arrayOf(PropType.object),
  hideSubscription: PropType.func,
  show: PropType.bool,
  toggleModal: PropType.func,
  allPractices: PropType.arrayOf(PropType.object),
  allAttorneys: PropType.arrayOf(PropType.object),
  allCategories: PropType.arrayOf(PropType.object),
};

Sidebar.defaultProps = {
  searchTerm: '',
  onChange: () => {},
  onSubmit: () => {},
  posts: [],
  hideSubscription: () => {},
  show: false,
  toggleModal: () => {},
  allPractices: [],
  allAttorneys: [],
  allCategories: [],
};

export default Sidebar;
