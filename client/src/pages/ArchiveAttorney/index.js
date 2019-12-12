/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable consistent-return */
/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable no-else-return */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { PulseLoader } from 'react-spinners';
import SingleSubHeader from '../../components/SingleSubHeader';
import FullWidth from '../../components/FullWidth';
import Filters from './Filters';
import Selected from './Selected';
import Results from './Results';
import { sortByKey } from '../../utils/helpers';
import attArchiveBckGround from './attorney-archive-header.jpg';
import './index.scss';

class AttorneyArchive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      select: [],
      location: [],
      designation: [],
      practice: [],
      attorneys: [],
      seo:[],
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
    this.setState({ spinner:true });
    fetch(`${process.env.API_URL}/wp-json/attorney-search/attorneys/`)
      .then(res => res.json())
      .then((attorneys) => {
        this.setState({ attorneys, spinner:false });
      });

    // fetch locations
    fetch(`${process.env.API_URL}/wp-json/attorney-search/office-locations`)
      .then(res => res.json())
      .then(location => this.setState({ location }));

    // get list of available designations
    fetch(`${process.env.API_URL}/wp-json/attorney-search/designations`)
      .then(res => res.json())
      .then(designation => this.setState({ designation }));

    // get list of available practices and their children
    fetch(`${process.env.API_URL}/wp-json/attorney-search/practices`)
      .then(res => res.json())
      .then(practice => this.setState({ practice }));

    // get page seo data
    fetch(`${process.env.API_URL}/wp-json/attorney-search/seo-data`)
      .then(res => res.json())
      .then(seo => this.setState({ seo }));
  }

  /* Click Events */
  onSelect(e, input) {
    // push into state
    const { select } = this.state;
    const selected = input;
    const key = e.target.name;
    const results = { selected, key };
    const s = select.filter(a => a.key !== key);
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
    const s = select.filter(a => a.key !== key);
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
    const s = select.filter(a => a.key !== key);
    const concatResults = s.concat(results);
    this.setState({ select: concatResults });
  }

  /* Handle User Input Event */
  handleChange(e) {
    const { select } = this.state;
    const userInput = e.target.value.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
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
    const rQuery = select.filter(a => a.key !== key);

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
      location,
      practice,
      designation,
      attorneys,
      select,
      userInput,
      seo,
      spinner,
    } = this.state;

    // sort practices, designations, location
    const sPractices = sortByKey(practice, 'title');

    // alphabet
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    return (
      <div>
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.metaDescription}/>
          <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
          <link rel="canonical" href={window.location.href} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.metaDescription} />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:site_name" content={seo.title} />
          <meta property="article:publisher" content="https://www.facebook.com/ScarinciHollenbeck/" />
          <meta property="og:image" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
          <meta property="og:image:secure_url" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
          <meta property="og:image:width" content="750" />
          <meta property="og:image:height" content="350" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content={seo.metaDescription} />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:site" content="@S_H_Law" />
          <meta name="twitter:image" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
          <meta name="twitter:creator" content="@S_H_Law" />
        </Helmet>
        <SingleSubHeader
          title="Attorneys"
          image={attArchiveBckGround}
          subtitle="Our team of attorneys have a diverse set of legal expertise, please feel free to search our directory to find the right attorney for your business needs."
          height={'330px'}
        />
        <FullWidth>
        <div className="mb-5">
                {/** Filters */}
                <Filters
                  practices={sPractices}
                  alphabet={alphabet}
                  location={location}
                  designation={designation}
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
