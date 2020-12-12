import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import useSWR from 'swr';
import { request } from 'graphql-request';
import Footer from 'components/footer';
import Breadcrumbs from 'components/breadcrumbs';
import ArchiveLayout from 'layouts/archive-layout';
import ArcivhesBody from 'components/archives/body';
import ArcivhesSidebar from 'components/author/sidebar';
import SiteLoader from 'components/site-loader';
import ErrorMessage from 'components/error-message';
import client from 'utils/graphql-client';
import { blogArticlesQuery } from 'queries/home';
import { getPostsByAuthor, getAuthorBio } from 'queries/author';

export default function AuthorLandingPage({ firmNews, firmEvents, firmInsights }) {
  const router = useRouter();

  const {
    data: authorPosts,
    error: authorPostsError,
  } = useSWR(getPostsByAuthor(router.query.name, router.query.page), (query) => request('https://wp.scarincihollenbeck.com/graphql', query));

  const { data: authorBio, error: authorBioError } = useSWR(
    getAuthorBio(router.query.name),
    (query) => request('https://wp.scarincihollenbeck.com/graphql', query),
  );

  if (authorPostsError || authorBioError) return <ErrorMessage />;

  if (!authorPosts || !authorBio) {
    return (
      <div className="py-5 my-5">
        <SiteLoader />
      </div>
    );
  }

  const attorneyBioData = authorBio.attorneyProfiles.nodes[0];

  return (
    <div className="mt-3">
      <NextSeo nofollow />
      <ArchiveLayout
        header={(
          <Breadcrumbs
            breadCrumb={[router.query.name, router.query.page]}
            categorySlug={router.query.name}
          />
        )}
        body={(
          <ArcivhesBody
            results={authorPosts.posts.edges}
            term={router.query.name}
            pages={Math.floor(
              authorPosts.posts.pageInfo.offsetPagination.total / 10,
            )}
            currentPage={router.query.page}
            news={firmNews}
            events={firmEvents}
            insight={firmInsights}
            pathname={`/author/${router.query.name}`}
          />
        )}
        sidebar={(
          <ArcivhesSidebar
            bio={attorneyBioData}
            practices={
              attorneyBioData.attorneyPrimaryRelatedPracticesLocationsGroups
            }
          />
        )}
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
    revalidate: 1,
  };
}
