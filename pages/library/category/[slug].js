import { useRouter } from 'next/router';
import SiteLoader from 'components/shared/site-loader';
import LibraryDirectory from 'components/pages/LibraryDirectory';
import ApolloWrapper from 'layouts/ApolloWrapper';
import { SITE_URL } from 'utils/constants';
import { formatSrcToCloudinaryUrl } from 'utils/helpers';
import { categoryPosts } from 'utils/api';
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
  seo,
}) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <SiteLoader />
      </div>
    );
  }

  const canonicalUrl = `${SITE_URL}/library/${pageTitle}`;

  const libraryProps = {
    seo: {
      title: seo.title,
      metaDescription: seo.metaDescription,
      canonicalUrl,
    },
    results,
    authors,
    popularCategories,
    childrenOfCurrentCategory,
    currentPageTitle: name,
    categoryName: name,
    description,
    categoryId,
  };

  return (
    <ApolloWrapper>
      <LibraryDirectory {...libraryProps} />
    </ApolloWrapper>
  );
}

// export async function getStaticPaths() {
//   const paths = await getCategoryPaths();

//   return {
//     paths,
//     fallback: 'blocking',
//   };
// }

export async function getServerSideProps({ params, res }) {
  const [authors, popularCategories] = await getLibraryCategoryContent();
  const pageContent = await categoryPosts({
    variables: {
      name: params.slug,
    },
  });

  if (pageContent.length <= 0) {
    return {
      notFound: true,
    };
  }

  const content = pageContent[0].node;
  const results = content.posts?.edges.map(({ node }, index) => ({
    ID: index,
    title: node.title,
    link: node.uri.replace('https://scarincihollenbeck.com', ''),
    date: node.date,
    excerpt: node.excerpt,
    image: formatSrcToCloudinaryUrl(node.featuredImage?.node?.sourceUrl),
    category:
      node.categories.length > 0
        ? node.categories?.edges.map(({ node }) => ({
          name: node.name,
          link: node.link,
        }))
        : [],
  }));

  const categoryChildren = content.children.nodes.length > 0 ? content.children.nodes : [];

  const modPopCategories = popularCategories.map(({
    id, slug, name, postCount,
  }) => ({
    id,
    slug,
    name,
    count: postCount,
  }));

  res.setHeader('Cache-Control', 'max-age=0, s-maxage=300, stale-while-revalidate');

  return {
    props: {
      results,
      authors: authors || [],
      popularCategories: modPopCategories || [],
      childrenOfCurrentCategory: categoryChildren,
      description: content.description,
      name: content.name,
      pageTitle: params.slug,
      categoryId: content.categoryId,
      seo: {
        title: content.seo.title,
        metaDescription: content.seo.metaDesc,
      },
    },
    // revalidate: 86400,
  };
}
