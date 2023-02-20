import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { PRODUCTION_URL, ScarinciHollenbeckAuthor, SITE_TITLE } from 'utils/constants';
import PostPage from 'components/pages/SinglePost';
import { fetchAPI } from 'utils/api';
import { postQuery } from 'utils/graphql-queries';
import { getSubTitleFromHTML } from '../../utils/helpers';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));
/** fetch all the post data and map it the page props.
 * This is the only component that uses an API that directly
 * queries the MySQL database. Please check out pages/api/get-post-content
 * for more details.
 * */

const getPostContentData = async (slug) => {
  const data = await fetchAPI(postQuery, {
    variables: { id: slug },
  });
  if (!data.post) {
    return undefined;
  }
  if (
    !data.post.selectAuthors.authorDisplayOrder
    || data.post.selectAuthors.authorDisplayOrder.length === 0
  ) {
    data.post.selectAuthors.authorDisplayOrder = ScarinciHollenbeckAuthor;
  }

  data.post.selectAuthors.authorDisplayOrder = data.post.selectAuthors.authorDisplayOrder.map(
    (attorneyAuthor) => {
      attorneyAuthor.profileImage = attorneyAuthor.attorneyMainInformation.profileImage.sourceUrl;
      return {
        uri: attorneyAuthor.uri,
        display_name: attorneyAuthor.title,
        databaseId: attorneyAuthor.databaseId,
        authorDescription: attorneyAuthor.attorneyBiography.miniBio,
        profileImage: attorneyAuthor.profileImage,
      };
    },
  );

  data.post.seo = {
    metaTitle: data.post.seo.title,
    metaDescription: data.post.seo.opengraphDescription,
  };

  return data;
};

export const getServerSideProps = async ({ params, res, query }) => {
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=60, stale-while-revalidate');
  const postSlug = params.slug[params.slug.length - 1];
  const { category } = query;

  const postContent = await getPostContentData(postSlug);

  if (!postContent) {
    res.statusCode = 404;
    return {
      notFound: true,
    };
  }
  const { clearBody, subTitle } = getSubTitleFromHTML(postContent.post.content);

  const post = {
    content: clearBody,
    title: postContent.post.title,
    date: postContent.post.date,
    subTitle,
  };

  return {
    props: {
      post,
      seo: postContent.post.seo,
      categories: postContent.post.categories.nodes,
      authors: postContent.post.selectAuthors.authorDisplayOrder,
      category,
    },
  };
};

/* The blog post component */
const SinglePost = ({
  post, seo, categories, authors, category,
}) => {
  const router = useRouter();
  const canonicalUrl = `${PRODUCTION_URL}${router.asPath}`;
  const metaAuthorLinks = authors.map((author) => (author.display_name === SITE_TITLE ? PRODUCTION_URL : author.user_url));

  if (router.isFallback) {
    return <SiteLoader />;
  }

  const postProps = {
    post,
    seo,
    categories,
    canonicalUrl,
    metaAuthorLinks,
    category,
    authors,
  };

  return <PostPage {...postProps} />;
};

export default SinglePost;
