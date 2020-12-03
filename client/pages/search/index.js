import React from 'react';
import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import Breadcrumbs from 'components/breadcrumbs';
import ArchiveLayout from 'layouts/archive-layout';
import Body from 'components/archives/body';
import SiteLoader from 'components/site-loader'
import Sidebar from 'components/archives/sidebar';
import { headers, makeQueryTitle } from 'utils/helpers';
import client from 'utils/graphql-client';
import { firmNewsQuery, firmEventsQuery, firmInsightsQuery } from 'queries/home';

export default function Search({
  firmNews,
  firmInsights,
  firmEvents,
  results,
  posts,
  pages,
  term,
  page,
  q
}) {

  if(results.length <=0) {
    return <SiteLoader />
  }
  
  return (
    <div className="mt-3">
      <NextSeo nofollow />
      <ArchiveLayout
        header={(<Breadcrumbs breadCrumb={[makeQueryTitle(term), page]} categorySlug={term} />)}
        body={(
          <Body
            results={results}
            term={term}
            pages={pages}
            currentPage={page}
            news={firmNews}
            events={firmEvents}
            insight={firmInsights}
            pathname="/search/"
            q={q}
          />
        )}
        sidebar={(<Sidebar trending={posts} />)}
      />
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const response = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/search/query/${query.q}/${query.page}`, { headers }).then((data) => data.json())
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
      results: response.results || [],
      pages: response.pages || 0,
      term: response.term || '',
      posts: response.posts || [],
      page: query.page || 1,
      q: query.q || ''
    },
  };
}
