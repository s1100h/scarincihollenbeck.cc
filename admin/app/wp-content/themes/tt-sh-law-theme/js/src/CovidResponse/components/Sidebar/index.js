import React from 'react';
import PropType from 'prop-types';
import Search from './Search';
import ContactForm from '../ContactForm';
import { createMarkup, addRandomKey } from '../../../utils/helpers';

const formatDate = (currentDate) => {
  const date = new Date(currentDate);
  return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
};

const Sidebar = (props) => {
  const {
    searchTerm,
    onChange,
    onSubmit,
    allPractices,
    allAttorneys,
    allCategories,
    coronaPosts,
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
          Current COVID-19 News
        </div>
        <div className="off-white mh-500">
          {
            (coronaPosts.length > 0 ) ? coronaPosts.map(p => (
              <div key={addRandomKey(p.title)} className="p-2">
                <a href={p.link} className="top-article">
                  <h5 className="mb-0">{p.title}</h5>
                  <p className="my-0 ft-22">{formatDate(p.isoDate)}</p>
                  <p className="mt-0 mb-3 ft-22" dangerouslySetInnerHTML={createMarkup(p.source)} />
                </a>
              </div>
            )) : <div className="d-block mx-auto my-15 text-center"> News Feeds Loading...</div>
          }
        </div>
      </div>
      {/** GET THE LATEST FROM OUR ATTORNEYS */}
      <div className="w-100 mt-4">
        <div className="sidebar-title">
          Have a COVID-19 Question?
        </div>
        <div className="off-white mh-375 p-1">
          <ContactForm />
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
  coronaPosts: PropType.arrayOf(PropType.object),
};

Sidebar.defaultProps = {
  searchTerm: '',
  onChange: () => {},
  onSubmit: () => {},
  allPractices: [],
  allAttorneys: [],
  allCategories: [],
  coronaPosts: [],
};

export default Sidebar;
