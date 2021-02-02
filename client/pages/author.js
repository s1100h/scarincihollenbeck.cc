import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import useSWR from 'swr';
import ArchiveLayout from 'layouts/archive-layout';
import ArcivhesBody from 'components/archives/body';
import ArcivhesSidebar from 'components/author/sidebar';
import SiteLoader from 'components/site-loader';
import ErrorMessage from 'components/error-message';
import { fetcher, headers } from 'utils/helpers';

export default function AuthorLandingPage({
  firmNews,
  firmEvents,
  firmInsights,
}) {
  const router = useRouter();

  const { data: authorPosts, error: authorPostsError } = useSWR(
    `https://wp.scarincihollenbeck.com/wp-json/author/posts/${router.query.name}/${router.query.page}`,
    fetcher,
  );

  const { data: authorBio, error: authorBioError } = useSWR(
    `https://wp.scarincihollenbeck.com/wp-json/author/bio/${router.query.name}`,
    fetcher,
  );

  if (authorPostsError || authorBioError) return <ErrorMessage />;

  if (!authorPosts || !authorBio) {
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
          <ArcivhesBody
            results={authorPosts.results}
            term={router.query.name}
            pages={authorPosts.pages || 0}
            currentPage={router.query.page}
            news={firmNews}
            events={firmEvents}
            insight={firmInsights}
            pathname={`/author/${router.query.name}`}
          />
        )}
        sidebar={(
          <ArcivhesSidebar
            bio={authorBio.bio[0]}
            practices={authorBio.practices}
          />
        )}
      />
    </div>
  );
}

export async function getStaticProps() {
  const [firmNews, firmEvents, firmInsights] = await Promise.all([
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/category/posts/firm-news',
      { headers },
    ).then((data) => data.json()),
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/category/posts/firm-events',
      { headers },
    ).then((data) => data.json()),
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/category/posts/law-firm-insights',
      { headers },
    ).then((data) => data.json()),
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
