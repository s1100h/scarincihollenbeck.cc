/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
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
      seo: [],
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
            this.setState({ posts });
          })
      })
      .then(() => {
        // fetch latests firm events data 
        fetch(`${process.env.API_URL}/wp-json/category/posts/firm-events`)
          .then(res => res.json())
          .then((data) => {
            const posts = data.latest;
            this.setState(prevState => ({ posts: prevState.posts.concat(posts) }));
          });

      })
      .then(() => {
        // fetch office locations
        fetch(`${process.env.API_URL}/wp-json/location-portal/offices`)
          .then(res => res.json())
          .then((data) => {
            this.setState({ locations: data });
          })
      });
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
      searchTerm,
      posts,
      locations,
      seo,
    } = this.state;
    
    const sortedLocations = sortByKey(locations, 'id');
    const sortedPosts = sortByKey(posts, 'date');

    return (
      <div>
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.metaDescription}/>
          <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
          <link rel="canonical" href="https://scarincihollenbeck.com/" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.metaDescription} />
          <meta property="og:url" content="https://scarincihollenbeck.com/" />
          <meta property="og:site_name" content="Scarinci Hollenbeck" />
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
          <meta name="msvalidate.01" content="D568BE2730F6C27E33061E84F8DE58B1" />
          <meta name="google-site-verification" content="googlee1788c62f584220b" />
        </Helmet>
         <Header
          searchTerm={searchTerm}
          onChange={this.onChange}
         />
        <div className="container">
          <ColumnContent onCategorySelection={this.onCategorySelection} />
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
