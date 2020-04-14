import React, { Component } from 'react';
import { addRandomKey } from '../utils/helpers';

// create url for search query
// handle complex search sidebar form
export const sumbitSearchForm = (terms) => {
  const {
    keyword,
    practice,
    attorney,
    category,
  } = terms;

  const formatUrl = (str) => str.toLowerCase().replace(/\s/g, '+');
  const results = `${(keyword !== undefined) ? keyword : ''} ${(practice !== undefined) ? practice : ''} ${(attorney !== undefined) ? attorney : ''} ${(category !== undefined) ? category : ''}`;
  const url = results.trim().replace(/[^\w\s]/gi, '');

  return `/s?=${formatUrl(url)}`;
};


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      attorneys: [],
      practices: [],
      categories: [],
      t: {
        keyword: '',
        attorney: '',
        practice: '',
        category: '',
      },
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const { value, name } = event.target;
    const { t } = this.state;
    t[name] = value;
    this.setState({ t });
  }

  onSubmit() {
    const { t } = this.state;
    window.location = sumbitSearchForm(t);
  }

  componentDidMount() { 
    fetch(`${process.env.CACHED_URL}/cached/search-options`)
      .then((res) => res.json())
      .then((data) => {
        const {
          attorneys,
          categories,
          practices
        } = data;

        // set data from fetch requst to state
        this.setState({
          attorneys,
          categories,
          practices
        });
      });
  }

  render() {
    const {
      attorneys,
      categories,
      practices,
      searchTerm,
    } = this.state;
    
    return (
      <div className="w-100">
        <form>
          <label htmlFor="searchSite" className="w-100">
            <input name="keyword" type="search" id="searchSite" value={searchTerm || ''} placeholder="Keyword..." className="form-control p-2" onChange={this.onChange} />
            <span className="sr-only">Search Site</span>
          </label>
          {/* Related Practice */}
          <label htmlFor="searchPractice" className="d-block w-100">
            <select name="practice" id="searchPractice" className="form-control p-2">
              <option defaultValue="Filter by practice">Filter by practice</option>
              {practices.map((p) => <option value={p.title || ''} key={addRandomKey(p.title)} onChange={this.onChange}>{p.title}</option>) }
            </select>
            <span className="sr-only">Filter by Practice</span>
          </label>
          {/* Related Practices */}
          <label htmlFor="searchAttorney" className="d-block w-100">
            <select name="attorney" id="searchAttorney" className="form-control p-2">
              <option defaultValue="Filter by attorney">Filter by attorney</option>
              {attorneys.map((p) => <option value={p.title || ''} key={addRandomKey(p.title)} onChange={this.onChange}>{p.title}</option>) }
            </select>
            <span className="sr-only">Filtery by Attorney</span>
          </label>
          {/* Categories */}
          <label htmlFor="searchCategory" className="d-block w-100">
            <select name="category" id="searchCategory" className="form-control p-2">
              <option defaultValue="Filter by category">Filter by category</option>
              {categories.map((p) => ((p.title !== 'Uncategorized') ? <option value={p.title || ''} key={addRandomKey(p.title)} onChange={this.onChange}>{p.title}</option> : '')) }
            </select>
            <span className="sr-only">Filtery by Category</span>
          </label>
          <button type="button" className="btn btn-secondary proxima-bold px-5 my-2 mr-2">Clear</button>
          <button type="button" onClick={() => this.onSubmit()} className="btn btn-danger my-2 px-5">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
