import React, { Component } from 'react';
import { sortByKey } from '../../utils/helpers';
import ColumnContent from './ColumnContent';
import FullWidthContent from './FullWidthContent';
import FrontPageHead from '../../components/Head/frontpage';
import CoronaHeader from './CoronaHeader';


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
    fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/front-page/meta`, {
      headers: {
        'Content-Type': 'application/json',
        'Content-Encoding': 'gzip',
        'Accept-Encoding': 'gzip',
      },
    })
      .then((res) => res.json())
      .then((seo) => {
        this.setState({ seo });
      })
      .then(() => {
        // fetch latest firm news data
        fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/front-page/news`, {
          headers: {
            'Content-Type': 'application/json',
            'Content-Encoding': 'gzip',
            'Accept-Encoding': 'gzip',
          },
        })
          .then((res) => res.json())
          .then((data) => {
            const posts = data;
            return posts;
          })
          .then((results) => {
            // fetch latest firm events data
            fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/front-page/events`, {
              headers: {
                'Content-Type': 'application/json',
                'Content-Encoding': 'gzip',
                'Accept-Encoding': 'gzip',
              },
            })
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
        fetch(`${process.env.REACT_APP_CACHED_API}/cached/office-locations`, {
          headers: {
            'Content-Type': 'application/json',
            'Content-Encoding': 'gzip',
            'Accept-Encoding': 'gzip',
          },
        })
          .then((res) => res.json())
          .then((data) => {
            this.setState({ locations: data.offices });
          });
      })
      .then(() => {
        // fetch a list of core practices
        fetch(`${process.env.REACT_APP_CACHED_API}/cached/core-practices`, {
          headers: {
            'Content-Type': 'application/json',
            'Content-Encoding': 'gzip',
            'Accept-Encoding': 'gzip',
          },
        })
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
        {/* <Header
          searchTerm={searchTerm}
          onChange={this.onChange}
        /> */}
        <CoronaHeader
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
