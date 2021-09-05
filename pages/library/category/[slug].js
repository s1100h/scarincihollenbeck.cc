import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/site-loader';
import LibraryLayout from 'layouts/library-layout';
import SingleSubHeader from 'layouts/single-sub-header';
import { SITE_URL } from 'utils/constants';
import { getCategoryPaths, getLibraryCategoryContent } from 'utils/queries';

export default function LibraryCategory({
  results,
  authors,
  popularCategories,
  childrenOfCurrentCategory,
  description,
  seo,
  pageTitle,
  query,
  name,
}) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <SiteLoader />
      </div>
    );
  }

  const splitDescription = description.split('.');
  const modDescription = `${splitDescription[0]}. ${splitDescription[1]}.`;
  const currentPageTitle = pageTitle.replace(/-/g, ' ');
  const canonicalUrl = `${SITE_URL}/library/${seo.canonicalLink}`;
  const categoryName = name.replace('&amp;', '&');

  return (
    <>
      {Object.keys(seo).length > 0 && (
        <NextSeo title={seo.title} description={seo.metaDescription} canonical={canonicalUrl} />
      )}
      <SingleSubHeader span={8} offset={1} title={categoryName} subtitle={modDescription} />
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

export async function getStaticPaths() {
  const paths = await getCategoryPaths();

  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  const { slug } = params;
  // eslint-disable-next-line quotes
  let tempStr = ``;
  // eslint-disable-next-line quotes
  let tempChildCat = ``;

  if (slug) {
    tempStr += `offset=1&category=${slug}`;
    tempChildCat += slug;
  }

  const [results, authors, childrenOfCurrentCategory, popularCategories, categoryDetails] = await getLibraryCategoryContent(tempStr, tempChildCat);

  if ('status' in categoryDetails && categoryDetails.status === 404) {
    return {
      notFound: true,
    };
  }

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
      name: categoryDetails.current_category.name,
    },
    revalidate: 10,
  };
}
