import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import LibraryDirectory from 'components/pages/LibraryDirectory';
import ApolloWrapper from 'layouts/ApolloWrapper';
import { PRODUCTION_URL, BASE_API_URL, headers } from 'utils/constants';
import { fetchAPI } from 'requests/api';
import { getSEOforAuthorPosts } from 'requests/graphql-queries';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));

/** Get all the author data and posts for the page using WP REST API */
const getAuthorContent = async (slug) => {
  try {
    const [
      results,
      authors,
      childrenOfCurrentCategory,
      popularCategories,
      authorBio,
    ] = await Promise.all([
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

    return [
      results,
      authors,
      childrenOfCurrentCategory,
      popularCategories,
      authorBio,
    ];
  } catch (error) {
    console.error(error);
  }
};
const getUserSeo = async (id) => {
  const data = await fetchAPI(getSEOforAuthorPosts, {
    variables: { id },
  });
  return data?.user;
};

/** Set the author posts and related data to page props */
export const getServerSideProps = async ({ params, res }) => {
  res.setHeader(
    'Cache-Control',
    'max-age=0, s-maxage=60, stale-while-revalidate',
  );
  const { slug } = params;

  const [
    results,
    authors,
    childrenOfCurrentCategory,
    popularCategories,
    authorBio,
  ] = await getAuthorContent(slug);
  const { seo } = await getUserSeo(results.id);
  const news = results.results.map((node, index) => ({
    ID: index,
    title: node.title,
    link: node.link.replace(PRODUCTION_URL, ''),
    date: node.date,
    description: node.description,
    author: node.author,
    image: node.image,
  }));
  const firstFourArticles = news.splice(0, 4);

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
      seo: {
        title: results.seo.title,
        canonicalLink: results.seo.canonicalLink,
        metaDescription: seo.metaDesc,
      },
    },
  };
};

/** Author library page component */
const LibraryAuthor = ({
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
  const canonicalUrl = `${PRODUCTION_URL}/library/author${pageTitle}`;
  const { title, metaDescription } = seo;

  const authorProps = {
    seo: {
      title,
      metaDescription,
      canonicalUrl,
    },
    news: results,
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
