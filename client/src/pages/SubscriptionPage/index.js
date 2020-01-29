import React, { Component } from 'react';
import loadable from '@loadable/component';
import LargeSidebar from '../../layouts/LargeSidebar';
import PageHead from '../../components/Head/page';
import Search from '../../components/Search';
import SubscriptionBody from './SubscriptionBody';

// lazy load components
const TrendingStories  = loadable(() => import('../../components/TrendingStories'));

class SubscriptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch(`${process.env.API_URL}/wp-json/category/posts/law-firm-insights`)
    .then((res) => res.json())
    .then((data) => {
      const { main, latest, archives } = data;
      
      // filter the first 2 archives posts
      const firstTwoArchives = archives.filter((a, i) => (i <= 1) && a );

      const posts = [ ...main, ...latest, ...firstTwoArchives ];
      console.log(posts)
      // set filtered results to state
      this.setState({ posts });
    });
  }

  render() {

    const { posts } = this.state;

    const seo = {
      title: 'Subscribe To Firm Mailing List | Scarinci Hollenbeck',
      metaDescription: 'Sign up now and get access to Scarinci Hollenbeck attorney\'s articles on cutting edge legal topics, their press releases, and firm announcements.',
      canonical: '/subscribe',
    };
  
    // mimic single career page
    // sidebar -- search, and trending news
    return (
      <div>
        <PageHead seo={seo} />
        <LargeSidebar
          body={(<SubscriptionBody />)}
          sidebar={(
            <div>
              <Search />
              <TrendingStories content={posts} />
            </div>
          )}
        />
      </div>
 
  );
          }
};

export default SubscriptionPage;
