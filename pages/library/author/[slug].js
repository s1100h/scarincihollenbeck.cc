import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/site-loader';
import LibraryDirectory from 'components/pages/LibraryDirectory';
import ApolloWrapper from 'layouts/ApolloWrapper';
import { SITE_URL } from 'utils/constants';
import { getAuthorPaths, getAuthorContent } from 'utils/queries';

export default function LibraryAuthor({
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
}) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <SiteLoader />
      </div>
    );
  }

  const canonicalUrl = `${SITE_URL}/library/author${pageTitle}`;
  const { title, metaDescription } = seo;

  const authorProps = {
    seo: {
      title,
      metaDescription,
      canonicalUrl,
    },
    results,
    authors,
    popularCategories,
    categoryId,
    currentPageTitle: name,
    childrenOfCurrentCategory,
    categoryName: `Legal Articles By ${name}`,
    description,
    profileUrl,
  };

  return (
    <ApolloWrapper>
      <LibraryDirectory {...authorProps} />
    </ApolloWrapper>
  );
}

// export async function getStaticPaths() {
//   const authorPaths = await getAuthorPaths();
//   return {
//     paths: authorPaths,
//     fallback: 'blocking',
//   };
// }

export async function getServerSideProps({ params, res }) {
  const { slug } = params;

  const [results, authors, childrenOfCurrentCategory, popularCategories, authorBio] = await getAuthorContent(slug);

  const firstFourArticles = results.results.splice(0, 4);
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=300, stale-while-revalidate');
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
    // revalidate: 86400,
  };
}
