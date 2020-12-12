import React from 'react';
import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import Breadcrumbs from 'components/breadcrumbs';
import ArchiveLayout from 'layouts/archive-layout';
import Body from 'components/archives/body';
import SiteLoader from 'components/site-loader';
import Sidebar from 'components/archives/sidebar';
import { headers, makeQueryTitle } from 'utils/helpers';
import client from 'utils/graphql-client';
import { blogArticlesQuery } from 'queries/home';

export default function SearchLandingPage({
  firmNews,
  firmInsights,
  firmEvents,
  results,
  posts,
  pages,
  term,
  page,
  q,
}) {
  if (results.length <= 0) {
    return <SiteLoader />;
  }

  return (
    <div className="mt-3">
      <NextSeo nofollow />
      <ArchiveLayout
        header={(
          <Breadcrumbs
            breadCrumb={[makeQueryTitle(term), page]}
            categorySlug={term}
          />
        )}
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
        sidebar={<Sidebar trending={posts} />}
      />
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const response = await fetch(
    `${process.env.REACT_APP_WP_BACKEND}/wp-json/search/query/${query.q}/${query.page}`,
    { headers },
  ).then((data) => data.json());
  const firmNewsContent = await client.query(blogArticlesQuery(98), {});
  const firmEventsContent = await client.query(blogArticlesQuery(99), {});
  const firmInsightsContent = await client.query(blogArticlesQuery(599), {});

  return {
    props: {
      firmNews: firmNewsContent || [],
      firmEvents: firmEventsContent || [],
      firmInsights: firmInsightsContent || [],
      results: response.results || [],
      pages: response.pages || 0,
      term: response.term || '',
      posts: response.posts || [],
      page: query.page || 1,
      q: query.q || '',
    },
  };
}
