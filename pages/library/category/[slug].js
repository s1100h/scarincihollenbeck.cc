import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/site-loader';
import LibraryPage from 'components/pages/library-page';
import { SITE_URL, BASE_API_URL } from 'utils/constants';
import { capitalizeFirstLetterInWords } from 'utils/helpers';
import { getCategoryPaths, getLibraryCategoryContent } from 'utils/queries';

export default function LibraryCategory({
  authors,
  childrenOfCurrentCategory,
  description,
  pageTitle,
  popularCategories,
  results,
  name,
  categoryId,
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
  const canonicalUrl = `${SITE_URL}/library/${pageTitle}`;
  const categoryName = capitalizeFirstLetterInWords(name);
  const archiveUrl = `${BASE_API_URL}/wp-json/wp/v2/posts/?categories=${categoryId}`;

  const libraryProps = {
    seo: {
      title: `${categoryName} Legal Articles`,
      metaDescription: splitDescription[0].replace('&amp;', '&'),
      canonicalUrl,
    },
    results,
    authors,
    popularCategories,
    childrenOfCurrentCategory,
    archiveUrl,
    currentPageTitle: name,
    categoryName,
    description,
  };

  return <LibraryPage {...libraryProps} />;
}

export async function getStaticPaths() {
  const paths = await getCategoryPaths();

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const [authors, childrenOfCurrentCategory, popularCategories, categoryDetails] = await getLibraryCategoryContent(params.slug);

  if ('status' in categoryDetails && categoryDetails.status === 404) {
    return {
      notFound: true,
    };
  }

  let results = [];

  if ('main' in categoryDetails && 'latest' in categoryDetails) {
    results = [...categoryDetails.main, ...categoryDetails.latest];
  }

  let categoryName = '';
  let categoryId = '';

  if ('current_category' in categoryDetails) {
    categoryName = categoryDetails.current_category.name;
    categoryId = categoryDetails.current_category.cat_ID;
  }

  let categoryDescription = '';

  if ('description' in categoryDetails) {
    categoryDescription = categoryDetails.description;
  }

  return {
    props: {
      results: results || [],
      authors: authors || [],
      popularCategories: popularCategories || [],
      childrenOfCurrentCategory: childrenOfCurrentCategory || [],
      description: categoryDescription,
      name: categoryName,
      pageTitle: params.slug,
      categoryId,
    },
    revalidate: 60 * 10,
  };
}
