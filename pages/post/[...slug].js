import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { PRODUCTION_URL, ScarinciHollenbeckAuthor, SITE_TITLE } from 'utils/constants';
import PostPage from 'components/pages/SinglePost';
import { fetchAPI } from 'utils/api';
import { postQuery } from 'utils/graphql-queries';
import { cutDomain, getSubTitleFromHTML } from '../../utils/helpers';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));
/** fetch all the post data and map it the page props.
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
        email: attorneyAuthor.attorneyMainInformation.email,
        phoneNumber: attorneyAuthor.attorneyMainInformation.phoneNumber,
        designation: attorneyAuthor.attorneyMainInformation.designation,
      };
    },
  );

  data.post.seo = {
    metaTitle: data.post.seo.title,
    metaDescription: data.post.seo.opengraphDescription,
  };

  const corePractices = [];

  data.practices.nodes.forEach((practice) => {
    if (
      Array.isArray(practice.practicePortalPageContent.practicePortalCategories)
      && practice.practicePortalPageContent.practicePortalCategories[0] === 'Core Practices'
    ) {
      corePractices.push(practice);
    }
  });

  data.post.categories.nodes.forEach(({ contentNodes }) => {
    if (contentNodes.length > 1) {
      contentNodes.splice(0, 1);
    }
  });

  const relatedPosts = [];

  if (data.post.categories.nodes.length === 1) {
    data.post.categories.nodes.forEach(({ contentNodes }) => {
      contentNodes.forEach((contentNodesItem) => {
        relatedPosts.push({
          title: contentNodesItem.title,
          uri: contentNodesItem.uri,
          featuredImage: contentNodesItem.featuredImage.node.sourceUrl,
          databaseId: contentNodesItem.databaseId,
        });
      });
    });
  }

  if (data.post.categories.nodes.length === 2) {
    data.post.categories.nodes.forEach(({ contentNodes }, idx) => {
      if (idx === 0) {
        relatedPosts.push({
          title: contentNodes.nodes[0].title,
          uri: contentNodes.nodes[0].uri,
          featuredImage: contentNodes.nodes[0].featuredImage.node.sourceUrl,
          databaseId: contentNodes.nodes[0].databaseId,
        });
      }

      if (idx === 1) {
        contentNodes.nodes.forEach((contentNodesItem, i) => {
          if (i < 2) {
            relatedPosts.push({
              title: contentNodesItem.title,
              uri: contentNodesItem.uri,
              featuredImage: contentNodesItem.featuredImage.node.sourceUrl,
              databaseId: contentNodesItem.databaseId,
            });
          }
        });
      }
    });
  }

  if (data.post.categories.nodes.length >= 3) {
    data.post.categories.nodes.forEach(({ contentNodes }, idx) => {
      if (idx <= 2) {
        relatedPosts.push({
          title: contentNodes.nodes[idx].title,
          uri: contentNodes.nodes[idx].uri,
          featuredImage: contentNodes.nodes[idx].featuredImage.node.sourceUrl,
          databaseId: contentNodes.nodes[idx].databaseId,
        });
      }
    });
  }

  data.posts.nodes.map((post) => {
    post.featuredImage = post.featuredImage.node.sourceUrl;
    post.uri = cutDomain(post.uri);
    post.author = post.author.node.username;
    return post;
  });

  return {
    postContent: data.post,
    corePractices,
    relatedPosts,
    posts: data.posts.nodes,
  };
};

export const getServerSideProps = async ({ params, res, query }) => {
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=60, stale-while-revalidate');
  const postSlug = params.slug[params.slug.length - 1];
  const { category } = query;

  const {
    postContent, corePractices, relatedPosts, posts,
  } = await getPostContentData(postSlug);

  if (!postContent) {
    res.statusCode = 404;
    return {
      notFound: true,
    };
  }
  const { clearBody, subTitle } = getSubTitleFromHTML(postContent.content);

  const post = {
    content: clearBody,
    title: postContent.title,
    date: postContent.date,
    subTitle,
  };

  return {
    props: {
      post,
      seo: postContent.seo,
      categories: postContent.categories.nodes,
      authors: postContent.selectAuthors.authorDisplayOrder,
      category,
      corePractices,
      relatedPosts,
      posts,
    },
  };
};

/* The blog post component */
const SinglePost = ({
  post,
  seo,
  categories,
  authors,
  category,
  corePractices,
  relatedPosts,
  posts,
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
    corePractices,
    relatedPosts,
    posts,
  };

  return <PostPage {...postProps} />;
};

export default SinglePost;
