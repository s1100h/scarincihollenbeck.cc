import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { sortByKey, headers } from '../../utils/helpers';
import ColumnContent from './ColumnContent';
import FullWidthContent from './FullWidthContent';
import CoronaHeader from './CoronaHeader';

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      locations: [],
      seo: {},
      corePractices: [],

    };
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

    this.setState({ seo });
    this.setState({ posts });
    this.setState({ locations });
    this.setState({ corePractices });
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
            <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.metaDescription} />
      <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={window.location.href} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.metaDescription} />
      <meta property="og:url" content={window.location.href} />
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
      <script type="application/ld+json">
        {
      `
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "name": "Scarinci Hollenbeck",
        "url": "${window.location.href}",
        "sameAs": [
          "https://www.facebook.com/ScarinciHollenbeck/",
           "https://twitter.com/s_h_law",
           "https://www.linkedin.com/company/scarinci-hollenbeck-llc"
        ],
        "potentialAction": {
          "@type": "SearchAction",
          "target": "${window.location.href}/s?={search_term}",
          "query-input": "required name=search_term"
        }
      }      
      `
    }
      </script>
    </Helmet>
        {/* <Header
          searchTerm={searchTerm}
          onChange={this.onChange}
        /> */}
        <CoronaHeader />
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
