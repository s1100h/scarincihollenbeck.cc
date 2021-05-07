import Error from 'next/error';
import AttorneyProfile from 'layouts/attorney-profile';
import AttorneyArticleList from 'components/singleattorney/article-list';
import { headers } from 'utils/helpers';

export default function Articles({ bio, initialArticles, term }) {
  if (!initialArticles) {
    return <Error status={404} />;
  }

  return (
    <>
      <AttorneyProfile
        bio={bio}
        content={(
          <>
            <AttorneyArticleList initalArticles={initialArticles} term={term} />
          </>
        )}
      />
    </>
  );
}
export async function getStaticPaths() {
  const [res] = await Promise.all([
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/attorney-search/attorneys',
      { headers },
    ).then((data) => data.json()),
  ]);

  return {
    paths: res.map((a) => `/attorney${a.link}/articles`) || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // modify single attorney endpoint to grab specific content
  // do some major refactoring on the single attorney bio API endpoint
  const [bio, articles] = await Promise.all([
    fetch(
      `http://localhost:7806/wp-json/attorney-profile/main/${params.slug}`,
      { headers },
    ).then((data) => data.json()),
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/v2/search/query?offset=1&term=${params.slug}`,
      { headers },
    ).then((data) => data.json()),
  ]);
  if (!bio) {
    return {
      notFound: true,
    };
  }

  const initialArticles = []
    .concat(bio.mainPageContent.externalBlogs, articles.results)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return {
    props: {
      bio,
      initialArticles,
      term: params.slug,
    },
  };
}
