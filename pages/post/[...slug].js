import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { getPostContent } from 'pages/api/get-post-content';
import { SITE_URL, SITE_TITLE } from 'utils/constants';
import PostPage from 'components/pages/SinglePost';
import { fetchAPI } from 'utils/api';
import { getAvatarAuthorsQuery, postCategoriesQuery } from 'utils/graphql-queries';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));
/** fetch all the post data and map it the page props.
 * This is the only component that uses an API that directly
 * queries the MySQL database. Please check out pages/api/get-post-content
 * for more details.
 * */

const getAvatarAuthors = async (id) => {
  const { users } = await fetchAPI(getAvatarAuthorsQuery, {
    variables: { id },
  });
  return users.nodes;
};

const getPostCategory = async (slug) => {
  const { post } = await fetchAPI(postCategoriesQuery, {
    variables: {
      id: slug,
    },
  });

  return post?.categories?.nodes;
};

const sanitizeAuthors = (authors, authorsAvatars) => authors.map((author) => ({
  ...author,
  avatar: authorsAvatars.find((authorAvatar) => author.ID === authorAvatar.databaseId).avatar.url,
}));

export const getServerSideProps = async ({ params, res, query }) => {
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=60, stale-while-revalidate');
  const postUrl = params.slug[params.slug.length - 1];
  const { category } = query;
  const categoriesByQuery = await getPostCategory(postUrl);

  const resAuthors = await getPostContent(postUrl, category);
  const authorsIdArr = resAuthors.authors.map(({ ID }) => ID);
  const responseAuthors = await getAvatarAuthors(authorsIdArr);

  resAuthors.authors = sanitizeAuthors(resAuthors.authors, responseAuthors);

  if (resAuthors.status === 404) {
    res.statusCode = 404;
    return {
      notFound: true,
    };
  }

  const {
    post, seo, tags, authors,
  } = resAuthors;

  return {
    props: {
      post,
      seo,
      categories: categoriesByQuery,
      tags,
      authors,
      category,
      postUrl,
    },
  };
};

/* The blog post component */
const SinglePost = ({
  post, seo, categories, tags, authors, category, postUrl,
}) => {
  const router = useRouter();
  const canonicalUrl = `${SITE_URL}${router.asPath}`;
  const metaAuthorLinks = authors.map((author) => (author.display_name === SITE_TITLE ? SITE_URL : author.user_url));

  if (router.isFallback) {
    return <SiteLoader />;
  }

  const postProps = {
    post,
    seo,
    categories,
    tags,
    canonicalUrl,
    metaAuthorLinks,
    category,
    postUrl,
    authors,
  };

  return <PostPage {...postProps} />;
};

export default SinglePost;
