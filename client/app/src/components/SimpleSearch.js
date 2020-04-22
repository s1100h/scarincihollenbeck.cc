import React, { Component } from 'react';

// create url for search query
// handle complex search sidebar form
function sumbitSearchForm(term) {
  const formatUrl = (str) => str.toLowerCase().replace(/\s/g, '+');

  return `/s?=${formatUrl(term)}`;
};


class SimpleSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const { value } = event.target;
    const searchTerm = value;
    this.setState({ searchTerm });
  }

  onSubmit() {
    const { searchTerm } = this.state;
    window.location = sumbitSearchForm(searchTerm);
  }

  render() {
    const {

      searchTerm,
    } = this.state;

    return (
      <div className="w-100">
        <form>
          <label htmlFor="searchSite" className="w-100">
            <input name="keyword" type="search" id="searchSite" value={searchTerm || ''} placeholder="Keyword..." className="form-control p-2" onChange={this.onChange} />
            <span className="sr-only">Search Site</span>
          </label>
          <button type="button" onClick={() => this.onSubmit()} className="btn btn-danger my-2 px-5">Search</button>
        </form>
      </div>
    );
  }
}

export default SimpleSearch;
