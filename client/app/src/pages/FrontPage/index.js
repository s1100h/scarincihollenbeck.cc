import React, { Component, lazy } from 'react';
import { sortByKey } from '../../utils/helpers';
import ColumnContent from './ColumnContent';
import FullWidthContent from './FullWidthContent';
import FrontPageHead from '../../components/Head/frontpage';
import Header from './Header';

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      posts: [],
      locations: [],
      seo: {},
      corePractices: [],
      end: 0.
    };
    this.onChange = this.onChange.bind(this);
    this.onCategorySelection = this.onCategorySelection.bind(this);
  }

  componentDidMount() {
    const w = window.innerWidth;

    // fetch latest seo data
    fetch(`${process.env.ADMIN_URL}/wp-json/front-page/meta`)
      .then((res) => res.json())
      .then((seo) => {
        this.setState({ seo });
      })
      .then(() => {
        // fetch latest firm news data
        fetch(`${process.env.ADMIN_URL}/wp-json/front-page/news`)
          .then((res) => res.json())
          .then((data) => {
            const posts = data;
            return posts;
          })
          .then((results) => {
            fetch(`${process.env.ADMIN_URL}/wp-json/front-page/events`)
              .then((res) => res.json())
              .then((data) => {
                const ePosts = data;
                const posts = [...results, ...ePosts];
                this.setState({ posts });
              });
          });
      })
      .then(() => {
        // fetch office locations
        fetch(`${process.env.CACHED_URL}/cached/office-locations`)
          .then((res) => res.json())
          .then((data) => {
            this.setState({ locations: data.offices });
          });
      })
      .then(() => {
        fetch(`${process.env.CACHED_URL}/cached/core-practices`)
          .then((res) => res.json())
          .then((data) => {
            const corePractices = data.map((cp) => ({
              name: cp.title,
              link: cp.slug,
            }));
            this.setState({ corePractices });
          });
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
      posts,
      locations,
      seo,
      corePractices,
      searchTerm,
      end,
    } = this.state;

    const sortedLocations = sortByKey(locations, 'id');
    const sortedPosts = sortByKey(posts, 'date');

    return (
      <div id="front-page">
        <FrontPageHead seo={seo} />
        <Header
          searchTerm={searchTerm}
          onChange={this.onChange}
        />
        <div className="container">
          <ColumnContent
            corePractices={corePractices}
            onCategorySelection={this.onCategorySelection}
          />
          <FullWidthContent
            sortedPosts={sortedPosts}
            sortedLocations={sortedLocations}
            end={end}
          />          
        </div>
      </div>
    );
  }
}

export default FrontPage;
