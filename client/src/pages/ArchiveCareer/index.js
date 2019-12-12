/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
import React, { Component } from 'react';
import { PulseLoader } from 'react-spinners';
import Helmet from 'react-helmet';
import FullWidth from '../../components/FullWidth';
import SingleSubHeader from '../../components/SingleSubHeader';
import CareerSection from './CareerSection';
import EEOpportunityContent from './EEOpportunityContent';
import carArchiveBckGround from './citybackground.jpg';


class CareerBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'title',
      positions: [],
      seo: [],
      keyword: '',
      location: '',
      type: '',
      spinner: false,
    };

    this.filterTerm = this.filterTerm.bind(this);
    this.selectOption = this.selectOption.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }

  componentDidMount() {
    this.setState({ spinner: true });
    fetch(`${process.env.API_URL}/wp-json/career-portal/careers`)
      .then(res => res.json())
      .then((data) => {
        const positions = data.careers;
        const seo = data.seo;
        this.setState({ positions, seo, spinner:false });
      });
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
      seo,
      spinner,
    } = this.state;

    const { career } = this.props.match.params;

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
          image={carArchiveBckGround}
          title="Careers & Available Positions"
          subtitle=" Our commitment to diversity and equal opportunity enables Scarinci Hollenbeck to
            recruit, retain, and promote the best attorneys."
        />
        <FullWidth>
          {
            (!spinner) ? (
              <CareerSection
            sort={sort}
            positions={positions}
            keyword={keyword}
            type={type}
            career={career}
            location={location}
            selectOption={this.selectOption}
            filterTerm={this.filterTerm}
            clearFilter={this.clearFilter}
          />
            ) : <PulseLoader color="#D02422" loading={spinner} />
          }
          <EEOpportunityContent content="EE content will og here" />
        </FullWidth>
      </div>
    );
  }
}

export default CareerBody;
