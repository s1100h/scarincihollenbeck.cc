import React from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import useSWR from 'swr';
import { request } from 'graphql-request';
import Footer from 'components/footer';
import Breadcrumbs from 'components/breadcrumbs';
import ArchiveLayout from 'layouts/archive-layout';
import Body from 'components/archives/body';
import Sidebar from 'components/author/sidebar';
import SiteLoader from 'components/site-loader';
import ErrorMessage from 'components/error-message';

import client from 'utils/graphql-client';
import { blogArticlesQuery } from 'queries/home';
import { getPostsByAuthor, getAuthorBio } from 'queries/author';



export default function Author({
  firmNews,
  firmEvents,
  firmInsights
}) {
  const router = useRouter()

  const { data: authorPosts, error: authorPostsError } = useSWR(getPostsByAuthor(router.query.name, router.query.page), (query) =>
  request('https://wp.scarincihollenbeck.com/graphql', query)
);

const { data: authorBio, error: authorBioError } = useSWR(getAuthorBio(router.query.name), (query) =>
request('https://wp.scarincihollenbeck.com/graphql', query)
);

  if(authorPostsError || authorBioError) return <ErrorMessage />

  if(!authorPosts || !authorBio) {
    return (
      <div className="py-5 my-5">
         <SiteLoader />
      </div>
    )
  }
  
  return (
    <div className="mt-3">
      <NextSeo nofollow />
        <ArchiveLayout
          header={(<Breadcrumbs
            breadCrumb={[router.query.name, router.query.page]}
            categorySlug={router.query.name}
          />)}
          body={(
            <Body
              results={authorPosts.posts.edges}
              term={router.query.name}
              pages={Math.ceil(authorPosts.posts.pageInfo.offsetPagination.total / 10)}
              currentPage={router.query.page}
              news={firmNews}
              events={firmEvents}
              insight={firmInsights}
              pathname={`/author/${router.query.name}`}   
            />
          )}
          sidebar={(<Sidebar bio={authorBio.attorneyProfiles.nodes.[0]} practices={authorBio.attorneyProfiles.nodes.[0].attorneyPrimaryRelatedPracticesLocationsGroups} />)}
        />
        <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const firmNewsContent = await client.query(blogArticlesQuery(98), {});
  const firmEventsContent = await client.query(blogArticlesQuery(99), {});
  const firmInsightsContent = await client.query(blogArticlesQuery(599), {});

  return {
    props: {
      firmNews: firmNewsContent || [],
      firmEvents: firmEventsContent || [],
      firmInsights: firmInsightsContent || [],
    },
  };
}
