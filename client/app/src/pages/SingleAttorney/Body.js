/* eslint react/prop-types: 0 */
import React from 'react';
import Biography from './Biography';
import Matters from './Matters';
import Table from './Table';
import Articles from './Articles';
import VideoContent from './VideoContent';
import BasicContent from './BasicContent';
import FeaturedSlider from './FeaturedSlider';
import RelatedArticles from './RelatedArticles';
import { addRandomKey, sortByDateKey, urlify } from '../../utils/helpers';

const Body = (props) => {
  const {
    biography,
    currentTab,
    readMore,
    toggleReadMore,
    representativeMatters,
    matterClick,
    matterTab,
    representativeClients,
    presentations,
    publications,
    media,
    blogPosts,
    newsEventArticles,
    videos,
    clients,
    awards,
    filterBody,
    tabs,
  } = props;

  // combine and sort blog articles
  const sortedBlogArticles = sortByDateKey(blogPosts, 'date');

  return (
    <div>
      <div className="tab-content">
        { (biography) && (
        <Biography
          currentTab={currentTab}
          tabTitle="biography"
          title="Biography"
          content={biography}
          readMore={readMore}
          toggleReadMore={toggleReadMore}
        />
        )}
        { (representativeMatters) && (
        <Matters
          currentTab={currentTab}
          matterClick={matterClick}
          matterTab={matterTab}
          tabTitle="representative-matters"
          title="Representative Matters"
          content={representativeMatters}
        />
        ) }
        { (representativeClients) && (
        <Matters
          currentTab={currentTab}
          matterTab={matterTab}
          tabTitle="representative-clients"
          title="Representative Clients"
          content={representativeClients}
        />
        ) }
        { (presentations) && (
        <Table
          currentTab={currentTab}
          tabTitle="presentations"
          title="Presentations"
          content={presentations}
        />
        )}
        { (publications) && (
        <Table
          currentTab={currentTab}
          tabTitle="publications"
          title="Publications"
          content={publications}
        />
        ) }
        { (media) && (
        <Table
          currentTab={currentTab}
          tabTitle="media"
          title="Media"
          content={media}
        />
        )}
        { (blogPosts) && (blogPosts.length > 0) && (
        <Articles
          currentTab={currentTab}
          tabTitle="blogs"
          title="Articles"
          content={sortedBlogArticles}
        />
        )}
        { (newsEventArticles.length > 0) && (newsEventArticles !== undefined) && (
        <Articles
          currentTab={currentTab}
          tabTitle="newsevents"
          title="News &amp; Events"
          content={newsEventArticles}
        />
        )}
        { (videos) && (
        <VideoContent
          title="Videos"
          content={videos}
          currentTab={currentTab}
          tabTitle="videos"
        />
        )}
        { (tabs) && filterBody.map((b) => (
          <BasicContent
            key={addRandomKey(b[1])}
            title={b[1]}
            content={b[2]}
            currentTab={currentTab}
            tabTitle={urlify(b[1])}
          />
        ))}
      </div>
      { (clients) && (clients.length > 0) && <FeaturedSlider content={clients} title="Clients" />}
      { (awards) && (awards.length > 0) && <FeaturedSlider content={awards} title="Awards" />}
      { (newsEventArticles.length > 0) && <RelatedArticles title="News & Events" content={newsEventArticles} /> }
      { (blogPosts) && (blogPosts.length > 0) && <RelatedArticles title="Recent Articles" content={sortedBlogArticles} />}
    </div>
  );
};


export default Body;
