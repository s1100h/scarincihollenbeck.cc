import React from 'react';
import PropType from 'prop-types';
import Search from '../Search';


const Sidebar = (props) => {
  const {
    searchTerm,
    onChange,
    onSubmit,
    posts,
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
      {/** TOP ARTICLES */}
      <div className="w-100 mt-4">
        <div className="sidebar-title">
          Trending Stories
        </div>
        <div className="off-white">
          {
            (posts) ? posts.map(p => (
              <div key={p.ID} className="p-2">
                <a href={p.link} className="top-article">
                  <h5 className="mb-0">{p.title}</h5>
                  <p className="mt-0 mb-3 ft-22">{p.author}</p>
                </a>
              </div>
            )) : ''
          }
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  searchTerm: PropType.string,
  onChange: PropType.func,
  onSubmit: PropType.func,
  posts: PropType.arrayOf(PropType.object),
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
