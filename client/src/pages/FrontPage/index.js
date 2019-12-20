/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import FrontPageHead from '../../components/Head/frontpage';
import { sortByKey } from '../../utils/helpers';
import Header from './Header';
import ColumnContent from './ColumnContent';
import FullWidthContent from './FullWidthContent';
import './index.scss';

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      posts: [],
      locations: [],
      seo: {},
      corePractices: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onCategorySelection = this.onCategorySelection.bind(this);
  }

  componentDidMount() {

    // fetch latest seo data
    fetch(`${process.env.API_URL}/wp-json/front-page/meta`)
      .then(res => res.json())
      .then((seo) => {
        this.setState({seo});
      })
      .then(() => {
        // fetch latest firm news data
        fetch(`${process.env.API_URL}/wp-json/category/posts/firm-news`)
          .then(res => res.json())
          .then((data) => {
            const posts = data.latest;
            return posts;
          })
          .then((results) => {
            fetch(`${process.env.API_URL}/wp-json/category/posts/firm-events`)
              .then(res => res.json())
              .then((data) => {
                const ePosts = data.latest;
                const fPosts = results;
                const posts = [...results, ...ePosts];
                this.setState({posts});
              });
          })
      })
      .then(() => {
        // fetch office locations
        fetch(`${process.env.API_URL}/wp-json/location-portal/offices`)
          .then(res => res.json())
          .then((data) => {
            this.setState({ locations: data.offices });
          })
      })
      .then(() => {
        fetch(`${process.env.API_URL}/wp-json/practice-portal/page`)
          .then(res => res.json())
          .then((data) => {
            const cPractices = data.practices.filter(p => p.category === 'Core Practices');
            const corePractices = cPractices.map(cp => {
              return {
                name: cp.title,
                link: cp.slug
              }
            });
            this.setState({ corePractices });
          })
      })
  }

  onChange(event) {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
  }


  onCategorySelection(event) {
    window.location = event.target.value;
  }

  render() {
    const {
      posts,
      locations,
      seo,
      corePractices,
      searchTerm,
    } = this.state;
  
    const sortedLocations = sortByKey(locations, 'id');
    const sortedPosts = sortByKey(posts, 'date'); 

    return (
      <div>
        <FrontPageHead seo={seo}/>
         <Header
          searchTerm={searchTerm}
          onChange={this.onChange}
         />
        <div className="container">
          <ColumnContent corePractices={corePractices} onCategorySelection={this.onCategorySelection} />
          <FullWidthContent
             sortedPosts={sortedPosts}
             sortedLocations={sortedLocations}
          />
        </div>
      </div>
    );
  }
}

export default FrontPage;
