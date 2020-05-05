/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
import React, { Component } from 'react';
import Header from './Header';
import CareerSection from './CareerSection';
import EEOpportunityContent from './EEOpportunityContent';
import OnLoadDescriptionModal from './OnLoadDescriptionModal';

class CareerBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'title',
      positions: [],
      keyword: '',
      location: '',
      type: '',
    };

    this.filterTerm = this.filterTerm.bind(this);
    this.selectOption = this.selectOption.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.setUrlHash = this.setUrlHash.bind(this);
  }

  componentDidMount() {
    fetch(`${process.env.API_URL}/wp-json/career-portal/careers`)
      .then(res => res.json())
      .then(positions => this.setState({ positions }));
  }

  setUrlHash(e) {
    window.location.hash = `${e}`;
  }

  filterTerm(e) {
    const keyword = e.target.value;
    this.setState({ keyword });
  }

  selectOption(e) {
    const { name, value } = e.target;
    if (name === 'location') {
      this.setState({ location: value });
    } else if (name === 'type') {
      this.setState({ type: value });
    }
  }

  clearFilter() {
    this.setState({
      keyword: '',
      location: '',
      type: '',
    });
  }

  render() {
    const {
      positions,
      sort,
      keyword,
      type,
      location,
    } = this.state;

    const url = window.location.hash.replace('#', '');

    return (
      <span>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <CareerSection
                sort={sort}
                positions={positions}
                keyword={keyword}
                type={type}
                location={location}
                selectOption={this.selectOption}
                filterTerm={this.filterTerm}
                clearFilter={this.clearFilter}
                setUrlHash={this.setUrlHash}
              />
              <EEOpportunityContent content="EE content will og here" />
              {
                (window.location.hash) ? <OnLoadDescriptionModal url={url} /> : ''
              }
            </div>
          </div>
        </div>
      </span>
    );
  }
}

export default CareerBody;
