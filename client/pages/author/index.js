import React from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { request } from 'graphql-request';
import Footer from 'components/footer';
import Breadcrumbs from 'components/breadcrumbs';
import ArchiveLayout from 'layouts/archive-layout';
import Body from 'components/archives/body';
import Sidebar from 'components/author/sidebar';
import SiteLoader from 'components/site-loader';
import ErrorMessage from 'components/error-message';
import { headers } from 'utils/helpers';
import client from 'utils/graphql-client';
import { blogArticlesQuery } from 'queries/home';



export default function Author({
  firmNews,
  firmEvents,
  firmInsights
}) {
  const router = useRouter()
  console.log(router.query)

  if(router.fallBack <=0) {
    return (
      <div className="py-5 my-5">
         <SiteLoader />
      </div>
    )
  }

  
  // page: query.page || 1,
  // pages: response.pages || 1,
  // results: response.results || [],
  // authorBio
  
  return (
    <div className="mt-3">
      {/* <NextSeo nofollow />
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
      /> */}
      Well get back to this...
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
