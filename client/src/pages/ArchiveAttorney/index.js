import React, { Component } from 'react';
import { PulseLoader } from 'react-spinners';
import ArchiveHead from '../../components/Head/archive';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import FullWidth from '../../layouts/FullWidth';
import { sortByKey } from '../../utils/helpers';
import attArchiveBckGround from './attorney-archive-header.jpg';

// lazy load components
import Filters from './Filters';
import Selected from './Selected';
import Results from './Results';

import './index.scss';

class AttorneyArchive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      select: [],
      locations: [],
      designations: [],
      practices: [],
      attorneys: [],
      seo: {},
      spinner: false,
    };
    this.letterClick = this.letterClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onMobileSelect = this.onMobileSelect.bind(this);
    this.removeVisibilityClass = this.removeVisibilityClass.bind(this);
    this.clearQuery = this.clearQuery.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  /* Fetch data events */
  componentDidMount() {
    // fetch attorney list
    this.setState({ spinner: true });
    fetch(`${process.env.API_URL}/wp-json/attorney-search/attorneys/`)
      .then((res) => res.json())
      .then((attorneys) => {
        this.setState({ attorneys, spinner: false });
      });
    
    fetch('https://api.scarincilies.com/cached/attorney-filters')
      .then((res) => res.json())
      .then((data) => {
        const { locations, designations, practices } = data;

        this.setState({
          locations,
          designations,
          practices
        });
      });

    // get page seo data
    fetch(`${process.env.API_URL}/wp-json/attorney-search/meta`)
      .then((res) => res.json())
      .then((seo) => this.setState({ seo }));
  }

  /* Click Events */
  onSelect(e, input) {
    // push into state
    const { select } = this.state;
    const selected = input;
    const key = e.target.name;
    const results = { selected, key };
    const s = select.filter((a) => a.key !== key);
    const concatResults = s.concat(results);

    // set new results[] to state select
    this.setState({ select: concatResults });


    // click event to clear dropdown -- location, designation
    if (key === 'location' || key === 'designation') {
      const elm = document.querySelector('.dropdown.show');

      if (elm.classList.contains('show')) {
        elm.classList.remove('show');
        elm.classList.add('hide');
      }
    }
    // click event to clear dropdown -- practice
    if (key === 'practices') {
      const pElm = document.querySelector('.megamenu-container');
      pElm.classList.add('super-hide');
    }
  }

  onMobileSelect(e) {
    const { select } = this.state;
    const selected = e.target.value;
    const key = e.target.name;
    const results = { selected, key };
    const s = select.filter((a) => a.key !== key);
    const concatResults = s.concat(results);

    // set new results[] to state select
    this.setState({ select: concatResults });
  }

  removeVisibilityClass() {
    const pElm = document.querySelector('.megamenu-container');
    pElm.classList.remove('super-hide');
  }

  /* Letter Click Event */
  letterClick(e) {
    const { select } = this.state;
    const selected = e.target.innerHTML;
    const key = 'letter';
    const results = { selected, key };
    const s = select.filter((a) => a.key !== key);
    const concatResults = s.concat(results);
    this.setState({ select: concatResults });
  }

  /* Handle User Input Event */
  handleChange(e) {
    const { select } = this.state;
    const userInput = e.target.value.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    const results = { selected: userInput, key: 'query' };
    const concatResults = select.concat(results);
    this.setState({
      userInput,
      select: concatResults,
    });
  }

  /** Clear user query */
  clearQuery(key) {
    const { select } = this.state;
    const rQuery = select.filter((a) => a.key !== key);

    this.setState({
      select: rQuery,
      userInput: '',
    });
  }

  clearAll() {
    const select = [];
    const userInput = '';
    this.setState({ select, userInput });
  }

  render() {
    const {
      locations,
      practices,
      designations,
      attorneys,
      select,
      userInput,
      seo,
      spinner,
    } = this.state;

    // sort practices, designations, location
    const sPractices = sortByKey(practices, 'title');

    // alphabet
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    return (
      <div>
        <ArchiveHead seo={seo} />
        <SingleSubHeader
          title="Attorneys"
          image={attArchiveBckGround}
          subtitle="Our team of attorneys have a diverse set of legal expertise, please feel free to search our directory to find the right attorney for your business needs."
          height="330px"
        />
        <FullWidth>
          <div className="mb-5">
            {/** Filters */}
            <Filters
              practices={sPractices}
              alphabet={alphabet}
              locations={locations}
              designation={designations}
              userInput={userInput}
              handleChange={this.handleChange}
              onSelect={this.onSelect}
              letterClick={this.letterClick}
              clearAll={this.clearAll}
              onMobileSelect={this.onMobileSelect}
              removeVisibilityClass={this.removeVisibilityClass}
            />
            {/** End of Filters */}
            {/** Results */}
            <div className="w-100 border mt-sm-6 mt-md-0">
              <Selected
                select={select}
                clearQuery={this.clearQuery}
                userInput={userInput}
              />
              {
                    (!spinner) ? (
                      <Results
                        attorneys={attorneys}
                        userInput={userInput}
                        select={select}
                      />
                    ) : <PulseLoader color="#D02422" loading={spinner} />
                  }
            </div>
            {/** End of Results */}
          </div>
        </FullWidth>
      </div>
    );
  }
}

export default AttorneyArchive;
