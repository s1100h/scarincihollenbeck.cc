
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import SiteLoader from 'components/site-loader';
import LibraryLayout from 'layouts/library-layout';
import SingleSubHeader from 'layouts/single-sub-header';
import { headers } from 'utils/helpers';

export default function LibraryAuthor({
  results,
  authors,
  popularCategories,
  childrenOfCurrentCategory,
  slug,
  authorName,
  authorDescription,
  topicOne,
  topicTwo,
  topicThree
}) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <SiteLoader />
      </div>
    );
  }

  return (
    <>
      <NextSeo
         title={`Legal Blog Articles by ${authorName}`}
         description={`${authorName} is a ${topicOne} attorney who writes articles on ${topicOne}, ${topicTwo}, and ${topicThree}.`}
         canonical={`https://scarincihollenbeck.com/library/author/${slug}`}
       />
      <SingleSubHeader
        span={8}
        offset={1}
        title={authorName}
        subtitle={authorDescription}
      />
      <LibraryLayout
        results={results}
        authors={authors}
        popularCategories={popularCategories}
        childrenOfCurrentCategory={childrenOfCurrentCategory}
        pageTitle={authorName}
  
      />
    </>
  );
}

export async function getStaticPaths() {
  const [res] = await Promise.all([
    fetch('https://wp.scarincihollenbeck.com/wp-json/author/list', {
      headers,
    }).then((data) => data.json()),
  ]);

  return {
    paths: res.map((a) => `/library/author/${a.link}`) || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  // eslint-disable-next-line quotes
  let tempStr = ``;
  // eslint-disable-next-line quotes
  let tempChildCat = ``;

  if (slug) {
    tempStr += `offset=1&author=${slug}`;
  }


  const [
    results,
    authors,
    childrenOfCurrentCategory,
    popularCategories,
    authorBio
  ] = await Promise.all([
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/v2/search/query?${tempStr}`,
      {
        headers,
      },
    ).then((data) => data.json()),
    fetch('https://wp.scarincihollenbeck.com/wp-json/author/full-list', {
      headers,
    }).then((data) => data.json()),
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/category/children/${tempChildCat}`,
      { headers },
    ).then((data) => data.json()),
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/category/popular-categories',
      { headers },
    ).then((data) => data.json()),
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/author/bio/${slug}`,
      { headers },
    ).then((data) => data.json()),
  ]);

  return {
    props: {
      query: tempStr.replace('offset=1&', ''),
      results: results || [],
      authors: authors || [],
      popularCategories: popularCategories || [],
      childrenOfCurrentCategory: childrenOfCurrentCategory || [],
      authorName: authorBio.bio[0].name,
      authorDescription: authorBio.bio[0].bioContent,
      slug,
      topicOne: authorBio.practices[0].title.toLowerCase(),
      topicTwo: authorBio.practices[1].title.toLowerCase(),
      topicThree: authorBio.practices[2].title.toLowerCase(),
    },
  };
}
