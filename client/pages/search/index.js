import React from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import useSWR from 'swr';
import { request } from 'graphql-request';
import Footer from 'components/footer';
import SiteLoader from 'components/site-loader';
import ErrorMessage from 'components/error-message';
import ArchivesBody from 'components/archives/body';
import ArchivesSidebar from 'components/archives/sidebar';
import ArchiveLayout from 'layouts/archive-layout';
import client from 'utils/graphql-client';
import { blogArticlesQuery } from 'queries/home';
import { searchAllPosts } from 'queries/search';
import { fetchFirmPosts } from 'utils/fetch-firm-posts';
import { fetcher } from 'utils/helpers';

export default function SearchLandingPage({
  firmNews,
  firmInsights,
  firmEvents,
  posts,
}) {
  const router = useRouter();
  // (
  const {
    data: searchPosts,
    error: searchPostsError,
  } = useSWR(`https://wp.scarincihollenbeck.com/wp-json/search/query/${decodeURI(router.query.q)}/${router.query.page}`, fetcher);

  if (searchPostsError) return <ErrorMessage />;

  if (!searchPosts) {
    return (
      <div className="py-5 my-5">
        <SiteLoader />
      </div>
    );
  }

  const formatedSearchResults = searchPosts.results.map((post) => ({
    node: {
      id: post.id,
      uri: post.link,
      title: post.title,
      excerpt: post.description,
      date: post.date,
    },
  }));

  return (
    <div className="mt-3">
      <NextSeo nofollow />
      <ArchiveLayout
        header={(
          <div>
            <strong>
              Query:
            </strong>
            {' '}
            {searchPosts.term}
          </div>
        )}
        body={(
          <ArchivesBody
            results={formatedSearchResults}
            term={router.query.q}
            pages={searchPosts.pages || 0}
            currentPage={router.query.page}
            news={firmNews}
            events={firmEvents}
            insight={firmInsights}
            pathname="/search"
            q={router.query.q}
          />
        )}
        sidebar={<ArchivesSidebar trending={posts} />}
      />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const firmNewsContent = await client.query(blogArticlesQuery(98), {});
  const firmEventsContent = await client.query(blogArticlesQuery(99), {});
  const firmInsightsContent = await client.query(blogArticlesQuery(599), {});
  const posts = await fetchFirmPosts();

  return {
    props: {
      firmNews: firmNewsContent || [],
      firmEvents: firmEventsContent || [],
      firmInsights: firmInsightsContent || [],
      posts,
    },
    revalidate: 1,
  };
}
