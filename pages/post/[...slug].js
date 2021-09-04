import { useRouter } from 'next/router';
import { getPostContent } from 'pages/api/get-post-content';
import SiteLoader from 'components/site-loader';

export default function LawFirmInsightsPost({
  post, seo, categories, tags, authors,
}) {
  const router = useRouter();

  if (router.isFallback) {
    return <SiteLoader />;
  }

  /**
   *  Related attorneys, Event Details, Trending Stories, Related Posts
   *  const post = await getPostBySlugAndCategory(postUrl, category);
   */

  // check if is event page

  return (
    <>
      This is being gutted and being rebuild :)
      {JSON.stringify({
        post,
        seo,
        categories,
        tags,
        authors,
      })}
    </>
  );
}

export async function getServerSideProps({ params, res, query }) {
  const postUrl = params.slug[params.slug.length - 1];
  const { category } = query;
  const request = await getPostContent(postUrl, category);

  if (request.status === 404) {
    res.statusCode = 404;
    return {
      notFound: true,
    };
  }

  const {
    post, seo, categories, tags, authors,
  } = request;

  return {
    props: {
      post,
      seo,
      categories,
      tags,
      authors,
    },
  };
}
