import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPostContent } from 'pages/api/get-post-content';
import { BASE_API_URL, SITE_URL } from 'utils/constants';
import SiteLoader from 'components/shared/site-loader';
import PostPage from 'components/pages/post-page';

export default function LawFirmInsightsPost({
  post,
  seo,
  categories,
  tags,
  authors,
  category,
  postUrl,
}) {
  const [relatedAttorneys, setRelatedAttorneys] = useState([]);
  const [trendingStories, setTrendingStories] = useState([]);
  const [eventDetails, setEventDetails] = useState([]);
  const [isEvent, setIsEvent] = useState(false);
  const router = useRouter();
  const canonicalUrl = `${SITE_URL}${router.asPath}`;
  const metaAuthorLinks = authors.map((author) => (author.display_name === 'Scarinci Hollenbeck' ? SITE_URL : author.user_url));

  if (router.isFallback) {
    return <SiteLoader />;
  }

  /**
   *  Related attorneys, Event Details, Trending Stories, Related Posts
   *  ;
   */

  useEffect(() => {
    async function getAdditionalPostContent() {
      const url = `${BASE_API_URL}/wp-json/single/post/${postUrl}/${category}`;
      const request = await fetch(url)
        .then((data) => data.json())
        .catch((err) => err);

      setRelatedAttorneys(request.attorneys);
      setTrendingStories(request.posts);

      if (request.eventDetails.length > 0) {
        setIsEvent(true);
        setEventDetails(request.eventDetails);
      }
    }

    if (postUrl && category) {
      getAdditionalPostContent();
    }
  }, []);

  const postProps = {
    post,
    seo,
    categories,
    tags,
    canonicalUrl,
    metaAuthorLinks,
    relatedAttorneys,
    eventDetails,
    isEvent,
    trendingStories,
    authors,
  };

  return <PostPage {...postProps} />;
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
      category,
      postUrl,
    },
  };
}
