import React from 'react';
import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import Breadcrumbs from 'components/breadcrumbs';
import ArchiveLayout from 'layouts/archive-layout';
import Body from 'components/archives/body';
import Sidebar from 'components/author/sidebar';
import SiteLoader from 'components/site-loader';
import { headers, makeQueryTitle } from 'utils/helpers';
import client from 'utils/graphql-client';
import { firmNewsQuery, firmEventsQuery, firmInsightsQuery } from 'queries/home';

export default function Author({
  results,
  page,
  pages,
  authorBio,
  firmNews,
  firmEvents,
  firmInsights
}) {

  const { bio, practices, currentUser } = authorBio

  if(results.length <=0) {
    return <SiteLoader />
  }
  
  return (
    <div className="mt-3">
      <NextSeo nofollow />
      <ArchiveLayout
        header={(<Breadcrumbs
          breadCrumb={[currentUser, page]}
          categorySlug={currentUser}
        />)}
        body={(
          <Body
            results={results}
            term={currentUser}
            pages={pages}
            currentPage={page}
            news={firmNews}
            events={firmEvents}
            insight={firmInsights}            
            pathname={`/author/${currentUser}`}
          />
        )}
        sidebar={(<Sidebar bio={bio} practices={practices} />)}
      />
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ params, query }) {
  const [response, authorBio] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/author/posts/${params.slug}/${query.page || 1}`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/author/bio/${params.slug}`, { headers }).then((data) => data.json())
  ]);

  const firmNewsContent = await client.query(firmNewsQuery, {});
  const firmEventsContent = await client.query(firmEventsQuery, {});
  const firmInsightsContent = await client.query(firmInsightsQuery, {});
  const filteredNews = firmNewsContent.data.category.posts.edges.filter((_, i) => i <= 6)
  const filteredEvents = firmEventsContent.data.category.posts.edges.filter((_, i) => i <= 6)
  const filteredInsights = firmInsightsContent.data.category.posts.edges.filter((_, i) => i <= 6)

  return {
    props: {
      firmNews: filteredNews || [],
      firmEvents: filteredEvents || [],
      firmInsights: filteredInsights || [],
      page: query.page || 1,
      pages: response.pages || 1,
      results: response.results || [],
      authorBio
    },
  };
}
