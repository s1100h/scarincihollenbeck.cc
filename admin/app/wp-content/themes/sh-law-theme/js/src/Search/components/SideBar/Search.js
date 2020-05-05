/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropType from 'prop-types';
import { addRandomKey } from '../../../utils/helpers';

const Search = (props) => {
  const {
    onSubmit,
    onChange,
    allPractices,
    allAttorneys,
    allCategories,
    t,
  } = props;
  return (
    <div className="w-100">
      <form>
        <label htmlFor="searchSite" className="w-100">
          <input name="s" type="search" id="searchSite" onChange={onChange} placeholder="Keyword..." className="form-control p-2" />
          <span className="sr-only">Search For Attorney</span>
        </label>
        {/* Related Practice */}
        <label htmlFor="searchPractice" className="d-block w-100">
          <select name="practice" value={t.practice} onChange={onChange} id="searchPractice" className="form-control p-2">
            <option>Filter by practice</option>
            {allPractices.map(p => <option value={p.title} id={p.ID} key={addRandomKey(p.title)}>{p.title}</option>) }
          </select>
          <span className="sr-only">Filter by Practice</span>
        </label>
        {/* Related Practices */}
        <label htmlFor="searchAttorney" className="d-block w-100">
          <select name="attorney" value={t.attorney} onChange={onChange} id="searchAttorney" className="form-control p-2">
            <option>Filter by attorney</option>
            {allAttorneys.map(p => <option value={p.title} id={p.id} key={addRandomKey(p.id.toString())}>{p.title}</option>)}
          </select>
          <span className="sr-only">Filtery by Attorney</span>
        </label>
        {/* Categories */}
        <label htmlFor="searchCategory" className="d-block w-100">
          <select name="category" value={t.category} onChange={onChange} id="searchCategory" className="form-control p-2">
            <option>Filter by category</option>
            {allCategories.map(p => ((p.name !== 'Uncategorized') ? <option value={p.name} id={addRandomKey(p.name)} key={addRandomKey(p.id.toString())}>{p.name}</option> : ''))}
          </select>
          <span className="sr-only">Filtery by Category</span>
        </label>
        <button type="button" className="btn btn-secondary proxima-bold px-5 mr-2">Clear</button>
        <button type="button" onClick={() => onSubmit()} className="btn btn-danger px-5">Search</button>
      </form>
    </div>
  );
};

Search.propTypes = {
  onChange: PropType.func,
  onSubmit: PropType.func,
  allPractices: PropType.arrayOf(PropType.object),
  allAttorneys: PropType.arrayOf(PropType.object),
  allCategories: PropType.arrayOf(PropType.object),
  t: PropType.objectOf(PropType.string),
};

Search.defaultProps = {
  onSubmit: () => {},
  onChange: () => {},
  allPractices: [],
  allAttorneys: [],
  allCategories: [],
  t: {},
};

export default Search;
