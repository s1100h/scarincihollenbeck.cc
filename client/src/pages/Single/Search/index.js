/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { addRandomKey } from '../../../utils/helpers';
import PropType from 'prop-types';


const Search = (props) => {
  const {
    onSubmit,
    onChange,
    allPractices,
    allAttorneys,
    allCategories,
  } = props;

  const sAllPractices = [...allPractices.map(m => m.title)];
  
  return (
    <div className="w-100">
      <form onChange={onChange}>
        <label htmlFor="searchSite" className="w-100">
          <input name="keyword" type="search" id="searchSite" placeholder="Keyword..." className="form-control p-2" />
          <span className="sr-only">Search For Attorney</span>
        </label>
        {/* Related Practice */}
        <label htmlFor="searchPractice" className="d-block w-100">
          <select name="practice" id="searchPractice" className="form-control p-2">
            <option defaultValue="Filter by practice">Filter by practice</option>
            {
              sAllPractices.map(p => <option value={p} key={addRandomKey(p)}>{p}</option>)
            }
          </select>
          <span className="sr-only">Filter by Practice</span>
        </label>
        {/* Related Practices */}
        <label htmlFor="searchAttorney" className="d-block w-100">
          <select name="attorney" id="searchAttorney" className="form-control p-2">
            <option defaultValue="Filter by attorney">Filter by attorney</option>
            {
              allAttorneys.map(p => <option value={p.title} key={addRandomKey(p.title)}>{p.title}</option>)
            }
          </select>
          <span className="sr-only">Filtery by Attorney</span>
        </label>
        {/* Categories */}
        <label htmlFor="searchCategory" className="d-block w-100">
          <select name="category" id="searchCategory" className="form-control p-2">
            <option defaultValue="Filter by category">Filter by category</option>
            {
              allCategories.map(p => ((p.name !== 'Uncategorized') ? <option value={p.name} key={addRandomKey(p.name)}>{p.name}</option> : ''))
            }
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
};

Search.defaultProps = {
  onSubmit: () => {},
  onChange: () => {},
  allPractices: [],
  allAttorneys: [],
  allCategories: [],
};

export default Search;
