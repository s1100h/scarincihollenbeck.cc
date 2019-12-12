import React from 'react';
import PropType from 'prop-types';
import Search from '../Search';
import SHDiamond from '../../../images/sh-mini-diamond.png';

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
    <div className="col-sm-12 col-md-4 hide-print">
      <Search
        searchTerm={searchTerm}
        onChange={onChange}
        allPractices={allPractices}
        allAttorneys={allAttorneys}
        allCategories={allCategories}
        onSubmit={onSubmit}
      />
      {/** TOP ARTICLES */}
      <div className="w-100 mt-4">
        <div className="sidebar-title">
          New Sidebar area
        </div>
        <div className="off-white">
          New Sidebar stuff
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  searchTerm: PropType.string,
  onChange: PropType.func,
  onSubmit: PropType.func,
  allPractices: PropType.arrayOf(PropType.object),
  allAttorneys: PropType.arrayOf(PropType.object),
  allCategories: PropType.arrayOf(PropType.object),
};

Sidebar.defaultProps = {
  searchTerm: '',
  onChange: () => {},
  onSubmit: () => {},
  posts: [],
  allPractices: [],
  allAttorneys: [],
  allCategories: [],
};

export default Sidebar;
