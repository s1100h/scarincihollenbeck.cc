import { NextSeo } from 'next-seo';
import LibraryLayout from 'layouts/library-layout';
import SingleSubHeader from 'layouts/single-sub-header';
import { getSearchQueryResults } from 'utils/queries';

export default function LibrarySearch({
  results,
  authors,
  popularCategories,
  childrenOfCurrentCategory,
  pageTitle,
  query,
}) {
  const currentPageTitle = pageTitle.replace(/-/g, ' ');

  return (
    <>
      <NextSeo nofollow />
      <SingleSubHeader
        span={7}
        offset={2}
        title="Article Library"
        subtitle="Scarinci Hollenbeck regularly publishes articles pertaining to legal updates affecting individuals and institutions in New York and New Jersey, and the world at large. Here you can find coverage for when we welcome new attorneys, significant wins we’ve secured on behalf of our clients, and general announcements. "
      />
      <LibraryLayout
        results={results}
        authors={authors}
        popularCategories={popularCategories}
        childrenOfCurrentCategory={childrenOfCurrentCategory}
        pageTitle={currentPageTitle}
        query={query}
      />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { term } = query;
  // eslint-disable-next-line quotes
  let tempStr = ``;
  // eslint-disable-next-line quotes
  let tempChildCat = ``;

  if (term) {
    tempStr += `offset=1&term=${term}`;
    tempChildCat += term;
  }

  const [results, authors, childrenOfCurrentCategory, popularCategories] = await getSearchQueryResults(tempStr, tempChildCat);

  return {
    props: {
      query: tempStr.replace('offset=1&', ''),
      pageTitle: tempChildCat,
      results: results || [],
      authors: authors || [],
      popularCategories: popularCategories || [],
      childrenOfCurrentCategory: childrenOfCurrentCategory || [],
    },
  };
}
