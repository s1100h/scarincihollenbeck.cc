
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import SiteLoader from 'components/site-loader';
import LibraryLayout from 'layouts/library-layout';
import SingleSubHeader from 'layouts/single-sub-header';
import { headers } from 'utils/helpers';

export default function LibraryCategory({
  results,
  authors,
  popularCategories,
  childrenOfCurrentCategory,
  description,
  seo,
  pageTitle,
  query,
  name
}) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <SiteLoader />
      </div>
    );
  }

  const splitDescription = description.split(".");
  const modDescription = `${splitDescription[0]}. ${splitDescription[1]}.`;
  const currentPageTitle = pageTitle.replace(/-/g, ' ');

  return (
    <>
      {Object.keys(seo).length > 0 && (
         <NextSeo
         title={seo.title}
         description={seo.metaDescription}
         canonical={`https://scarincihollenbeck.com/library/${seo.canonicalLink}`}
       />
      )}
      <SingleSubHeader
        span={8}
        offset={1}
        title={name}
        subtitle={modDescription}
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

// https://wp.scarincihollenbeck.com/wp-json/all-categories/list

export async function getStaticPaths() {
  const [res] = await Promise.all([
    fetch('https://wp.scarincihollenbeck.com/wp-json/all-categories/list', {
      headers,
    }).then((data) => data.json()),
  ]);

  const fullList = res.filter((a, b) => a.link !== b.link);

  return {
    paths: fullList.map((a) => `/library/category/${a.link}`) || [],
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
    tempStr += `offset=1&category=${slug}`;
    tempChildCat += slug;
  }


  const [
    results,
    authors,
    childrenOfCurrentCategory,
    popularCategories,
    categoryDetails,
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
      `https://wp.scarincihollenbeck.com/wp-json/category/posts/${tempChildCat}`,
      { headers },
    ).then((data) => data.json()),
  ]);

  return {
    props: {
      query: tempStr.replace('offset=1&', ''),
      pageTitle: tempChildCat,
      results: results || [],
      authors: authors || [],
      popularCategories: popularCategories || [],
      childrenOfCurrentCategory: childrenOfCurrentCategory || [],
      seo: categoryDetails.seo,
      description: categoryDetails.description,
      name: categoryDetails.current_category.name
    },
  };
}
