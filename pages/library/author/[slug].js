import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import LibraryDirectory from 'components/pages/LibraryDirectory';
import ApolloWrapper from 'layouts/ApolloWrapper';
import { SITE_URL, BASE_API_URL, headers } from 'utils/constants';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));

/** Get all the author data and posts for the page using WP REST API */
const getAuthorContent = async (slug) => {
  try {
    const [results, authors, childrenOfCurrentCategory, popularCategories, authorBio] = await Promise.all([
      fetch(`${BASE_API_URL}/wp-json/author/posts/${slug}/1`, { headers })
        .then((data) => data.json())
        .catch((err) => err),
      fetch(`${BASE_API_URL}/wp-json/author/full-list`, { headers })
        .then((data) => data.json())
        .catch((err) => err),
      fetch(`${BASE_API_URL}/wp-json/category/children/${slug}`, { headers })
        .then((data) => data.json())
        .catch((err) => err),
      fetch(`${BASE_API_URL}/wp-json/category/popular-categories`, { headers })
        .then((data) => data.json())
        .catch((err) => err),
      fetch(`${BASE_API_URL}/wp-json/author/bio/${slug}`, { headers })
        .then((data) => data.json())
        .catch((err) => err),
    ]);

    return [results, authors, childrenOfCurrentCategory, popularCategories, authorBio];
  } catch (error) {
    console.error(error);
  }
};

/** Set the author posts and related data to page props */
export const getServerSideProps = async ({ params, res }) => {
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=60, stale-while-revalidate');
  const { slug } = params;

  const [results, authors, childrenOfCurrentCategory, popularCategories, authorBio] = await getAuthorContent(slug);

  const firstFourArticles = results.results.splice(0, 4);

  return {
    props: {
      results: firstFourArticles || [],
      authors: authors || [],
      popularCategories: popularCategories || [],
      childrenOfCurrentCategory: childrenOfCurrentCategory || [],
      description: authorBio.bio[0].bioContent,
      name: authorBio.bio[0].name,
      profileUrl: authorBio.bio[0].link,
      pageTitle: params.slug,
      categoryId: results.id,
      seo: results.seo,
    },
  };
};

/** Author library page component */
const LibraryAuthor = ({
  authors,
  description,
  pageTitle,
  popularCategories,
  results,
  childrenOfCurrentCategory,
  categoryId,
  profileUrl,
  seo,
  name,
}) => {
  const router = useRouter();

  const canonicalUrl = `${SITE_URL}/library/author${pageTitle}`;
  const { title, metaDescription } = seo;

  const authorProps = {
    seo: {
      title,
      metaDescription,
      canonicalUrl,
    },
    news: results,
    authors,
    popularCategories,
    categoryId,
    currentPageTitle: name,
    childrenOfCurrentCategory,
    categoryName: `${name} Articles`,
    description,
    profileUrl,
  };

  return (
    <>
      {router?.isFallback ? (
        <div className="my-5 py-5">
          <SiteLoader />
        </div>
      ) : (
        <ApolloWrapper>
          <LibraryDirectory {...authorProps} />
        </ApolloWrapper>
      )}
    </>
  );
};

export default LibraryAuthor;
