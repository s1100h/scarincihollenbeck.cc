import React, { Component } from 'react';
import ArchiveHead from '../../components/Head/archive';
import FullWidth from '../../layouts/FullWidth';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import CareerSection from './CareerSection';
import EEOpportunityContent from './EEOpportunityContent';
import { headers } from '../../utils/helpers';

const carArchiveBckGround = 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/citybackground.jpg';

class CareerBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'title',
      positions: [],
      seo: {},
      keyword: '',
      location: '',
      type: '',
      loading: true,
    };

    this.filterTerm = this.filterTerm.bind(this);
    this.selectOption = this.selectOption.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }

  async componentDidMount() {
    const response = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/career-portal/careers`, { headers });
    const json = await response.json();
    const { seo, careers } =  json;
    const positions = careers;
    
    this.setState({ positions, seo}, () => {
      this.setState({ loading: false  });
    });
  };

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
      loading,
    } = this.state;

    const { career } = this.props.match.params;

    return (
      <div>
        <ArchiveHead seo={seo} />
        <SingleSubHeader
          image={carArchiveBckGround}
          title="Careers & Available Positions"
          subtitle=" Our commitment to diversity and equal opportunity enables Scarinci Hollenbeck to
            recruit, retain, and promote the best attorneys."
        />
        <FullWidth>
          <CareerSection
            sort={sort}
            positions={positions}
            keyword={keyword}
            type={type}
            career={career}
            location={location}
            loading={loading}
            selectOption={this.selectOption}
            filterTerm={this.filterTerm}
            clearFilter={this.clearFilter}
          />
          <EEOpportunityContent content="EE content will og here" />
        </FullWidth>
      </div>
    );
  }
}

export default CareerBody;
