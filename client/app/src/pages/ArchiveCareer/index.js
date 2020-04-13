import React, { Component } from 'react';
import ArchiveHead from '../../components/Head/archive';
import FullWidth from '../../layouts/FullWidth';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import carArchiveBckGround from './citybackground.jpg';

// lazy load components
import CareerSection from './CareerSection';
import EEOpportunityContent from './EEOpportunityContent';



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
    };

    this.filterTerm = this.filterTerm.bind(this);
    this.selectOption = this.selectOption.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }

  componentDidMount() {
    this.setState({ spinner: true });
    fetch(`${process.env.ADMIN_URL}/wp-json/career-portal/careers`)
      .then((res) => res.json())
      .then((data) => {
        const positions = data.careers;
        const { seo } = data;
        this.setState({ positions, seo });
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
