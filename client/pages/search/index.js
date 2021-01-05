import React from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import useSWR from 'swr';
import Footer from 'components/footer';
import SiteLoader from 'components/site-loader';
import ErrorMessage from 'components/error-message';
import ArchivesBody from 'components/archives/body';
import ArchivesSidebar from 'components/archives/sidebar';
import ArchiveLayout from 'layouts/archive-layout';
import { fetcher, headers } from 'utils/helpers';

export default function SearchLandingPage({
  firmNews,
  firmInsights,
  firmEvents,
}) {
  const router = useRouter();
  const { data: searchPosts, error: searchPostsError } = useSWR(`https://wp.scarincihollenbeck.com/wp-json/search/query/${router.query.q}/${router.query.page}`, fetcher);

  if (searchPostsError) return <ErrorMessage />;

  if (!searchPosts) {
    return (
      <div className="py-5 my-5">
        <SiteLoader />
      </div>
    );
  }

  return (
    <div className="mt-3">
      <NextSeo nofollow />
      <ArchiveLayout
        header={(
          <div>
            <strong>Query:</strong>
            {' '}
            {searchPosts.term}
          </div>
        )}
        body={(
          <ArchivesBody
            results={searchPosts.results}
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
        sidebar={<ArchivesSidebar trending={searchPosts.posts} />}
      />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const [firmNews, firmEvents, firmInsights] = await Promise.all([
    fetch('https://wp.scarincihollenbeck.com/wp-json/category/posts/firm-news', { headers }).then((data) => data.json()),
    fetch('https://wp.scarincihollenbeck.com/wp-json/category/posts/firm-events', { headers }).then((data) => data.json()),
    fetch('https://wp.scarincihollenbeck.com/wp-json/category/posts/law-firm-insights', { headers }).then((data) => data.json()),
  ]);

  return {
    props: {
      firmNews: firmNews.latest || [],
      firmEvents: firmEvents.latest || [],
      firmInsights: firmInsights.latest || [],
    },
    revalidate: 1,
  };
}
