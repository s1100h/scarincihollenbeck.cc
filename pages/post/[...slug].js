import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import {
  PRODUCTION_URL,
  ScarinciHollenbeckAuthor,
  SITE_TITLE,
} from 'utils/constants';
import PostPage from 'components/pages/SinglePost';
import { fetchAPI } from 'requests/api';
import {
  getPracticesForPostQuery,
  getThreePostsQuery,
  postQuery,
} from 'requests/graphql-queries';
import empty from 'is-empty';
import parse from 'html-react-parser';
import {
  cutDomain,
  cutSlashFromTheEnd,
  getSubTitleFromHTML,
  sortByKey,
} from '../../utils/helpers';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));
/** fetch all the post data and map it the page props.
 * */

const attorneysSanitize = (attorneysArr) => attorneysArr.map((attorneyAuthor) => {
  attorneyAuthor.profileImage = attorneyAuthor.attorneyMainInformation.profileImage?.sourceUrl
      || '/images/no-image-found-diamond-750x350.png';
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
});

const getPostContentData = async (slug) => {
  const data = await fetchAPI(postQuery, {
    variables: { id: slug },
  });

  const { practices } = await fetchAPI(getPracticesForPostQuery);
  const { posts } = await fetchAPI(getThreePostsQuery);

  if (empty(data.post)) {
    return undefined;
  }

  if (
    !data.post.selectAuthors.authorDisplayOrder
    || data.post.selectAuthors.authorDisplayOrder.length === 0
  ) {
    data.post.selectAuthors.authorDisplayOrder = ScarinciHollenbeckAuthor;
  }

  data.post.selectAuthors.authorDisplayOrder = attorneysSanitize(
    data.post.selectAuthors.authorDisplayOrder,
  );

  if (data.post.selectHeroes?.selectAttorneys?.length > 0) {
    data.post.selectHeroes.selectAttorneys = attorneysSanitize(
      data.post.selectHeroes.selectAttorneys,
    );
    data.post.keyContacts = data.post.selectAuthors.authorDisplayOrder.concat(
      data.post.selectHeroes.selectAttorneys,
    );
  }

  let seoImageFromPostByParse = '/images/no-image-found-diamond.png';
  parse(data.post.content, {
    replace: (domNode) => {
      if (
        domNode.type === 'tag'
        && domNode.name === 'img'
        && !empty(domNode.attribs.href)
      ) {
        return (seoImageFromPostByParse = domNode.attribs.href);
      }
    },
  });

  data.post.seo = {
    metaTitle: data.post.seo.title,
    metaDescription: data.post.seo.opengraphDescription,
    opengraphImage: !empty(data.post.seo.opengraphImage?.sourceUrl)
      ? data.post.seo.opengraphImage?.sourceUrl
      : seoImageFromPostByParse,
  };

  const corePractices = [];

  if (!empty(practices)) {
    practices?.nodes?.forEach((practice) => {
      if (
        Array.isArray(
          practice.practicePortalPageContent.practicePortalCategories,
        )
        && practice.practicePortalPageContent.practicePortalCategories[0]
          === 'Core Practices'
      ) {
        corePractices.push(practice);
      }
    });
  }

  data.post?.categories?.nodes.forEach(({ contentNodes }) => {
    if (contentNodes.length > 1) {
      contentNodes.splice(0, 1);
    }
  });

  const relatedPosts = [];

  if (data.post?.categories?.nodes.length === 1) {
    data.post?.categories?.nodes.forEach(({ contentNodes }) => {
      contentNodes.nodes.forEach((contentNodesItem) => {
        relatedPosts.push({
          title: contentNodesItem.title,
          uri: contentNodesItem.uri,
          featuredImage:
            contentNodesItem.featuredImage?.node.sourceUrl
            || '/images/no-image-found-diamond-750x350.png',
          databaseId: contentNodesItem.databaseId,
        });
      });
    });
  }
  if (data.post?.categories?.nodes.length === 2) {
    data.post?.categories?.nodes.forEach(({ contentNodes }, idx) => {
      if (idx === 0 && !empty(contentNodes.nodes[0]?.title)) {
        relatedPosts.push({
          title: contentNodes.nodes[0]?.title,
          uri: contentNodes.nodes[0]?.uri,
          featuredImage: !empty(
            contentNodes.nodes[0]?.featuredImage?.node.sourceUrl,
          )
            ? contentNodes.nodes[0]?.featuredImage?.node.sourceUrl
            : '/images/no-image-found-diamond-750x350.png',
          databaseId: contentNodes.nodes[0]?.databaseId,
        });
      }

      if (idx === 1) {
        contentNodes.nodes.forEach((contentNodesItem, idx) => {
          if (idx < 2) {
            relatedPosts.push({
              title: contentNodesItem?.title,
              uri: contentNodesItem?.uri,
              featuredImage: !empty(
                contentNodesItem.featuredImage?.node?.sourceUrl,
              )
                ? contentNodesItem.featuredImage?.node?.sourceUrl
                : '/images/no-image-found-diamond-750x350.png',
              databaseId: contentNodesItem?.databaseId,
            });
          }
        });
      }
    });
  }
  if (data.post?.categories?.nodes.length >= 3) {
    data.post?.categories?.nodes.forEach(({ contentNodes }, idx) => {
      if (idx <= 2 && contentNodes.nodes[idx]?.title) {
        relatedPosts.push({
          title: contentNodes.nodes[idx]?.title,
          uri: contentNodes.nodes[idx]?.uri,
          featuredImage:
            contentNodes.nodes[idx]?.featuredImage?.node.sourceUrl
            || '/images/no-image-found-diamond-750x350.png',
          databaseId: contentNodes.nodes[idx]?.databaseId,
        });
      }
    });
  }

  if (!empty(posts)) {
    posts?.nodes?.map((post) => {
      post.featuredImage = post.featuredImage?.node.sourceUrl
        || '/images/no-image-found-diamond-750x350.png';
      post.uri = cutDomain(post.uri);
      post.author = post.author.node.name;
      return post;
    });
  }

  return {
    postContent: data.post,
    corePractices: sortByKey(corePractices, 'title'),
    relatedPosts,
    posts: posts?.nodes,
    status: data.post.status,
  };
};

