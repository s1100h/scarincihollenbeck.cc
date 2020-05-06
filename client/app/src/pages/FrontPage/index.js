import React, { Component } from 'react';
import { sortByKey, headers } from '../../utils/helpers';
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

  async componentDidMount() {
    const seoResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/front-page/meta`, { headers });
    const newsResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/front-page/news`, { headers });
    const eventsResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/front-page/events`, { headers });
    const officeResponse = await fetch(`${process.env.REACT_APP_CACHED_API}/cached/office-locations`, { headers });
    const practicesResponse = await fetch(`${process.env.REACT_APP_CACHED_API}/cached/core-practices`, { headers });
    const seo = await seoResponse.json();
    const news = await newsResponse.json();
    const events = await eventsResponse.json();
    const officeJson = await officeResponse.json();
    const corePractices = await practicesResponse.json();
    const posts = [...news, ...events];
    const locations = officeJson.offices;

    console.log(corePractices);
    
    this.setState({ seo });
    this.setState({ posts });
    this.setState({ locations });
    this.setState({ corePractices });
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
