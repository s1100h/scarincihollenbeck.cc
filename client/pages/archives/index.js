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
import { getArchivesPosts } from 'queries/archive';

export default function ArchivesLandingPage({
  firmNews,
  firmInsights,
  firmEvents,
  posts,
}) {
  const router = useRouter();

  const {
    data: archivesPosts,
    error: archivesPostsError,
  } = useSWR(getArchivesPosts(router.query.q, router.query.page), (query) => request('https://wp.scarincihollenbeck.com/graphql', query));

  if (archivesPostsError) return <ErrorMessage />;

  if (!archivesPosts) {
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
        header=""
        body={(
          <ArchivesBody
            results={archivesPosts.posts.edges}
            term={router.query.q}
            pages={Math.floor(
              archivesPosts.posts.pageInfo.offsetPagination.total / 10,
            )}
            currentPage={router.query.page}
            news={firmNews}
            events={firmEvents}
            insight={firmInsights}
            pathname="/archives"
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

  const posts = [].concat(
    firmNewsContent.data.category.posts.edges,
    firmEventsContent.data.category.posts.edges,
    firmInsightsContent.data.category.posts.edges,
  );

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