export const getServerSideProps = async ({ params, res, query }) => {
  res.setHeader(
    'Cache-Control',
    'max-age=0, s-maxage=60, stale-while-revalidate',
  );
  const postSlug = params.slug[params.slug.length - 1];
  const { category } = query;

  const postData = await getPostContentData(postSlug);

  if (empty(postData) || postData.status.toLowerCase() !== 'publish') {
    res.statusCode = 404;
    return {
      notFound: true,
    };
  }

  const { clearBody, subTitle } = getSubTitleFromHTML(
    postData?.postContent.content,
  );
  const post = {
    content: clearBody,
    title: postData.postContent.title,
    date: postData.postContent.date,
    subTitle,
  };

  const authors = postData.postContent.selectAuthors.authorDisplayOrder.filter(
    ({ uri }) => !uri.includes('post_type'),
  );

  return {
    props: {
      post,
      seo: postData.postContent.seo,
      categories: postData?.postContent?.categories?.nodes,
      authors,
      keyContacts: postData.postContent.keyContacts || authors,
      category: category || '',
      corePractices: postData.corePractices,
      relatedPosts: postData.relatedPosts,
      posts: postData.posts,
      canonicalUrl: cutSlashFromTheEnd(postData.postContent.link),
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
  keyContacts,
  canonicalUrl,
}) => {
  const router = useRouter();
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
    keyContacts,
    corePractices,
    relatedPosts,
    posts,
  };
  return <PostPage {...postProps} />;
};

export default SinglePost;
